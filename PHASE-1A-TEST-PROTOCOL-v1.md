# Phase 1A — Test Protocol v1

**Protocol version:** 1.0  
**Frozen:** 2026-09-21  
**Status:** ACTIVE / FROZEN FOR FIRST RUN

## Purpose

Create one reproducible hands-on dataset for SE Ranking and Mangools. The protocol is designed to support four Phase 1A evidence assets:

1. SE Ranking hands-on review
2. Mangools hands-on review
3. SE Ranking vs Mangools
4. SelectVerdict SEO Tools Benchmark #1

The protocol measures products on the same inputs wherever the tools provide genuinely comparable functionality. It does not force feature parity.

## Fixed environment

- Test domain: `selectverdict.com`
- Search engine: Google
- Country / database: United States
- Language: English
- Primary device for rank/SERP comparisons: Desktop
- Secondary device: Mobile only where both products can be tested without changing the primary dataset
- Observation timezone for journal records: Asia/Tashkent
- Test principle: same input, same target market, same observation window

If a tool cannot implement one of these settings, record the limitation instead of silently substituting another setting.

## Frozen keyword set — 25 keywords

### A. Existing SelectVerdict / funnel-software control terms
These provide a control group where SelectVerdict already has relevant published content.

1. systeme io
2. systeme io review
3. systeme io pricing
4. systeme io free plan
5. what is systeme io
6. systeme io alternatives
7. clickfunnels alternatives
8. systeme io vs kajabi
9. systeme io vs clickfunnels
10. kajabi alternatives

### B. Phase 1A SEO-tools commercial terms
These are the future vertical under test.

11. se ranking
12. se ranking review
13. se ranking pricing
14. se ranking alternatives
15. se ranking vs mangools
16. mangools
17. mangools review
18. mangools pricing
19. mangools alternatives
20. mangools vs se ranking
21. best seo tools for small businesses
22. best affordable seo tools
23. best rank tracking tools
24. best keyword research tools
25. seo tools for small business

Do not replace weak/zero-volume keywords after seeing product outputs. Zero or missing data is itself part of the benchmark.

## Fixed competitor/reference domains

The benchmark uses two classes of domains.

### Direct SEO-tool reference domains
- `semrush.com`
- `ahrefs.com`
- `moz.com`

### Test-domain target
- `selectverdict.com`

The direct reference domains are used only where competitor/domain-analysis functionality is being compared. They are not declared editorial “winners” or assumed to be equivalent products.

Do not add/remove reference domains during the first run. If a product automatically discovers other competitors, save them as an observed output but do not replace the frozen set.

## Modules to test

### Comparable core

| Capability | SE Ranking | Mangools | Primary output |
|---|---|---|---|
| Keyword research | Keyword Research | KWFinder | volume, difficulty, CPC/competition where exposed, intent where exposed |
| SERP analysis | SERP/keyword results | SERPChecker | ranking URLs, SERP features/metrics where exposed |
| Rank tracking | Rank Tracker | SERPWatcher | SelectVerdict position, ranking URL, device/location settings |
| Competitor/domain research | Competitive Research | KWFinder competitor/SiteProfiler capabilities | discovered keywords/domain metrics |
| Backlink analysis | Backlink Checker | LinkMiner | backlink/referring-domain metrics where exposed |
| Domain overview | Competitive Research / project data | SiteProfiler | comparable authority/traffic/domain fields where exposed |

### Non-comparable evidence
Website Audit already tested in SE Ranking is retained as SE Ranking-specific evidence. Do not penalize Mangools by inventing an equivalent crawler if the product does not offer one.

Any AI-search feature is recorded separately and does not enter the core SEO benchmark unless both products can be tested on a genuinely equivalent task.

## Run order

To reduce hindsight editing:

1. Record account/plan/trial state and visible limits.
2. Run all 25 keywords through keyword research/import where permitted.
3. Save raw exports where available.
4. Run SERP analysis on the fixed sample defined below.
5. Configure rank tracking for `selectverdict.com` using the frozen keyword set where account limits permit.
6. Run domain/competitor research for the frozen domains.
7. Run backlink analysis for the frozen domains.
8. Record workflow friction, quotas, unavailable features, errors, and time.
9. Only after both products are complete, build the comparison table.

