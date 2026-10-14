---
slug: agentdeskai-browser-tools-mcp
name: browser-tools-mcp
tagline: Monitor browser logs directly from Cursor and other MCP compatible IDEs.
categories:
  - browser-automation
status: active
quality_percentile: 38
selection_reason: quality_percentile
first_seen: 2025-02-10T09:20:38
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: AgentDeskAI/browser-tools-mcp
  official_vendor: false
  license: MIT
signals:
  stars: 7329
  last_commit: 2026-08-12T16:48:04Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@agentdeskai/browser-tools-mcp@latest"
  env_vars: []
  confidence: readme
---

Monitor browser logs directly from Cursor and other MCP compatible IDEs.
