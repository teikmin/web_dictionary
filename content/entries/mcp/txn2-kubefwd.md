---
slug: txn2-kubefwd
name: kubefwd
tagline: Bulk port forwarding Kubernetes services for local development.
categories:
  - dev-tools
status: active
quality_percentile: 53
selection_reason: quality_percentile
first_seen: 2018-08-05T22:05:58Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: txn2/kubefwd
  license: Apache-2.0
signals:
  stars: 4173
  last_commit: 2026-10-06T22:36:34Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - io.github.txn2/kubefwd
  env_vars: []
  confidence: manifest
---

Bulk port forwarding Kubernetes services for local development.
