---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-wide-research
name: wide_research
tagline: Use when the user needs broad parallel research across many independent
  inputs with a shared output schema.
summary: Do not use this workflow for single-item tasks or when subtasks depend
  on each other.
categories:
  - cloud-infra
tags:
  - ai-agents
  - ai-prompts
  - anthropic
  - chatbot
status: active
quality_percentile: 85
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: asgeirtj/system_prompts_leaks
  subpath: Meta/muse-agent/skills/wide-research
  official_vendor: false
  license: CC0-1.0
signals:
  stars: 69880
  last_commit: 2026-10-16T08:29:42Z
  stars_delta_7d: 885
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 69880
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: asgeirtj/system_prompts_leaks
  path: Meta/muse-agent/skills/wide-research/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:37:14.496Z
  truncated: false
type: agent_skill
skill:
  skill_name: wide_research
  description: Use when the user needs broad parallel research across many
    independent inputs with a shared output schema.
  folder_path: Meta/muse-agent/skills/wide-research
  extra_files: []
  pack_total_skills: 205
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Wide Research
## Purpose
Coordinate one manager subagent that fans out the same research task across many independent inputs and returns a single normalized result set.

## When to Use
- The task can be split into many independent subtasks (for example, one company/person/topic per input).
- Each subtask should return the same structured fields.
- The user asks for "wide research", "parallel research", or high-volume lookup/screening.

Do not use this workflow for single-item tasks or when subtasks depend on each other.

## Tooling
Use exactly one manager subagent for the overall operation.

Manager input contract:
- `operation_brief`: one concise sentence.
- `inputs`: one independent item per element.
- `output_schema`: required fields and allowed types.
- `worker_prompt_template`: per-input instructions.
- `completion_format`: exact JSON object shape for the manager's final response.

Manager output contract:
- `total`
- `success_count`
- `failure_count`
- `results`
- `failures`
- `notes`

## Operating Rules
1. Deduplicate and normalize the input list before spawning the manager.
2. Keep the output schema minimal and explicit; avoid optional or free-form fields unless the user asked for them.
3. Use one manager coordinator for one user goal; do not fan out multiple sibling root-level subagents.
4. Instruct the manager to assign one worker per input and keep each worker scoped to its own item.
5. If completeness matters and some inputs fail, retry only the failed inputs, once, when feasible.
6. Reply to the user immediately that wide research has started; do not block on completion.
7. In the final user-facing output, always report coverage (`success_count/total`) and unresolved gaps.
