// node --test で動かす。D1 の代わりに node:sqlite を使う
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';
import worker, { normalizeIds } from '../src/index.js';

const ORIGIN = 'https://82706991hiroto-ship-it.github.io';

// D1 の prepare / bind / run / first / all / batch だけを真似る
function fakeD1() {
  const db = new DatabaseSync(':memory:');
  db.exec(readFileSync(new URL('../schema.sql', import.meta.url), 'utf8'));
  const stmt = (sql, args = []) => ({
    bind: (...a) => stmt(sql, a),
    run: async () => ({ success: true, meta: { changes: Number(db.prepare(sql).run(...args).changes) } }),
    first: async col => { const row = db.prepare(sql).get(...args); return row ? (col ? row[col] : row) : null; },
    all: async () => ({ results: db.prepare(sql).all(...args).map(r => ({ ...r })) }),
  });
  return {
    prepare: sql => stmt(sql),
    batch: async list => {
      db.exec('BEGIN');
      try { const out = []; for (const s of list) out.push(await s.run()); db.exec('COMMIT'); return out; }
      catch (e) { db.exec('ROLLBACK'); throw e; }
    },
  };
}

function setup() {
  const env = { DB: fakeD1(), ALLOWED_ORIGINS: `${ORIGIN}, http://localhost:8000` };
  const call = (method, path, { body, origin = ORIGIN } = {}) => worker.fetch(new Request('https://stats.example' + path, {
    method,
    headers: { ...(origin ? { Origin: origin } : {}), 'Content-Type': 'text/plain' },
    body: body === undefined ? undefined : typeof body === 'string' ? body : JSON.stringify(body),
  }), env);
  return { env, call };
}

test('normalizeIds: 重複と形のおかしい ID を除いて並べ替える', () => {
  assert.deepEqual(normalizeIds(['u2723qe', 'hhkb-hybrid', 'u2723qe', 'Bad ID', 3]), ['hhkb-hybrid', 'u2723qe']);
  assert.equal(normalizeIds(['u2723qe']), null);
  assert.equal(normalizeIds('u2723qe'), null);
  assert.equal(normalizeIds(Array.from({ length: 81 }, (_, i) => 'x' + i)), null);
});

test('同じ組み合わせは1回だけ数え、並び順の違いも同じとみなす', async () => {
  const { call } = setup();
  let r = await call('POST', '/v1/setups', { body: { ids: ['u2723qe', 'hhkb-hybrid'] } });
  assert.deepEqual(await r.json(), { counted: true });
  r = await call('POST', '/v1/setups', { body: { ids: ['hhkb-hybrid', 'u2723qe', 'u2723qe'] } });
  assert.deepEqual(await r.json(), { counted: false });
  await call('POST', '/v1/setups', { body: { ids: ['u2723qe', 'mx-master-3s'] } });

  r = await call('GET', '/v1/popular');
  assert.equal(r.status, 200);
  assert.equal(r.headers.get('Access-Control-Allow-Origin'), ORIGIN);
  assert.deepEqual(await r.json(), {
    setups: 2,
    items: [{ id: 'u2723qe', n: 2 }, { id: 'hhkb-hybrid', n: 1 }, { id: 'mx-master-3s', n: 1 }],
  });
});

test('まだ何もないときは 0 件', async () => {
  const { call } = setup();
  const r = await call('GET', '/v1/popular');
  assert.deepEqual(await r.json(), { setups: 0, items: [] });
});

test('許可していないサイトからの送信は数えない', async () => {
  const { call } = setup();
  let r = await call('POST', '/v1/setups', { body: { ids: ['a1', 'b2'] }, origin: 'https://evil.example' });
  assert.equal(r.status, 403);
  assert.equal(r.headers.get('Access-Control-Allow-Origin'), null);
  r = await call('POST', '/v1/setups', { body: { ids: ['a1', 'b2'] }, origin: null });
  assert.equal(r.status, 403);
  r = await call('GET', '/v1/popular');
  assert.equal((await r.json()).setups, 0);
});

test('壊れた送信は 400 / 413', async () => {
  const { call } = setup();
  assert.equal((await call('POST', '/v1/setups', { body: '{' })).status, 400);
  assert.equal((await call('POST', '/v1/setups', { body: { ids: ['only-one'] } })).status, 400);
  assert.equal((await call('POST', '/v1/setups', { body: 'x'.repeat(5000) })).status, 413);
  assert.equal((await call('GET', '/nope')).status, 404);
});

test('OPTIONS（事前確認）に答える', async () => {
  const { call } = setup();
  const r = await call('OPTIONS', '/v1/setups', { origin: 'http://localhost:8000' });
  assert.equal(r.status, 204);
  assert.equal(r.headers.get('Access-Control-Allow-Origin'), 'http://localhost:8000');
});
