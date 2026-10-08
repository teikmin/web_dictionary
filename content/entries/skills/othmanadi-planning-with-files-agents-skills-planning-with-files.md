---
slug: othmanadi-planning-with-files-agents-skills-planning-with-files
name: planning-with-files
tagline: "Persistent file-based planning for AI coding agents and long-running
  tasks. Crash-proof markdown plans, session recovery after /clear and
  compaction, "
categories:
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 84
selection_reason: quality_percentile
first_seen: 2026-01-03T07:37:28Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: OthmanAdi/planning-with-files
  subpath: .agents/skills/planning-with-files
  license: MIT
signals:
  stars: 27320
  last_commit: 2026-10-06T16:31:38Z
type: agent_skill
skill:
  skill_name: planning-with-files
  description: Persistent file-based planning for multi-step AI-agent work. Keeps
    task_plan.md, findings.md, and progress.md on disk; lifecycle hooks inject
    selected project planning context. Automatic recovery reads project planning
    files only. Explicit session-catchup.py --metadata reads same-project local
    agent session records and emits aggregate counts only; --replay may emit
    bounded nonce-framed excerpts. Optional gated mode can request continuation
    only when the host supports it and never runs commands declared in Markdown.
    The skill has no network upload path. Use for research or work needing 5+
    tool calls.
  folder_path: .agents/skills/planning-with-files
  extra_files:
    - examples.md
    - reference.md
    - scripts/attest-plan.ps1
    - scripts/attest-plan.sh
    - scripts/check-complete.ps1
    - scripts/check-complete.sh
    - scripts/gate-stop.sh
    - scripts/init-session.ps1
    - scripts/init-session.sh
    - scripts/inject-plan.py
---

Persistent file-based planning for multi-step AI-agent work. Keeps task_plan.md, findings.md, and progress.md on disk; lifecycle hooks inject selected project planning context. Automatic recovery reads project planning files only. Explicit session-catchup.py --metadata reads same-project local agent session records and emits aggregate counts only; --replay may emit bounded nonce-framed excerpts. Optional gated mode can request continuation only when the host supports it and never runs commands declared in Markdown. The skill has no network upload path. Use for research or work needing 5+ tool calls.
