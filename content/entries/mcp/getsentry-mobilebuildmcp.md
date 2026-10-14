---
slug: getsentry-mobilebuildmcp
name: MobileBuildMCP
tagline: A Model Context Protocol (MCP) server and CLI that provides tools for
  agent use when working on iOS and macOS projects.
categories:
  - dev-tools
status: active
quality_percentile: 66
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: getsentry/MobileBuildMCP
  official_vendor: false
  license: MIT
signals:
  stars: 6476
  last_commit: 2026-10-09T03:47:28Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - mobilebuildmcp
  env_vars: []
  confidence: manifest
---

A Model Context Protocol (MCP) server and CLI that provides tools for agent use when working on iOS and macOS projects.
