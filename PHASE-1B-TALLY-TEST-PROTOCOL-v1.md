# SelectVerdict Phase 1B — Tally hands-on protocol v1

**Version:** 1.0
**Frozen:** 2026-09-23, before the hands-on test
**Status:** FROZEN / execution pending
**Pre-run baseline:** `PHASE-1B-TALLY-D0-2026-09-23.md`

## Purpose and boundary

Test Tally as one forms/no-code product with a repeatable workflow, preserving direct observation separately from official documentation. This protocol does **not** compare Tally to an untested competitor, publish a SelectVerdict article, insert a referral link, or add a lead form to the SelectVerdict site. Phase 1A SEO-tool inputs and results are out of scope.

## Fixed fixture

Create a separate clearly labeled **synthetic lab form** under the existing account, without collecting any real person's information. Use this exact scenario: an imaginary software-research request intake form.

Fields and paths:

1. Required single-choice field `Research task`: `Product review` or `Product comparison`.
2. For `Product review`, show a required field `Product name`.
3. For `Product comparison`, show required fields `First product` and `Second product`.
4. A shared optional `Notes` field and a simple confirmation page.
5. No names, email addresses, phone numbers, uploads, payments, tracking pixels, or external integrations.

Test inputs, in this order:

- A: Product review / Product A / Notes: Synthetic test A.
- B: Product comparison / Product A / Product B / Notes: Synthetic test B.
- C: Try submitting the form with the required task-specific field blank; record whether validation stops it.

If the editor cannot implement a requirement on the accessible plan, record the exact blocker and do not silently replace the field or branching rule.

## Run order

1. Record visible account plan and editor state privately; do not commit account identifiers, referral links, credentials, or private dashboard metrics.
2. Build the fixed form and record whether block insertion and required fields work.
3. Configure branching, preview A/B/C, and record the visible outcome of each branch.
4. If a public link is necessary for a real submission/export test, publish the *synthetic lab form only* and keep it unlinked from SelectVerdict. Record the link privately; do not represent the form as a public product feature or user-facing site form.
5. Submit A and B using only synthetic values, verify both records in the account, and attempt a CSV export. For C, confirm no submission was recorded.
6. Inspect the embed/share options without installing an embed on SelectVerdict.
7. Record observed steps, friction, limits, elapsed time where measured, actual cost, and current official first-party documentation separately from firsthand results.
8. Draft factual editorial assets only after the saved evidence has been checked. A public article and commercial link need separate factual/editorial and production QA.

## Evidence and completion

Use `VERIFIED HANDS-ON`, `OFFICIAL DOCUMENTED`, `NOT TESTED`, `UNAVAILABLE / LIMIT`, or `UNKNOWN` for each claim. Never infer unlimited usage or feature availability solely from plan advertising. Do not describe a preview as a successful stored submission. Sandbox/synthetic results are workflow evidence, not evidence about real respondents.

The hands-on step closes only if the saved account observation covers the three test inputs, result persistence, export outcome, plan/quota observations, cost and limitations. If sign-in or feature access blocks execution, mark the step blocked and retain the frozen protocol unchanged. Changes to this fixture require a new protocol version and dated explanation.

Primary documentation reviewed before freeze:
- https://tally.so/help/create-a-form
- https://tally.so/help/conditional-form-logic
- https://tally.so/help/faq
