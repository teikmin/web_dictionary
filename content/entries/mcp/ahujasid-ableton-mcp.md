---
slug: ahujasid-ableton-mcp
name: ableton-mcp
tagline: "Control Ableton Live with any LLM: create tracks, arrange clips &
  compose music via MCP"
categories:
  - dev-tools
status: active
quality_percentile: 62
selection_reason: quality_percentile
first_seen: 2025-03-19T17:00:09Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: ahujasid/ableton-mcp
  license: MIT
signals:
  stars: 3148
  last_commit: 2026-09-22T10:37:13Z
type: mcp_server
launch:
  transport: stdio
  command: docker
  args:
    - run
    - -i
    - --rm
    - ghcr.io/ahujasid/ableton-mcp
  env_vars: []
  confidence: manifest
---

Control Ableton Live with any LLM: create tracks, arrange clips & compose music via MCP
