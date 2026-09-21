# SelectVerdict — Phase 1A Experiment Journal

> Permanent experiment record for the Mangools + SE Ranking validation cycle.
>
> Rule: preserve historical checkpoints. Later observations are appended; prior D0 values are not silently rewritten.

## Experiment scope

Phase 1A tests whether original hands-on evidence about SEO tools can generate measurable search, distribution, commercial, and AI-discovery signals through the existing SelectVerdict asset.

Products in Phase 1A:
- SE Ranking
- Mangools

Out of scope for Phase 1A:
- Tally (deferred to Phase 1B)
- Site #2 / new domain
- paid acquisition
- mass generic content production
- new affiliate-offer research

Planned checkpoints:
- D0
- D10
- D20
- D30
- D45
- D60

Measurement layers:
1. Search
2. External distribution / earned mentions
3. Commercial / merchant clicks and conversions
4. AI visibility (AI-V)
5. AI factual characterization (AI-O)
6. Production cost and labor

---

## Step 1 — D0 Baseline

**Status:** CLOSED  
**Checkpoint date:** 2026-09-21  
**GSC settled through:** 2026-09-18  
**GSC measurement window:** 2026-08-22 through 2026-09-18

### 1. Google Search Console baseline

| Metric | D0 |
|---|---:|
| Clicks | 0 |
| Impressions | 167 |
| CTR | 0% |
| Average position | 21.33 |
| Queries with impressions | 44 |
| Pages with impressions | 14 |

Notes:
- This supersedes the earlier research snapshot of 144 impressions / 0 clicks / ~20.5 average position for purposes of the Phase 1A D0 checkpoint.
- Existing systeme.io and ClickFunnels content already produces impressions. Future Phase 1A growth must not automatically be attributed to the new SEO-tools cluster.

Selected existing-page observations at D0:
- `/reviews/systeme-io/`: 15 impressions, 0 clicks, average position ~3.27.
- `/guides/what-is-systeme-io/`: 47 impressions, 0 clicks, average position ~26.19.
- `/pricing/systeme-io/`: 37 impressions, 0 clicks, average position ~44.27.
- `/alternatives/clickfunnels/`: 60 impressions, 0 clicks, average position ~67.75.

These small samples are observations only and are not treated as stable ranking estimates.

### 2. Sitemap / indexing baseline

Google Search Console sitemap state:
- Sitemap: `https://selectverdict.com/sitemap-index.xml`
- Submitted URLs: 31
- Sitemap errors: 0
- Sitemap warnings: 0
- Last downloaded by Google at observation: 2026-09-19

Stored URL Inspection history showed a mixed state across newer URLs:
- Discovered — currently not indexed
- Crawled — currently not indexed
- URL unknown to Google
- An inspected canonicalized URL showed robots allowed / indexing allowed / successful fetch.

Interpretation:
- SelectVerdict is already discoverable and receiving organic impressions.
- The content library is still in an immature indexing state.
- D10/D20 observations must distinguish discovery/indexing from ranking and commercial performance.

### 3. External / earned baseline

At the D0 check:
- SelectVerdict and existing SelectVerdict pages were discoverable in search.
- No independent earned mention/backlink was confirmed by the external check.

Recorded value:
**Independent mentions/backlinks confirmed in this check: 0.**

Important limitation:
This is not proof that zero backlinks or mentions exist anywhere on the web. It means none were independently confirmed in the D0 check.

### 4. Affiliate / merchant baseline

Affiliate-program activation had previously been verified for both products.

| Merchant | Program active | Clicks | Referrals | Paid conversions | Commission |
|---|---|---:|---:|---:|---:|
| Mangools | VERIFIED | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN |
| SE Ranking | VERIFIED | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN |

Reason for UNKNOWN:
Current merchant-dashboard statistics were not directly accessible during the D0 checkpoint. No zero values are inferred.

When dashboard values become directly available, they may be added as a dated supplementary observation; the original D0 UNKNOWN state must remain visible.

### 5. AI-V / AI-O fixed query set

The following query set is frozen for Phase 1A longitudinal checks:

1. `best SEO tools for small businesses`
2. `best affordable SEO tools`
3. `best rank tracking tools`
4. `SE Ranking vs Mangools`
5. `Mangools alternatives`
6. `SE Ranking alternatives`

For D10 / D20 / D30 / D45 / D60 record, for each query:
- Mangools mentioned: yes/no
- SE Ranking mentioned: yes/no
- SelectVerdict cited: yes/no
- cited sources
- relevant factual characterization
- date/run identifier

AI-V and AI-O are measured separately.

AI-V = visibility / mention / citation presence.

AI-O = factual characterization across predefined attributes, including:
- price/value positioning
- feature breadth
- keyword research
- rank tracking
- site audit capability
- ease/simplicity
- limitations

A single generated response is not sufficient evidence of a durable change. Longitudinal checks should use the same frozen prompts and record repeatability rather than treating one response as a causal result.

### 6. D0 control rules

