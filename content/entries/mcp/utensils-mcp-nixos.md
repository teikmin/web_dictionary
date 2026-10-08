---
slug: utensils-mcp-nixos
name: mcp-nixos
tagline: MCP-NixOS - Model Context Protocol Server for NixOS resources
categories:
  - dev-tools
  - productivity
status: active
quality_percentile: 19
selection_reason: quality_percentile
first_seen: 2025-03-20T05:05:00Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: utensils/mcp-nixos
  license: MIT
signals:
  stars: 851
  last_commit: 2026-09-05T02:31:09Z
type: mcp_server
launch:
  transport: stdio
  command: nix
  args:
    - run
    - .#mcp-nixos
  env_vars: []
  confidence: manifest
---

MCP-NixOS - Model Context Protocol Server for NixOS resources
