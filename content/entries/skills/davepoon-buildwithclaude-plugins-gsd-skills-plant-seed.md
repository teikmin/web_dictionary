---
slug: davepoon-buildwithclaude-plugins-gsd-skills-plant-seed
name: gsd:plant-seed
tagline: Capture a forward-looking idea with trigger conditions — surfaces
  automatically at the right milestone
summary: "Capture an idea that's too big for now but should surface
  automatically when the right milestone arrives. Seeds solve context rot:
  instead of a one-liner in Deferred that nobody reads, a seed preserves the
  full WHY, W..."
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/gsd/skills/plant-seed
  official_vendor: false
  license: MIT
signals:
  stars: 3650
  last_commit: 2026-10-18T23:51:10Z
  stars_delta_7d: 19
  stars_growth_pct: 0.5
  trending_score: 19.1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/gsd/skills/plant-seed/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:26.907Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:plant-seed
  description: Capture a forward-looking idea with trigger conditions — surfaces
    automatically at the right milestone
  folder_path: plugins/gsd/skills/plant-seed
  extra_files: []
  pack_total_skills: 400
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

<objective>
Capture an idea that's too big for now but should surface automatically when the right
milestone arrives. Seeds solve context rot: instead of a one-liner in Deferred that nobody
reads, a seed preserves the full WHY, WHEN to surface, and breadcrumbs to details.

Creates: .planning/seeds/SEED-NNN-slug.md
Consumed by: /gsd:new-milestone (scans seeds and presents matches)
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/plant-seed.md
</execution_context>

<process>
Execute the plant-seed workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/plant-seed.md end-to-end.
</process>
