---
slug: korotovsky-slack-mcp-server
name: slack-mcp-server
tagline: The most powerful MCP Slack Server with no permission requirements,
  Apps support, GovSlack, DMs, Group DMs and smart history fetch logic.
categories:
  - productivity
status: active
quality_percentile: 29
selection_reason: quality_percentile
first_seen: 2025-04-12T11:31:34Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: korotovsky/slack-mcp-server
  license: MIT
signals:
  stars: 1860
  last_commit: 2026-07-16T17:14:22Z
type: mcp_server
launch:
  transport: stdio
  command: docker
  args:
    - run
    - -i
    - --rm
    - ghcr.io/korotovsky/slack-mcp-server
  env_vars: []
  confidence: manifest
---

The most powerful MCP Slack Server with no permission requirements, Apps support, GovSlack, DMs, Group DMs and smart history fetch logic.
