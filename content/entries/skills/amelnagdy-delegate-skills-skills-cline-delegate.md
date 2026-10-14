---
slug: amelnagdy-delegate-skills-skills-cline-delegate
name: cline-delegate
tagline: Delegate a coding task to the Cline coding agent CLI (`cline`) as a
  background implementer, then review its diff and land it yourself. Use this
  whenev
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
  subpath: skills/cline-delegate
  official_vendor: false
  license: MIT
signals:
  stars: 2372
  last_commit: 2026-10-07T15:35:08Z
type: agent_skill
skill:
  skill_name: cline-delegate
  description: Delegate a coding task to the Cline coding agent CLI (`cline`) as a
    background implementer, then review its diff and land it yourself. Use this
    whenever the user wants to delegate implementation work to Cline - phrasings
    like "have Cline implement X", "delegate this to cline", "run it through
    Cline", or "use cline to implement/fix/refactor" - or wants to run a queue
    of coding tasks through Cline while staying the reviewer. DO NOT USE for
    tasks small enough to do inline, or when the user wants the code written
    directly without delegating.
  folder_path: skills/cline-delegate
  extra_files:
    - references/dispatch-and-poll.md
    - references/multi-task-queues.md
    - references/review-and-land.md
    - references/writing-the-brief.md
    - scripts/relay.mjs
---

Delegate a coding task to the Cline coding agent CLI (`cline`) as a background implementer, then review its diff and land it yourself. Use this whenever the user wants to delegate implementation work to Cline - phrasings like "have Cline implement X", "delegate this to cline", "run it through Cline", or "use cline to implement/fix/refactor" - or wants to run a queue of coding tasks through Cline while staying the reviewer. DO NOT USE for tasks small enough to do inline, or when the user wants the code written directly without delegating.
