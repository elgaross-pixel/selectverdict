import { getCollection, type CollectionEntry } from 'astro:content';

export type Product = CollectionEntry<'products'>;
export type Review = CollectionEntry<'reviews'>;
export type Comparison = CollectionEntry<'comparisons'>;
export type AlternativeGuide = CollectionEntry<'alternatives'>;
export type Recommendation = CollectionEntry<'recommendations'>;

export async function getPublishedProducts(): Promise<Product[]> {
  const products = await getCollection('products', ({ data }) => data.status === 'published');
  return products.sort((a, b) => a.data.name.localeCompare(b.data.name));
}

function assertUniqueSlugs(entries: Product[], collection: string) {
  const seen = new Set<string>();
  for (const entry of entries) {
    if (seen.has(entry.data.slug)) throw new Error(`Duplicate published ${collection} slug: ${entry.data.slug}`);
    seen.add(entry.data.slug);
  }
}

function resolveProducts(slugs: string[], productsBySlug: Map<string, Product>, context: string): Product[] {
  const duplicates = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
  if (duplicates.length) throw new Error(`${context} contains duplicate product references: ${[...new Set(duplicates)].join(', ')}`);
  return slugs.map((slug) => {
    const product = productsBySlug.get(slug);
    if (!product) throw new Error(`${context} references missing or unpublished product: ${slug}`);
    return product;
  });
}

export async function getValidatedContent() {
  const [products, reviews, comparisons, alternatives, recommendations] = await Promise.all([
    getPublishedProducts(),
    getCollection('reviews', ({ data }) => data.status === 'published'),
    getCollection('comparisons', ({ data }) => data.status === 'published'),
    getCollection('alternatives', ({ data }) => data.status === 'published'),
    getCollection('recommendations', ({ data }) => data.status === 'published'),
  ]);
  assertUniqueSlugs(products, 'product');
  const productsBySlug = new Map(products.map((product) => [product.data.slug, product]));
  for (const product of products) {
    resolveProducts(product.data.alternatives, productsBySlug, `Product ${product.data.slug} alternatives`);
  }
  const validateEditorialSlugs = (entries: Array<Review | Comparison | AlternativeGuide | Recommendation>, name: string) => {
    const slugs = entries.map(({ data }) => data.slug);
    const duplicate = slugs.find((slug, index) => slugs.indexOf(slug) !== index);
    if (duplicate) throw new Error(`Duplicate published ${name} slug: ${duplicate}`);
  };
  validateEditorialSlugs(reviews, 'review');
  validateEditorialSlugs(comparisons, 'comparison');
  validateEditorialSlugs(alternatives, 'alternatives guide');
  validateEditorialSlugs(recommendations, 'recommendation');

  const resolvedReviews = reviews.map((review) => ({
    review,
    product: resolveProducts([review.data.product], productsBySlug, `Review ${review.data.slug}`)[0],
  })).map((resolved) => {
    if (resolved.review.data.slug !== resolved.product.data.slug) {
      throw new Error(`Review ${resolved.review.data.slug} must use its product slug ${resolved.product.data.slug}.`);
    }
    return resolved;
  });
  const resolvedComparisons = comparisons.map((comparison) => ({
    comparison,
    products: resolveProducts(comparison.data.products, productsBySlug, `Comparison ${comparison.data.slug}`),
  }));
  const resolvedAlternatives = alternatives.map((guide) => ({
    guide,
    product: resolveProducts([guide.data.product], productsBySlug, `Alternatives guide ${guide.data.slug}`)[0],
    alternatives: resolveProducts(guide.data.alternatives, productsBySlug, `Alternatives guide ${guide.data.slug}`),
  })).map((resolved) => {
    if (resolved.guide.data.slug !== resolved.product.data.slug) {
      throw new Error(`Alternatives guide ${resolved.guide.data.slug} must use its subject product slug ${resolved.product.data.slug}.`);
    }
    return resolved;
  });
  const resolvedRecommendations = recommendations.map((recommendation) => {
    const resolved = resolveProducts(recommendation.data.products, productsBySlug, `Recommendation ${recommendation.data.slug}`);
    if (recommendation.data.slug !== recommendation.data.category) {
      throw new Error(`Recommendation ${recommendation.data.slug} must use the same slug and category.`);
    }
    const outsideCategory = resolved.find((product) => !product.data.categories.includes(recommendation.data.category));
    if (outsideCategory) {
      throw new Error(`Recommendation ${recommendation.data.slug} references ${outsideCategory.data.slug}, which is not in category ${recommendation.data.category}.`);
    }
    return { recommendation, products: resolved };
  });

  return { products, productsBySlug, reviews: resolvedReviews, comparisons: resolvedComparisons, alternatives: resolvedAlternatives, recommendations: resolvedRecommendations };
}

export function categoryLabel(slug: string): string {
  return slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function getCategories(products: Product[]) {
  const slugs = [...new Set(products.flatMap(({ data }) => data.categories))].sort();
  return slugs.map((slug) => ({ slug, name: categoryLabel(slug) }));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en', { dateStyle: 'long', timeZone: 'UTC' }).format(date);
}
