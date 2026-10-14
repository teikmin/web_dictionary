---
slug: sandbaseai-sandbase-harness
name: sandbase-harness
tagline: Local-first, self-hosted AI agent runtime and MCP bridge with sandboxed
  sessions, memory, credentials, audit/replay, and a local Console.
categories:
  - security
status: active
quality_percentile: 32
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: sandbaseai/sandbase-harness
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 682
  last_commit: 2026-10-12T04:02:31Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - managed-agents
  env_vars: []
  confidence: manifest
---

Local-first, self-hosted AI agent runtime and MCP bridge with sandboxed sessions, memory, credentials, audit/replay, and a local Console.
