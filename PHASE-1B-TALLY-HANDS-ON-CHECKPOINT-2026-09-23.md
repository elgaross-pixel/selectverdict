# SelectVerdict Phase 1B — Tally hands-on checkpoint

**Date:** 2026-09-23  
**Protocol:** `PHASE-1B-TALLY-TEST-PROTOCOL-v1.md` (frozen before test)  
**State:** partial hands-on; publication, stored submissions and CSV export pending

## Verified in the authenticated Tally editor

- Created a separate synthetic lab form. It remains a **Draft** and is not linked from SelectVerdict.
- Added a required single-choice `Research task` with `Product review` and `Product comparison`.
- Added required `Product name`, `First product`, and `Second product`; added optional `Notes` and a synthetic confirmation message.
- Added two conditional rules: `Product review` hides the comparison fields; `Product comparison` hides `Product name`.
- In preview, the review branch displayed `Product name` and `Notes`; the comparison branch displayed `First product`, `Second product`, and `Notes`.
- In the comparison preview, submitting with both required product fields blank produced a validation notice for two unanswered questions. This is **preview validation**, not evidence of a stored submission.

## Not yet verified

- Persistence of synthetic submissions A and B in the Tally account.
- That invalid test C creates no record.
- CSV export and the actual exported columns.
- Share/embed controls, measured setup time, plan quotas, billing/cost.
- Any production SelectVerdict integration, editorial product verdict, or affiliate terms.

The fixed protocol requires a public link to submit and inspect synthetic records. The lab form has not been published; therefore the hands-on step remains open. No real respondent data was entered or collected. Keep account identifiers, private dashboard values, and the editor URL out of this public repository.

## Evidence rule

Treat editor and preview results above as `VERIFIED HANDS-ON` only for those exact interactions. Treat storage/export and commercial claims as `NOT TESTED` or `UNKNOWN`. Do not publish an article or comparative claim based on the partial preview.
