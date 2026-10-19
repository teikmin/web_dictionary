---
slug: mukul975-anthropic-cybersecurity-skills-skills-hunting-for-unusual-service-installations
name: hunting-for-unusual-service-installations
tagline: Detects suspicious Windows service installations (MITRE ATT&CK
  T1543.003) by parsing System event log Event ID 7045, analyzing service binary
  paths, a
summary: "Attackers frequently install malicious Windows services for
  persistence and privilege escalation (MITRE ATT&CK T1543.003 — Create or
  Modify System Process: Windows Service). Event ID 7045 in the System event log
  recor..."
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
  subpath: skills/hunting-for-unusual-service-installations
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
  path: skills/hunting-for-unusual-service-installations/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:39:20.880Z
  truncated: false
type: agent_skill
skill:
  skill_name: hunting-for-unusual-service-installations
  description: Detects suspicious Windows service installations (MITRE ATT&CK
    T1543.003) by parsing System event log Event ID 7045, analyzing service
    binary paths, and flagging indicators of persistence mechanisms via
    Sysmon/EDR telemetry. Use when hunting for new-service persistence after a
    suspected compromise, when Event ID 7045 fires for an unfamiliar service, or
    during incident response to enumerate service-based persistence on Windows
    hosts.
  folder_path: skills/hunting-for-unusual-service-installations
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

# Hunting for Unusual Service Installations
## Overview

Attackers frequently install malicious Windows services for persistence and privilege escalation (MITRE ATT&CK T1543.003 — Create or Modify System Process: Windows Service). Event ID 7045 in the System event log records every new service installation. This skill parses .evtx log files to extract service installation events, flags suspicious binary paths (temp directories, PowerShell, cmd.exe, encoded commands), and correlates with known attack patterns.


## When to Use

- When investigating security incidents that require hunting for unusual service installations
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Python 3.9+ with `python-evtx`, `lxml`
- Windows System event log (.evtx) files
- Access to live System event log (optional, for real-time monitoring)
- Sysmon logs for enhanced process tracking (optional)

## Steps

1. Parse System.evtx for Event ID 7045 (new service installed)
2. Extract service name, binary path, service type, and account
3. Flag services with suspicious binary paths (temp dirs, encoded commands)
4. Detect PowerShell-based service creation patterns
5. Identify services running as LocalSystem with unusual paths
6. Cross-reference with known legitimate service baselines
7. Generate threat hunting report with MITRE ATT&CK T1543.003 mapping

## Expected Output

- JSON report listing all new service installations with risk scores, suspicious indicators, and remediation recommendations
- Timeline of service installation events with binary path analysis
