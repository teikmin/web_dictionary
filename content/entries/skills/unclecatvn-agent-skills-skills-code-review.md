---
slug: unclecatvn-agent-skills-skills-code-review
name: code-review
tagline: "Use when receiving code review feedback (especially if unclear or
  technically questionable), when completing tasks or major features requiring
  review "
categories:
  - dev-tools
status: active
quality_percentile: 32
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: unclecatvn/agent-skills
  subpath: skills/code-review
  official_vendor: false
  license: MIT
signals:
  stars: 145
  last_commit: 2026-09-24T09:06:23Z
type: agent_skill
skill:
  skill_name: code-review
  description: Use when receiving code review feedback (especially if unclear or
    technically questionable), when completing tasks or major features requiring
    review before proceeding, or before making any completion/success claims.
    Covers three practices - receiving feedback with technical rigor over
    performative agreement, requesting reviews via code-reviewer subagent, and
    verification gates requiring evidence before any status claims. Essential
    for subagent-driven development, pull requests, and preventing false
    completion claims.
  folder_path: skills/code-review
  extra_files:
    - references/code-review-reception.md
    - references/requesting-code-review.md
    - references/verification-before-completion.md
---

Use when receiving code review feedback (especially if unclear or technically questionable), when completing tasks or major features requiring review before proceeding, or before making any completion/success claims. Covers three practices - receiving feedback with technical rigor over performative agreement, requesting reviews via code-reviewer subagent, and verification gates requiring evidence before any status claims. Essential for subagent-driven development, pull requests, and preventing false completion claims.
