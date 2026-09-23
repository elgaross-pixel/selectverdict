# Phase 1A — Commercial Instrumentation Checklist

**Status:** CLOSED  
**Production activation verified:** 2026-09-22 08:50:35 +05 / 2026-09-22 03:50:35 UTC  
**Implementation commit:** `a85fb97f18e2f686e304afecc2e665b164b8f84d`  
**Closure documentation commit:** `e514673539e763d70df1f19481bfedc1bcc311db`  
**Direct monetary cost:** $0

## Affiliate destinations

- [x] Mangools affiliate URL confirmed from the authenticated account: `https://mangools.com#a6aaf5d686aee08e4110a3d0e`
- [x] Mangools product record updated centrally.
- [x] Mangools `hasAffiliateRelationship` changed to `true`.
- [x] SE Ranking affiliate URL verified from the authenticated affiliate account: `https://seranking.com/?ga=5265149&source=link`.
- [x] SE Ranking `hasAffiliateRelationship` changed to `true`.
- [x] No affiliate URL was inferred or invented.
- [x] Official affiliate-program rules checked for both merchants.
- [x] No paid action performed.

## Disclosure and links

- [x] Visible affiliate disclosure active on `/reviews/mangools/`.
- [x] Visible affiliate disclosure active on `/compare/se-ranking-vs-mangools/`.
- [x] Visible affiliate disclosure active on `/guides/seo-tools-benchmark-1/`.
- [x] SE Ranking review contains the verified affiliate destination and visible disclosure.
- [x] Affiliate links use `sponsored nofollow noopener`.
- [x] Commercial destinations use the centralized `MerchantLink` component.
- [x] Frozen Protocol v1, dataset, benchmark tables, titles, conclusions and main editorial text unchanged.

## Merchant-click instrumentation

- [x] `/reviews/se-ranking/` instrumented.
- [x] `/reviews/mangools/` instrumented.
- [x] `/compare/se-ranking-vs-mangools/` instrumented.
- [x] `/guides/seo-tools-benchmark-1/` instrumented.
- [x] Event distinguishes merchant and product.
- [x] Event includes canonical source page.
- [x] Event distinguishes affiliate/non-affiliate state.
- [x] Event includes destination origin, not the full referral URL.
- [x] Provider-neutral browser event: `selectverdict:merchant-click`.
- [x] No third-party analytics, cookies, local storage or persistent collector added.
- [x] Durable click totals recorded as **UNKNOWN / NOT COLLECTED**.

## QA and production

- [x] Local `npm run qa`: PASS — 36 HTML routes and 36 sitemap routes.
- [x] GitHub Editorial QA run `35684435938`: PASS.
- [x] GitHub Editorial QA closure run `35684745486`: PASS.
- [x] All four Phase 1A routes returned HTTP 200.
- [x] Expected canonical present on all four routes.
- [x] No accidental `noindex`.
- [x] All four routes present in sitemap.
- [x] All four routes present in `/software/`.
- [x] Affiliate disclosure and link attributes verified in production.
- [x] SE Ranking and Mangools destinations responded during verification.
- [x] No API key, credential, private account data or session token added to repository/build.
- [x] Experiment Journal updated.
- [x] Checkpoint updated with append-only post-checkpoint addendum.

## Remaining UNKNOWN / blockers

- [x] SE Ranking exact account-generated affiliate URL — **RESOLVED / VERIFIED** in commit `97a79eb25afa8681f1f79ec26e2881374cff9557`.
- [ ] Durable merchant-click counts — **UNKNOWN / NOT COLLECTED** by design.

## Completion gate

- [x] Confirmed affiliate links installed where possible.
- [x] Disclosure correct.
- [x] Merchant-click tracking operational.
- [x] Repository and production QA passed.
- [x] Journal and checkpoint updated.
- [x] Commercial Instrumentation Step closed.


---

## SE Ranking Affiliate URL Verification — 2026-09-22

**Historical attempt result:** UNKNOWN at 09:09 +05; **SUPERSEDED BY VERIFIED INSTALLATION** at 22:39 +05  
**Verification time:** 2026-09-22 09:09:16 +05 / 2026-09-22 04:09:16 UTC

- [x] Current repository searched for SE Ranking affiliate/referral URL patterns.
- [x] Available git history searched for SE Ranking affiliate/referral URL patterns.
- [x] Experiment Journal, checkpoint, checklist and Phase 1A evidence searched.
- [x] Connected mailbox searched for SE Ranking affiliate/referral/partner messages.
- [x] Existing SE Ranking affiliate-account route checked directly.
- [x] Official SE Ranking affiliate page, legal terms and help documentation rechecked.
- [x] Exact account-generated referral URL recovered and verified: `https://seranking.com/?ga=5265149&source=link`.
- [x] Ownership established from the authenticated SelectVerdict affiliate-account workflow and account identifier `ga=5265149`.
- [x] Destination and production rendering verified without purchase or fictitious conversion.
- [x] No guessed or pattern-derived URL installed.
- [x] SE Ranking `hasAffiliateRelationship` is `true`.
- [x] SE Ranking review affiliate destination and merchant-click tracking are active.
- [x] Mangools configuration unchanged.
- [x] Frozen Protocol, dataset, test results and editorial content unchanged.
- [x] Paid actions and new registrations: none.

Observed blocker:
- `online.seranking.com` presented a persistent Cloudflare human-verification challenge in the available cloud browser, including after one permitted reload. The affiliate dashboard and its account-generated URL were not observable.

Resolution recorded later on 2026-09-22:
- exact account-generated URL obtained: `https://seranking.com/?ga=5265149&source=link`;
- centralized product relationship enabled in commit `97a79eb25afa8681f1f79ec26e2881374cff9557`;
- affiliate-state QA updated in commit `d98e0d2d0222a16f72c38cac5eef73f29aea46fe`.

Official-rule result:
- SE Ranking requires use of the unique referral link available through the affiliate account; free accounts may participate; referral links may be placed on website/blog content; paid ads and other prohibited traffic methods remain disallowed under the current official program materials.


---

## Documentation reconciliation — 2026-09-23

- [x] Current checklist reconciled with later 2026-09-22 implementation commits.
- [x] Verified SE Ranking URL: `https://seranking.com/?ga=5265149&source=link`.
- [x] Installation commit: `97a79eb25afa8681f1f79ec26e2881374cff9557`.
- [x] Affiliate-state QA commit: `d98e0d2d0222a16f72c38cac5eef73f29aea46fe`.
- [x] Production review exposes the verified URL with disclosure, `sponsored nofollow noopener`, and `data-sv-affiliate="true"`.
- [x] Earlier UNKNOWN attempt retained only as superseded historical context.
