---
slug: riponcm-projectmem
name: projectmem
tagline: Open-source coding agents memory. Records issues, attempts, fixes and
  decisions, then warns your agent before it repeats an approach that already
  fail
categories:
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 28
selection_reason: quality_percentile
first_seen: 2026-05-09T20:28:36Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: riponcm/projectmem
  license: MIT
signals:
  stars: 852
  last_commit: 2026-10-03T00:01:18Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - projectmem
  env_vars: []
  confidence: manifest
---

Open-source coding agents memory. Records issues, attempts, fixes and decisions, then warns your agent before it repeats an approach that already failed. Native MCP server for Claude Code, Cursor, Antigravity and Codex. 100% local, no cloud, no telemetry. MIT.
