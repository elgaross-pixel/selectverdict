# Product data

Add one JSON or YAML file per researched product. Entries default to `draft`; only `published` entries generate commercial routes. The schema in `src/content.config.ts` requires published entries to include a verification date and at least one source.

Every factual or evaluative statement uses a status:

- `verified`: supported by cited sources and checked on `lastVerified`
- `editorial`: SelectVerdict's clearly labeled analysis
- `unverified`: incomplete research; do not publish as fact

`_template.json` is explicitly unverified, stays in draft, and never generates a public product route. No commercial product entries are included yet because research has not been completed.
