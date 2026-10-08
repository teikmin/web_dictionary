---
slug: bethington-ghidra-mcp
name: ghidra-mcp
tagline: "Ghidra MCP Server — 200+ MCP tools for AI-powered reverse engineering.
  GUI plugin + headless server, lazy tool loading, convention enforcement, batch
  "
categories:
  - dev-tools
status: active
quality_percentile: 53
selection_reason: quality_percentile
first_seen: 2025-08-30T06:40:03Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: bethington/ghidra-mcp
  license: Apache-2.0
signals:
  stars: 4702
  last_commit: 2026-10-07T11:20:51Z
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
