-- デスクレシピメーカー 利用者ランキングの集計用
-- clients: 参加したブラウザ（ランダムな ID）。ip_hash は送信回数の制限にだけ使う（IP そのものは保存しない）
CREATE TABLE IF NOT EXISTS clients (
  id TEXT PRIMARY KEY,
  ip_hash TEXT NOT NULL,
  created INTEGER NOT NULL,
  updated INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS clients_ip ON clients (ip_hash, created);
-- picks: 参加者ごとの、カタログにある機材の ID
CREATE TABLE IF NOT EXISTS picks (
  client TEXT NOT NULL,
  cid TEXT NOT NULL,
  PRIMARY KEY (client, cid)
);
CREATE INDEX IF NOT EXISTS picks_cid ON picks (cid);
