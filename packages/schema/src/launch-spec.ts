import { z } from 'zod';

export const EnvVarSchema = z.object({
  name: z.string(),
  required: z.boolean().default(false),
  secret: z.boolean().default(false),
  description: z.string().optional(),
});

export type EnvVar = z.infer<typeof EnvVarSchema>;

export const LaunchConfidenceSchema = z.enum(['registry', 'manifest', 'readme', 'none']);
export type LaunchConfidence = z.infer<typeof LaunchConfidenceSchema>;

export const LaunchSpecSchema = z.object({
  transport: z.enum(['stdio', 'http']).default('stdio'),
  command: z.string().optional(),
  args: z.array(z.string()).default([]),
  env_vars: z.array(EnvVarSchema).default([]),
  remote_url: z.string().url().optional(),
  confidence: LaunchConfidenceSchema.default('none'),
});

export type LaunchSpec = z.infer<typeof LaunchSpecSchema>;
