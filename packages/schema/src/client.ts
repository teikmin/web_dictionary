import { z } from 'zod';

export const ClientSchema = z.object({
  id: z.string(),
  name: z.string(),
  tagline: z.string().default(''),
  description: z.string().default(''),
  website: z.string().url().optional(),
  configFormat: z.enum(['cli', 'json', 'toml']),
  configPath: z.string().optional(),
  supportsMcp: z.boolean().default(true),
  supportsSkills: z.boolean().default(true),
  icon: z.string().optional(),
});

export type Client = z.infer<typeof ClientSchema>;
