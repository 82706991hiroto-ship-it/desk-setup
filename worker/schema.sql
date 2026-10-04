-- 共有された構成（カタログ ID の組み合わせ）。同じ組み合わせは1回だけ数える
CREATE TABLE IF NOT EXISTS setups (
  hash       TEXT PRIMARY KEY,
  ids        TEXT NOT NULL,     -- 並べ替えたカタログ ID を空白でつないだもの（数え直し用）
  created_at INTEGER NOT NULL
);

-- 機材ごとの登場回数。読むときに setups を数え直さなくて済むように持っておく
CREATE TABLE IF NOT EXISTS item_counts (
  id TEXT PRIMARY KEY,
  n  INTEGER NOT NULL
);

-- 構成の総数など
CREATE TABLE IF NOT EXISTS meta (
  k TEXT PRIMARY KEY,
  v INTEGER NOT NULL
);
