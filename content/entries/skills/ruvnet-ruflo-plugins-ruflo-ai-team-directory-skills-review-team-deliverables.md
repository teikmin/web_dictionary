---
slug: ruvnet-ruflo-plugins-ruflo-ai-team-directory-skills-review-team-deliverables
name: review-team-deliverables
tagline: Checks an AI team run against its acceptance criteria using the
  evidence bundle. Use when the user asks whether the work is done or correct,
  or before
summary: Retrieve the evidence bundle and compare each acceptance criterion with
  a concrete task result or artifact reference. Separate verified facts, agent
  assertions, uncertainty, and missing work. Report the recorded budge...
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
  subpath: plugins/ruflo-ai-team/directory/skills/review-team-deliverables
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
  path: plugins/ruflo-ai-team/directory/skills/review-team-deliverables/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:31:55.772Z
  truncated: false
type: agent_skill
skill:
  skill_name: review-team-deliverables
  description: Checks an AI team run against its acceptance criteria using the
    evidence bundle. Use when the user asks whether the work is done or correct,
    or before completing a run. Separates verified evidence from agent claims.
  folder_path: plugins/ruflo-ai-team/directory/skills/review-team-deliverables
  extra_files: []
  pack_total_skills: 161
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Review Team Deliverables
Uses the RuFlo AI Team connector (server name ruflo-ai-team): the tools team_get, task_list, memory_search and evidence_export.

Retrieve the evidence bundle and compare each acceptance criterion with a concrete task result or artifact reference. Separate verified facts, agent assertions, uncertainty, and missing work. Report the recorded budget without presenting it as enforced or billed. Recommend completion only when every required criterion has evidence; the user decides whether to complete the run.
