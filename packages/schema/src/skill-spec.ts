import { z } from 'zod';

export const SkillSpecSchema = z.object({
  skill_name: z.string(),
  description: z.string(),
  folder_path: z.string(),
  extra_files: z.array(z.string()).default([]),
});

export type SkillSpec = z.infer<typeof SkillSpecSchema>;
