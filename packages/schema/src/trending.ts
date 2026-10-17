import { z } from 'zod';
import { EntryTypeSchema } from './entry.js';

export const TrendingItemSchema = z.object({
  slug: z.string(),
  name: z.string(),
  type: EntryTypeSchema,
  categories: z.array(z.string()).default([]),
  stars: z.number().default(0),
  stars_delta_7d: z.number().default(0),
  stars_growth_pct: z.number().default(0),
  trending_score: z.number().default(0),
  rank_current: z.number().optional(),
  rank_delta: z.number().nullable().optional(),
  velocity_source: z.enum(['snapshot_delta', 'age_velocity']).default('snapshot_delta'),
  sparkline_4w: z.array(z.number()).default([]),
  tagline: z.string().default(''),
  repo: z.string(),
  is_pack_primary: z.boolean().optional(),
  pack_slug: z.string().optional(),
  created_at: z.string().optional(),
  pushed_at: z.string().optional(),
});
export type TrendingItem = z.infer<typeof TrendingItemSchema>;

export const TrendingSummarySchema = z.object({
  week: z.string(),
  generated_at: z.string(),
  total_new_tools: z.number().default(0),
  total_stars_gained: z.number().default(0),
  total_active_entries: z.number().default(0),
});
export type TrendingSummary = z.infer<typeof TrendingSummarySchema>;

export const TrendingReportSchema = z.object({
  week: z.string(),
  generated_at: z.string(),
  summary: TrendingSummarySchema,
  top25_overall: z.array(TrendingItemSchema).default([]),
  breakout_new: z.array(TrendingItemSchema).default([]),
  top10_mcp: z.array(TrendingItemSchema).default([]),
  top10_skills: z.array(TrendingItemSchema).default([]),
  top10_tools: z.array(TrendingItemSchema).default([]),
});
export type TrendingReport = z.infer<typeof TrendingReportSchema>;
