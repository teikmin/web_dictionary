---
slug: designcomputer-mysql_mcp_server
name: mysql_mcp_server
tagline: A Model Context Protocol (MCP) server that enables secure interaction
  with MySQL databases
categories:
  - databases
status: active
quality_percentile: 33
selection_reason: quality_percentile
first_seen: 2024-12-03T20:53:52
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: designcomputer/mysql_mcp_server
  official_vendor: false
  license: MIT
signals:
  stars: 1397
  last_commit: 2026-08-02T13:36:20Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - mysql_mcp_server
  env_vars: []
  confidence: manifest
---

A Model Context Protocol (MCP) server that enables secure interaction with MySQL databases
