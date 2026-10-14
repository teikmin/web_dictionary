---
slug: trailofbits-skills-plugins-building-secure-contracts-skills-audit-prep-assistant
name: audit-prep-assistant
tagline: Prepares codebases for security review using Trail of Bits' checklist.
  Helps set review goals, runs static analysis tools, increases test coverage,
  re
categories:
  - security
status: active
quality_percentile: 55
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: trailofbits/skills
  subpath: plugins/building-secure-contracts/skills/audit-prep-assistant
  official_vendor: false
  license: CC-BY-SA-4.0
signals:
  stars: 7507
  last_commit: 2026-10-13T15:45:03Z
type: agent_skill
skill:
  skill_name: audit-prep-assistant
  description: Prepares codebases for security review using Trail of Bits'
    checklist. Helps set review goals, runs static analysis tools, increases
    test coverage, removes dead code, ensures accessibility, and generates
    documentation (flowcharts, user stories, inline comments). Use when
    preparing your own codebase to be audited by someone else, getting a
    repository review-ready before an external security review, deciding what to
    fix before auditors start, or asking what assessors need from a project. For
    understanding unfamiliar code you are about to audit, use
    audit-context-building instead.
  folder_path: plugins/building-secure-contracts/skills/audit-prep-assistant
  extra_files:
    - agents/openai.yaml
    - assets/trail-of-bits-mark.svg
---

Prepares codebases for security review using Trail of Bits' checklist. Helps set review goals, runs static analysis tools, increases test coverage, removes dead code, ensures accessibility, and generates documentation (flowcharts, user stories, inline comments). Use when preparing your own codebase to be audited by someone else, getting a repository review-ready before an external security review, deciding what to fix before auditors start, or asking what assessors need from a project. For understanding unfamiliar code you are about to audit, use audit-context-building instead.
