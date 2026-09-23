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


---

## Post-checkpoint addendum — Commercial Instrumentation

**Added:** 2026-09-22 08:50:35 +05 (2026-09-22 03:50:35 UTC)  
**Implementation commit:** `a85fb97f18e2f686e304afecc2e665b164b8f84d`

After this checkpoint was created, the four published Phase 1A assets received centralized commercial-link instrumentation. The confirmed Mangools affiliate destination was installed and its product relationship changed to `true`; SE Ranking remains non-affiliate because its exact account-generated referral URL is **UNKNOWN** and the authenticated route was blocked by human verification.

Visible affiliate disclosure is active wherever the Mangools affiliate destination appears. All four Phase 1A routes emit provider-neutral browser events that distinguish merchant, product, source page and affiliate/non-affiliate state. No third-party analytics, cookies, local storage or persistent collector was added, so durable click counts remain **UNKNOWN / NOT COLLECTED**.

Local repository QA and GitHub Editorial QA run `35684435938` passed. Production verification confirmed HTTP 200, expected canonicals, no `noindex`, sitemap and `/software/` coverage, disclosure, link attributes, destination response and merchant-event markers. No paid action occurred; Protocol v1, frozen inputs and historical test conclusions were not changed.


---

## Post-checkpoint addendum — SE Ranking Affiliate URL Verification

**Added:** 2026-09-22 09:09:16 +05 (2026-09-22 04:09:16 UTC)  
**Result:** UNKNOWN / NOT INSTALLED

A dedicated verification pass searched the current repository, available git history, Phase 1A documentation/evidence and the connected mailbox for an exact SE Ranking affiliate/referral URL. No exact URL was recovered.

The existing SE Ranking account route was checked directly, but the available cloud browser remained on a persistent Cloudflare human-verification challenge after one permitted reload. The Affiliate Program dashboard, account affiliate identifier and account-generated link were therefore not observable. With no verified candidate URL, account ownership and destination/redirect chain could not be tested.

SE Ranking remains `hasAffiliateRelationship: false`; its published destinations remain non-affiliate and retain merchant-click tracking. Mangools, frozen inputs, test results and editorial content were not changed. No paid action or new registration occurred.

To change the status to VERIFIED, the project still requires the exact referral URL copied from the authenticated SelectVerdict SE Ranking Affiliate Program area plus an account-bound dashboard identifier or statistics observation tying that URL to the account.


---

## Post-checkpoint correction — SE Ranking affiliate URL verified

**Correction added:** 2026-09-23 16:45:50 +05 (2026-09-23 11:45:50 UTC)  
**Current result:** VERIFIED / INSTALLED

The preceding UNKNOWN addendum records an earlier attempt and was superseded later on 2026-09-22. The authenticated affiliate-account workflow produced the verified SelectVerdict referral URL:

`https://seranking.com/?ga=5265149&source=link`

Current repository and production state:
- `hasAffiliateRelationship: true` for SE Ranking;
- installation commit: `97a79eb25afa8681f1f79ec26e2881374cff9557`;
- affiliate-state QA commit: `d98e0d2d0222a16f72c38cac5eef73f29aea46fe`;
- SE Ranking Review renders the verified affiliate link with disclosure, compliant link attributes and merchant-click tracking;
- GitHub Editorial QA and subsequent Production Editorial QA passed;
- Mangools, frozen Protocol v1, dataset, hands-on results, factual conclusions and main editorial text were not changed;
- paid actions and fictitious conversions: none.

The exact SE Ranking affiliate URL is no longer UNKNOWN. Only durable merchant-click totals remain `UNKNOWN / NOT COLLECTED` by design.
