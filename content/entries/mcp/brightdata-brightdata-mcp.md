---
slug: brightdata-brightdata-mcp
name: brightdata-mcp
tagline: A powerful Model Context Protocol (MCP) server that provides an
  all-in-one solution for public web access.
categories:
  - browser-automation
status: active
quality_percentile: 78
selection_reason: quality_percentile
first_seen: 2025-04-15T10:55:56
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: brightdata/brightdata-mcp
  official_vendor: false
  license: MIT
signals:
  stars: 2673
  last_commit: 2026-10-11T11:29:31Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@brightdata/mcp"
  env_vars: []
  confidence: manifest
---

A powerful Model Context Protocol (MCP) server that provides an all-in-one solution for public web access.
