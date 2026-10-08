---
slug: 0x4m4-hexstrike-ai
name: hexstrike-ai
tagline: HexStrike AI MCP Agents is an advanced MCP server that lets AI agents
  (Claude, GPT, Copilot, etc.) autonomously run 150+ cybersecurity tools for
  autom
categories:
  - security
  - ai-frameworks
  - dev-tools
  - productivity
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2025-07-10T17:53:18Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: 0x4m4/hexstrike-ai
  license: MIT
signals:
  stars: 12494
  last_commit: 2026-08-03T14:33:09Z
type: mcp_server
launch:
  transport: stdio
  command: python3
  args:
    - /path/hexstrike_mcp.py
    - --server
    - http://IPADDRESS:8888
  env_vars: []
  confidence: manifest
---

HexStrike AI MCP Agents is an advanced MCP server that lets AI agents (Claude, GPT, Copilot, etc.) autonomously run 150+ cybersecurity tools for automated pentesting, vulnerability discovery, bug bounty automation, and security research. Seamlessly bridge LLMs with real-world offensive security capabilities.
