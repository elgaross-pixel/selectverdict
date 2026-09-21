# SE Ranking Hands-On Review: What the Frozen Test Actually Returned

**Evidence ID:** `P1A-20260921-ASSET-SERANKING-REVIEW-001`  
**Asset state:** DRAFT / NOT PUBLISHED  
**Evidence date:** 2026-09-21  
**Test environment:** Google / United States / English / Desktop  
**Direct test cost:** $0

## Editorial summary

SE Ranking completed the broadest observable run in this Phase 1A test: all 25 frozen keywords were submitted, all six frozen SERP deep-dives returned ten results, rank tracking returned rows for 24 of 25 keywords, and research was completed for all four frozen domains. That is a statement about this specific run, not a universal product ranking.

The main caveat is access and workflow. The cloud-browser route was blocked by human verification, so the completed run used SE Ranking's official Data API and Project API through GitHub Actions. The product plan name was not exposed in the saved evidence.

## What was tested

The dataset was frozen before either product was run:

- 25 keywords in their original order;
- six SERP deep-dives;
- `selectverdict.com` as the rank-tracking target;
- `selectverdict.com`, `semrush.com`, `ahrefs.com`, and `moz.com` for domain and backlink research.

No weak or missing keyword was replaced after results were seen.

## Keyword research

SE Ranking received 25/25 frozen keywords. It returned data for 23 and explicit no-data responses for:

- `systeme io free plan`
- `mangools vs se ranking`

Missing results remain missing; they are not zeros. The returned fields included volume, keyword difficulty, CPC, paid competition, intent, and trend data where supplied.

## SERP analysis

All six frozen queries returned ten rows:

1. `systeme io review`
2. `systeme io pricing`
3. `clickfunnels alternatives`
4. `se ranking vs mangools`
5. `best affordable seo tools`
6. `best rank tracking tools`

The runs were live observations on the evidence date. Their ordering should not be treated as permanent SERP state.

## Rank tracking

The project used `selectverdict.com`, Google, United States, English, Desktop, and a top-100 depth.

- 25/25 frozen keywords were configured and rechecked.
- 24/25 returned position rows.
- `se ranking review` did not return after polling and is **UNAVAILABLE / NOT RETURNED**.
- Returned `pos=0` rows mean not found in the tracked top 100; the missing keyword was not assigned rank zero.

## Domain and backlink research

Competitive Research and backlink endpoints were completed for all four frozen domains. SE Ranking returned estimated organic keyword and traffic fields for the three reference domains, plus backlink, referring-domain, follow/nofollow, and InLink Rank fields where exposed.

These are product estimates, not first-party traffic or independently verified link counts.

For `selectverdict.com`, the saved SE Ranking backlink output showed 0 backlinks and 0 referring domains. Mangools returned a different result in the same Phase 1A cycle. The disagreement is preserved rather than resolved by averaging.

## Workflow evidence

- Successful API runtime: 524.734 seconds.
- Initial API units: 100000.
- Final API units: 98980.
- Observed delta: 1020 units.
- API expiry captured: 2026-10-04 07:19:24.
- Direct monetary cost: $0.
- Earlier friction: browser human verification, HTTP 429 during burst requests, and a corrected `id` versus `site_engine_id` workflow bug.
- Research, cleanup, and writing time outside the instrumented Action: UNKNOWN.

## Practical reading of the result

This run supports a narrow conclusion: under the frozen dataset and available API access, SE Ranking returned complete SERP coverage and substantially more immediate rank-tracking output than the Mangools Free+ run. It does not prove that every SE Ranking plan or UI workflow will behave the same way.

## Evidence boundaries

- **VERIFIED HANDS-ON:** results and workflow observations described above.
- **UNKNOWN:** main account plan name and uninstrumented labor time.
- **UNAVAILABLE / NOT RETURNED:** one rank-tracking keyword.
- No affiliate economics were used to judge SEO data quality.
- No overall winner score was created.

## Source evidence

- `PHASE-1A-TEST-PROTOCOL-v1.md`
- `P1A-20260921-SERANKING-RUN-001.md`
- `evidence/phase-1a/seranking/2026-09-21/P1A-20260921-SERANKING-RESULTS-001.md`
- raw JSON files in `evidence/phase-1a/seranking/2026-09-21/`
