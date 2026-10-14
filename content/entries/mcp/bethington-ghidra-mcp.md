---
slug: bethington-ghidra-mcp
name: ghidra-mcp
tagline: "Ghidra MCP Server — 200+ MCP tools for AI-powered reverse engineering.
  GUI plugin + headless server, lazy tool loading, convention enforcement, batch
  "
categories:
  - browser-automation
status: active
quality_percentile: 66
selection_reason: quality_percentile
first_seen: 2025-08-30T06:40:03
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: bethington/ghidra-mcp
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5559
  last_commit: 2026-10-13T14:37:36Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - ghidra-mcp-bridge
  env_vars: []
  confidence: manifest
---

Ghidra MCP Server — 200+ MCP tools for AI-powered reverse engineering. GUI plugin + headless server, lazy tool loading, convention enforcement, batch operations, Ghidra Server integration, and Docker deployment.
