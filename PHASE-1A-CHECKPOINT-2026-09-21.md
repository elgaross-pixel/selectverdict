# SelectVerdict — Phase 1A Checkpoint — 2026-09-21

**Checkpoint date:** 2026-09-21  
**Project:** SelectVerdict Phase 1A  
**Status at checkpoint:** Steps 1–7 CLOSED  
**Next scheduled checkpoint:** D10 — 2026-10-01

## Purpose

Immutable handoff checkpoint for the Phase 1A work completed through 2026-09-21. Detailed raw observations remain in the experiment journal and evidence files; this document records the verified execution state needed to resume work without reconstructing the session from chat history.

## Frozen experiment basis

- Protocol: `PHASE-1A-TEST-PROTOCOL-v1.md`
- Experiment journal: `PHASE-1A-EXPERIMENT-JOURNAL.md`
- Test domain: `selectverdict.com`
- Frozen dataset/protocol were not changed during Steps 3–7.
- No paid actions were performed in this publication cycle.
- Published Phase 1A product records declare `hasAffiliateRelationship: false`.

## Completed work

### Step 3 — SE Ranking hands-on
Completed against frozen Protocol v1.

Verified from the publication commit:
- all 25 frozen keywords were submitted;
- data returned for 23; two retained as explicit no-data;
- all six frozen SERP deep-dives returned ten rows;
- Rank Tracker was configured for all 25; 24 returned position rows in the verification window;
- frozen domain/backlink research covered `selectverdict.com`, `semrush.com`, `ahrefs.com`, and `moz.com`;
- browser route was blocked by human verification, so the completed run used official SE Ranking Data API / Project API;
- API rate limiting/retries were recorded rather than hidden;
- direct monetary cost recorded by the evidence asset: $0.

Primary evidence path referenced by the published asset:
`evidence/phase-1a/seranking/2026-09-21/P1A-20260921-SERANKING-RESULTS-001.md`

### Step 4 — Mangools hands-on
Completed on the same frozen dataset where Mangools exposed comparable controls.

Verified from the publication commit:
- KWFinder accepted/exported all 25 frozen keywords;
- SERPChecker produced one full top-10 export plus two partial exports before the observed allowance was exhausted;
- the remaining three frozen SERP queries were left unavailable rather than replaced;
- SERPWatcher was configured for `selectverdict.com`, US, Desktop, all 25 keywords, but no rank values were available during the final verification poll;
- SiteProfiler and LinkMiner covered all four frozen domains;
- direct monetary cost recorded by the evidence asset: $0.

Primary evidence path:
`evidence/phase-1a/mangools/2026-09-21/P1A-20260921-MANGOOLS-RESULTS-001.md`

### Step 5 — Raw comparison
SE Ranking and Mangools were compared using the frozen common dataset. Missing results and database disagreements were preserved rather than averaged or filled from the other service. No universal aggregate winner score was introduced.

### Steps 6–7 — Evidence assets and publication
Four Phase 1A assets were published:

1. SE Ranking Review
2. Mangools Review
3. SE Ranking vs Mangools
4. SEO Tools Benchmark #1

Publication commit:
`9339064ee26677bdcb14f267c463163f6941f873`  
Commit message: `Publish Phase 1A SEO tools evidence assets`

Step 7 closure commit:
`c9b3e1cb74b53646b80ed74cd57d4a4ab7df5e35`

## QA state reported at closure

The Step 7 closure state records:
- all four production URLs HTTP 200;
- canonical tags correct;
- no `noindex`;
- pages present in `/software/`;
- pages present in sitemap;
- GitHub Editorial QA: PASS;
- no secrets/API keys published.

This checkpoint does not substitute a later production re-check; D10 should verify current state again.

## Experimental integrity notes

- Do not edit Protocol v1 or silently replace frozen inputs after seeing results.
- Do not convert missing/UNKNOWN values to zero.
- Do not average differently defined proprietary metrics.
- The SE Ranking/Mangools database disagreement for SelectVerdict backlinks is retained as disagreement, not resolved by assumption.
- Mangools quota-limited/missing SERP and rank results remain missing.
- Dated hands-on outcomes are not universal product-quality claims.
- Do not infer causation from future impressions alone.

## Next checkpoints

| Checkpoint | Date | Primary purpose |
|---|---|---|
| D10 | 2026-10-01 | discovery/indexation, first GSC page/query signals, technical availability, frozen AI-V/AI-O check |
| D20 | 2026-10-11 | early query/visibility signal |
| D30 | 2026-10-21 | directional + commercial checkpoint |
| D45 | 2026-11-05 | intermediate SEO/AI observation |
| D60 | 2026-11-20 | meaningful scaling/continuation assessment |

At D10, do not treat the checkpoint as a final commercial verdict.

## Resume instructions

When resuming Phase 1A, read in this order:

1. `PHASE-1A-CHECKPOINT-2026-09-21.md`
2. `PHASE-1A-TEST-PROTOCOL-v1.md`
3. `PHASE-1A-EXPERIMENT-JOURNAL.md`
4. SE Ranking and Mangools raw results files under `evidence/phase-1a/`

Then continue from D10 without changing historical D0 or frozen Protocol v1.
