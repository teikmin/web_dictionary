---
slug: ahujasid-mcp-for-blender
name: mcp-for-blender
tagline: Community plugin to control Blender 3D with any LLM of your choice. Not
  affiliated with the official Blender Foundation.
categories:
  - other
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2025-03-07T09:58:58Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: ahujasid/mcp-for-blender
  license: MIT
signals:
  stars: 30173
  last_commit: 2026-10-06T15:08:04Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - mcp-for-blender
  env_vars:
    - name: BLENDER_MCP_APPS
      required: true
      secret: true
    - name: BLENDER_MCP_OPENAI_FORMS
      required: true
      secret: true
  confidence: manifest
---

Community plugin to control Blender 3D with any LLM of your choice. Not affiliated with the official Blender Foundation.
