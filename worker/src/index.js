// 人気機材の集計
//
// POST /v1/setups   {"ids": ["u2723qe", "hhkb-hybrid", ...]}
//   共有された構成に入っているカタログ ID を受け取って数える。同じ組み合わせは1回だけ。
//   名前・価格・自分で入力した機材は受け取らない（ページ側も送らない）。
// GET  /v1/popular
//   { setups: 構成の数, items: [{ id, n }] } を n の多い順に返す。

const ID_RE = /^[a-z0-9][a-z0-9-]{0,39}$/;
const MIN_IDS = 2;
const MAX_IDS = 80;
const MAX_BODY = 4096;
const TOP = 200;

export default {
  async fetch(req, env) {
    const cors = corsHeaders(req, env);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    const { pathname } = new URL(req.url);
    try {
      if (pathname === '/v1/setups' && req.method === 'POST') return await addSetup(req, env, cors);
      if (pathname === '/v1/popular' && req.method === 'GET') return await popular(env, cors);
      return json({ error: 'not_found' }, 404, cors);
    } catch (e) {
      console.error(e);
      return json({ error: 'server_error' }, 500, cors);
    }
  },
};

function allowedOrigins(env) {
  return String(env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
}

function corsHeaders(req, env) {
  const origin = req.headers.get('Origin');
  const h = { Vary: 'Origin' };
  if (origin && allowedOrigins(env).includes(origin)) {
    h['Access-Control-Allow-Origin'] = origin;
    h['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
    h['Access-Control-Allow-Headers'] = 'Content-Type';
    h['Access-Control-Max-Age'] = '86400';
  }
  return h;
}

function json(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...headers, 'Content-Type': 'application/json; charset=utf-8' },
  });
}

// 重複を除いて並べ替える。形がおかしい ID は捨てる
export function normalizeIds(input) {
  if (!Array.isArray(input) || input.length > MAX_IDS * 2) return null;
  const ids = [...new Set(input.filter(x => typeof x === 'string' && ID_RE.test(x)))].sort();
  return ids.length >= MIN_IDS && ids.length <= MAX_IDS ? ids : null;
}

async function sha256hex(s) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

async function addSetup(req, env, cors) {
  // ほかのサイトから送られてきた分は数えない（ブラウザは POST に必ず Origin を付ける）
  if (!allowedOrigins(env).includes(req.headers.get('Origin'))) return json({ error: 'forbidden' }, 403, cors);
  const text = await req.text();
  if (text.length > MAX_BODY) return json({ error: 'too_large' }, 413, cors);
  let body;
  try { body = JSON.parse(text); } catch (e) { return json({ error: 'bad_json' }, 400, cors); }
  const ids = normalizeIds(body && body.ids);
  if (!ids) return json({ error: 'bad_ids' }, 400, cors);

  const key = ids.join(' ');
  const hash = await sha256hex(key);
  const ins = await env.DB.prepare('INSERT OR IGNORE INTO setups (hash, ids, created_at) VALUES (?1, ?2, ?3)')
    .bind(hash, key, Date.now()).run();
  if (!ins.meta.changes) return json({ counted: false }, 200, cors);

  const bump = 'INSERT INTO item_counts (id, n) VALUES (?1, 1) ON CONFLICT(id) DO UPDATE SET n = n + 1';
  await env.DB.batch([
    env.DB.prepare("INSERT INTO meta (k, v) VALUES ('setups', 1) ON CONFLICT(k) DO UPDATE SET v = v + 1"),
    ...ids.map(id => env.DB.prepare(bump).bind(id)),
  ]);
  return json({ counted: true }, 200, cors);
}

async function popular(env, cors) {
  const setups = (await env.DB.prepare("SELECT v FROM meta WHERE k = 'setups'").first('v')) || 0;
  const { results } = await env.DB.prepare('SELECT id, n FROM item_counts ORDER BY n DESC, id LIMIT ?1').bind(TOP).all();
  return json({ setups, items: results }, 200, { ...cors, 'Cache-Control': 'public, max-age=300' });
}
