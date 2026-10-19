---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-sql-injection-via-waf-logs
name: detecting-sql-injection-via-waf-logs
tagline: Analyze WAF (ModSecurity/AWS WAF/Cloudflare) logs to detect SQL
  injection attack campaigns. Parses ModSecurity audit logs and JSON WAF event
  logs to i
summary: "- When investigating security incidents that require detecting sql
  injection via waf logs - When building detection rules or threat hunting
  queries for this domain - When SOC analysts need structured procedures for
  th..."
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
  subpath: skills/detecting-sql-injection-via-waf-logs
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
  path: skills/detecting-sql-injection-via-waf-logs/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:39:20.865Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-sql-injection-via-waf-logs
  description: Analyze WAF (ModSecurity/AWS WAF/Cloudflare) logs to detect SQL
    injection attack campaigns. Parses ModSecurity audit logs and JSON WAF event
    logs to identify SQLi patterns (UNION SELECT, OR 1=1, SLEEP(), BENCHMARK()),
    tracks attack sources, correlates multi-stage injection attempts, and
    generates incident reports with OWASP classification.
  folder_path: skills/detecting-sql-injection-via-waf-logs
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

# Detecting SQL Injection via WAF Logs
## When to Use

- When investigating security incidents that require detecting sql injection via waf logs
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Familiarity with security operations concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Instructions

1. Install dependencies: `pip install requests`
2. Collect WAF logs (ModSecurity audit log, AWS WAF JSON logs, or Cloudflare firewall events).
3. Run the agent to parse and analyze:
   - Detect SQLi payloads via 15+ regex patterns
   - Classify attacks by OWASP injection type (classic, blind, time-based, UNION-based)
   - Identify persistent attackers by IP clustering
   - Correlate multi-request injection campaigns
   - Calculate attack success probability based on response codes

```bash
python scripts/agent.py --log-file /var/log/modsec_audit.log --format modsecurity --output sqli_report.json
```

## Examples

### ModSecurity SQLi Detection
```
Rule 942100 triggered: SQL Injection Attack Detected via libinjection
URI: /api/users?id=1' UNION SELECT username,password FROM users--
Source IP: 203.0.113.42 (47 requests in 5 minutes)
Classification: UNION-based SQLi campaign
```
