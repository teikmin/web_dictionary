---
slug: amelnagdy-delegate-skills-skills-aider-delegate
name: aider-delegate
tagline: "Delegate a coding task to Aider (`aider`) as a background implementer,
  then review its diff and land it yourself. Use this whenever the user wants to
  "
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
  subpath: skills/aider-delegate
  official_vendor: false
  license: MIT
signals:
  stars: 2372
  last_commit: 2026-10-07T15:35:08Z
type: agent_skill
skill:
  skill_name: aider-delegate
  description: Delegate a coding task to Aider (`aider`) as a background
    implementer, then review its diff and land it yourself. Use this whenever
    the user wants to hand implementation work to Aider - phrasings like "have
    Aider do X", "delegate this to aider", "run it through Aider", or "use Aider
    to implement/fix/refactor" - or wants to run a queue of coding tasks through
    Aider while staying the reviewer. This includes asking Aider to drive a
    local or self-hosted OpenAI-compatible endpoint ("have Aider use my local
    model", "run Aider against llama.cpp / Ollama / vLLM / LM Studio"), which
    Aider reaches via `--api-base`. DO NOT USE for local-model or coding
    requests that do not name Aider, for tasks small enough to do inline, or
    when the user wants the code written directly without delegating.
  folder_path: skills/aider-delegate
  extra_files:
    - references/dispatch-and-poll.md
    - references/multi-task-queues.md
    - references/review-and-land.md
    - references/writing-the-brief.md
    - scripts/relay.mjs
---

Delegate a coding task to Aider (`aider`) as a background implementer, then review its diff and land it yourself. Use this whenever the user wants to hand implementation work to Aider - phrasings like "have Aider do X", "delegate this to aider", "run it through Aider", or "use Aider to implement/fix/refactor" - or wants to run a queue of coding tasks through Aider while staying the reviewer. This includes asking Aider to drive a local or self-hosted OpenAI-compatible endpoint ("have Aider use my local model", "run Aider against llama.cpp / Ollama / vLLM / LM Studio"), which Aider reaches via `--api-base`. DO NOT USE for local-model or coding requests that do not name Aider, for tasks small enough to do inline, or when the user wants the code written directly without delegating.
