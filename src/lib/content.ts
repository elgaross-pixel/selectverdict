import { getCollection, type CollectionEntry } from 'astro:content';

export type Product = CollectionEntry<'products'>;

export async function getPublishedProducts(): Promise<Product[]> {
  const products = await getCollection('products', ({ data }) => data.status === 'published');
  return products.sort((a, b) => a.data.name.localeCompare(b.data.name));
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
