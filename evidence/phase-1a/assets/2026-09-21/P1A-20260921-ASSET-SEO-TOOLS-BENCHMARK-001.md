# SelectVerdict SEO Tools Benchmark #1

**Evidence ID:** `P1A-20260921-ASSET-SEO-TOOLS-BENCHMARK-001`  
**Asset state:** SOURCE DRAFT / PUBLICATION IMPLEMENTED  
**Published URL:** https://selectverdict.com/guides/seo-tools-benchmark-1/  
**Benchmark date:** 2026-09-21  
**Products:** SE Ranking and Mangools  
**Environment:** Google / United States / Desktop; English where exposed

## Why this benchmark exists

SEO-tool comparisons often collapse different databases and proprietary scores into one winner. Benchmark #1 takes a narrower approach: freeze the inputs first, preserve missing data, and report what each product actually returned.

This first edition tests two products on 25 keywords, six SERP deep-dives, one tracked domain, and four domain/backlink targets. It is a reproducibility record, not a permanent league table.

## Frozen test design

### Keyword set

The 25-keyword set combines:

- ten control terms related to existing SelectVerdict funnel-software content;
- fifteen commercial SEO-tool terms.

Keywords stayed in their original order. Zero or missing output was kept rather than replaced.

### SERP sample

The six fixed queries were:

1. `systeme io review`
2. `systeme io pricing`
3. `clickfunnels alternatives`
4. `se ranking vs mangools`
5. `best affordable seo tools`
6. `best rank tracking tools`

### Domains

- tracked target: `selectverdict.com`
- reference domains: `semrush.com`, `ahrefs.com`, `moz.com`

## Coverage result

| Module | SE Ranking | Mangools |
|---|---|---|
| Keyword research | 25 submitted; 23 data + 2 explicit no-data | 25/25 imported and exported |
| SERP deep-dives | 6/6 with 10 rows | 1 full top-10, 2 partial, 3 unavailable/limit |
| Rank tracking | 25 configured; 24 rows returned | 25 configured; 0 ranks returned during poll window |
| Domain research | 4/4 | 4/4 SiteProfiler |
| Backlink research | 4/4 | 4/4 LinkMiner |
| Direct cost | $0 | $0 |

Coverage is not the same as accuracy. The benchmark has no independent ground-truth source for search volume, KD, traffic estimates, or backlink totals.

## What disagreed

### Search volume

Volume differed on most rows, sometimes materially. The benchmark preserves both values. It does not average them or select a preferred number.

### Difficulty and paid competition

The tools exposed different proprietary metrics and scales. Side-by-side display is useful for documenting product output, but the values are not declared equivalent.

### Backlinks

The clearest small-domain disagreement was `selectverdict.com`:

- SE Ranking: 0 backlinks, 0 referring domains.
- Mangools: 3 active backlinks, 3 referring domains.

This is recorded as database disagreement. It is not resolved inside the benchmark.

## What was absent or unavailable

- SE Ranking: two keyword-research no-data responses; one rank row not returned; main plan name unknown in captured evidence.
- Mangools: three SERP queries unavailable after the allowance was exhausted; two partial SERP exports; no rank values returned during the verification window; SERP language selector not exposed.
- Mangools captured domain overview did not expose fields directly comparable to SE Ranking's estimated organic keywords and traffic.
- End-to-end human labor was not reliably instrumented for either complete asset cycle.

Absence is never converted into zero unless the product itself returned a zero with a defined meaning.

## Workflow observations

SE Ranking's completed run used official APIs because the browser path hit human verification. It required throttling/retries after an HTTP 429 and one corrected implementation bug. The successful API runtime was 524.734 seconds and consumed an observed net 1020 API units.

Mangools ran through its authenticated UI. The 25-keyword import and CSV export were direct, but SERP result expansion consumed the daily allowance and rank results did not arrive during the polling window.

These are workflow observations, not objective usability scores.

## Benchmark interpretation

Benchmark #1 supports four conclusions:

1. The same keywords can produce materially different volume and backlink estimates.
2. Plan quotas and result timing can determine whether a nominally available feature yields usable evidence in one session.
3. Proprietary KD and authority metrics should remain under their original labels.
4. A useful comparison can report module-level tradeoffs without manufacturing a single winner.

## Known limitations

- One observation date.
- Live SERP runs were not simultaneous.
- SE Ranking used APIs; Mangools used the browser UI.
- Mangools was observed on Free+; SE Ranking's plan name was not captured.
- No independent truth set was used.
- No paid subscription was purchased.
- No affiliate metric influenced the technical comparison.

## Reproducibility record

The frozen protocol, product results, comparison, and raw exports are committed in:

- `PHASE-1A-TEST-PROTOCOL-v1.md`
- `evidence/phase-1a/seranking/2026-09-21/`
- `evidence/phase-1a/mangools/2026-09-21/`
- `evidence/phase-1a/comparison/2026-09-21/`

## Status

Benchmark #1 is an evidence-backed editorial draft. Publication, page integration, commercial links, metadata, and public QA remain outside this completed drafting gate.
