---
slug: nvidia-skillspector
name: SkillSpector
tagline: Security scanner for AI agent skills. Detect vulnerabilities, malicious
  patterns, security risks, prompt injection, data exfiltration, and supply-chai
categories:
  - security
status: active
quality_percentile: 89
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: NVIDIA/SkillSpector
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 20114
  last_commit: 2026-10-13T09:07:51Z
type: mcp_server
launch:
  transport: stdio
  command: uvx
  args:
    - skillspector
  env_vars: []
  confidence: manifest
---

Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, security risks, prompt injection, data exfiltration, and supply-chain risks in Claude Code, Codex, and MCP skills before you install them.
