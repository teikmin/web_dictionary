---
slug: ruvnet-ruflo-plugins-ruflo-docs-skills-doc-gen
name: doc-gen
tagline: Generate and maintain documentation with drift detection. Use when the
  user asks to write/update/refresh docs, detect doc drift against code, or
  sched
summary: 'Generate docs via MCP worker dispatch:
  mcppluginruflo-coreruflohooksworker-dispatch({ trigger: "document" })'
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 79
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-docs/skills/doc-gen
  official_vendor: false
  license: MIT
signals:
  stars: 76729
  last_commit: 2026-10-19T06:30:38Z
  stars_delta_7d: 2217
  stars_growth_pct: 3
  trending_score: 2282.96
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-docs/skills/doc-gen/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:31:55.775Z
  truncated: false
type: agent_skill
skill:
  skill_name: doc-gen
  description: Generate and maintain documentation with drift detection. Use when
    the user asks to write/update/refresh docs, detect doc drift against code,
    or schedule recurring documentation maintenance.
  folder_path: plugins/ruflo-docs/skills/doc-gen
  extra_files: []
  pack_total_skills: 161
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Generate docs via MCP worker dispatch:
`mcp__plugin_ruflo-core_ruflo__hooks_worker-dispatch({ trigger: "document" })`

For continuous doc maintenance via CronCreate:
`CronCreate({ schedule: "0 */2 * * *", prompt: "Run document worker" })`

Detect drift by comparing current code against existing docs and flagging inconsistencies.

Scoped generation:
- API docs: `npx @claude-flow/cli@latest hooks worker dispatch --trigger document --context api`
- Full project: `npx @claude-flow/cli@latest hooks worker dispatch --trigger document --context full`

Store the approach: `mcp__plugin_ruflo-core_ruflo__memory_store({ key: "doc-pattern", value: "APPROACH", namespace: "patterns" })`
