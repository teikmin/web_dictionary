---
slug: mcpjungle-mcpjungle
name: MCPJungle
tagline: One place to manage & connect to all your MCP servers
categories:
  - ai-frameworks
status: active
quality_percentile: 24
selection_reason: quality_percentile
first_seen: 2025-05-15T12:31:06Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: mcpjungle/MCPJungle
  license: MPL-2.0
signals:
  stars: 1292
  last_commit: 2026-08-02T15:15:01Z
type: mcp_server
launch:
  transport: stdio
  command: docker
  args:
    - run
    - -i
    - --rm
    - ghcr.io/mcpjungle/mcpjungle
  env_vars: []
  confidence: manifest
---

One place to manage & connect to all your MCP servers