If account limits prevent all 25 keywords, test the maximum possible number in original list order and record the cutoff. Do not cherry-pick replacements.

## Fixed deep-dive SERP sample

Detailed SERP comparison is limited to these 6 queries:

1. systeme io review
2. systeme io pricing
3. clickfunnels alternatives
4. se ranking vs mangools
5. best affordable seo tools
6. best rank tracking tools

Reason: three control/current-site intents plus three Phase 1A SEO-tool intents.

For each, capture where exposed:
- top 10 organic URLs
- SERP features
- selected location/device
- retrieval/check date and time
- product-specific URL/domain metrics

Do not treat differences between two runs at different times as pure product-data disagreement if live SERPs may have changed.

## Fields to capture

### Keyword-level
- keyword
- country/database
- search volume
- keyword difficulty
- CPC
- paid competition
- intent
- trend/history availability
- last-data/update indication if shown
- missing/not available
- lookup/quota cost if shown

### Rank/SERP-level
- keyword
- device
- location
- SelectVerdict rank
- ranking URL
- top 10 organic results for deep-dive sample
- SERP features
- timestamp

### Domain-level
Capture only fields visibly supplied by each product. Candidate fields:
- estimated organic traffic
- organic keywords
- authority/domain metric
- backlinks
- referring domains

Never equate differently defined proprietary metrics merely because their values look similar.

### Workflow-level
- task
- start/end time
- clicks/steps if practical
- export available yes/no
- export format
- quota consumed
- error/friction
- notable UX observation

Workflow observations are qualitative evidence, not objective product-quality scores.

## Evidence rules

Each claim must receive one status:

- **VERIFIED HANDS-ON** — directly observed during this experiment.
- **OFFICIAL DOCUMENTED** — supported by current first-party product documentation but not tested by SelectVerdict.
- **THIRD-PARTY** — supported only by an identified external source.
- **NOT TESTED** — in scope conceptually but not run.
- **UNAVAILABLE / LIMIT** — blocked by account, quota, plan, missing feature, or technical limitation.
- **UNKNOWN** — evidence insufficient.

Screenshots should preserve enough context to identify:
- product/tool
- query/domain
- result
- relevant settings
- date/time separately in the experiment log if the UI does not show it.

Never label an official marketing claim as hands-on evidence.

## Comparison rules

1. Compare raw observable fields before writing conclusions.
2. Do not create a single aggregate winner score.
3. Do not convert proprietary metrics into equivalents without documented definitions.
4. Record disagreement rather than averaging it away.
5. Distinguish data difference from feature absence.
6. Distinguish live-SERP timing differences from database differences.
7. Do not use affiliate economics to judge SEO-data quality.
8. Commercial links/disclosures must not change the factual benchmark result.

## Time and cost accounting

For every run/asset record:
- research minutes
- hands-on testing minutes
- evidence cleanup minutes
- writing/editing minutes
- publishing/QA minutes
- distribution minutes
- direct monetary cost

This is required for later unit-economics analysis.

## Raw evidence naming convention

Recommended repository/local evidence identifiers:

`P1A-YYYYMMDD-[PRODUCT]-[MODULE]-[SEQ]`

Examples:
- `P1A-20260921-SERANKING-KW-001`
- `P1A-20260921-MANGOOLS-KW-001`
- `P1A-20260921-SERANKING-SERP-001`

Do not commit credentials, API tokens, private account data, payment information, or unredacted personal information to the repository.

## Completion gate for Step 2

Step 2 is complete when:
- environment is frozen;
- 25-keyword set is frozen;
- competitor/reference domains are frozen;
- 6-query SERP deep-dive set is frozen;
- comparable/non-comparable modules are defined;
- capture fields are defined;
- evidence classifications are defined;
- run order is fixed;
- comparison rules are fixed;
- labor/cost tracking is fixed.

After closure, changes require a new protocol version and an explicit journal note. Do not silently edit v1 after observing results.
