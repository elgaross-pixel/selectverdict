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
    if (product.status === 'published' && product.summary.status === 'unverified') {
      context.addIssue({ code: 'custom', message: 'Published products cannot use an unverified public summary.' });
    }
    if (product.hasAffiliateRelationship && !product.affiliateUrl) {
      context.addIssue({ code: 'custom', message: 'Affiliate relationships require an affiliateUrl.' });
    }
    if (product.affiliateUrl && !product.hasAffiliateRelationship) {
      context.addIssue({ code: 'custom', message: 'An affiliateUrl requires an explicitly declared affiliate relationship.' });
    }
    if (product.affiliateUrl && product.officialWebsite === product.affiliateUrl) {
      context.addIssue({ code: 'custom', message: 'officialWebsite and affiliateUrl must remain distinct destinations.' });
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
    methodology: z.string().min(1).optional(),
    conclusion: z.object({ summary: z.string(), basis: z.string() }).optional(),
  }).superRefine((comparison, context) => {
    if (comparison.status === 'published' && (!comparison.lastVerified || comparison.sources.length === 0 || !comparison.methodology || !comparison.conclusion)) {
      context.addIssue({ code: 'custom', message: 'Published comparisons require verification, sources, methodology, and a conclusion.' });
    }
  }),
});

const editorialSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(1),
  description: z.string().min(1),
  status: z.enum(['draft', 'published']).default('draft'),
  lastVerified: z.coerce.date().optional(),
  sources: z.array(sourceSchema).default([]),
  methodology: z.string().min(1).optional(),
  conclusion: z.object({ summary: z.string().min(1), basis: z.string().min(1) }).optional(),
});

function requirePublishedEditorialFields(
  entry: z.infer<typeof editorialSchema>,
  context: z.RefinementCtx,
) {
  if (entry.status === 'published' &&
      (!entry.lastVerified || entry.sources.length === 0 || !entry.methodology || !entry.conclusion)) {
    context.addIssue({
      code: 'custom',
      message: 'Published editorial records require verification, sources, methodology, and a conclusion.',
    });
  }
}

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{json,yaml,yml}', base: './src/data/reviews' }),
  schema: editorialSchema.extend({
    product: z.string(),
    showProductAssessment: z.boolean().default(true),
    sections: z.array(z.object({
      heading: z.string().min(1),
      paragraphs: z.array(z.string().min(1)).min(1),
    })).default([]),
  }).superRefine((review, context) => {
    requirePublishedEditorialFields(review, context);
    if (review.status === 'published' && review.sections.length === 0) {
      context.addIssue({ code: 'custom', message: 'Published reviews require article sections.' });
    }
  }),
});

const alternatives = defineCollection({
  loader: glob({ pattern: '**/*.{json,yaml,yml}', base: './src/data/alternatives' }),
  schema: editorialSchema.extend({
    product: z.string(),
    alternatives: z.array(z.string()).min(1),
  }).superRefine(requirePublishedEditorialFields),
});

const recommendations = defineCollection({
  loader: glob({ pattern: '**/*.{json,yaml,yml}', base: './src/data/recommendations' }),
  schema: editorialSchema.extend({
    category: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    products: z.array(z.string()).min(1),
  }).superRefine(requirePublishedEditorialFields),
});

export const collections = { products, reviews, comparisons, alternatives, recommendations };
