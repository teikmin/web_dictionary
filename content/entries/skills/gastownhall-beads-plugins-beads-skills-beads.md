---
slug: gastownhall-beads-plugins-beads-skills-beads
name: beads-beads
tagline: Dolt-powered issue tracker for multi-session work with dependencies and
  persistent memory across conversation compaction. Use when work spans sessions
categories:
  - dev-tools
status: active
quality_percentile: 45
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: gastownhall/beads
  subpath: plugins/beads/skills/beads
  official_vendor: false
  license: MIT
signals:
  stars: 27840
  last_commit: 2026-10-13T15:52:10Z
type: agent_skill
skill:
  skill_name: beads-beads
  description: >
    Dolt-powered issue tracker for multi-session work with dependencies and
    persistent memory across conversation compaction. Use when work spans
    sessions, has blockers, or needs context recovery after compaction. Trigger
    with "create task", "what's ready", "track this work", "resume after
    compaction". Make sure to use this skill whenever managing multi-session
    work, tracking dependencies, or recovering context.
  folder_path: plugins/beads/skills/beads
  extra_files:
    - CLAUDE.md
    - README.md
    - adr/0001-bd-prime-as-source-of-truth.md
    - agents/openai.yaml
    - commands/audit.md
    - commands/blocked.md
    - commands/close.md
    - commands/comments.md
    - commands/compact.md
    - commands/create.md
---

Dolt-powered issue tracker for multi-session work with dependencies and persistent memory across conversation compaction. Use when work spans sessions, has blockers, or needs context recovery after compaction. Trigger with "create task", "what's ready", "track this work", "resume after compaction". Make sure to use this skill whenever managing multi-session work, tracking dependencies, or recovering context.

