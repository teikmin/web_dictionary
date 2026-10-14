---
slug: amelnagdy-delegate-skills-skills-claude-delegate
name: claude-delegate
tagline: Delegate a coding task to a separate Claude Code CLI process or another
  Claude session as an implementer, then review its diff and land it yourself. U
categories:
  - productivity
status: active
quality_percentile: 34
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: amElnagdy/delegate-skills
  subpath: skills/claude-delegate
  official_vendor: false
  license: MIT
signals:
  stars: 2372
  last_commit: 2026-10-07T15:35:08Z
type: agent_skill
skill:
  skill_name: claude-delegate
  description: Delegate a coding task to a separate Claude Code CLI process or
    another Claude session as an implementer, then review its diff and land it
    yourself. Use only when the user explicitly asks to delegate implementation
    to Claude Code, another Claude session, or the `claude` CLI — for example,
    "have another Claude implement this", "delegate this to Claude Code", or
    "run this queue through a separate Claude session." Do not trigger merely
    because the current orchestrator is Claude, and do not use when the user
    asks the current Claude to implement directly without delegation.
  folder_path: skills/claude-delegate
  extra_files:
    - references/dispatch-and-poll.md
    - references/multi-task-queues.md
    - references/review-and-land.md
    - references/writing-the-brief.md
    - scripts/relay.mjs
---

Delegate a coding task to a separate Claude Code CLI process or another Claude session as an implementer, then review its diff and land it yourself. Use only when the user explicitly asks to delegate implementation to Claude Code, another Claude session, or the `claude` CLI — for example, "have another Claude implement this", "delegate this to Claude Code", or "run this queue through a separate Claude session." Do not trigger merely because the current orchestrator is Claude, and do not use when the user asks the current Claude to implement directly without delegation.
