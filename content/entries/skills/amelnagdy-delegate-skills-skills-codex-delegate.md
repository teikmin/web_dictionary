---
slug: amelnagdy-delegate-skills-skills-codex-delegate
name: codex-delegate
tagline: Delegate a coding task to the OpenAI Codex CLI as a background
  implementer, then review its diff and land it yourself. Use this whenever the
  user want
categories:
  - productivity
status: active
quality_percentile: 34
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: amElnagdy/delegate-skills
  subpath: skills/codex-delegate
  official_vendor: false
  license: MIT
signals:
  stars: 2372
  last_commit: 2026-10-07T15:35:08Z
type: agent_skill
skill:
  skill_name: codex-delegate
  description: Delegate a coding task to the OpenAI Codex CLI as a background
    implementer, then review its diff and land it yourself. Use this whenever
    the user wants to hand implementation work to Codex — phrasings like "have
    Codex do X", "delegate this to Codex", "run it through Codex", or "use Codex
    to implement/fix/refactor" — or to run a queue of coding tasks through Codex
    while staying the reviewer. Prefer it over a one-shot Codex forwarder (such
    as the codex-rescue agent) when the user will review the diff and commit it
    themselves. DO NOT USE for tasks small enough to do inline, or when the user
    wants the code written directly without delegating.
  folder_path: skills/codex-delegate
  extra_files:
    - references/dispatch-and-poll.md
    - references/multi-task-queues.md
    - references/review-and-land.md
    - references/writing-the-brief.md
    - scripts/relay.mjs
---

Delegate a coding task to the OpenAI Codex CLI as a background implementer, then review its diff and land it yourself. Use this whenever the user wants to hand implementation work to Codex — phrasings like "have Codex do X", "delegate this to Codex", "run it through Codex", or "use Codex to implement/fix/refactor" — or to run a queue of coding tasks through Codex while staying the reviewer. Prefer it over a one-shot Codex forwarder (such as the codex-rescue agent) when the user will review the diff and commit it themselves. DO NOT USE for tasks small enough to do inline, or when the user wants the code written directly without delegating.
