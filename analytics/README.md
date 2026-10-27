# SelectVerdict distribution event collector (NOT DEPLOYED)

This is a separate optional Cloudflare Worker with a D1 database. It does not modify the frozen Phase 1A protocol. No analytics data or conversion claims exist until deployed and independently verified.

1. Create a Cloudflare D1 database and execute `analytics/schema.sql`.
2. Create a Worker using `analytics/worker.js`, binding D1 as `DB`.
3. Set Worker environment variable `ALLOWED_ORIGIN=https://selectverdict.com`. Set secret `ANALYTICS_READ_TOKEN` to a long random value. Do not commit tokens.
4. Add Worker route at `https://selectverdict.com/api/analytics/*` and strip prefix /api/analytics in Worker routing, OR configure an equivalent route forwarding /collect and /report paths. Do not enable client tracking until path verified.
5. Deploy website with `PUBLIC_SV_ANALYTICS_ENDPOINT` set to the actual HTTPS collector URL ending in /collect (requires adding build-time injection in the Astro layout). The frontend currently does not send data automatically; this deployment is **backend scaffolding**, not completed integration.
6. Verify with a test request and report counts, exclude test traffic from business reporting. Do not use real visitor traffic before publishing an accurate privacy disclosure and consent controls where required.

Limitations: per-event rows are anonymous and do not establish unique users, sessions, engagement, conversion attribution, or cross-visit joins. Do not present these counts as unique visitors or sales. This collector is deliberately opt-in and not activated by default.
