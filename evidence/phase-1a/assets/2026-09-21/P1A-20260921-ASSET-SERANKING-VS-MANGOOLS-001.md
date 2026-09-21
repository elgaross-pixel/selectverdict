# SE Ranking vs Mangools: A Frozen 25-Keyword Hands-On Comparison

**Evidence ID:** `P1A-20260921-ASSET-SERANKING-VS-MANGOOLS-001`  
**Asset state:** DRAFT / NOT PUBLISHED  
**Evidence date:** 2026-09-21  
**Environment:** Google / United States / Desktop; English where exposed  
**Direct test cost:** $0 for each observed run

## Short answer

The products did not produce interchangeable datasets.

In this run, SE Ranking completed all six SERP deep-dives and returned 24 of 25 rank-tracking rows. Mangools Free+ completed one full and two partial SERP exports before its daily allowance was exhausted, and returned no ranks during the verification window. Mangools did, however, accept the full 25-keyword import and provide CSV exports plus SiteProfiler and LinkMiner results for all four frozen domains.

There is no single aggregate winner. The outcome depends on the task, plan limits, access path, and whether immediate data availability matters.

## Method

Both products received the same frozen inputs wherever comparable:

- 25 keywords in a fixed order;
- six fixed SERP queries;
- `selectverdict.com` as the tracked domain;
- `semrush.com`, `ahrefs.com`, and `moz.com` as fixed reference domains;
- Google / United States / Desktop, with English where the product exposed the control.

The test did not force feature parity, replace missing inputs, average disagreements, or convert proprietary metrics.

## Keyword data disagreement

Search volume differed on most comparable rows. Examples:

| Keyword | SE Ranking volume | Mangools volume |
|---|---:|---:|
| `systeme io` | 4400 | 8200 |
| `se ranking review` | 10 | 880 |
| `mangools` | 440 | 1500 |
| `best rank tracking tools` | 10 | 1000 |
| `best keyword research tools` | 30 | 660 |

Three rows matched exactly: `se ranking pricing` at 590, `se ranking vs mangools` at 10, and both `mangools review` and `mangools pricing` also matched at 140 and 30 respectively. Exact agreement on some rows does not validate either database as ground truth.

SE Ranking returned explicit no-data for `systeme io free plan` and `mangools vs se ranking`; Mangools returned volumes of 110 and 10. This is a data difference, not feature absence.

KD, SE paid competition, and Mangools PPC remain separately labeled because their definitions and scales are proprietary.

## SERP outputs

| Frozen query | SE Ranking | Mangools |
|---|---|---|
| `systeme io review` | 10 rows | 17 rows; top 10 used; 9/10 overlap |
| `systeme io pricing` | 10 rows | 7 rows; 7/7 overlap |
| `clickfunnels alternatives` | 10 rows | 9 rows; 8/9 overlap |
| `se ranking vs mangools` | 10 rows | UNAVAILABLE / LIMIT |
| `best affordable seo tools` | 10 rows | UNAVAILABLE / LIMIT |
| `best rank tracking tools` | 10 rows | UNAVAILABLE / LIMIT |

The runs occurred on the same date but not at the same instant. Order differences can reflect live SERP change as well as product processing.

## Rank tracking

| Observation | SE Ranking | Mangools Free+ |
|---|---|---|
| Keywords configured | 25/25 | 25/25 |
| Returned rows at verification | 24/25 | 0/25 |
| Missing state | 1 keyword unavailable/not returned | all ranks unavailable/not returned |
| Zero handling | returned pos=0 meant not found in top 100 | no zero imputation |

This is an observed data-availability difference. It does not prove Mangools lacks rank tracking.

## Domain research

SE Ranking returned estimated organic-keyword and traffic fields for the three reference domains. Mangools returned authority and link-popularity fields through SiteProfiler, but no comparable organic-keyword or traffic estimates in the captured overview.

That is field/feature absence in the captured result, not a zero value.

## Backlink disagreement

For `selectverdict.com`, SE Ranking returned 0 backlinks and 0 referring domains; Mangools returned 3 active backlinks and 3 referring domains. Large-domain counts also differed materially.

No counts were averaged. Mangools large values were preserved in their abbreviated UI form, and InLink Rank was not equated to DA, PA, CF, TF, or WPR.

## Workflow and limits

| Dimension | SE Ranking | Mangools |
|---|---|---|
| Access | official APIs through GitHub Actions | authenticated browser UI |
| Full keyword batch | yes, 25/25 | yes, 25/25 |
| Full six-query SERP sample | yes | no; quota exhausted |
| Immediate rank output | 24/25 rows | none during poll window |
| Domain/backlink coverage | 4/4 | 4/4 |
| Export evidence | JSON/API | CSV plus JSON summary |
| Instrumented runtime | 524.734 seconds | UNKNOWN |
| Direct cost | $0 | $0 |

SE Ranking friction included browser verification, HTTP 429, and a corrected workflow field-name bug. Mangools friction included SERP quota semantics, partial exports, delayed ranks, and ambiguous post-run request counters.

## Decision framework from this run

- Choose based on the module and access constraints, not a blended score.
- Treat keyword volume and backlink counts as database estimates.
- Check plan-specific quotas before assuming the same coverage.
- Re-run rank tracking after sufficient history if delayed output is decision-critical.
- Keep proprietary authority and difficulty metrics separate.

## Evidence boundaries

This article is a dated test report. It does not claim permanent product behavior, price availability, or universal superiority. Affiliate economics are excluded from the data-quality assessment.

## Source evidence

- `PHASE-1A-TEST-PROTOCOL-v1.md`
- `evidence/phase-1a/seranking/2026-09-21/P1A-20260921-SERANKING-RESULTS-001.md`
- `evidence/phase-1a/mangools/2026-09-21/P1A-20260921-MANGOOLS-RESULTS-001.md`
- `evidence/phase-1a/comparison/2026-09-21/P1A-20260921-SERANKING-VS-MANGOOLS-COMPARISON-001.md`
