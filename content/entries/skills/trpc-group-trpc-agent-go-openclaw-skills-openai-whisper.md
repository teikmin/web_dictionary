---
slug: trpc-group-trpc-agent-go-openclaw-skills-openai-whisper
name: openai-whisper
tagline: Local speech-to-text with the Whisper CLI (no API key).
summary: "- whisper /path/audio.mp3 --model medium --outputformat txt
  --outputdir . - whisper /path/audio.m4a --task translate --outputformat srt"
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
  subpath: openclaw/skills/openai-whisper
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
  path: openclaw/skills/openai-whisper/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:53.717Z
  truncated: false
type: agent_skill
skill:
  skill_name: openai-whisper
  description: Local speech-to-text with the Whisper CLI (no API key).
  folder_path: openclaw/skills/openai-whisper
  extra_files: []
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# Whisper (CLI)
Use `whisper` to transcribe audio locally.

Quick start

- `whisper /path/audio.mp3 --model medium --output_format txt --output_dir .`
- `whisper /path/audio.m4a --task translate --output_format srt`

Notes

- Models download to `~/.cache/whisper` on first run.
- `--model` defaults to `turbo` on this install.
- Use smaller models for speed, larger for accuracy.
