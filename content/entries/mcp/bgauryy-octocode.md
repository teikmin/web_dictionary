---
slug: bgauryy-octocode
name: octocode
tagline: Code research platform for AI agents; find, understand, and prove
  context across your code and all of GitHub, in a fraction of the tokens. One
  toolset
categories:
  - dev-tools
status: active
quality_percentile: 39
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: bgauryy/octocode
  official_vendor: false
  license: MIT
signals:
  stars: 950
  last_commit: 2026-10-09T07:07:41Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - octocode
  env_vars:
    - name: OCTOCODE_TOKEN
      required: true
      secret: true
      description: Required credentials for OCTOCODE_TOKEN
  confidence: readme
---

Code research platform for AI agents; find, understand, and prove context across your code and all of GitHub, in a fraction of the tokens. One toolset, MCP or CLI  
