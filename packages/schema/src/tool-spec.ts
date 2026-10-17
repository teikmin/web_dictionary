import { z } from 'zod';
import { LaunchSpecSchema } from './launch-spec.js';

export const ToolSubcategorySchema = z.enum([
  'coding_agent',
  'agent_framework',
  'browser_agent',
  'memory_rag',
  'eval_observability',
  'sdk_harness',
  'desktop_ui',
  'other',
]);
export type ToolSubcategory = z.infer<typeof ToolSubcategorySchema>;

export const ToolRuntimeSchema = z.enum([
  'node',
  'python',
  'rust',
  'go',
  'docker',
  'multi',
  'unknown',
]);
export type ToolRuntime = z.infer<typeof ToolRuntimeSchema>;

export const ToolExecutionModeSchema = z.enum(['local', 'cloud', 'hybrid']);
export type ToolExecutionMode = z.infer<typeof ToolExecutionModeSchema>;

export const ToolSpecSchema = z.object({
  subcategory: ToolSubcategorySchema.default('other'),
  install_command: z.string().optional(),
  runtime: ToolRuntimeSchema.default('unknown'),
  execution_mode: ToolExecutionModeSchema.default('local'),
  has_mcp_support: z.boolean().default(false),
  mcp_launch: LaunchSpecSchema.optional(),
});

export type ToolSpec = z.infer<typeof ToolSpecSchema>;
