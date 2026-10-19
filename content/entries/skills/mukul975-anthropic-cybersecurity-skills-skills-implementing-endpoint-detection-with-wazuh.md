---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-endpoint-detection-with-wazuh
name: implementing-endpoint-detection-with-wazuh
tagline: Deploys and configures Wazuh SIEM/XDR for endpoint detection, covering
  agent authentication and management, custom decoder and rule XML creation,
  aler
summary: Wazuh is an open-source SIEM and XDR platform for endpoint monitoring,
  threat detection, and compliance. This skill covers managing agents via the
  Wazuh REST API, creating custom decoders and rules in XML for organiza...
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
  subpath: skills/implementing-endpoint-detection-with-wazuh
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
  path: skills/implementing-endpoint-detection-with-wazuh/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:39:20.890Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-endpoint-detection-with-wazuh
  description: Deploys and configures Wazuh SIEM/XDR for endpoint detection,
    covering agent authentication and management, custom decoder and rule XML
    creation, alert querying via the Wazuh REST API, rule testing with
    wazuh-logtest, and automated active-response actions. Use when setting up
    endpoint detection and response, writing or testing custom Wazuh rules, or
    querying and triaging Wazuh alerts.
  folder_path: skills/implementing-endpoint-detection-with-wazuh
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

# Implementing Endpoint Detection with Wazuh
## Overview

Wazuh is an open-source SIEM and XDR platform for endpoint monitoring, threat detection, and compliance. This skill covers managing agents via the Wazuh REST API, creating custom decoders and rules in XML for organization-specific detections, querying alerts, and testing rule logic using the logtest endpoint.


## When to Use

- When deploying or configuring implementing endpoint detection with wazuh capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Wazuh Manager 4.x deployed with API enabled
- Python 3.9+ with `requests` library
- API credentials (username/password for JWT authentication)
- Understanding of Wazuh decoder and rule XML syntax

## Steps

### Step 1: Authenticate to Wazuh API
Obtain JWT token via POST to /security/user/authenticate.

### Step 2: List and Monitor Agents
Query agent status, versions, and last keep-alive via /agents endpoint.

### Step 3: Query Security Alerts
Search alerts by rule ID, severity, agent, or time range.

### Step 4: Test Custom Rules with Logtest
Use the /logtest endpoint to validate decoder and rule logic against sample log lines.

## Expected Output

JSON report with agent inventory, alert statistics, rule coverage, and logtest validation results.
