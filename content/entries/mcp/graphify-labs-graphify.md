---
slug: graphify-labs-graphify
name: graphify
tagline: "Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into
  a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex,
  "
categories:
  - databases
status: active
quality_percentile: 89
selection_reason: quality_percentile
first_seen: 2026-04-03T15:49:07
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: Graphify-Labs/graphify
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 126101
  last_commit: 2026-10-13T10:43:52Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - graphifyy
  env_vars: []
  confidence: manifest
---

Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store.
