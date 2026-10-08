---
slug: openstatushq-openstatus-apps-web-public-well-known-agent-skills-openstatus-api
name: openstatus
tagline: Open-source status page, incident response and uptime monitoring
categories:
  - dev-tools
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2023-06-19T15:32:41Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: openstatusHQ/openstatus
  subpath: apps/web/public/.well-known/agent-skills/openstatus-api
  license: AGPL-3.0
signals:
  stars: 9175
  last_commit: 2026-10-07T14:59:31Z
type: agent_skill
skill:
  skill_name: openstatus-api
  description: Call the openstatus public API (ConnectRPC, JSON over HTTP) to
    manage monitors, status pages, status reports, and maintenance windows. Use
    when building integrations, automating monitoring as code, or driving
    openstatus from a script outside an MCP client.
  folder_path: apps/web/public/.well-known/agent-skills/openstatus-api
  extra_files: []
---

Call the openstatus public API (ConnectRPC, JSON over HTTP) to manage monitors, status pages, status reports, and maintenance windows. Use when building integrations, automating monitoring as code, or driving openstatus from a script outside an MCP client.
