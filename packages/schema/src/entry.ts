import { z } from 'zod';
import { LaunchSpecSchema } from './launch-spec.js';
import { SkillSpecSchema } from './skill-spec.js';

export const EntryTypeSchema = z.enum(['mcp_server', 'agent_skill']);
export type EntryType = z.infer<typeof EntryTypeSchema>;

export const EntryStatusSchema = z.enum(['active', 'slowing', 'dormant', 'archived']);
export type EntryStatus = z.infer<typeof EntryStatusSchema>;

export const SourceMetadataSchema = z.object({
  kind: z.literal('github_repo').default('github_repo'),
  repo: z.string(), // "owner/repo"
  subpath: z.string().optional(), // monorepo subfolder
  homepage: z.string().url().optional(),
  package: z.string().optional(), // npm or PyPI package name
  official_vendor: z.boolean().default(false),
  license: z.string().optional(),
});
export type SourceMetadata = z.infer<typeof SourceMetadataSchema>;

export const LatestSignalsSchema = z.object({
  stars: z.number().default(0),
  last_commit: z.string().optional(), // ISO date string
  weekly_downloads: z.number().optional(),
  contributors: z.number().optional(),
});
export type LatestSignals = z.infer<typeof LatestSignalsSchema>;

export const BaseEntrySchema = z.object({
  slug: z.string(),
  type: EntryTypeSchema,
  name: z.string(),
  tagline: z.string().default(''),
  categories: z.array(z.string()).default([]),
  status: EntryStatusSchema.default('active'),
  quality_percentile: z.number().min(0).max(100).default(0),
  selection_reason: z.string().default('threshold'),
  first_seen: z.string(),
  last_updated: z.string(),
  source: SourceMetadataSchema,
  signals: LatestSignalsSchema,
});

export const McpEntrySchema = BaseEntrySchema.extend({
  type: z.literal('mcp_server'),
  launch: LaunchSpecSchema,
});
export type McpEntry = z.infer<typeof McpEntrySchema>;

export const SkillEntrySchema = BaseEntrySchema.extend({
  type: z.literal('agent_skill'),
  skill: SkillSpecSchema,
});
export type SkillEntry = z.infer<typeof SkillEntrySchema>;

export const EntrySchema = z.discriminatedUnion('type', [McpEntrySchema, SkillEntrySchema]);
export type Entry = z.infer<typeof EntrySchema>;
