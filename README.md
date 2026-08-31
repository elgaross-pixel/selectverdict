# SelectVerdict

Independent software research, comparisons, and recommendations.

## Project

Web Asset #1 of the Athena Business site-production pipeline.

## Status

Production site foundation. Commercial research is intentionally empty until verified product records are ready.

## Architecture

Astro → GitHub → Cloudflare Pages

The project is static-first Astro. Shared page chrome and metadata live in `src/layouts` and `src/components`; global design tokens live in `src/styles/global.css`.

Routes include the home page, software index, trust/legal pages, and static content-driven templates for categories, reviews, comparisons, recommendations, and alternatives. Dynamic commercial routes are generated only for published content entries.

## Development

Requirements: Node.js 22.12 or newer.

```sh
npm install
npm run dev -- --background
```

Manage Astro's background server with `npm run astro -- dev status`, `npm run astro -- dev logs`, and `npm run astro -- dev stop`.

Build and validate:

```sh
npm run build
```

The build writes static files to `dist/`. The configured production origin is `https://selectverdict.com`, which is used for canonical URLs and sitemap generation.

## Content architecture

Product and comparison records use Astro content collections configured in `src/content.config.ts`:

- `src/data/products/` contains one JSON or YAML record per product.
- `src/data/comparisons/` contains one JSON or YAML record per comparison.
- Records default to `draft`; only `published` records generate public commercial routes.
- Published records must include sources and a verification date. Product claims explicitly distinguish `verified`, `editorial`, and `unverified` content.

See the README in each data directory for publication rules. Do not publish invented product facts or imply hands-on testing that did not occur.

## Deployment

The expected deployment chain is GitHub `main` → Astro build → Cloudflare Pages → `selectverdict.com`. This repository does not require a manual deploy, and generated `dist/` files are not committed.
