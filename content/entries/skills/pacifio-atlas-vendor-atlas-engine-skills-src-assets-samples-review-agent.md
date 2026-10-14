---
slug: pacifio-atlas-vendor-atlas-engine-skills-src-assets-samples-review-agent
name: review-agent
tagline: Perform a read-only, defect-first review of a specified code change and
  return every actionable finding. Use when another agent delegates review of un
categories:
  - dev-tools
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: pacifio/atlas
  subpath: vendor/atlas-engine/skills/src/assets/samples/review-agent
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9593
  last_commit: 2026-10-13T16:16:11Z
type: agent_skill
skill:
  skill_name: review-agent
  description: Perform a read-only, defect-first review of a specified code change
    and return every actionable finding. Use when another agent delegates review
    of uncommitted changes, a base-branch diff, a commit, or custom review
    instructions.
  folder_path: vendor/atlas-engine/skills/src/assets/samples/review-agent
  extra_files:
    - agents/openai.yaml
---

Perform a read-only, defect-first review of a specified code change and return every actionable finding. Use when another agent delegates review of uncommitted changes, a base-branch diff, a commit, or custom review instructions.
