---
slug: gastownhall-beads-claude-skills-beads-docs
name: beads
tagline: Beads - A memory upgrade for your coding agent
categories:
  - ai-frameworks
status: active
quality_percentile: 61
selection_reason: quality_percentile
first_seen: 2025-10-12T03:09:46Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: gastownhall/beads
  subpath: .claude/skills/beads-docs
  license: MIT
signals:
  stars: 27707
  last_commit: 2026-10-07T11:10:39Z
type: agent_skill
skill:
  skill_name: beads-docs
  description: Project conventions for writing, editing, restructuring, or
    reviewing the beads user documentation — the Mintlify site under docs/. Use
    this whenever you touch anything in docs/ (pages, concept docs, reference,
    integration guides, recovery runbooks, diagrams, docs.json navigation) or
    write/edit prose about beads, even when the request is just "fix the docs",
    "write a docs page", "the docs are wrong/confusing", "rename X across the
    docs", or an edit to a file under docs/. It defines the canonical concept
    model (bead → dependencies → ready work; formula → proto → molecule/wisp;
    gates; Dolt sync and federation), required terminology, the
    prose/emphasis/diagram conventions, the rule that generated docs are edited
    at their source, and the gates to run before docs work is done.
  folder_path: .claude/skills/beads-docs
  extra_files:
    - references/simplification.md
    - references/terminology.md
    - references/verification.md
---

Project conventions for writing, editing, restructuring, or reviewing the beads user documentation — the Mintlify site under docs/. Use this whenever you touch anything in docs/ (pages, concept docs, reference, integration guides, recovery runbooks, diagrams, docs.json navigation) or write/edit prose about beads, even when the request is just "fix the docs", "write a docs page", "the docs are wrong/confusing", "rename X across the docs", or an edit to a file under docs/. It defines the canonical concept model (bead → dependencies → ready work; formula → proto → molecule/wisp; gates; Dolt sync and federation), required terminology, the prose/emphasis/diagram conventions, the rule that generated docs are edited at their source, and the gates to run before docs work is done.
