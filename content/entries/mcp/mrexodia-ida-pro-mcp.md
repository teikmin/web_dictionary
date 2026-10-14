---
slug: mrexodia-ida-pro-mcp
name: ida-pro-mcp
tagline: AI-powered reverse engineering assistant that bridges IDA Pro with
  language models through MCP.
categories:
  - other
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: mrexodia/ida-pro-mcp
  official_vendor: false
  license: MIT
signals:
  stars: 12770
  last_commit: 2026-09-26T15:42:10Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - ida-pro-mcp
  env_vars: []
  confidence: manifest
---

AI-powered reverse engineering assistant that bridges IDA Pro with language models through MCP.
