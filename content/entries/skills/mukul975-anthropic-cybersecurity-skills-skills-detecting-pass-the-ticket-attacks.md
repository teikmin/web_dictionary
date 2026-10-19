---
slug: mukul975-anthropic-cybersecurity-skills-skills-detecting-pass-the-ticket-attacks
name: detecting-pass-the-ticket-attacks
tagline: "Detect Kerberos Pass-the-Ticket (PtT) attacks by analyzing Windows
  Event IDs 4768, 4769, and 4771 for anomalous ticket usage patterns, with
  detection "
summary: Pass-the-Ticket (PtT) is a credential theft technique (MITRE ATT&CK
  T1550.003) where adversaries steal Kerberos tickets (TGT or TGS) from one
  system and replay them on another to authenticate without knowing the user'...
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
  subpath: skills/detecting-pass-the-ticket-attacks
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
  path: skills/detecting-pass-the-ticket-attacks/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:39:20.862Z
  truncated: false
type: agent_skill
skill:
  skill_name: detecting-pass-the-ticket-attacks
  description: Detect Kerberos Pass-the-Ticket (PtT) attacks by analyzing Windows
    Event IDs 4768, 4769, and 4771 for anomalous ticket usage patterns, with
    detection queries for Splunk and Elastic SIEM. Use when investigating
    incidents involving stolen or replayed Kerberos tickets, building detection
    rules or threat hunting queries for ticket abuse, or validating SOC
    monitoring coverage for credential-theft attack techniques.
  folder_path: skills/detecting-pass-the-ticket-attacks
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

# Detecting Pass-the-Ticket Attacks
## Overview

Pass-the-Ticket (PtT) is a credential theft technique (MITRE ATT&CK T1550.003) where adversaries steal Kerberos tickets (TGT or TGS) from one system and replay them on another to authenticate without knowing the user's password. This skill teaches detection of PtT attacks by correlating Windows Security Event IDs 4768 (TGT request), 4769 (TGS request), and 4771 (pre-authentication failure) for anomalies such as ticket reuse across different hosts, RC4 encryption downgrades, and unusual service ticket request volumes.


## When to Use

- When investigating security incidents that require detecting pass the ticket attacks
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Windows Domain Controller with advanced audit policy enabled (Audit Kerberos Authentication Service, Audit Kerberos Service Ticket Operations)
- Splunk or Elastic SIEM ingesting Windows Security event logs
- Sysmon deployed on endpoints for supplementary process telemetry
- Python 3.8+ with `requests` library

## Steps

1. Enable Kerberos audit logging on Domain Controllers via Group Policy
2. Forward Event IDs 4768, 4769, and 4771 to SIEM platform
3. Deploy detection rules for RC4 encryption downgrade (TicketEncryptionType 0x17)
4. Create correlation rule for ticket reuse across multiple source IPs
5. Build baseline of normal TGS request volume per user/host
6. Alert on standard deviation anomalies in ticket request patterns
7. Investigate flagged events with enrichment from Active Directory

## Expected Output

JSON report containing detected PtT indicators including anomalous ticket requests, RC4 downgrades, cross-host ticket reuse events, and risk-scored users with MITRE ATT&CK technique mapping.
