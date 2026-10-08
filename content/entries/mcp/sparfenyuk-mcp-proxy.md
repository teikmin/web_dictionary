---
slug: sparfenyuk-mcp-proxy
name: mcp-proxy
tagline: A bridge between Streamable HTTP and stdio MCP transports
categories:
  - browser-automation
status: active
quality_percentile: 22
selection_reason: quality_percentile
first_seen: 2024-12-26T20:31:54Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: sparfenyuk/mcp-proxy
  license: MIT
signals:
  stars: 2773
  last_commit: 2026-07-20T21:05:47Z
type: mcp_server
launch:
  transport: stdio
  command: docker
  args:
    - run
    - -i
    - --rm
    - ghcr.io/sparfenyuk/mcp-proxy
  env_vars: []
  confidence: manifest
---

A bridge between Streamable HTTP and stdio MCP transports
