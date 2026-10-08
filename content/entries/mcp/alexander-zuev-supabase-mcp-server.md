---
slug: alexander-zuev-supabase-mcp-server
name: supabase-mcp-server
tagline: "Query MCP enables end-to-end management of Supabase via chat
  interface: read & write query executions, management API support, automatic
  migration ver"
categories:
  - databases
status: active
quality_percentile: 16
selection_reason: quality_percentile
first_seen: 2025-02-15T08:54:29Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: alexander-zuev/supabase-mcp-server
  license: Apache-2.0
signals:
  stars: 831
  last_commit: 2026-08-21T20:27:19Z
type: mcp_server
launch:
  transport: stdio
  command: docker
  args:
    - run
    - -i
    - --rm
    - ghcr.io/alexander-zuev/supabase-mcp-server
  env_vars: []
  confidence: manifest
---

Query MCP enables end-to-end management of Supabase via chat interface: read & write query executions, management API support, automatic migration versioning, access to logs and much more.
