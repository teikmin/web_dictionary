---
slug: the-open-agent-openagent-skills-camsnap
name: camsnap
tagline: Capture frames or clips from RTSP/ONVIF cameras.
summary: "- Config file: /.config/camsnap/config.yaml - Add camera: camsnap add
  --name kitchen --host 192.168.0.10 --user user --pass pass"
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agi
  - chatbot
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/camsnap
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5698
  last_commit: 2026-10-19T07:21:22Z
  stars_delta_7d: 10
  stars_growth_pct: 0.2
  trending_score: 10.02
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5688
    - 5698
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/camsnap/SKILL.md
  branch: master
  fetched_at: 2026-10-19T07:33:39.289Z
  truncated: false
type: agent_skill
skill:
  skill_name: camsnap
  description: Capture frames or clips from RTSP/ONVIF cameras.
  folder_path: skills/camsnap
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# camsnap
Use `camsnap` to grab snapshots, clips, or motion events from configured cameras.

Setup

- Config file: `~/.config/camsnap/config.yaml`
- Add camera: `camsnap add --name kitchen --host 192.168.0.10 --user user --pass pass`

Common commands

- Discover: `camsnap discover --info`
- Snapshot: `camsnap snap kitchen --out shot.jpg`
- Clip: `camsnap clip kitchen --dur 5s --out clip.mp4`
- Motion watch: `camsnap watch kitchen --threshold 0.2 --action '...'`
- Doctor: `camsnap doctor --probe`

Notes

- Requires `ffmpeg` on PATH.
- Prefer a short test capture before longer clips.
