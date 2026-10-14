---
slug: cyb3rmx-qu1cksc0pe
name: Qu1cksc0pe
tagline: All-in-One malware analysis tool.
categories:
  - security
status: active
quality_percentile: 40
selection_reason: quality_percentile
first_seen: 2019-10-18T13:41:28
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: CYB3RMX/Qu1cksc0pe
  official_vendor: false
  license: GPL-3.0
signals:
  stars: 2071
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
      description: Environment variable for SC0PE_MCP_TRANSPORT
  confidence: readme
---

All-in-One malware analysis tool.
