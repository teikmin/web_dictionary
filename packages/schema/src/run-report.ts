import { z } from 'zod';
import { EntryTypeSchema } from './entry.js';

export const CandidateRepoSchema = z.object({
  owner: z.string(),
  name: z.string(),
  fullName: z.string(), // "owner/name"
  description: z.string().nullable().optional(),
  stars: z.number(),
  forks: z.number(),
  watchers: z.number().default(0),
  archived: z.boolean(),
  fork: z.boolean(),
  isTemplate: z.boolean().default(false),
  createdAt: z.string(),
  pushedAt: z.string(),
  license: z.string().nullable().optional(),
  topics: z.array(z.string()).default([]),
  defaultBranch: z.string().default('main'),
});
export type CandidateRepo = z.infer<typeof CandidateRepoSchema>;

export const GateFailureReasonSchema = z.enum([
  'FAILED_G1_ARCHIVED',
  'FAILED_G2_FORK',
  'FAILED_G3_TEMPLATE_OR_MIRROR',
  'FAILED_G4_STARS_BELOW_THRESHOLD',
  'FAILED_G5_INACTIVE_180_DAYS',
  'FAILED_G6_TOO_NEW_30_DAYS',
  'FAILED_G7_NO_OSI_LICENSE',
  'FAILED_G8_DESCRIPTION_TOO_SHORT',
  'FAILED_G9_COURSE_OR_LIST_KEYWORD',
]);
export type GateFailureReason = z.infer<typeof GateFailureReasonSchema>;

export const Layer1EvaluationSchema = z.object({
  passed: z.boolean(),
  failureReasons: z.array(GateFailureReasonSchema),
});
export type Layer1Evaluation = z.infer<typeof Layer1EvaluationSchema>;

export const TypeEvidenceKindSchema = z.enum([
  'mcp_sdk_dependency',
  'mcp_server_manifest',
  'mcp_registry_listing',
  'skill_md_file',
  'plugin_manifest',
  'none',
]);
export type TypeEvidenceKind = z.infer<typeof TypeEvidenceKindSchema>;

export const Layer2EvaluationSchema = z.object({
  detectedType: EntryTypeSchema.nullable(),
  evidenceKind: TypeEvidenceKindSchema,
  details: z.string().optional(),
  subpaths: z.array(z.string()).default([]), // monorepo detected subpaths
});
export type Layer2Evaluation = z.infer<typeof Layer2EvaluationSchema>;

export const Layer3ScoreSchema = z.object({
  adoption: z.number().min(0).max(100),
  maintenance: z.number().min(0).max(100),
  trust: z.number().min(0).max(100),
  community: z.number().min(0).max(100),
  docs: z.number().min(0).max(100),
  compositeScore: z.number().min(0).max(100),
  percentileRank: z.number().min(0).max(100).default(0),
  antiFakeFlags: z.array(z.string()).default([]),
  antiFakeExcluded: z.boolean().default(false),
});
export type Layer3Score = z.infer<typeof Layer3ScoreSchema>;

export const CandidateDecisionSchema = z.object({
  repo: CandidateRepoSchema,
  layer1: Layer1EvaluationSchema,
  layer2: Layer2EvaluationSchema.optional(),
  layer3: Layer3ScoreSchema.optional(),
  selected: z.boolean(),
  selectionReason: z.string().optional(),
});
export type CandidateDecision = z.infer<typeof CandidateDecisionSchema>;

export const RunReportSummarySchema = z.object({
  runId: z.string(),
  startedAt: z.string(),
  completedAt: z.string(),
  totalDiscovered: z.number(),
  passedLayer1: z.number(),
  passedLayer2: z.number(),
  passedLayer3: z.number(),
  selectedTotal: z.number(),
  selectedMcp: z.number(),
  selectedSkills: z.number(),
});
export type RunReportSummary = z.infer<typeof RunReportSummarySchema>;
