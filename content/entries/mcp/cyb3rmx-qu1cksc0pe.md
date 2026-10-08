---
slug: cyb3rmx-qu1cksc0pe
name: Qu1cksc0pe
tagline: All-in-One malware analysis tool.
categories:
  - security
  - dev-tools
status: active
quality_percentile: 38
selection_reason: quality_percentile
first_seen: 2019-10-18T13:41:28Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: CYB3RMX/Qu1cksc0pe
  license: GPL-3.0
signals:
  stars: 2065
  last_commit: 2026-09-18T12:45:23Z
type: mcp_server
launch:
  transport: stdio
  command: python3
  args:
    - qu1cksc0pe.py
    - --mcp
  env_vars:
    - name: SC0PE_MCP_TRANSPORT
      required: true
      secret: true
  confidence: manifest
---

All-in-One malware analysis tool.
