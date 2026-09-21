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

Status: NOT STARTED

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
