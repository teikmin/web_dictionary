---
slug: mukul975-anthropic-cybersecurity-skills-skills-hunting-for-domain-fronting-c2-traffic
name: hunting-for-domain-fronting-c2-traffic
tagline: Detects domain fronting C2 traffic by analyzing SNI-vs-HTTP-Host-header
  mismatches in proxy logs and inspecting TLS certificate discrepancies with pyO
summary: Domain fronting (MITRE ATT&CK T1090.004) is a technique where attackers
  use different domain names in the TLS SNI field and the HTTP Host header to
  disguise C2 traffic behind legitimate CDN-hosted domains. This skill...
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
  subpath: skills/hunting-for-domain-fronting-c2-traffic
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
  path: skills/hunting-for-domain-fronting-c2-traffic/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:39:20.878Z
  truncated: false
type: agent_skill
skill:
  skill_name: hunting-for-domain-fronting-c2-traffic
  description: Detects domain fronting C2 traffic by analyzing
    SNI-vs-HTTP-Host-header mismatches in proxy logs and inspecting TLS
    certificate discrepancies with pyOpenSSL. Use when hunting for
    command-and-control traffic hidden behind legitimate CDN domains, or when
    investigating proxy/TLS logs for signs of domain fronting evasion.
  folder_path: skills/hunting-for-domain-fronting-c2-traffic
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

# Hunting for Domain Fronting C2 Traffic
## Overview

Domain fronting (MITRE ATT&CK T1090.004) is a technique where attackers use different domain names in the TLS SNI field and the HTTP Host header to disguise C2 traffic behind legitimate CDN-hosted domains. This skill detects domain fronting by parsing proxy/web gateway logs for SNI-Host header mismatches, analyzing TLS certificates for CDN provider identification, flagging connections where the SNI points to a high-reputation domain but the Host header targets an attacker-controlled domain, and correlating with known CDN provider IP ranges.


## When to Use

- When investigating security incidents that require hunting for domain fronting c2 traffic
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- Web proxy or secure web gateway logs with SNI and Host header fields
- Python 3.8+ with pyOpenSSL and cryptography libraries
- TLS inspection enabled on proxy for Host header visibility
- CDN provider IP range lists (CloudFront, Azure CDN, Cloudflare)

## Steps

1. Parse proxy logs for connections with both SNI and Host header fields
2. Compare SNI domain against HTTP Host header for mismatches
3. Extract TLS certificate Subject and SAN fields using pyOpenSSL
4. Identify CDN-hosted connections via certificate issuer and IP ranges
5. Flag high-confidence domain fronting where SNI and Host differ on CDN IPs
6. Score alerts based on domain reputation differential
7. Generate detection report with network flow context

## Expected Output

JSON report containing detected domain fronting indicators with SNI-Host pairs, certificate details, CDN provider identification, confidence scores, and MITRE ATT&CK technique mapping.
