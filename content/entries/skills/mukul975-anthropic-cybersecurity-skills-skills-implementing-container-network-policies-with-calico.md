---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-container-network-policies-with-calico
name: implementing-container-network-policies-with-calico
tagline: Uses Calico's own policy CRDs beyond the upstream Kubernetes API -
  GlobalNetworkPolicy, HostEndpoint, NetworkSet, policy tiers, and DNS-based
  egress r
summary: Calico provides Kubernetes-native and extended network policy
  enforcement through its CNI plugin. This skill covers creating and auditing
  Calico NetworkPolicy and GlobalNetworkPolicy resources to implement
  pod-to-pod...
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
  subpath: skills/implementing-container-network-policies-with-calico
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
  path: skills/implementing-container-network-policies-with-calico/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:39:20.888Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-container-network-policies-with-calico
  description: "Uses Calico's own policy CRDs beyond the upstream Kubernetes API -
    GlobalNetworkPolicy, HostEndpoint, NetworkSet, policy tiers, and DNS-based
    egress rules - applied and audited with calicoctl. Use when a policy must
    span namespaces or protect the host itself, when egress has to be expressed
    by domain name, or when ordering policies into tiers. Keywords: calicoctl,
    GlobalNetworkPolicy, HostEndpoint, NetworkSet, tier, DNS egress, order. Do
    not use for portable upstream NetworkPolicy - use
    implementing-network-policies-for-kubernetes; for installing Calico and
    writing standard policy with it use
    implementing-kubernetes-network-policy-with-calico."
  folder_path: skills/implementing-container-network-policies-with-calico
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

# Implementing Container Network Policies with Calico
## Overview

Calico provides Kubernetes-native and extended network policy enforcement through its CNI plugin. This skill covers creating and auditing Calico NetworkPolicy and GlobalNetworkPolicy resources to implement pod-to-pod traffic control, namespace isolation, egress restrictions, and DNS-based policy rules using calicoctl and the Kubernetes API.


## When to Use

- When deploying or configuring implementing container network policies with calico capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Kubernetes cluster with Calico CNI installed
- Python 3.9+ with `kubernetes` client library
- calicoctl CLI tool installed and configured
- kubectl access with RBAC permissions for network policy management

## Steps

### Step 1: Audit Existing Network Policies
Use calicoctl and kubectl to inventory current network policies and identify unprotected namespaces.

### Step 2: Implement Default-Deny Policies
Create default-deny ingress and egress policies per namespace as a zero-trust baseline.

### Step 3: Create Workload-Specific Allow Rules
Define granular allow rules for legitimate pod-to-pod and pod-to-service communication.

### Step 4: Validate Policy Enforcement
Test connectivity between pods to verify policies are correctly enforced.

## Expected Output

JSON audit report listing all network policies, unprotected namespaces, policy rule counts, and connectivity test results.