From this checkpoint forward:
- Do not silently modify the D0 values.
- Separate old systeme.io/ClickFunnels traffic from new SEO-tools performance.
- Do not convert UNKNOWN affiliate metrics to zero without direct evidence.
- Do not infer causation from impressions alone.
- Keep Search, Distribution, Commercial, AI-V, and AI-O as separate measurement layers.
- Record production hours and direct costs for Phase 1A assets.

---

## Step 1 verdict

**PHASE 1A / STEP 1 — D0 BASELINE: CLOSED**

The experiment may proceed to:

## Step 2 — Test Protocol v1

**Status: CLOSED**  
**Closed:** 2026-09-21  
**Protocol:** `PHASE-1A-TEST-PROTOCOL-v1.md`  
**Protocol commit:** `3c14d029970297ef8b28647a41e6605657d390d1`

Objective:
Freeze one reproducible test dataset and methodology to run through both SE Ranking and Mangools before producing the first Phase 1A evidence assets.

Step 2 must define at minimum:
- test domain
- fixed keyword set
- fixed competitor domains
- country / language
- device where applicable
- comparable product modules
- fields to capture
- evidence/screenshot rules
- VERIFIED HANDS-ON vs DOCUMENTED classification
- limitations protocol
- labor/time tracking


### Step 2 frozen specification

- Test domain: `selectverdict.com`
- Google / United States / English
- Primary SERP/rank device: Desktop
- Frozen keyword set: 25 terms (10 existing-site controls + 15 Phase 1A SEO-tool/commercial terms)
- Frozen reference domains: `semrush.com`, `ahrefs.com`, `moz.com`
- Frozen deep-dive SERP sample: 6 queries
- Comparable modules: keyword research, SERP analysis, rank tracking, competitor/domain research, backlink analysis, domain overview
- SE Ranking Website Audit retained as non-comparable SE Ranking-specific evidence
- Evidence statuses fixed: VERIFIED HANDS-ON / OFFICIAL DOCUMENTED / THIRD-PARTY / NOT TESTED / UNAVAILABLE-LIMIT / UNKNOWN
- No aggregate winner score
- Labor and direct-cost tracking required

The full immutable first-run methodology is stored in `PHASE-1A-TEST-PROTOCOL-v1.md`. Any later methodological change requires a new protocol version and an explicit journal note.

## Step 2 verdict

**PHASE 1A / STEP 2 — TEST PROTOCOL v1: CLOSED**

Next: **Step 3 — SE Ranking hands-on run using the frozen protocol.**

---

## Step 3 — SE Ranking hands-on run

**Status:** CLOSED  
**Execution attempt:** 2026-09-21  
**Raw evidence document:** `P1A-20260921-SERANKING-RUN-001.md`  
**Raw evidence commit:** `a766a7a008383608efcf33a8de669630c31101b3`

### Attempt summary

The Test Protocol v1 and the frozen dataset were re-read before execution. The 25-keyword set, six-query SERP deep-dive sample, reference domains, market/device settings and run order were left unchanged.

Direct connected-account evidence confirms:
- the existing SE Ranking account is real;
- `selectverdict.com` had already been added to the account;
- a prior Website Audit for `selectverdict.com` completed on 2026-09-20;
- that prior non-comparable audit reported Health Score 95, 0 errors, 1 warning, 33 notices and 31 healthy pages.

During the Step 3 attempt, `https://online.seranking.com/` returned HTTP `403 Forbidden` through the available web-access path. The current execution environment did not expose an interactive authenticated browser session for the existing SE Ranking account.

### Protocol-stage result

| Required stage | Result |
|---|---|
| Account/plan/trial state and visible limits | **UNAVAILABLE / LIMIT** — account exists, but authenticated plan/quota UI was not observable |
| 25 frozen keywords | **NOT TESTED** |
| Raw keyword exports | **NOT TESTED** |
| 6 frozen SERP deep-dives | **NOT TESTED** |
| Rank Tracker for `selectverdict.com` | **NOT TESTED** |
| Competitive Research — `semrush.com`, `ahrefs.com`, `moz.com` | **NOT TESTED** |
| Backlink analysis — frozen domains | **NOT TESTED** |
| Workflow/limits/friction | **PARTIAL** — access blocker recorded; no product workflow run occurred |

No public keyword estimates, external SERPs, third-party review data, or official marketing numbers were substituted for missing hands-on results.

No frozen input was changed.

### Step 3 completion gate

**PHASE 1A / STEP 3 — NOT CLOSED.**

Reason:
Test Protocol v1 requires the comparable-core hands-on run and saved observable outputs. Those outputs were not produced because the authenticated SE Ranking product UI was unavailable in the current execution environment.

Required to close Step 3:
- open the existing authorized SE Ranking account in an execution environment with interactive authenticated access;
- run the exact frozen 25-keyword set in list order;
- save raw exports where available;
- run all six frozen SERP deep-dives;
- inspect/configure Rank Tracker for `selectverdict.com` within account limits;
- run Competitive Research on the frozen reference domains;
- run Backlink analysis on the frozen domains;
- record visible quotas/limits, workflow friction and timing;
- save results without changing the frozen dataset;
- re-read the saved raw evidence and verify it against Test Protocol v1 before changing this status to CLOSED.


