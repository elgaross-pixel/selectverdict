# SelectVerdict — Distribution Pilot / Execution Checkpoint
Date: 2026-10-27 (Asia/Tashkent)
Status: PRE-LAUNCH / MEASUREMENT BLOCKER — NOT A COMPLETED TRAFFIC TEST
Separate from frozen Phase 1A. No modifications to frozen protocol, dataset or editorial assets.

## 1. Verified baseline
User-provided Google Search Console screenshots, 2026-10-27, selected three-month window: 904 impressions, 0 clicks, 0% CTR, average position 51.7 for SelectVerdict. Four Phase 1A assets: SEO Tools Benchmark 72 impressions; Mangools Review 4; SE Ranking Review and comparison not shown in 19-page impressions list. These are **not** daily traffic counts. Three URL indexing requests were accepted on 2026-10-27 (not proof of indexing).

## 2. Measurement readiness
- GitHub src/layouts/BaseLayout.astro dispatches client-only `selectverdict:merchant-click` CustomEvent and invokes optional `window.selectVerdictEventHandlers`.
- GitHub src/components/MerchantLink.astro labels merchant links with source page, merchant, product and affiliate flag.
- No persistent/network collector is visible in these components. Merchant click counts are NOT COLLECTED / UNKNOWN. Do not claim affiliate conversions are zero.
- Connected GSC Wizard tool requires paid subscription; GSC numbers above came from user screenshots, not the connector.
- Whether Cloudflare Web Analytics or another analytics tag is deployed at the edge is UNVERIFIED by this repository-only audit; live analytics account reports not retrieved.
- Metricool connector responded: no social network connected to brand. Therefore no scheduled/published post was created.
- Measurement gate: verify first-party visit analytics and campaign-source capture, then test merchant click persistence. Do not claim launch until verified.

## 3. Distribution hypotheses / channel selection
A. Reddit: engage only in relevant existing discussions, give standalone helpful answers, link only when permitted by individual community rules; no repetitive promotion or automation. Official Reddit spam policy: https://support.reddithelp.com/hc/en-us/articles/360043504051-Spam .
B. LinkedIn personal profile: one useful first-person research summary with transparent site affiliation and a tagged link, only after posting access and measurement are verified.
C. Substack / Flipboard / Pinterest profiles: existing distribution surfaces require current access and individual link/policy verification; secondary channels, not assumed to drive traffic.
Not selected: Show HN; editorial reviews do not qualify as an interactive product and Hacker News prohibits primarily promotional use and generated posts. https://news.ycombinator.com/newsguidelines.html .

## 4. Assets and tracking convention
Use existing published editorial routes; do not rewrite Phase 1A pages.
- /alternatives/clickfunnels/ — wider funnel-software comparison
- /reviews/systeme-io/ — first-hand review
- /guides/seo-tools-benchmark-1/ — original benchmark, caveat: GSC impressions predominantly generic benchmarking-tool queries
- /reviews/mangools/ — SEO-tool review
Use consistent UTM: utm_source={reddit|linkedin|substack|flipboard|pinterest}, utm_medium=organic_social, utm_campaign=sv_distribution_pilot_20261027, utm_content={distinct_post_id}. Validate analytics preserves query parameters before publishing. Do not use tracking redirects or affiliate links in communities.

## 5. 14-day experiment plan (NOT STARTED)
Day 0: prove visitor/source/merchant-event measurement with test visits marked and excluded from outcomes.
Days 1-3: identify 3-5 suitable discussions, verify each community rule, draft value-first contributions.
Days 4-10: publish only through connected, permitted accounts; log exact timestamp, URL, platform and UTM; avoid duplicates.
Days 11-14: calculate sessions, engaged sessions, merchant clicks, referrals/conversions if accessible; compare by channel.
Stop condition: no measurable target visitors after a compliant 14-day exposure test -> reassess offer/audience/channel. No fabricated visits, clicks, commissions or revenue. Do not call a test complete before actual distribution.

## 6. Current blockers
- No verified connected publishing channel in this session; Metricool brand has zero social networks connected.
- No verified visit-level/source analytics export and no persistent merchant-click collector.
- No social posts were published. No distribution traffic measured.
- No paid actions taken.

Next execution gate: connect a publishing channel or use a permitted existing account; verify first-party traffic attribution and merchant-click collection before launch.
