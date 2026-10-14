---
slug: bytebase-dbhub
name: dbhub
tagline: Token conscious database MCP server for Postgres, MySQL, SQL Server,
  Oracle, MariaDB, SQLite.
categories:
  - databases
status: active
quality_percentile: 73
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: bytebase/dbhub
  official_vendor: false
  license: MIT
signals:
  stars: 3639
  last_commit: 2026-10-13T15:23:25Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@bytebase/dbhub@latest"
  env_vars: []
  confidence: readme
---

Token conscious database MCP server for Postgres, MySQL, SQL Server, Oracle, MariaDB, SQLite.
