---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-jwt-signing-and-verification
name: implementing-jwt-signing-and-verification
tagline: Implements secure JWT (RFC 7519) signing and verification using
  HMAC-SHA256, RSA-PSS, ES256, and EdDSA, including token expiration, claims
  validation,
summary: JSON Web Tokens (JWT) defined in RFC 7519 are compact, URL-safe tokens
  used for authentication and authorization in web applications. This skill
  covers implementing secure JWT signing with HMAC-SHA256, RSA-PSS, and Ed...
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
  subpath: skills/implementing-jwt-signing-and-verification
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
  path: skills/implementing-jwt-signing-and-verification/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:39:20.895Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-jwt-signing-and-verification
  description: Implements secure JWT (RFC 7519) signing and verification using
    HMAC-SHA256, RSA-PSS, ES256, and EdDSA, including token expiration, claims
    validation, and defenses against algorithm-confusion, none-algorithm, and
    key-injection attacks. Use when adding or hardening JWT-based
    authentication/authorization, or when auditing token verification code for
    common JWT vulnerabilities.
  folder_path: skills/implementing-jwt-signing-and-verification
  extra_files:
    - LICENSE
    - assets/template.md
    - references/api-reference.md
    - references/standards.md
    - references/workflows.md
    - scripts/agent.py
    - scripts/process.py
  pack_total_skills: 818
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mukul975-anthropic-cybersecurity-skills
---

# Implementing JWT Signing and Verification
## Overview

JSON Web Tokens (JWT) defined in RFC 7519 are compact, URL-safe tokens used for authentication and authorization in web applications. This skill covers implementing secure JWT signing with HMAC-SHA256, RSA-PSS, and EdDSA algorithms, along with verification, token expiration, claims validation, and defense against common JWT attacks (algorithm confusion, none algorithm, key injection).


## When to Use

- When deploying or configuring implementing jwt signing and verification capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Familiarity with cryptography concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Objectives

- Implement JWT signing with HS256, RS256, ES256, and EdDSA
- Verify JWT signatures and validate standard claims
- Implement token expiration, not-before, and audience validation
- Defend against algorithm confusion and none algorithm attacks
- Implement JWT key rotation with JWK Sets
- Build a complete authentication middleware

## Key Concepts

### JWT Algorithms

| Algorithm | Type | Key | Security Level |
|-----------|------|-----|---------------|
| HS256 | Symmetric (HMAC) | Shared secret | 128-bit |
| RS256 | Asymmetric (RSA) | RSA key pair | 112-bit |
| ES256 | Asymmetric (ECDSA) | P-256 key pair | 128-bit |
| EdDSA | Asymmetric (Ed25519) | Ed25519 pair | 128-bit |

### Common JWT Attacks

- **Algorithm confusion**: Switching from RS256 to HS256, using public key as HMAC secret
- **None algorithm**: Setting alg=none to bypass signature verification
- **Key injection**: Embedding key in JWK header
- **Weak secrets**: Brute-forcing short HMAC secrets
- **Token replay**: Reusing valid tokens without expiration

## Security Considerations

- Always validate the algorithm header against an allowlist
- Never accept alg=none in production
- Use asymmetric algorithms (RS256, ES256) for distributed systems
- Set short expiration times (15 min for access tokens)
- Implement token refresh mechanism
- Store secrets securely (not in source code)

## Validation Criteria

- [ ] JWT signing produces valid tokens for all algorithms
- [ ] Signature verification rejects tampered tokens
- [ ] Expired tokens are rejected
- [ ] Algorithm confusion attack is prevented
- [ ] None algorithm is rejected
- [ ] JWK key rotation works correctly
- [ ] Claims validation enforces all required claims
