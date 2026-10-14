---
slug: tw93-waza-plugins-waza-skills-health
name: health
tagline: Audits agent config, instruction drift, hooks or MCP, and AI
  maintainability. Use when Claude, Codex, or Pi setup looks wrong. Not for
  application bug
categories:
  - other
status: active
quality_percentile: 50
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: tw93/Waza
  subpath: plugins/waza/skills/health
  official_vendor: false
  license: MIT
signals:
  stars: 7286
  last_commit: 2026-10-12T08:47:41Z
type: agent_skill
skill:
  skill_name: health
  description: Audits agent config, instruction drift, hooks or MCP, and AI
    maintainability. Use when Claude, Codex, or Pi setup looks wrong. Not for
    application bugs or PR review.
  folder_path: plugins/waza/skills/health
  extra_files:
    - agents/inspector-context.md
    - agents/inspector-control.md
    - agents/inspector-maintainability.md
    - references/durable-context.md
    - references/long-running-agents.md
    - references/maintainability-findings.md
    - scripts/block-pipe-to-shell.py
    - scripts/check-agent-context.sh
    - scripts/check-doc-refs.sh
    - scripts/check-maintainability.sh
---

Audits agent config, instruction drift, hooks or MCP, and AI maintainability. Use when Claude, Codex, or Pi setup looks wrong. Not for application bugs or PR review.
