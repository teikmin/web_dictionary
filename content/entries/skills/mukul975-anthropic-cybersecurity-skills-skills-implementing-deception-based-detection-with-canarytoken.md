---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-deception-based-detection-with-canarytoken
name: implementing-deception-based-detection-with-canarytoken
tagline: Deploys and monitors Canary Tokens via the Thinkst Canary REST API for
  deception-based breach detection, programmatically creating web bug, DNS, MS
  Wo
summary: Canary Tokens are lightweight tripwire mechanisms that alert when an
  attacker accesses a resource. This skill uses the Thinkst Canary REST API to
  programmatically create tokens (web bugs, DNS tokens, MS Word documents...
categories:
  - security-auth
tags:
  - ai-agents
  - claude-code
  - cloud-security
  - cybersecurity
status: active
quality_percentile: 66
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: mukul975/Anthropic-Cybersecurity-Skills
  subpath: skills/implementing-deception-based-detection-with-canarytoken
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 34678
  last_commit: 2026-08-31T04:32:44Z
  stars_delta_7d: 311
  stars_growth_pct: 0.9
  trending_score: 313.81
  velocity_source: snapshot_delta
  sparkline_4w:
    - 33900
    - 34367
    - 34678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mukul975/Anthropic-Cybersecurity-Skills
  path: skills/implementing-deception-based-detection-with-canarytoken/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:39:20.889Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-deception-based-detection-with-canarytoken
  description: Deploys and monitors Canary Tokens via the Thinkst Canary REST API
    for deception-based breach detection, programmatically creating web bug,
    DNS, MS Word document, and AWS API key tokens and generating deception
    coverage reports from triggered alerts. Use when standing up honeytoken
    tripwires for early breach detection or building a deception-technology
    coverage report.
  folder_path: skills/implementing-deception-based-detection-with-canarytoken
  extra_files:
    - LICENSE
    - references/api-reference.md
    - scripts/agent.py
  pack_total_skills: 818
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mukul975-anthropic-cybersecurity-skills
---

# Implementing Deception-Based Detection with Canarytoken
## Overview

Canary Tokens are lightweight tripwire mechanisms that alert when an attacker accesses a resource. This skill uses the Thinkst Canary REST API to programmatically create tokens (web bugs, DNS tokens, MS Word documents, AWS API keys), deploy them to strategic locations, monitor for triggered alerts, and generate deception coverage reports.


## When to Use

- When deploying or configuring implementing deception based detection with canarytoken capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Thinkst Canary Console or canarytokens.org account
- API auth token from Canary Console
- Python 3.9+ with `requests`
- File system access for deploying document and file tokens

## Steps

1. Authenticate to the Canary Console API using auth_token
2. Create web bug (HTTP) tokens for embedding in documents and web pages
3. Create DNS tokens for monitoring DNS resolution attempts
4. Create MS Word document tokens for file share deployment
5. List all active tokens and their trigger history
6. Query recent alerts for triggered token events
7. Generate deception coverage report with deployment recommendations

## Expected Output

- JSON report listing all deployed Canary Tokens, trigger history, alert details, and coverage analysis
- Deployment map showing token types across network segments
