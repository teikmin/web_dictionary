---
slug: agentdeskai-browser-tools-mcp
name: browser-tools-mcp
tagline: Monitor browser logs directly from Cursor and other MCP compatible IDEs.
categories:
  - browser-automation
  - dev-tools
status: active
quality_percentile: 36
selection_reason: quality_percentile
first_seen: 2025-02-10T09:20:38Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: AgentDeskAI/browser-tools-mcp
  license: MIT
signals:
  stars: 7327
  last_commit: 2026-08-12T16:48:04Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - io.github.AgentDeskAI/browser-tools-mcp
  env_vars: []
  confidence: manifest
---

Monitor browser logs directly from Cursor and other MCP compatible IDEs.
