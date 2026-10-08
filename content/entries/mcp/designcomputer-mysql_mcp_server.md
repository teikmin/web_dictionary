---
slug: designcomputer-mysql_mcp_server
name: mysql_mcp_server
tagline: A Model Context Protocol (MCP) server that enables secure interaction
  with MySQL databases
categories:
  - databases
status: active
quality_percentile: 32
selection_reason: quality_percentile
first_seen: 2024-12-03T20:53:52Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: designcomputer/mysql_mcp_server
  license: MIT
signals:
  stars: 1398
  last_commit: 2026-08-02T13:36:20Z
type: mcp_server
launch:
  transport: stdio
  command: docker
  args:
    - run
    - -i
    - --rm
    - ghcr.io/designcomputer/mysql_mcp_server
  env_vars: []
  confidence: manifest
---

A Model Context Protocol (MCP) server that enables secure interaction with MySQL databases
