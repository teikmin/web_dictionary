---
slug: kkkkhazix-khazix-skills-neat-freak
name: neat-freak
tagline: "Knowledge and governance closeout: reconcile project docs, rule files
  (CLAUDE.md/AGENTS.md), authorized agent memory, and workspace residue with
  what "
categories:
  - dev-tools
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: KKKKhazix/khazix-skills
  subpath: neat-freak
  official_vendor: false
  license: MIT
signals:
  stars: 21368
  last_commit: 2026-10-01T13:15:32Z
type: agent_skill
skill:
  skill_name: neat-freak
  description: 'Knowledge and governance closeout: reconcile project docs, rule
    files (CLAUDE.md/AGENTS.md), authorized agent memory, and workspace residue
    with what the code and runtime actually do, so the next session or the next
    person starts from one current answer. Trigger when the user names
    "neat-freak", "洁癖", or "/neat" — and also on clear knowledge-closeout intent
    without the name: syncing or tidying project docs/rules/memory after
    development ("把文档和记忆整理一下", "收尾时把文档同步掉", "docs 和代码对不上了"), stale or
    conflicting CLAUDE.md/memory, a clean handoff to a teammate or a fresh
    session, or auditing whether workspace rules are actually followed. Do not
    trigger for pure coding/refactoring/debugging tasks, tidying data or prose
    (JSON, 周报, changelog announcements), or a bare "整理" with no
    project-knowledge context.'
  folder_path: neat-freak
  extra_files:
    - evals/evals.json
    - evals/fixtures/eval-1-routine-dev-sync/agent-memory/taskflow/memory/MEMORY.md
    - evals/fixtures/eval-1-routine-dev-sync/agent-memory/taskflow/memory/project_api-design.md
    - evals/fixtures/eval-1-routine-dev-sync/agent-memory/taskflow/memory/project_deploy.md
    - evals/fixtures/eval-1-routine-dev-sync/workspace/CLAUDE.md
    - evals/fixtures/eval-1-routine-dev-sync/workspace/taskflow/AGENTS.md
    - evals/fixtures/eval-1-routine-dev-sync/workspace/taskflow/CLAUDE.md
    - evals/fixtures/eval-1-routine-dev-sync/workspace/taskflow/README.md
    - evals/fixtures/eval-1-routine-dev-sync/workspace/taskflow/docs/architecture.md
    - evals/fixtures/eval-1-routine-dev-sync/workspace/taskflow/package.json
---

Knowledge and governance closeout: reconcile project docs, rule files (CLAUDE.md/AGENTS.md), authorized agent memory, and workspace residue with what the code and runtime actually do, so the next session or the next person starts from one current answer. Trigger when the user names "neat-freak", "洁癖", or "/neat" — and also on clear knowledge-closeout intent without the name: syncing or tidying project docs/rules/memory after development ("把文档和记忆整理一下", "收尾时把文档同步掉", "docs 和代码对不上了"), stale or conflicting CLAUDE.md/memory, a clean handoff to a teammate or a fresh session, or auditing whether workspace rules are actually followed. Do not trigger for pure coding/refactoring/debugging tasks, tidying data or prose (JSON, 周报, changelog announcements), or a bare "整理" with no project-knowledge context.
