---
slug: 777genius-agent-teams-ai
name: agent-teams-ai
tagline: You're the boss, agents are your team. They handle tasks on their own,
  message each other, and review each other's work. You just watch the kanban
  boa
categories:
  - security
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-02-21T08:14:44Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: 777genius/agent-teams-ai
  license: AGPL-3.0
signals:
  stars: 2235
  last_commit: 2026-10-07T16:03:04Z
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@playwright/mcp@0.0.75"
    - --cdp-endpoint
    - http://127.0.0.1:9222
    - --caps
    - devtools
    - --console-level
    - info
  env_vars: []
  confidence: manifest
---

You're the boss, agents are your team. They handle tasks on their own, message each other, and review each other's work. You just watch the kanban board and give high-level commands. Codex/Claude/OpenCode/Cursor/Grok/GitHub/Kiro/Z.AI/Xiaomi/MiniMax/Kimi(300+ models, 200+ LLM providers, free models no auth) Build your AI company with multiple teams
