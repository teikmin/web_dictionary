---
slug: francyjglisboa-agent-skills-platform-references-examples-pr-blocker-summarizer
name: pr-blocker-summarizer
tagline: Summarizes open pull requests into a blockers-first standup digest.
  Activates when the user asks to summarize open PRs, find blocked pull
  requests, ge
categories:
  - dev-tools
status: active
quality_percentile: 31
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: FrancyJGLisboa/agent-skills-platform
  subpath: references/examples/pr-blocker-summarizer
  official_vendor: false
  license: MIT
signals:
  stars: 2403
  last_commit: 2026-09-15T17:31:46Z
type: agent_skill
skill:
  skill_name: pr-blocker-summarizer
  description: Summarizes open pull requests into a blockers-first standup digest.
    Activates when the user asks to summarize open PRs, find blocked pull
    requests, generate a PR standup, or triage review backlog from a PR export.
  folder_path: references/examples/pr-blocker-summarizer
  extra_files:
    - README.md
    - VERIFICATION.md
    - contracts/data_contract_pull_request_reviews/.contract_id
    - contracts/data_contract_pull_request_reviews/code/contract_health.py
    - discovery.json
    - evals/golden/case-1/expected.json
    - evals/golden/case-1/input.json
    - evals/golden/case-2/expected.json
    - evals/golden/case-2/input.json
    - evals/golden/case-3/expected.json
---

Summarizes open pull requests into a blockers-first standup digest. Activates when the user asks to summarize open PRs, find blocked pull requests, generate a PR standup, or triage review backlog from a PR export.
