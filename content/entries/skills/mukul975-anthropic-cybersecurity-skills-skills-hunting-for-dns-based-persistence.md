---
slug: mukul975-anthropic-cybersecurity-skills-skills-hunting-for-dns-based-persistence
name: hunting-for-dns-based-persistence
tagline: Hunts for DNS-based persistence mechanisms such as DNS hijacking,
  dangling CNAME records enabling subdomain takeover, wildcard DNS abuse, and
  unauthor
summary: Attackers establish DNS-based persistence by hijacking DNS records,
  creating unauthorized subdomains, abusing wildcard DNS entries, or modifying
  NS delegations to redirect traffic through attacker-controlled infrastru...
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
  subpath: skills/hunting-for-dns-based-persistence
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
  path: skills/hunting-for-dns-based-persistence/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:39:20.878Z
  truncated: false
type: agent_skill
skill:
  skill_name: hunting-for-dns-based-persistence
  description: Hunts for DNS-based persistence mechanisms such as DNS hijacking,
    dangling CNAME records enabling subdomain takeover, wildcard DNS abuse, and
    unauthorized zone or NS delegation changes, using passive DNS history
    (SecurityTrails API), Route53/Azure DNS/Cloudflare audit logs, and zone
    transfer analysis. Use when investigating suspected DNS hijacking or
    subdomain takeover, or when threat hunting for DNS record tampering that
    persists across credential rotations and endpoint reimaging.
  folder_path: skills/hunting-for-dns-based-persistence
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

# Hunting for DNS-based Persistence
## Overview

Attackers establish DNS-based persistence by hijacking DNS records, creating unauthorized subdomains, abusing wildcard DNS entries, or modifying NS delegations to redirect traffic through attacker-controlled infrastructure. These techniques survive credential rotations, endpoint reimaging, and traditional remediation because DNS changes persist independently of compromised hosts. Detection requires passive DNS historical analysis, zone file auditing, and monitoring for unauthorized record modifications. This skill covers hunting methodologies using SecurityTrails passive DNS API, DNS audit logs from Route53/Azure DNS/Cloudflare, and zone transfer analysis.


## When to Use

- When investigating security incidents that require hunting for dns based persistence
- When building detection rules or threat hunting queries for this domain
- When SOC analysts need structured procedures for this analysis type
- When validating security monitoring coverage for related attack techniques

## Prerequisites

- SecurityTrails API key (free tier provides 50 queries/month)
- Access to DNS provider audit logs (Route53, Azure DNS, Cloudflare, or on-premises DNS)
- Python 3.9+ with requests library
- DNS zone file access or AXFR capability for internal zones
- Historical DNS baseline for comparison

## Steps

### Step 1: Baseline DNS Records

Export current DNS zone records and establish baseline for all authorized A, AAAA, CNAME, MX, NS, and TXT records.

### Step 2: Query Passive DNS History

Use SecurityTrails API to retrieve historical DNS records and identify unauthorized changes, new subdomains, and CNAME records pointing to decommissioned services (dangling CNAMEs).

### Step 3: Detect Anomalies

Compare current records against baseline to identify unauthorized modifications, wildcard records that resolve all subdomains, NS delegation changes, and MX record hijacking.

### Step 4: Investigate Findings

Correlate DNS anomalies with threat intelligence feeds, check resolution targets against known malicious infrastructure, and validate record ownership.

## Expected Output

JSON report listing DNS anomalies with record type, historical changes, risk severity, and remediation recommendations for each finding.
