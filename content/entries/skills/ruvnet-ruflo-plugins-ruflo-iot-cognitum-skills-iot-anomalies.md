---
slug: ruvnet-ruflo-plugins-ruflo-iot-cognitum-skills-iot-anomalies
name: iot-anomalies
tagline: Detect and classify telemetry anomalies on Cognitum Seed devices. Use
  when investigating a device that's reporting odd metrics, before approving a
  fir
summary: Run Z-score anomaly detection on a device's recent telemetry.
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
  subpath: plugins/ruflo-iot-cognitum/skills/iot-anomalies
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
  path: plugins/ruflo-iot-cognitum/skills/iot-anomalies/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:31:55.776Z
  truncated: false
type: agent_skill
skill:
  skill_name: iot-anomalies
  description: Detect and classify telemetry anomalies on Cognitum Seed devices.
    Use when investigating a device that's reporting odd metrics, before
    approving a firmware canary advancement, or when triaging fleet-wide health
    alerts.
  folder_path: plugins/ruflo-iot-cognitum/skills/iot-anomalies
  extra_files: []
  pack_total_skills: 161
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Run Z-score anomaly detection on a device's recent telemetry.

Steps:
1. `npx -y -p @claude-flow/plugin-iot-cognitum@1.0.0 cognitum-iot anomalies DEVICE_ID`
2. Review detected anomaly types (spike, flatline, drift, oscillation, pattern-break, cluster-outlier)
3. If score > 0.9, recommend quarantine
4. Store anomaly pattern for learning:
   `mcp__plugin_ruflo-core_ruflo__memory_store({ key: "iot-anomaly-DEVICEID", value: "TYPE at SCORE", namespace: "iot-anomalies" })`
