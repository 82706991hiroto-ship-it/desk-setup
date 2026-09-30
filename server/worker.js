// デスクレシピメーカー 利用者ランキング（Cloudflare Workers + D1）
//
// 受け取るのは「カタログにある機材の ID の一覧」と、ブラウザが作ったランダムな ID だけ。
// 名前・価格・メモ・購入先・写真・配置は送られない。
//
//   GET    /ranking  集計（参加者が MIN_TOTAL 人未満のうちは中身を返さない）
//   POST   /submit   { client, items: [cid, ...] }  送る・送り直す（同じ client は上書き）
//   DELETE /submit   { client }                     送った内容を消す
//
// D1 のバインド名は DB。環境変数 SALT（任意の長い文字列）を設定しておく。

const ORIGINS = ['https://82706991hiroto-ship-it.github.io'];
const MIN_TOTAL = 10;     // 参加者がこれより少ないうちは、誰が何を使っているか推測できるので出さない
const MIN_COUNT = 2;      // 1人しか使っていない機材は出さない
const MAX_ITEMS = 100;
const NEW_PER_IP_DAY = 5; // 同じ回線から1日に参加できるブラウザの数
const CLIENT_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const CID_RE = /^[a-z0-9][a-z0-9-]{0,39}$/;

export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const origin = req.headers.get('Origin') || '';
    const allowed = ORIGINS.includes(origin) || (!!env.DEV_ORIGIN && origin === env.DEV_ORIGIN);
    const cors = {
      'Access-Control-Allow-Origin': allowed ? origin : ORIGINS[0],
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
      'Vary': 'Origin',
    };
    const json = (o, status = 200, extra = {}) => new Response(JSON.stringify(o), {
      status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors, ...extra },
    });
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

    try {
      if (url.pathname === '/ranking' && req.method === 'GET') return json(await ranking(env), 200, { 'Cache-Control': 'public, max-age=300' });

      if (url.pathname === '/submit' && (req.method === 'POST' || req.method === 'DELETE')) {
        if (!allowed) return json({ error: 'origin' }, 403);
        const body = await req.json().catch(() => null);
        const client = body && String(body.client || '');
        if (!CLIENT_RE.test(client)) return json({ error: 'client' }, 400);

        if (req.method === 'DELETE') {
          await env.DB.batch([
            env.DB.prepare('DELETE FROM picks WHERE client = ?').bind(client),
            env.DB.prepare('DELETE FROM clients WHERE id = ?').bind(client),
          ]);
          return json({ ok: true });
        }

        const items = [...new Set(Array.isArray(body.items) ? body.items.map(String) : [])].filter(c => CID_RE.test(c));
        if (!items.length || items.length > MAX_ITEMS) return json({ error: 'items' }, 400);

        const now = Date.now();
        const ipHash = await sha256((req.headers.get('CF-Connecting-IP') || '') + '|' + (env.SALT || ''));
        const known = await env.DB.prepare('SELECT id FROM clients WHERE id = ?').bind(client).first();
        if (!known) {
          const recent = await env.DB.prepare('SELECT COUNT(*) AS n FROM clients WHERE ip_hash = ? AND created > ?').bind(ipHash, now - 86400000).first();
          if (recent && recent.n >= NEW_PER_IP_DAY) return json({ error: 'rate' }, 429);
        }
        await env.DB.batch([
          env.DB.prepare('INSERT INTO clients (id, ip_hash, created, updated) VALUES (?1, ?2, ?3, ?3) ON CONFLICT(id) DO UPDATE SET updated = ?3').bind(client, ipHash, now),
          env.DB.prepare('DELETE FROM picks WHERE client = ?').bind(client),
          ...items.map(cid => env.DB.prepare('INSERT INTO picks (client, cid) VALUES (?, ?)').bind(client, cid)),
        ]);
        return json({ ok: true, count: items.length });
      }

      return json({ error: 'not found' }, 404);
    } catch (e) {
      return json({ error: 'server' }, 500);
    }
  },
};

async function ranking(env) {
  const total = (await env.DB.prepare('SELECT COUNT(*) AS n FROM clients').first()).n;
  if (total < MIN_TOTAL) return { total, min: MIN_TOTAL, items: [] };
  const { results } = await env.DB.prepare('SELECT cid, COUNT(*) AS n FROM picks GROUP BY cid HAVING n >= ? ORDER BY n DESC LIMIT 500').bind(MIN_COUNT).all();
  return { total, min: MIN_TOTAL, items: results.map(r => [r.cid, r.n]), at: new Date().toISOString() };
}

async function sha256(s) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}
