---
slug: trailofbits-skills-plugins-agentic-actions-auditor-skills-agentic-actions-auditor
name: agentic-actions-auditor
tagline: Audits GitHub Actions workflows for security vulnerabilities in AI
  agent integrations including Claude Code Action, Gemini CLI, OpenAI Codex, and
  GitH
categories:
  - security
status: active
quality_percentile: 55
selection_reason: quality_percentile
first_seen: 2026-01-14T18:23:21
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: trailofbits/skills
  subpath: plugins/agentic-actions-auditor/skills/agentic-actions-auditor
  official_vendor: false
  license: CC-BY-SA-4.0
signals:
  stars: 7507
  last_commit: 2026-10-13T15:45:03Z
type: agent_skill
skill:
  skill_name: agentic-actions-auditor
  description: Audits GitHub Actions workflows for security vulnerabilities in AI
    agent integrations including Claude Code Action, Gemini CLI, OpenAI Codex,
    and GitHub AI Inference. Detects attack vectors where attacker-controlled
    input reaches AI agents running in CI/CD pipelines, including env var
    intermediary patterns, direct expression injection, dangerous sandbox
    configurations, and wildcard user allowlists. Use when reviewing workflow
    files that invoke AI coding agents, auditing CI/CD pipeline security for
    prompt injection risks, or evaluating agentic action configurations.
  folder_path: plugins/agentic-actions-auditor/skills/agentic-actions-auditor
  extra_files:
    - agents/openai.yaml
    - assets/trail-of-bits-mark.svg
    - references/action-profiles.md
    - references/cross-file-resolution.md
    - references/foundations.md
    - references/vector-a-env-var-intermediary.md
    - references/vector-b-direct-expression-injection.md
    - references/vector-c-cli-data-fetch.md
    - references/vector-d-pr-target-checkout.md
    - references/vector-e-error-log-injection.md
---

Audits GitHub Actions workflows for security vulnerabilities in AI agent integrations including Claude Code Action, Gemini CLI, OpenAI Codex, and GitHub AI Inference. Detects attack vectors where attacker-controlled input reaches AI agents running in CI/CD pipelines, including env var intermediary patterns, direct expression injection, dangerous sandbox configurations, and wildcard user allowlists. Use when reviewing workflow files that invoke AI coding agents, auditing CI/CD pipeline security for prompt injection risks, or evaluating agentic action configurations.
