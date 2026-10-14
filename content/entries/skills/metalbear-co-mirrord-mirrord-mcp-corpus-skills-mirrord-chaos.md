---
slug: metalbear-co-mirrord-mirrord-mcp-corpus-skills-mirrord-chaos
name: mirrord-chaos
tagline: "Help users chaos test their app with mirrord: inject artificial
  latency or connection errors into a mirrord session's outgoing traffic via
  per-session"
categories:
  - dev-tools
status: active
quality_percentile: 38
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: metalbear-co/mirrord
  subpath: mirrord/mcp/corpus/skills/mirrord-chaos
  official_vendor: false
  license: MIT
signals:
  stars: 5365
  last_commit: 2026-10-13T15:20:03Z
type: agent_skill
skill:
  skill_name: mirrord-chaos
  description: "Help users chaos test their app with mirrord: inject artificial
    latency or connection errors into a mirrord session's outgoing traffic via
    per-session chaos rules managed with the `mirrord chaos` CLI. Use when a
    user wants to add latency or delay to outgoing connections or a dependency
    (e.g. a slow database), simulate connection failures (reset, timed out,
    refused), test app behavior under degraded network conditions, or wire chaos
    rules into CI test runs. Always use this skill instead of the deprecated
    _experimental_.latency mirrord config option."
  folder_path: mirrord/mcp/corpus/skills/mirrord-chaos
  extra_files:
    - README.md
---

Help users chaos test their app with mirrord: inject artificial latency or connection errors into a mirrord session's outgoing traffic via per-session chaos rules managed with the `mirrord chaos` CLI. Use when a user wants to add latency or delay to outgoing connections or a dependency (e.g. a slow database), simulate connection failures (reset, timed out, refused), test app behavior under degraded network conditions, or wire chaos rules into CI test runs. Always use this skill instead of the deprecated _experimental_.latency mirrord config option.
