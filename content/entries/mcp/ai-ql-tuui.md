---
slug: ai-ql-tuui
name: tuui
tagline: A desktop MCP client designed as a tool unitary utility integration,
  accelerating AI adoption through the Model Context Protocol (MCP) and enabling
  cr
categories:
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 2
selection_reason: quality_percentile
first_seen: 2025-04-01T15:09:38Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: AI-QL/tuui
  license: Apache-2.0
signals:
  stars: 1155
  last_commit: 2026-05-14T09:02:28Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@modelcontextprotocol/server-everything"
  env_vars: []
  confidence: manifest
---

A desktop MCP client designed as a tool unitary utility integration, accelerating AI adoption through the Model Context Protocol (MCP) and enabling cross-vendor LLM API orchestration.
