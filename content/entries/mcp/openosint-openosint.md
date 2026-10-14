---
slug: openosint-openosint
name: OpenOSINT
tagline: AI-powered OSINT agent with interactive REPL, MCP server, and CLI. 20
  tools. Works with Claude, GPT-4, or local models. For authorized security
  resear
categories:
  - security
status: active
quality_percentile: 77
selection_reason: quality_percentile
first_seen: 2026-05-06T11:12:42
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: OpenOSINT/OpenOSINT
  official_vendor: false
  license: MIT
signals:
  stars: 1749
  last_commit: 2026-10-13T06:28:51Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - openosint
  env_vars: []
  confidence: manifest
---

AI-powered OSINT agent with interactive REPL, MCP server, and CLI. 20 tools. Works with Claude, GPT-4, or local models. For authorized security research only.
