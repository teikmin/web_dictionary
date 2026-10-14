---
slug: alirezarezvani-claude-skills-agent-launcher-skills-grade-iterate
name: grade-iterate
tagline: Phase 3 of building a Claude Managed Agent — the bounded grade→iterate
  loop. Define a CMA outcome (a required markdown rubric graded by an isolated
  gr
categories:
  - productivity
status: active
quality_percentile: 46
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: agent-launcher/skills/grade-iterate
  official_vendor: false
  license: MIT
signals:
  stars: 28112
  last_commit: 2026-08-30T09:46:16Z
type: agent_skill
skill:
  skill_name: grade-iterate
  description: Phase 3 of building a Claude Managed Agent — the bounded
    grade→iterate loop. Define a CMA outcome (a required markdown rubric graded
    by an isolated grader), read each verdict, decide the next move (sharpen /
    re-run / promote to schedule), and once a version passes, run held-back eval
    cases in parallel. Use when the user says "grade my agent", "make it pass
    the rubric", "iterate until it's good", "is it good enough", or when the
    orchestrator routes phase=grade-iterate. outcome_builder.py builds the
    user.define_outcome payload (rubric required, max_iterations clamped 1..20 —
    never unbounded); verdict_reader.py reads the grader result and recommends
    the next move; eval_scaffold.py generates held-back cases + a parallel run
    plan (capped at the 25-thread CMA ceiling). Distinct from stage-launch
    (first launch) and run-without-you (scheduling).
  folder_path: agent-launcher/skills/grade-iterate
  extra_files:
    - README.md
    - scripts/eval_scaffold.py
    - scripts/outcome_builder.py
    - scripts/verdict_reader.py
---

Phase 3 of building a Claude Managed Agent — the bounded grade→iterate loop. Define a CMA outcome (a required markdown rubric graded by an isolated grader), read each verdict, decide the next move (sharpen / re-run / promote to schedule), and once a version passes, run held-back eval cases in parallel. Use when the user says "grade my agent", "make it pass the rubric", "iterate until it's good", "is it good enough", or when the orchestrator routes phase=grade-iterate. outcome_builder.py builds the user.define_outcome payload (rubric required, max_iterations clamped 1..20 — never unbounded); verdict_reader.py reads the grader result and recommends the next move; eval_scaffold.py generates held-back cases + a parallel run plan (capped at the 25-thread CMA ceiling). Distinct from stage-launch (first launch) and run-without-you (scheduling).
