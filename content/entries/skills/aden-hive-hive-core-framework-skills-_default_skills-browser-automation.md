---
slug: aden-hive-hive-core-framework-skills-_default_skills-browser-automation
name: hive.browser-automation
tagline: Required before any hive-browser CLI command. The browser is driven
  from the terminal by running `hive-browser <command> ... --json` via
  terminal_exec
categories:
  - browser-automation
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: aden-hive/hive
  subpath: core/framework/skills/_default_skills/browser-automation
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 11099
  last_commit: 2026-10-12T11:34:20Z
type: agent_skill
skill:
  skill_name: hive.browser-automation
  description: Required before any hive-browser CLI command. The browser is driven
    from the terminal by running `hive-browser <command> ... --json` via
    terminal_exec — not via MCP tools. Teaches the browser lifecycle rules (the
    bridge attaches to the USER'S running Chrome — never kill or launch browser
    processes; timeouts are transport issues, not crashes), the screenshot +
    coordinate workflow (hive-browser interact with a fractional coordinate)
    that reaches shadow-DOM inputs selectors can't see, the viewport-fraction
    coordinate rule (not pixels), rich-text editor quirks ("send button stays
    disabled" failures), and CSP gotchas. Covers Chrome via CDP through the GCU
    Beeline extension.
  folder_path: core/framework/skills/_default_skills/browser-automation
  extra_files: []
---

Required before any hive-browser CLI command. The browser is driven from the terminal by running `hive-browser <command> ... --json` via terminal_exec — not via MCP tools. Teaches the browser lifecycle rules (the bridge attaches to the USER'S running Chrome — never kill or launch browser processes; timeouts are transport issues, not crashes), the screenshot + coordinate workflow (hive-browser interact with a fractional coordinate) that reaches shadow-DOM inputs selectors can't see, the viewport-fraction coordinate rule (not pixels), rich-text editor quirks ("send button stays disabled" failures), and CSP gotchas. Covers Chrome via CDP through the GCU Beeline extension.
