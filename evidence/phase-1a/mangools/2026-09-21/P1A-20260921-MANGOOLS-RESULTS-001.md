# Phase 1A — Mangools Hands-On Results #1

**Evidence ID:** `P1A-20260921-MANGOOLS-RESULTS-001`  
**Date:** 2026-09-21  
**Protocol:** `PHASE-1A-TEST-PROTOCOL-v1.md`  
**Environment:** Google / United States / English where exposed / Desktop  
**Status:** VERIFIED HANDS-ON RESULTS WITH EXPLICIT FREE+ LIMITS

This document consolidates the committed Mangools raw exports and direct UI observations. Blank values are not zero. Proprietary metrics are retained under their Mangools labels and are not treated as equivalents to SE Ranking metrics.

## 1. Account / plan / visible limits

- Plan: **Mangools Free+**; status **Active**; active until **2026-09-30**; amount **FREE**.
- Keyword lookups / 24 h: 5; keyword suggestions / search: 25; keywords / import: 25; competitor keywords / search: 10.
- SERP lookups / 24 h: 5.
- Tracked keywords: 50; tracked domains: 1; cadence shown by plan: weekly (daily on Agency).
- Backlink rows / 30 d: 2000.
- Site lookups / 24 h: 5.
- Direct monetary cost: **$0**.

After the hands-on run, the dashboard displayed `0 / 0 req.` for KWFinder, SERPChecker, LinkMiner and SiteProfiler, and `25 / 50 kws.` for SERPWatcher. Because both numerator and denominator were shown as zero for request-based tools, this is preserved as an observed UI state rather than converted into a computed remaining quota.

## 2. KWFinder — frozen 25-keyword import

KWFinder accepted **25/25** frozen keywords in their original order in a single import for **United States**. Raw export: `P1A-20260921-MANGOOLS-KW-001.csv`.

| # | Keyword | Volume | KD | CPC USD | PPC | Intent |
|---:|---|---:|---:|---:|---:|---|
| 1 | `systeme io` | 8200 | 50 | 13.76 | 54 | informational, navigational |
| 2 | `systeme io review` | 380 | 20 | 6.92 | 47 | — |
| 3 | `systeme io pricing` | 610 | 20 | 12.49 | 51 | — |
| 4 | `systeme io free plan` | 110 | — | 10.62 | 13 | — |
| 5 | `what is systeme io` | 100 | — | 11.26 | 21 | — |
| 6 | `systeme io alternatives` | 10 | 27 | 8.80 | 63 | — |
| 7 | `clickfunnels alternatives` | 240 | — | 12.89 | 22 | — |
| 8 | `systeme io vs kajabi` | 30 | 10 | 4.21 | 29 | — |
| 9 | `systeme io vs clickfunnels` | 30 | 22 | 8.00 | 32 | — |
| 10 | `kajabi alternatives` | 270 | 29 | 22.96 | 75 | — |
| 11 | `se ranking` | 7600 | 50 | 7.30 | 54 | — |
| 12 | `se ranking review` | 880 | 41 | 22.56 | 11 | — |
| 13 | `se ranking pricing` | 590 | — | 10.89 | 43 | — |
| 14 | `se ranking alternatives` | 60 | 26 | 22.85 | 2 | — |
| 15 | `se ranking vs mangools` | 10 | 19 | — | — | — |
| 16 | `mangools` | 1500 | 43 | 19.54 | 61 | — |
| 17 | `mangools review` | 140 | 65 | 51.59 | 8 | informational |
| 18 | `mangools pricing` | 30 | 68 | 19.84 | 50 | — |
| 19 | `mangools alternatives` | 130 | — | — | 0 | — |
| 20 | `mangools vs se ranking` | 10 | 19 | — | 0 | — |
| 21 | `best seo tools for small businesses` | 350 | 23 | 18.45 | 18 | — |
| 22 | `best affordable seo tools` | 10 | 33 | — | 21 | — |
| 23 | `best rank tracking tools` | 1000 | — | 44.74 | 2 | — |
| 24 | `best keyword research tools` | 660 | 48 | 17.09 | 16 | — |
| 25 | `seo tools for small business` | 430 | 25 | 48.33 | 5 | — |

The CSV also preserves last-known, 12-month, 6-month and 3-month average volumes; long monthly history; trend/growth; content types; keyword opportunities; and SERP features where supplied. Missing KD, CPC, PPC or intent is retained as missing.

## 3. SERPChecker — frozen deep-dives

The Free+ account exposed five SERP lookups per 24 hours. In observed use, the initial analysis and subsequent `Load more results` actions consumed the same finite lookup allowance. The allowance was exhausted while processing the third frozen query.

