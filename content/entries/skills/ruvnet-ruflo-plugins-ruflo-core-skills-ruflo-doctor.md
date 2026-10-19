---
slug: ruvnet-ruflo-plugins-ruflo-core-skills-ruflo-doctor
name: doctor
tagline: Run health checks on the Ruflo installation and fix common issues
summary: Run npx @claude-flow/cli@latest doctor --fix to diagnose and
  auto-repair common issues.
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
  subpath: plugins/ruflo-core/skills/ruflo-doctor
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
  path: plugins/ruflo-core/skills/ruflo-doctor/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:31:55.773Z
  truncated: false
type: agent_skill
skill:
  skill_name: doctor
  description: Run health checks on the Ruflo installation and fix common issues
  folder_path: plugins/ruflo-core/skills/ruflo-doctor
  extra_files: []
  pack_total_skills: 161
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Run `npx @claude-flow/cli@latest doctor --fix` to diagnose and auto-repair common issues.

Checks: Node.js 20+, npm 9+, git, config validity, daemon status, memory database, API keys, MCP servers, disk space, TypeScript.

Targeted fixes:
- Memory: `npx @claude-flow/cli@latest memory init --force`
- Daemon: `npx @claude-flow/cli@latest daemon start`
- Config: `npx @claude-flow/cli@latest config reset`
