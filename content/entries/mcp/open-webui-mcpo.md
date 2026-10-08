---
slug: open-webui-mcpo
name: mcpo
tagline: A simple, secure MCP-to-OpenAPI proxy server
categories:
  - browser-automation
status: active
quality_percentile: 3
selection_reason: quality_percentile
first_seen: 2025-03-30T10:03:03Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: open-webui/mcpo
  license: MIT
signals:
  stars: 4392
  last_commit: 2026-05-17T20:40:30Z
type: mcp_server
launch:
  transport: stdio
  command: docker
  args:
    - run
    - -i
    - --rm
    - ghcr.io/open-webui/mcpo
  env_vars: []
  confidence: manifest
---

A simple, secure MCP-to-OpenAPI proxy server
