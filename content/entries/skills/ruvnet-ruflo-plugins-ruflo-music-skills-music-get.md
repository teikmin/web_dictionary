---
slug: ruvnet-ruflo-plugins-ruflo-music-skills-music-get
name: music-get
tagline: Fetch metadata and audio_url for a single production by id
summary: You have a production id (from music-generate's result, music-list, or
  the music-productions memory cache) and need its latest metadata.
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
  subpath: plugins/ruflo-music/skills/music-get
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
  path: plugins/ruflo-music/skills/music-get/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:31:55.778Z
  truncated: false
type: agent_skill
skill:
  skill_name: music-get
  description: Fetch metadata and audio_url for a single production by id
  folder_path: plugins/ruflo-music/skills/music-get
  extra_files: []
  pack_total_skills: 161
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Music Get
Looks up one production's current state — useful to check whether a `separate_stems`/`extract_midi`/`master` call from earlier in the session actually finished.

## When to use

You have a production `id` (from `music-generate`'s result, `music-list`, or the `music-productions` memory cache) and need its latest metadata.

## Steps

1. Check the `music-productions` namespace cache first if you're only after fields that don't change (title, original prompt/lyrics, `audio_duration`) — no need to round-trip if you already have them.
2. For anything that *can* change (`has_stems`, `has_midi`, `has_mastered`, `lufs_before`/`lufs_after`), call the live tool:
   ```
   mcp__cogmusic__get_production({ id: "<production-id>" })
   ```
3. If the `id` doesn't exist or belongs to a different account, the call errors — don't guess at a substitute id; ask the user to confirm it or run `music-list` to find the right one.
