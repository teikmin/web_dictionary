---
slug: jub0t-concat-claude-skills-run-concat
name: concat
tagline: "Beta: The truly free, and open-source cross-platform CapCut
  replacement (supports MCPs)."
categories:
  - dev-tools
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-08-25T18:34:47Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: jub0t/concat
  subpath: .claude/skills/run-concat
  license: AGPL-3.0
signals:
  stars: 4202
  last_commit: 2026-10-07T12:58:00Z
type: agent_skill
skill:
  skill_name: run-concat
  description: Build, launch, and verify the Concat desktop app after a code
    change. Use this whenever the user asks to run Concat, test a change in the
    app, check whether something works, see the editor, or verify a fix "in the
    real app" rather than just via tests — even if they don't say "run the app"
    explicitly (e.g. "does this look right now", "let's see it"). Concat is a
    native Rust + Slint desktop video editor with a Cargo workspace root at
    src/, not the repo root, which trips up plain `cargo run`.
  folder_path: .claude/skills/run-concat
  extra_files: []
---

Build, launch, and verify the Concat desktop app after a code change. Use this whenever the user asks to run Concat, test a change in the app, check whether something works, see the editor, or verify a fix "in the real app" rather than just via tests — even if they don't say "run the app" explicitly (e.g. "does this look right now", "let's see it"). Concat is a native Rust + Slint desktop video editor with a Cargo workspace root at src/, not the repo root, which trips up plain `cargo run`.
