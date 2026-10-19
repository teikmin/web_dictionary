---
slug: ruvnet-ruflo-plugins-ruflo-iot-cognitum-skills-iot-witness-verify
name: iot-witness-verify
tagline: Verify witness chain integrity and detect provenance gaps
summary: Verify the witness chain integrity for a Cognitum Seed device.
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
  subpath: plugins/ruflo-iot-cognitum/skills/iot-witness-verify
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
  path: plugins/ruflo-iot-cognitum/skills/iot-witness-verify/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:31:55.776Z
  truncated: false
type: agent_skill
skill:
  skill_name: iot-witness-verify
  description: Verify witness chain integrity and detect provenance gaps
  folder_path: plugins/ruflo-iot-cognitum/skills/iot-witness-verify
  extra_files: []
  pack_total_skills: 161
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Verify the witness chain integrity for a Cognitum Seed device.

Steps:
1. `npx -y -p @claude-flow/plugin-iot-cognitum@1.0.0 cognitum-iot witness verify DEVICE_ID`
2. Check for epoch gaps and hash chain breaks
3. Report integrity score (0.0–1.0)
4. If gaps found, store for audit trail:
   `mcp__plugin_ruflo-core_ruflo__memory_store({ key: "iot-witness-gap-DEVICEID", value: "Gap from EPOCH to EPOCH", namespace: "iot-audit" })`
