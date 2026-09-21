# Phase 1A — SE Ranking vs Mangools Observable Comparison #1

**Evidence ID:** `P1A-20260921-SERANKING-VS-MANGOOLS-COMPARISON-001`  
**Date:** 2026-09-21  
**Protocol:** `PHASE-1A-TEST-PROTOCOL-v1.md`  
**Status:** VERIFIED RAW COMPARISON

This comparison uses only saved hands-on evidence. It does not average disagreements, equate proprietary metrics, or produce a single winner score. A blank value is not zero.

## 1. Keyword research — frozen 25

| # | Keyword | SE vol. | MG vol. | Δ MG−SE | SE KD | MG KD | SE CPC | MG CPC | SE paid comp. | MG PPC |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | `systeme io` | 4400 | 8200 | +3800 | 77 | 50 | 2.95 | 13.76 | 0.53 | 54 |
| 2 | `systeme io review` | 480 | 380 | -100 | 16 | 20 | 1.71 | 6.92 | 0.4 | 47 |
| 3 | `systeme io pricing` | 590 | 610 | +20 | 21 | 20 | 6.01 | 12.49 | 0.55 | 51 |
| 4 | `systeme io free plan` | — | 110 | — | — | — | — | 10.62 | — | 13 |
| 5 | `what is systeme io` | 110 | 100 | -10 | 36 | — | 1.74 | 11.26 | 0.27 | 21 |
| 6 | `systeme io alternatives` | 20 | 10 | -10 | 7 | 27 | 6 | 8.80 | 0.79 | 63 |
| 7 | `clickfunnels alternatives` | 260 | 240 | -20 | 10 | — | 5.77 | 12.89 | 0.27 | 22 |
| 8 | `systeme io vs kajabi` | 40 | 30 | -10 | 6 | 10 | 3.82 | 4.21 | 0.46 | 29 |
| 9 | `systeme io vs clickfunnels` | 40 | 30 | -10 | 6 | 22 | 8.89 | 8.00 | 0.23 | 32 |
| 10 | `kajabi alternatives` | 320 | 270 | -50 | 7 | 29 | 10.79 | 22.96 | 0.56 | 75 |
| 11 | `se ranking` | 6600 | 7600 | +1000 | 77 | 50 | 0.55 | 7.30 | 0.45 | 54 |
| 12 | `se ranking review` | 10 | 880 | +870 | 31 | 41 | 4 | 22.56 | 0.05 | 11 |
| 13 | `se ranking pricing` | 590 | 590 | 0 | 20 | — | 4 | 10.89 | 0.26 | 43 |
| 14 | `se ranking alternatives` | 70 | 60 | -10 | 16 | 26 | 11.09 | 22.85 | 0.08 | 2 |
| 15 | `se ranking vs mangools` | 10 | 10 | 0 | 13 | 19 | 0 | — | 0 | — |
| 16 | `mangools` | 440 | 1500 | +1060 | 34 | 43 | 5.34 | 19.54 | 0.57 | 61 |
| 17 | `mangools review` | 140 | 140 | 0 | 21 | 65 | 2.99 | 51.59 | 0.05 | 8 |
| 18 | `mangools pricing` | 30 | 30 | 0 | 23 | 68 | 5.08 | 19.84 | 0.52 | 50 |
| 19 | `mangools alternatives` | 110 | 130 | +20 | 14 | — | 7.72 | — | 0.04 | 0 |
| 20 | `mangools vs se ranking` | — | 10 | — | — | 19 | — | — | — | 0 |
| 21 | `best seo tools for small businesses` | 390 | 350 | -40 | 33 | 23 | 7.93 | 18.45 | 0.1 | 18 |
| 22 | `best affordable seo tools` | 20 | 10 | -10 | 20 | 33 | 0 | — | 0.43 | 21 |
| 23 | `best rank tracking tools` | 10 | 1000 | +990 | 45 | — | 0 | 44.74 | 0.01 | 2 |
| 24 | `best keyword research tools` | 30 | 660 | +630 | 69 | 48 | 5.59 | 17.09 | 0.15 | 16 |
| 25 | `seo tools for small business` | 590 | 430 | -160 | 26 | 25 | 8.76 | 48.33 | 0.01 | 5 |

Notes:

- Search-volume values disagree on most rows; disagreement is preserved per keyword rather than averaged.
- SE Ranking returned explicit no-data for `systeme io free plan` and `mangools vs se ranking`; Mangools returned numeric volume for both. This is **DATA DIFFERENCE**, not feature absence.
- KD values are displayed side by side but remain proprietary product metrics.
- SE paid competition uses a 0–1 style scale in the captured output; Mangools PPC uses its own displayed scale. They are not converted.
- Mangools exported long monthly history; SE Ranking returned up to 12 trend points in the captured API data.
- SE Ranking supplied intent on 23 returned rows; Mangools exported nonblank Search Intent on 2 rows. This is observed field availability.

