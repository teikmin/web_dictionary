---
slug: mcp-brasil-mcp-brasil
name: mcp-brasil
tagline: MCP Server para 70 APIs públicas brasileiras
categories:
  - ai-frameworks
status: active
quality_percentile: 29
selection_reason: quality_percentile
first_seen: 2026-03-26T00:38:54Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: Mcp-Brasil/mcp-brasil
  license: MIT
signals:
  stars: 1806
  last_commit: 2026-09-19T22:50:58Z
type: mcp_server
launch:
  transport: stdio
  command: docker
  args:
    - run
    - -i
    - --rm
    - ghcr.io/mcp-brasil/mcp-brasil
  env_vars: []
  confidence: manifest
---

MCP Server para 70 APIs públicas brasileiras
