---
slug: joooook-12306-mcp
name: 12306-mcp
tagline: This is a 12306 ticket search server based on the Model Context Protocol (MCP).
categories:
  - other
status: active
quality_percentile: 30
selection_reason: quality_percentile
first_seen: 2025-04-14T14:31:32
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: Joooook/12306-mcp
  official_vendor: false
  license: MIT
signals:
  stars: 2372
  last_commit: 2026-07-31T06:22:59Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - 12306-mcp
  env_vars: []
  confidence: manifest
---

This is a 12306 ticket search server based on the Model Context Protocol (MCP).
