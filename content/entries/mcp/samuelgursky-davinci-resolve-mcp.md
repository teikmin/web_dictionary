---
slug: samuelgursky-davinci-resolve-mcp
name: davinci-resolve-mcp
tagline: MCP server integration for DaVinci Resolve Studio
categories:
  - other
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: samuelgursky/davinci-resolve-mcp
  official_vendor: false
  license: MIT
signals:
  stars: 3520
  last_commit: 2026-10-12T13:08:51Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - davinci-resolve-mcp
  env_vars: []
  confidence: manifest
---

MCP server integration for DaVinci Resolve Studio
