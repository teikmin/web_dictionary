---
slug: maximhq-bifrost-claude-skills-add-pricing-field
name: bifrost
tagline: Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive
  load balancer, cluster mode, guardrails, 1000+ models support & <100 µs
  overhead
categories:
  - dev-tools
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2025-03-19T07:21:26Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: maximhq/bifrost
  subpath: .claude/skills/add-pricing-field
  license: Apache-2.0
signals:
  stars: 8605
  last_commit: 2026-10-07T16:03:08Z
type: agent_skill
skill:
  skill_name: add-pricing-field
  description: Wire a new model-pricing field (a datasheet cost key like
    `cost_per_request`, `output_cost_per_video_per_second_720p`, etc.)
    end-to-end through Bifrost's pricing engine - Options struct, DB table +
    migration, datasheet sync upsert columns, cost calculation, custom pricing
    overrides, public API, OpenAPI docs, MDX docs, and the UI override form.
    Ends with a repo-wide probe to confirm nothing was missed. Invoked with
    /add-pricing-field <field_name> or /add-pricing-field (asks for the field).
  folder_path: .claude/skills/add-pricing-field
  extra_files: []
---

Wire a new model-pricing field (a datasheet cost key like `cost_per_request`, `output_cost_per_video_per_second_720p`, etc.) end-to-end through Bifrost's pricing engine - Options struct, DB table + migration, datasheet sync upsert columns, cost calculation, custom pricing overrides, public API, OpenAPI docs, MDX docs, and the UI override form. Ends with a repo-wide probe to confirm nothing was missed. Invoked with /add-pricing-field <field_name> or /add-pricing-field (asks for the field).
