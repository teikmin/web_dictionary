---
slug: getagentseal-codeburn
name: codeburn
tagline: "Free, local tool to track AI coding token usage and cost across 37
  tools and agents (Claude Code, Cursor, Codex, Gemini and more), by model,
  project, "
categories:
  - security
status: active
quality_percentile: 61
selection_reason: quality_percentile
first_seen: 2026-04-13T22:11:53
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: getagentseal/codeburn
  official_vendor: false
  license: MIT
signals:
  stars: 11426
  last_commit: 2026-10-13T08:10:41Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - codeburn
  env_vars: []
  confidence: manifest
---

Free, local tool to track AI coding token usage and cost across 37 tools and agents (Claude Code, Cursor, Codex, Gemini and more), by model, project, and task. npx codeburn
