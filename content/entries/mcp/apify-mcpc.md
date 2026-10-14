---
slug: apify-mcpc
name: mcpc
tagline: "The most compatible MCP CLI client. Supports: tools, resources,
  prompts, completions, async tasks, skills, stdio and Streamable HTTP (MCP
  2026-07-28 a"
categories:
  - security
status: active
quality_percentile: 47
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: apify/mcpc
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1026
  last_commit: 2026-10-09T10:52:40Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@apify/mcpc"
  env_vars: []
  confidence: manifest
---

The most compatible MCP CLI client. Supports: tools, resources, prompts, completions, async tasks, skills, stdio and Streamable HTTP (MCP 2026-07-28 and 2025-11-25). Persistent sessions, OAuth 2.1 with DCR, CIMD, client credentials, and ID-JAG, OS keychain, --json for code mode, grep across servers, proxy for AI sandboxes, x402 & more.
