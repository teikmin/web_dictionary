---
slug: trpc-group-trpc-agent-go-openclaw-skills-eightctl
name: eightctl
tagline: Control Eight Sleep pods (status, temperature, alarms, schedules).
summary: "- Config: /.config/eightctl/config.yaml - Env: EIGHTCTLEMAIL,
  EIGHTCTLPASSWORD"
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
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: openclaw/skills/eightctl
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
  path: openclaw/skills/eightctl/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:53.716Z
  truncated: false
type: agent_skill
skill:
  skill_name: eightctl
  description: Control Eight Sleep pods (status, temperature, alarms, schedules).
  folder_path: openclaw/skills/eightctl
  extra_files: []
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# eightctl
Use `eightctl` for Eight Sleep pod control. Requires auth.

Auth

- Config: `~/.config/eightctl/config.yaml`
- Env: `EIGHTCTL_EMAIL`, `EIGHTCTL_PASSWORD`

Quick start

- `eightctl status`
- `eightctl on|off`
- `eightctl temp 20`

Common tasks

- Alarms: `eightctl alarm list|create|dismiss`
- Schedules: `eightctl schedule list|create|update`
- Audio: `eightctl audio state|play|pause`
- Base: `eightctl base info|angle`

Notes

- API is unofficial and rate-limited; avoid repeated logins.
- Confirm before changing temperature or alarms.
