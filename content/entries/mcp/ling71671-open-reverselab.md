---
slug: ling71671-open-reverselab
name: open-reverselab
tagline: Open-source AI reverse-engineering agent platform and MCP server for
  Ghidra, Frida, x64dbg and Rizin — automated PE/APK/binary analysis, CTF and
  malwa
categories:
  - ai-frameworks
  - dev-tools
  - productivity
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-06-17T14:31:38Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: LING71671/open-reverselab
  license: GPL-3.0
signals:
  stars: 1228
  last_commit: 2026-09-29T15:34:53Z
type: mcp_server
launch:
  transport: stdio
  command: uv
  args:
    - run
    - --project
    - tools/skills/mcp/ReverseLabToolsMCP
    - python
    - tools/skills/mcp/ReverseLabToolsMCP/reverse_lab_tools_mcp.py
  env_vars: []
  confidence: manifest
---

Open-source AI reverse-engineering agent platform and MCP server for Ghidra, Frida, x64dbg and Rizin — automated PE/APK/binary analysis, CTF and malware research, with 100+ MCP tools and a 194-article runnable knowledge base.
