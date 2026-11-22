CREATE TABLE IF NOT EXISTS daily_visitors (
  study_day TEXT NOT NULL,
  anon_hash TEXT NOT NULL,
  referrer_host TEXT NOT NULL DEFAULT '',
  country TEXT NOT NULL DEFAULT '',
  device TEXT NOT NULL DEFAULT '',
  first_seen_at INTEGER NOT NULL,
  last_seen_at INTEGER NOT NULL,
  PRIMARY KEY (study_day, anon_hash)
);

CREATE TABLE IF NOT EXISTS question_outcomes (
  study_day TEXT NOT NULL,
  anon_hash TEXT NOT NULL,
  question_id TEXT NOT NULL,
  mode TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL,
  parts_done INTEGER NOT NULL DEFAULT 0,
  parts_total INTEGER NOT NULL DEFAULT 0,
  parts_ok INTEGER NOT NULL DEFAULT 0,
  auto_checks INTEGER NOT NULL DEFAULT 0,
  reveals INTEGER NOT NULL DEFAULT 0,
  elapsed_sec INTEGER NOT NULL DEFAULT 0,
  first_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (study_day, anon_hash, question_id, mode)
);

CREATE INDEX IF NOT EXISTS idx_qo_day_mode ON question_outcomes (study_day, mode, status);
CREATE INDEX IF NOT EXISTS idx_qo_qid ON question_outcomes (question_id, status);

CREATE TABLE IF NOT EXISTS daily_counters (
  study_day TEXT NOT NULL,
  metric TEXT NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (study_day, metric)
);