### Step 3 continuation attempt — 2026-09-21

A Work-mode interactive cloud browser reached the SE Ranking login endpoint, where Cloudflare presented an explicit human-verification challenge. Control was handed to the user for manual verification; the user reported that the verification did not complete.

Result:
- authenticated product UI remained unavailable;
- no protocol module was executed;
- no frozen keyword, SERP sample, reference domain, market, language or device setting was changed;
- no external data was substituted;
- raw evidence was appended in `P1A-20260921-SERANKING-RUN-001.md`.

**Status remains: BLOCKED / NOT CLOSED.**


### Step 3 final API continuation and verification

**Closed:** 2026-09-21  
**Consolidated results:** `evidence/phase-1a/seranking/2026-09-21/P1A-20260921-SERANKING-RESULTS-001.md`  
**Raw evidence directory:** `evidence/phase-1a/seranking/2026-09-21/`

The existing SE Ranking account was continued through the official API using an API key stored only as a GitHub Actions repository secret. No secret value was committed or printed into the evidence dataset.

Verified completion state:
- account/Data API state captured: active; 100000 initial units; expiry `2026-10-04 07:19:24`;
- frozen Keyword Research dataset: 25/25 submitted, 23 data rows + 2 explicit no-data responses;
- raw JSON outputs saved;
- Rank Tracker: 25/25 configured and rechecked for `selectverdict.com`, Google / United States / English, depth 100;
- final Rank Tracker output: 24/25 returned; `se ranking review` remained **UNAVAILABLE / NOT RETURNED** after polling;
- six frozen SERP deep-dives: 6/6 completed with 10 results each;
- frozen-domain Competitive Research: 4/4 completed;
- frozen-domain backlinks/authority: 4/4 completed;
- workflow friction, rate limits, implementation error correction, API-unit delta and successful runtime recorded;
- frozen inputs changed: **no**;
- direct monetary cost: **$0**.

The missing Rank Tracker row and unknown main product plan name remain explicit limitations. They were not inferred or replaced. Protocol v1 explicitly requires missing/unavailable evidence to be recorded rather than silently substituted.

## Step 3 verdict

**PHASE 1A / STEP 3 — SE RANKING HANDS-ON RUN: CLOSED**

The experiment may proceed to the Mangools hands-on run under the same frozen Test Protocol v1.


---

## Step 4 — Mangools hands-on run

**Status:** CLOSED  
**Execution date:** 2026-09-21  
**Consolidated results:** `evidence/phase-1a/mangools/2026-09-21/P1A-20260921-MANGOOLS-RESULTS-001.md`  
**Raw evidence directory:** `evidence/phase-1a/mangools/2026-09-21/`

The frozen Test Protocol v1 inputs were re-read before execution and were not changed.

Verified completion state:
- existing authenticated Mangools account accessed;
- plan observed as Mangools Free+, active through 2026-09-30, direct cost $0;
- visible limits captured, including 25 keywords per import, 5 SERP lookups per 24 hours, 50 tracked keywords, 1 tracked domain, 2000 backlink rows per 30 days and 5 site lookups per 24 hours;
- KWFinder: 25/25 frozen keywords imported in original order for United States and exported to CSV;
- SERPChecker: first three frozen queries produced raw exports with 17, 7 and 9 organic rows respectively; only the first 10 rows of the 17-row export enter the fixed benchmark;
- SERPChecker: the remaining three frozen queries were not run after the daily allowance was exhausted by initial analyses and result-loading actions; recorded as **UNAVAILABLE / LIMIT**;
- SERPWatcher: tracking created for `selectverdict.com`, United States, Desktop, 25/25 frozen keywords; after the stated processing window, no rank values were returned and no zero ranks were inferred;
- SiteProfiler: 4/4 frozen domains tested;
- LinkMiner: 4/4 frozen domains tested;
- workflow friction, quota behavior, missing outputs and direct cost recorded;
- frozen inputs changed: no.

Verification gate:
- committed KWFinder CSV re-read and exact frozen order confirmed 25/25;
- committed SERP exports re-read and organic row counts confirmed 17/7/9;
- remaining SERP queries retained as unavailable due to the observed account limit;
- saved JSON evidence validated as parseable;
- SERPWatcher missing rank output retained as unavailable rather than converted to zero;
- SiteProfiler and LinkMiner frozen-domain coverage confirmed 4/4 each.

## Step 4 verdict

**PHASE 1A / STEP 4 — MANGOOLS HANDS-ON RUN: CLOSED**

The experiment may proceed to:

## Step 5 — Comparison / benchmark consolidation

Comparison must use only genuinely comparable observed fields, preserve proprietary metric labels, distinguish feature absence from data disagreement, and avoid a single aggregate winner score.
