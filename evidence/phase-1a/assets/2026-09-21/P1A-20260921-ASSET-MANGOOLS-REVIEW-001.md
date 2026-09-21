# Mangools Hands-On Review: What Free+ Allowed in the Frozen Test

**Evidence ID:** `P1A-20260921-ASSET-MANGOOLS-REVIEW-001`  
**Asset state:** DRAFT / NOT PUBLISHED  
**Evidence date:** 2026-09-21  
**Test environment:** Google / United States / Desktop; English where exposed  
**Observed plan:** Mangools Free+, active through 2026-09-30  
**Direct test cost:** $0

## Editorial summary

Mangools Free+ accepted the entire 25-keyword frozen batch in KWFinder and allowed all four frozen domains to be checked in SiteProfiler and LinkMiner. Its main limitation in this run was the daily SERP allowance: only the first three of six frozen SERP queries produced exports, and two of those exports were partial. SERPWatcher accepted all 25 keywords but returned no ranks during the verification window.

Those are observed Free+ results for one dated run. They are not a claim that paid plans or later checks behave identically.

## What was tested

The run preserved the same frozen inputs used for SE Ranking:

- 25 keywords, original order;
- six fixed SERP queries;
- `selectverdict.com` for rank tracking;
- four frozen domains for profile and backlink research.

No replacement data from another service was used when Mangools reached a limit.

## Account limits observed

The account displayed:

- 5 keyword lookups per 24 hours;
- 25 keyword suggestions per search;
- 25 keywords per import;
- 5 SERP lookups per 24 hours;
- 50 tracked keywords and 1 tracked domain;
- weekly tracking cadence on Free+;
- 2000 backlink rows per 30 days;
- 5 site lookups per 24 hours.

After the run, request counters displayed `0 / 0 req.` for several modules. That ambiguous UI state is preserved as observed and is not converted into a calculated remaining allowance.

## KWFinder

KWFinder imported and exported 25/25 frozen keywords for the United States in one batch. The CSV contained volume, KD, CPC, PPC, historical volume/trend fields, intent where supplied, content types, opportunities, and SERP features.

Missing values remain blank. In particular, Mangools returned numeric volume for two keywords where SE Ranking returned explicit no-data. That is a data difference, not proof that either database is correct.

## SERPChecker

The account exposed five SERP lookups per 24 hours. Initial analyses and `Load more results` actions consumed the same allowance.

| Query | Exported organic rows | Recorded state |
|---|---:|---|
| `systeme io review` | 17 | VERIFIED HANDS-ON; benchmark uses top 10 |
| `systeme io pricing` | 7 | VERIFIED HANDS-ON / PARTIAL OUTPUT |
| `clickfunnels alternatives` | 9 | VERIFIED HANDS-ON / PARTIAL OUTPUT |
| `se ranking vs mangools` | 0 | UNAVAILABLE / LIMIT |
| `best affordable seo tools` | 0 | UNAVAILABLE / LIMIT |
| `best rank tracking tools` | 0 | UNAVAILABLE / LIMIT |

The language control was not exposed in the observed SERPChecker form. United States and Desktop were directly observed.

## SERPWatcher

- `selectverdict.com` tracking was created.
- United States and Desktop were selected.
- 25/25 frozen keywords were configured.
- Usage showed 25/50 tracked keywords.
- After the stated processing period, the UI still showed insufficient history and no rank values.

All rank values are therefore **UNAVAILABLE / NOT RETURNED AT VERIFICATION POLL**. No rank zero was inferred.

## SiteProfiler and LinkMiner

All four frozen domains were checked. SiteProfiler exposed DA, PA, CF, TF, WPR, referring IPs, and other fields where available. LinkMiner exposed CF, TF, referring IPs, referring domains, and active backlinks.

For `selectverdict.com`, Mangools showed three active backlinks and three referring domains. SE Ranking showed zero for both in its saved dataset. This disagreement is not averaged away; the tools use different databases and product-specific metrics.

## Workflow evidence

- Existing authenticated account access worked.
- KWFinder batch import and CSV export worked.
- SERPChecker CSV export worked, but lookup consumption during result expansion prevented full six-query coverage.
- SERPWatcher setup worked, but ranks were not returned in the verification window.
- End-to-end browser runtime and labor: UNKNOWN / not reliably instrumented.
- Direct monetary cost: $0.

## Practical reading of the result

For this run, Mangools Free+ provided complete frozen keyword import coverage and straightforward CSV evidence, but its SERP quota and delayed rank output materially constrained the benchmark. This is a plan-and-run limitation, not evidence that the underlying modules are absent.

## Evidence boundaries

- **VERIFIED HANDS-ON:** saved exports and direct UI observations.
- **UNAVAILABLE / LIMIT:** three SERP deep-dives.
- **UNAVAILABLE / NOT RETURNED:** all rank values at the final poll.
- **UNKNOWN:** end-to-end labor time.
- Proprietary metrics are not equated with SE Ranking metrics.

## Source evidence

- `PHASE-1A-TEST-PROTOCOL-v1.md`
- `evidence/phase-1a/mangools/2026-09-21/P1A-20260921-MANGOOLS-RESULTS-001.md`
- committed CSV and JSON files in `evidence/phase-1a/mangools/2026-09-21/`
