---
slug: graphify-labs-graphify
name: graphify
tagline: "Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into
  a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex,
  "
categories:
  - databases
  - ai-frameworks
  - dev-tools
  - productivity
status: active
quality_percentile: 62
selection_reason: quality_percentile
first_seen: 2026-04-03T15:49:07Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: Graphify-Labs/graphify
  license: Apache-2.0
signals:
  stars: 124586
  last_commit: 2026-10-06T23:27:20Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@modelcontextprotocol/server-filesystem"
    - /tmp/workspace
  env_vars:
    - name: FILESYSTEM_ROOT
      required: true
      secret: true
  confidence: manifest
---

Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store.
