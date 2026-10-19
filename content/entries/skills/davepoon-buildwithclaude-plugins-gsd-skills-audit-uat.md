---
slug: davepoon-buildwithclaude-plugins-gsd-skills-audit-uat
name: gsd:audit-uat
tagline: Cross-phase audit of all outstanding UAT and verification items
summary: Scan all phases for pending, skipped, blocked, and humanneeded UAT
  items. Cross-reference against codebase to detect stale documentation. Produce
  prioritized human test plan.
categories:
  - security-auth
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
  subpath: plugins/gsd/skills/audit-uat
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
  path: plugins/gsd/skills/audit-uat/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:26.905Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:audit-uat
  description: Cross-phase audit of all outstanding UAT and verification items
  folder_path: plugins/gsd/skills/audit-uat
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
Scan all phases for pending, skipped, blocked, and human_needed UAT items. Cross-reference against codebase to detect stale documentation. Produce prioritized human test plan.
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/audit-uat.md
</execution_context>

<context>
Core planning files are loaded in-workflow via CLI.

**Scope:**
Glob: .planning/phases/*/*-UAT.md
Glob: .planning/phases/*/*-VERIFICATION.md
</context>