## 2. SERP outputs

| Query | SE rows | Mangools rows | Fixed top-10 overlap | Status |
|---|---:|---:|---:|---|
| `systeme io review` | 10 | 17 | 9/10 | COMPARABLE TOP 10 |
| `systeme io pricing` | 10 | 7 | 7/7 | PARTIAL / LIMIT |
| `clickfunnels alternatives` | 10 | 9 | 8/9 | PARTIAL / LIMIT |
| `se ranking vs mangools` | 10 | 0 | — | Mangools UNAVAILABLE / LIMIT |
| `best affordable seo tools` | 10 | 0 | — | Mangools UNAVAILABLE / LIMIT |
| `best rank tracking tools` | 10 | 0 | — | Mangools UNAVAILABLE / LIMIT |

Runs occurred on the same experiment date but not at an identical instant. URL-order differences may include live-SERP timing effects.

## 3. Rank tracking

| Field | SE Ranking | Mangools |
|---|---|---|
| Frozen keywords configured | 25/25 | 25/25 |
| Market/device | Google / US / English / Desktop | Google / US / Desktop; language control not exposed |
| Returned rank rows | 24/25 | 0/25 at final verification poll |
| Missing handling | `se ranking review` UNAVAILABLE / NOT RETURNED | All rank values UNAVAILABLE / NOT RETURNED |
| Zero handling | Returned rows showed not found in top 100 / pos=0 | No rank=0 imputation |

This is a **DATA AVAILABILITY DIFFERENCE** in the observed run, not proof that Mangools lacks rank tracking.

## 4. Domain research and domain metrics

| Domain | SE organic keywords | SE est. traffic | Mangools DA | Mangools PA | Mangools CF | Mangools TF | Mangools WPR |
|---|---:|---:|---:|---:|---:|---:|---:|
| `selectverdict.com` | — | — | 1 | 13 | 3 | 1 | — |
| `semrush.com` | 502704 | 2428699 | 86 | 71 | 73 | 76 | 2158 |
| `ahrefs.com` | 255311 | 271766 | 83 | 76 | 67 | 48 | 2069 |
| `moz.com` | 116273 | 102774 | 91 | 75 | 71 | 67 | 3008 |

SE Ranking supplied estimated organic-keyword and traffic fields for the three reference domains and no overview data for SelectVerdict. Mangools supplied authority/link-popularity fields but no comparable organic-keyword or estimated-traffic fields in the captured overview. This is **FEATURE/FIELD ABSENCE**, not zero. Proprietary authority metrics are not declared equivalent.

## 5. Backlinks

| Domain | SE backlinks | SE referring domains | SE InLink Rank | Mangools active backlinks | Mangools referring domains | Mangools CF | Mangools TF |
|---|---:|---:|---:|---:|---:|---:|---:|
| `selectverdict.com` | 0 | 0 | 0 | 3 | 3 | 3 | 1 |
| `semrush.com` | 18974138 | 220369 | 96 | 13m | 101.8k | 73 | 76 |
| `ahrefs.com` | 3755888 | 156915 | 97 | 4m | 79.8k | 67 | 48 |
| `moz.com` | 5590437 | 260201 | 97 | 7m | 72.2k | 71 | 67 |

Observed counts differ materially. No count is averaged and no proprietary authority metric is converted. Mangools abbreviated large UI values are preserved without inventing exact integers.

## 6. Workflow, quotas, runtime and direct cost

| Dimension | SE Ranking | Mangools |
|---|---|---|
| Access path | Official Data API + Project API through GitHub Actions | Authenticated browser UI |
| Keyword batch | 25/25 via API | 25/25 single import |
| SERP allowance | API units; six deep-dives completed | 5 SERP lookups/day; exhausted during result loading |
| SERP completion | 6/6 with 10 rows | 1 full top-10, 2 partial, 3 unavailable/limit |
| Rank tracking | 24/25 rows returned | 25/25 configured; 0 returned during verification window |
| Domain research | 4/4 | 4/4 SiteProfiler |
| Backlinks | 4/4 | 4/4 LinkMiner |
| Export | JSON/API evidence | KWFinder and SERPChecker CSV |
| Instrumented runtime | 524.734 s API runtime | UNKNOWN / browser session not reliably instrumented end-to-end |
| Direct cost | $0 | $0 |
| Main friction | Cloud-browser block, HTTP 429, corrected field-name bug | SERP quota semantics, partial SERPs, delayed ranks, ambiguous post-run counters |

## 7. Step 5 verdict

- No aggregate winner score was created.
- Proprietary metrics remain separately labeled.
- Data disagreement is separated from feature/field absence.
- Live-SERP timing is retained as a limitation.
- Affiliate economics were excluded from SEO data-quality comparison.
- Frozen inputs were not changed.

**PHASE 1A / STEP 5 — COMPARISON / BENCHMARK CONSOLIDATION: CLOSED.**