| Frozen order | Query | Organic rows exported | Result |
|---:|---|---:|---|
| 1 | `systeme io review` | 17 (top 10 used) | VERIFIED HANDS-ON |
| 2 | `systeme io pricing` | 7 | VERIFIED HANDS-ON / PARTIAL OUTPUT |
| 3 | `clickfunnels alternatives` | 9 | VERIFIED HANDS-ON / PARTIAL OUTPUT |
| 4 | `se ranking vs mangools` | 0 | UNAVAILABLE / LIMIT |
| 5 | `best affordable seo tools` | 0 | UNAVAILABLE / LIMIT |
| 6 | `best rank tracking tools` | 0 | UNAVAILABLE / LIMIT |

Exports preserve returned URLs and product-specific SERP metrics. The language control was not exposed in the SERPChecker search form; United States and Desktop were directly observed. No alternate query was substituted.

## 4. SERPWatcher — selectverdict.com

- Tracking created for `selectverdict.com`.
- Location: United States.
- Device: Desktop.
- Frozen keywords configured: 25/25.
- Plan usage after creation: 25/50 tracked keywords.
- UI initially stated that ranks would be ready in about 15 minutes.
- At the recorded polls the table contained all 25 keywords, but position/history fields remained unavailable and the UI showed `Not enough history data` / `0 / 25` selected.

Rank values are therefore **UNAVAILABLE / NOT RETURNED AT VERIFICATION POLL**. No zero ranks are inferred.

## 5. SiteProfiler — frozen domains

| Domain | DA | PA | CF | TF | WPR | Referring IPs | Facebook shares |
|---|---:|---:|---:|---:|---:|---:|---:|
| `selectverdict.com` | 1 | 13 | 3 | 1 | — | 3 | — |
| `semrush.com` | 86 | 71 | 73 | 76 | 2,158 | 52,261 | 90,720 |
| `ahrefs.com` | 83 | 76 | 67 | 48 | 2,069 | 42,945 | 28,072 |
| `moz.com` | 91 | 75 | 71 | 67 | 3,008 | 41,641 | 15,704 |

For `selectverdict.com`, SiteProfiler additionally showed 3 active backlinks in the last four months, 0 lost backlinks in that period, 3 total backlinks all time, and 3 referring domains.

DA/PA, CF/TF and WPR are product/database-specific fields and are not treated as SE Ranking metric equivalents.

## 6. LinkMiner — frozen domains

The run used the root domain and the default `one link per referring domain` setting.

| Domain | CF | TF | Referring IPs | Referring domains | Active backlinks |
|---|---:|---:|---:|---:|---:|
| `selectverdict.com` | 3 | 1 | 3 | 3 | 3 |
| `semrush.com` | 73 | 76 | 52.3k | 101.8k | 13m |
| `ahrefs.com` | 67 | 48 | 42.9k | 79.8k | 4m |
| `moz.com` | 71 | 67 | 41.6k | 72.2k | 7m |

The abbreviated values above reproduce the UI display and are not expanded into invented exact counts.

## 7. Workflow, limits, cost and friction

- Account access: successful through the existing authenticated Mangools account.
- KWFinder: 25-keyword single import and CSV export worked.
- SERPChecker: detailed CSV export worked; quota semantics caused partial coverage before all six queries could run.
- SERPWatcher: configuration worked; initial rank results did not return during the verification window.
- SiteProfiler and LinkMiner: all four frozen domains were queried.
- Direct monetary cost: `$0`.
- Browser execution / research / evidence cleanup time: **UNKNOWN / not reliably instrumented end-to-end**.
- Publishing/distribution time: `0` for Step 4.
- Frozen dataset changed: **no**.

## 8. Verification gate

Before closure, the committed CSV/JSON evidence must be re-read and checked for:

- KWFinder frozen coverage: 25/25 in original order;
- SERP export organic row counts: 17, 7 and 9 for the first three queries; only the first 10 rows of the 17-row export enter the fixed benchmark;
- explicit `UNAVAILABLE / LIMIT` for the remaining three frozen SERP queries;
- SERPWatcher configuration: 25/25, United States, Desktop, with missing rank output not converted to zero;
- SiteProfiler domains: 4/4;
- LinkMiner domains: 4/4;
- frozen dataset changed: false.

Saved CSV and JSON evidence was re-read after the final SERPWatcher poll. Verification confirmed:

- KWFinder frozen coverage: 25/25 in original order;
- SERP export organic row counts: 17, 7 and 9 for the first three queries; only the first 10 rows of the 17-row export enter the fixed benchmark;
- explicit `UNAVAILABLE / LIMIT` for the remaining three frozen SERP queries;
- SERPWatcher configuration: 25/25, United States, Desktop; after the stated processing window, rank values remained unavailable and were not converted to zero;
- SiteProfiler domains: 4/4;
- LinkMiner domains: 4/4;
- frozen dataset changed: false.

Under Protocol v1, partial and unavailable outputs are retained as evidence rather than replaced.

**PHASE 1A / STEP 4 — MANGOOLS HANDS-ON RUN: CLOSED.**
