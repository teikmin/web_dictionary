import { getCollection, type CollectionEntry } from 'astro:content';

export type McpCollectionItem = CollectionEntry<'mcp'>;
export type SkillCollectionItem = CollectionEntry<'skills'>;
export type AnyCollectionItem = McpCollectionItem | SkillCollectionItem;

export async function getAllMcp(): Promise<McpCollectionItem[]> {
  const items = await getCollection('mcp');
  return items.sort((a, b) => (b.data.signals.stars || 0) - (a.data.signals.stars || 0));
}

export async function getAllSkills(): Promise<SkillCollectionItem[]> {
  const items = await getCollection('skills');
  return items.sort((a, b) => (b.data.signals.stars || 0) - (a.data.signals.stars || 0));
}

export async function getAllEntries(): Promise<AnyCollectionItem[]> {
  const [mcp, skills] = await Promise.all([getAllMcp(), getAllSkills()]);
  return [...mcp, ...skills].sort((a, b) => (b.data.signals.stars || 0) - (a.data.signals.stars || 0));
}

export async function getEntriesByCategory(categoryId: string): Promise<AnyCollectionItem[]> {
  const all = await getAllEntries();
  return all.filter((entry) => entry.data.categories.includes(categoryId));
}

export function formatStars(count?: number): string {
  if (!count) return '0';
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}m`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return count.toString();
}

export function formatTimeAgo(isoString?: string): string {
  if (!isoString) return 'recently';
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return 'today';
  if (diffDays === 1) return 'yesterday';
  if (diffDays < 30) return `${diffDays}d ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
  return `${Math.floor(diffDays / 365)}y ago`;
}
