import { z } from 'zod';

export const SkillSpecSchema = z.object({
  skill_name: z.string(),
  description: z.string(),
  folder_path: z.string(),
  extra_files: z.array(z.string()).default([]),
  pack_slug: z.string().optional(),
  pack_total_skills: z.number().default(1),
  is_pack_primary: z.boolean().default(true),
  clients: z.array(z.string()).default([]),
});

export type SkillSpec = z.infer<typeof SkillSpecSchema>;
