import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sourceSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  publisher: z.string().optional(),
  accessedAt: z.coerce.date(),
  supports: z.string(),
});

const assessedText = z.object({
  text: z.string(),
  status: z.enum(['verified', 'editorial', 'unverified']),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.{json,yaml,yml}', base: './src/data/products' }),
  schema: z.object({
    name: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    status: z.enum(['draft', 'published']).default('draft'),
    officialWebsite: z.string().url().optional(),
    affiliateUrl: z.string().url().optional(),
    hasAffiliateRelationship: z.boolean().default(false),
    categories: z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)).min(1),
    summary: assessedText,
    pricingSummary: assessedText.optional(),
    keyFeatures: z.array(assessedText).default([]),
    pros: z.array(assessedText).default([]),
    cons: z.array(assessedText).default([]),
    bestFor: z.array(assessedText).default([]),
    notFor: z.array(assessedText).default([]),
    alternatives: z.array(z.string()).default([]),
    lastVerified: z.coerce.date().optional(),
    sources: z.array(sourceSchema).default([]),
    verdict: z.object({ summary: z.string(), basis: z.string() }).optional(),
  }).superRefine((product, context) => {
    if (product.status === 'published' && (!product.lastVerified || product.sources.length === 0)) {
      context.addIssue({ code: 'custom', message: 'Published products require a lastVerified date and at least one source.' });
    }
    if (product.hasAffiliateRelationship && !product.affiliateUrl) {
      context.addIssue({ code: 'custom', message: 'Affiliate relationships require an affiliateUrl.' });
    }
  }),
});

const comparisons = defineCollection({
  loader: glob({ pattern: '**/*.{json,yaml,yml}', base: './src/data/comparisons' }),
  schema: z.object({
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string(),
    description: z.string(),
    status: z.enum(['draft', 'published']).default('draft'),
    products: z.array(z.string()).min(2),
    lastVerified: z.coerce.date().optional(),
    sources: z.array(sourceSchema).default([]),
    conclusion: z.object({ summary: z.string(), basis: z.string() }).optional(),
  }).superRefine((comparison, context) => {
    if (comparison.status === 'published' && (!comparison.lastVerified || comparison.sources.length === 0 || !comparison.conclusion)) {
      context.addIssue({ code: 'custom', message: 'Published comparisons require verification, sources, and a conclusion.' });
    }
  }),
});

export const collections = { products, comparisons };
