---
slug: samber-cc-skills-golang-skills-golang-context
name: golang-context
tagline: Idiomatic context.Context usage in Golang — propagation through API
  boundaries, cancellation, timeouts and deadlines, request-scoped values,
  context.W
categories:
  - dev-tools
status: active
quality_percentile: 35
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: samber/cc-skills-golang
  subpath: skills/golang-context
  official_vendor: false
  license: MIT
signals:
  stars: 3467
  last_commit: 2026-10-01T12:32:20Z
type: agent_skill
skill:
  skill_name: golang-context
  description: Idiomatic context.Context usage in Golang — propagation through API
    boundaries, cancellation, timeouts and deadlines, request-scoped values,
    context.WithoutCancel for background work outliving requests. Apply when
    designing context propagation across layers, debugging leaked or unexpired
    contexts, choosing between context.Background/TODO/WithoutCancel, or storing
    values in context. Not for code that merely accepts ctx as first parameter.
  folder_path: skills/golang-context
  extra_files:
    - evals/evals.json
    - references/cancellation.md
    - references/http-services.md
    - references/values-tracing.md
---

Idiomatic context.Context usage in Golang — propagation through API boundaries, cancellation, timeouts and deadlines, request-scoped values, context.WithoutCancel for background work outliving requests. Apply when designing context propagation across layers, debugging leaked or unexpired contexts, choosing between context.Background/TODO/WithoutCancel, or storing values in context. Not for code that merely accepts ctx as first parameter.
