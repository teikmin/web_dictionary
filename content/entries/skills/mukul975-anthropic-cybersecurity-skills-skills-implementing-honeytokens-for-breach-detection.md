---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-honeytokens-for-breach-detection
name: implementing-honeytokens-for-breach-detection
tagline: Deploys canary tokens and honeytokens (fake AWS credentials, DNS
  canaries, document beacons, database records) that trigger alerts when
  accessed by at
summary: "- When deploying or configuring implementing honeytokens for breach
  detection capabilities in your environment - When establishing security
  controls aligned to compliance requirements - When building or improving
  secu..."
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
  subpath: skills/implementing-honeytokens-for-breach-detection
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
  path: skills/implementing-honeytokens-for-breach-detection/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:39:20.893Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-honeytokens-for-breach-detection
  description: >
    Deploys canary tokens and honeytokens (fake AWS credentials, DNS canaries,
    document beacons, database records) that trigger alerts when accessed by
    attackers. Uses the Canarytokens API and custom webhook integrations for
    breach detection. Use when building deception-based early warning systems
    for intrusion detection.
  folder_path: skills/implementing-honeytokens-for-breach-detection
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

# Implementing Honeytokens for Breach Detection
## When to Use

- When deploying or configuring implementing honeytokens for breach detection capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Familiarity with security operations concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Instructions

Deploy honeytokens across critical systems to detect unauthorized access. Each token
type alerts via webhook when triggered by an attacker.

```python
import requests

# Create a DNS canary token via Canarytokens
resp = requests.post("https://canarytokens.org/generate", data={
    "type": "dns",
    "email": "soc@company.com",
    "memo": "Production DB server honeytoken",
})
token = resp.json()
print(f"DNS token: {token['hostname']}")
```

Token types to deploy:
1. AWS credential files (~/.aws/credentials) with canary keys
2. DNS tokens embedded in configuration files
3. Document beacons (Word/PDF) in sensitive file shares
4. Database honeytoken records in user tables
5. Web bugs in internal wiki/documentation pages

## Examples

```python
# Generate a fake AWS credentials file with canary token
aws_creds = f"[default]\naws_access_key_id = {canary_key_id}\naws_secret_access_key = {canary_secret}\n"
with open("/opt/backup/.aws/credentials", "w") as f:
    f.write(aws_creds)
```
