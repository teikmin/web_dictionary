---
slug: mvschwarz-openrig-packages-daemon-assets-plugins-openrig-core-skills-claude-compaction-restore
name: claude-compaction-restore
tagline: Use when a Claude Code session is about to compact, has just compacted,
  reached its context limit, resumed after /compact, or must rebuild its working
categories:
  - dev-tools
status: active
quality_percentile: 56
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: mvschwarz/openrig
  subpath: packages/daemon/assets/plugins/openrig-core/skills/claude-compaction-restore
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 7377
  last_commit: 2026-10-13T16:24:21Z
type: agent_skill
skill:
  skill_name: claude-compaction-restore
  description: Use when a Claude Code session is about to compact, has just
    compacted, reached its context limit, resumed after /compact, or must
    rebuild its working picture of a long-running seat from its own restore map,
    its JSONL transcript and the files it touched.
  folder_path: packages/daemon/assets/plugins/openrig-core/skills/claude-compaction-restore
  extra_files:
    - reference/SKILL-v1.md
    - scripts/precompact-hook.mjs
    - scripts/restore-from-jsonl.mjs
    - templates/compact-instruction.md
    - templates/post-compact-restore-instruction.md
---

Use when a Claude Code session is about to compact, has just compacted, reached its context limit, resumed after /compact, or must rebuild its working picture of a long-running seat from its own restore map, its JSONL transcript and the files it touched.
