---
slug: mcp-use-mcp-use-libraries-typescript-packages-server-examples-skills-over-mcp-skills-refunds
name: refunds
tagline: Check refund eligibility and use the refund-order tool safely
summary: Check refund eligibility and use the refund-order tool safely
categories:
  - dev-tools
status: active
quality_percentile: 95
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: mcp-use/mcp-use
  subpath: libraries/typescript/packages/server/examples/skills-over-mcp/skills/refunds
  official_vendor: false
  license: MIT
signals:
  stars: 10753
  last_commit: 2026-10-12T03:42:03Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mcp-use/mcp-use
  path: libraries/typescript/packages/server/examples/skills-over-mcp/skills/refunds/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:54:55.813Z
  truncated: false
type: agent_skill
skill:
  skill_name: refunds
  description: Check refund eligibility and use the refund-order tool safely
  folder_path: libraries/typescript/packages/server/examples/skills-over-mcp/skills/refunds
  extra_files:
    - references/policy.md
    - templates/confirmation.md
---

# Refund orders
Before refunding an order, read [the refund policy](https://github.com/mcp-use/mcp-use/blob/main/libraries/typescript/packages/server/examples/skills-over-mcp/skills/refunds/references/policy.md).
When an order is eligible, call `refund-order` with its order ID and use
[the confirmation template](https://github.com/mcp-use/mcp-use/blob/main/libraries/typescript/packages/server/examples/skills-over-mcp/skills/refunds/templates/confirmation.md) in the response.
