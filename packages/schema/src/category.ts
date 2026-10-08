import { z } from 'zod';

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  tagline: z.string().default(''),
  description: z.string().default(''),
  icon: z.string().optional(),
  keywords: z.array(z.string()).default([]),
});

export type Category = z.infer<typeof CategorySchema>;
