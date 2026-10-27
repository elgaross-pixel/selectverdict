-- No IP, user agent, cookie, personal identifier or full referring URL is stored.
CREATE TABLE IF NOT EXISTS analytics_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT NOT NULL,
  source TEXT NOT NULL,
  medium TEXT NOT NULL,
  campaign TEXT NOT NULL,
  content TEXT NOT NULL,
  event_type TEXT NOT NULL CHECK(event_type IN ('page_view','merchant_click')),
  source_page TEXT NOT NULL,
  merchant TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_analytics_events_date ON analytics_events(date,source,event_type);
