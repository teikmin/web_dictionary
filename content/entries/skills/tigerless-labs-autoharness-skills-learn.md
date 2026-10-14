---
slug: tigerless-labs-autoharness-skills-learn
name: learn
tagline: Use when users /learn, save, remember, or distill lessons.
summary: "1. Identify class-level, reusable lessons: corrected approaches,
  non-trivial techniques, durable user preferences. Skip one-off narratives and
  environment-specific failures. 2. Compare first: read the injected skill i..."
categories:
  - ai-frameworks
status: active
quality_percentile: 56
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: tigerless-labs/autoharness
  subpath: skills/learn
  official_vendor: false
  license: MIT
signals:
  stars: 11051
  last_commit: 2026-10-13T09:27:08Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: tigerless-labs/autoharness
  path: skills/learn/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:15.774Z
  truncated: false
type: agent_skill
skill:
  skill_name: learn
  description: Use when users /learn, save, remember, or distill lessons.
  folder_path: skills/learn
  extra_files: []
---

# Learn: distill this session into the skill library
Review the conversation so far and distill what is worth keeping — through the
standard proposal chain, never by writing files.

1. Identify class-level, reusable lessons: corrected approaches, non-trivial
   techniques, durable user preferences. Skip one-off narratives and
   environment-specific failures.
2. Compare first: read the injected skill index; if an existing skill covers
   the topic, prefer a `patch`/`update` over creating a near-duplicate.
3. Reconcile old with new: when a lesson supersedes an earlier rule, search
   the managed skill trees for contradicting statements and stage updates so
   the new version wins everywhere.
4. Stage every change exclusively via the `stage_skill` tool, one intent per
   lesson, with `reason` and a verbatim `evidence` quote from this session.
   The deterministic promoter validates and lands; rejects are reported at
   the next session start.

If nothing meets the bar, say so and stage nothing.
