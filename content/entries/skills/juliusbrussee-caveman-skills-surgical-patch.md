---
slug: juliusbrussee-caveman-skills-surgical-patch
name: surgical-patch
tagline: Fix bugs and small behavior changes at the narrowest responsible layer.
  Use when regression proof, preserved surrounding behavior, and task-relevant t
summary: "- Trace symptom to responsible mechanism. - Change narrowest layer
  that owns incorrect behavior. - Preserve unrelated behavior and user changes.
  - Avoid cleanup, renaming, and abstraction outside fix. - Add only regre..."
categories:
  - agent-frameworks
tags:
  - anthropic
  - caveman
  - claude
  - claude-code
status: active
quality_percentile: 60
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: JuliusBrussee/caveman
  subpath: skills/surgical-patch
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 113528
  last_commit: 2026-10-18T07:42:47Z
  stars_delta_7d: 2123
  stars_growth_pct: 1.9
  trending_score: 2163.46
  velocity_source: snapshot_delta
  sparkline_4w:
    - 110366
    - 111405
    - 113528
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: JuliusBrussee/caveman
  path: skills/surgical-patch/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:36:36.824Z
  truncated: false
type: agent_skill
skill:
  skill_name: surgical-patch
  description: Fix bugs and small behavior changes at the narrowest responsible
    layer. Use when regression proof, preserved surrounding behavior, and
    task-relevant tests matter.
  folder_path: skills/surgical-patch
  extra_files:
    - agents/openai.yaml
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: juliusbrussee-caveman
---

# Surgical patch
Reproduce failure first when economical; otherwise capture strongest available evidence.

- Trace symptom to responsible mechanism.
- Change narrowest layer that owns incorrect behavior.
- Preserve unrelated behavior and user changes.
- Avoid cleanup, renaming, and abstraction outside fix.
- Add only regression proof relevant to task.

Run focused proof plus nearest affected gate. Stop when failure is fixed and regression proof passes.
