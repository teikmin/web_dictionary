---
slug: trpc-group-trpc-agent-go-examples-evaluation-skill-skills-write-ok
name: write-ok
tagline: Write a deterministic OK file to out/ok.txt.
summary: Overview This skill writes the text "OK" to a stable output file so
  downstream steps can validate it.
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/evaluation/skill/skills/write-ok
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1870
  last_commit: 2026-10-19T07:09:58Z
  stars_delta_7d: 10
  stars_growth_pct: 0.5
  trending_score: 10.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: examples/evaluation/skill/skills/write-ok/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:53.714Z
  truncated: false
type: agent_skill
skill:
  skill_name: write-ok
  description: Write a deterministic OK file to out/ok.txt.
  folder_path: examples/evaluation/skill/skills/write-ok
  extra_files:
    - scripts/write_ok.sh
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

Overview
This skill writes the text "OK" to a stable output file so downstream steps can validate it.

Command
Run the script below from the skill root:

    bash scripts/write_ok.sh

Output Files
- out/ok.txt
