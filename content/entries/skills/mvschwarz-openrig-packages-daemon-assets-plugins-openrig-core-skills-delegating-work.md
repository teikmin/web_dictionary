---
slug: mvschwarz-openrig-packages-daemon-assets-plugins-openrig-core-skills-delegating-work
name: delegating-work
tagline: "Use when you have a task and must decide WHO does it — yourself, a
  spawned subagent, or another agent in the topology that already holds the
  context. "
categories:
  - dev-tools
status: active
quality_percentile: 56
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: mvschwarz/openrig
  subpath: packages/daemon/assets/plugins/openrig-core/skills/delegating-work
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 7377
  last_commit: 2026-10-13T16:24:21Z
type: agent_skill
skill:
  skill_name: delegating-work
  description: "Use when you have a task and must decide WHO does it — yourself, a
    spawned subagent, or another agent in the topology that already holds the
    context. The rule: how much would a blank slate have to read in to do this
    correctly? A lot → route to a context-holding agent; a little → subagent;
    unsure → a real agent or yourself. NOT the mechanics of fanning out (that's
    dispatching-parallel-agents / subagent-driven-development) — this is the
    who/whether decision, and the failure mode that makes teams abandon
    subagents."
  folder_path: packages/daemon/assets/plugins/openrig-core/skills/delegating-work
  extra_files: []
---

Use when you have a task and must decide WHO does it — yourself, a spawned subagent, or another agent in the topology that already holds the context. The rule: how much would a blank slate have to read in to do this correctly? A lot → route to a context-holding agent; a little → subagent; unsure → a real agent or yourself. NOT the mechanics of fanning out (that's dispatching-parallel-agents / subagent-driven-development) — this is the who/whether decision, and the failure mode that makes teams abandon subagents.
