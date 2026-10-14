---
slug: sparfenyuk-mcp-proxy
name: mcp-proxy
tagline: A bridge between Streamable HTTP and stdio MCP transports
categories:
  - other
status: active
quality_percentile: 66
selection_reason: quality_percentile
first_seen: 2024-12-26T20:31:54
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: sparfenyuk/mcp-proxy
  official_vendor: false
  license: MIT
signals:
  stars: 2781
  last_commit: 2026-10-10T18:59:46Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - mcp-proxy
  env_vars: []
  confidence: manifest
---

A bridge between Streamable HTTP and stdio MCP transports
