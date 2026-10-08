---
slug: omnigent-ai-omnigent-claude-skills-antigravity-native-e2e-dev
name: omnigent
tagline: "Omnigent is an open-source AI agent framework and meta-harness:
  orchestrate Claude Code, Codex, Cursor, Pi, and custom agents — swap harnesses
  without"
categories:
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 78
selection_reason: quality_percentile
first_seen: 2026-06-11T12:18:13Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: omnigent-ai/omnigent
  subpath: .claude/skills/antigravity-native-e2e-dev
  license: Apache-2.0
signals:
  stars: 10648
  last_commit: 2026-10-07T14:54:43Z
type: agent_skill
skill:
  skill_name: antigravity-native-e2e-dev
  description: Spin up a live local Omnigent server + runner and exercise the
    native Antigravity (agy) TUI harness (antigravity-native) end-to-end —
    launch the real `agy` CLI via `omnigent antigravity`, drive turns through
    the web UI, smoke-test, and bug-bash. Load when developing, testing, or
    debugging the antigravity-native harness
    (omnigent/inner/antigravity_native_executor.py,
    omnigent/antigravity_native.py, antigravity_native_bridge.py,
    antigravity_native_rpc.py, antigravity_native_reader.py,
    antigravity_native_launch.py) or its agy launch / RPC mirror / tmux delivery
    / OAuth / MCP-relay behavior. NOT the in-process `antigravity` Gemini SDK
    harness.
  folder_path: .claude/skills/antigravity-native-e2e-dev
  extra_files: []
---

Spin up a live local Omnigent server + runner and exercise the native Antigravity (agy) TUI harness (antigravity-native) end-to-end — launch the real `agy` CLI via `omnigent antigravity`, drive turns through the web UI, smoke-test, and bug-bash. Load when developing, testing, or debugging the antigravity-native harness (omnigent/inner/antigravity_native_executor.py, omnigent/antigravity_native.py, antigravity_native_bridge.py, antigravity_native_rpc.py, antigravity_native_reader.py, antigravity_native_launch.py) or its agy launch / RPC mirror / tmux delivery / OAuth / MCP-relay behavior. NOT the in-process `antigravity` Gemini SDK harness.
