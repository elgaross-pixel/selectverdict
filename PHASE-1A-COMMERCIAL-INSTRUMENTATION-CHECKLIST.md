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
- [x] SE Ranking exact affiliate URL recorded as **UNKNOWN**.
- [x] SE Ranking relationship retained as `false`.
- [x] No affiliate URL was inferred or invented.
- [x] Official affiliate-program rules checked for both merchants.
- [x] No paid action performed.

## Disclosure and links

- [x] Visible affiliate disclosure active on `/reviews/mangools/`.
- [x] Visible affiliate disclosure active on `/compare/se-ranking-vs-mangools/`.
- [x] Visible affiliate disclosure active on `/guides/seo-tools-benchmark-1/`.
- [x] SE Ranking review remains explicitly non-affiliate.
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

- [ ] SE Ranking exact account-generated affiliate URL — **UNKNOWN / human-verification blocker**.
- [ ] Durable merchant-click counts — **UNKNOWN / NOT COLLECTED** by design.

## Completion gate

- [x] Confirmed affiliate links installed where possible.
- [x] Disclosure correct.
- [x] Merchant-click tracking operational.
- [x] Repository and production QA passed.
- [x] Journal and checkpoint updated.
- [x] Commercial Instrumentation Step closed.
