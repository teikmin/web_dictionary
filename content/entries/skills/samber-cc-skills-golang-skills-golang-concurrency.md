---
slug: samber-cc-skills-golang-skills-golang-concurrency
name: golang-concurrency
tagline: Golang concurrency design — goroutine lifecycle and leak prevention,
  channels and `select`, channel ownership and direction,
  `sync.Mutex`/`RWMutex`/`s
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
  subpath: skills/golang-concurrency
  official_vendor: false
  license: MIT
signals:
  stars: 3467
  last_commit: 2026-10-01T12:32:20Z
type: agent_skill
skill:
  skill_name: golang-concurrency
  description: Golang concurrency design — goroutine lifecycle and leak
    prevention, channels and `select`, channel ownership and direction,
    `sync.Mutex`/`RWMutex`/`sync.Map`/`sync.Once`/atomics, `errgroup`,
    `singleflight`, worker pools, and fan-out/fan-in pipelines. Use when writing
    or reviewing concurrent Go code, when choosing between channels and mutexes,
    when protecting a shared map or counter, or when a goroutine has no clear
    exit. Not for defensive coding unrelated to concurrency such as nil panics,
    slice aliasing, or numeric overflow (→ See
    `samber/cc-skills-golang@golang-safety` skill), and not for debugging a
    specific hung, crashing, or racing program after the fact (→ See
    `samber/cc-skills-golang@golang-troubleshooting` skill).
  folder_path: skills/golang-concurrency
  extra_files:
    - evals/evals.json
    - references/channels-and-select.md
    - references/pipelines.md
    - references/sync-primitives.md
---

Golang concurrency design — goroutine lifecycle and leak prevention, channels and `select`, channel ownership and direction, `sync.Mutex`/`RWMutex`/`sync.Map`/`sync.Once`/atomics, `errgroup`, `singleflight`, worker pools, and fan-out/fan-in pipelines. Use when writing or reviewing concurrent Go code, when choosing between channels and mutexes, when protecting a shared map or counter, or when a goroutine has no clear exit. Not for defensive coding unrelated to concurrency such as nil panics, slice aliasing, or numeric overflow (→ See `samber/cc-skills-golang@golang-safety` skill), and not for debugging a specific hung, crashing, or racing program after the fact (→ See `samber/cc-skills-golang@golang-troubleshooting` skill).
