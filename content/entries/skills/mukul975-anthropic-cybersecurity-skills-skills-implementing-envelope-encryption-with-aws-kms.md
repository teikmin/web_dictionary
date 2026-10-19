---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-envelope-encryption-with-aws-kms
name: implementing-envelope-encryption-with-aws-kms
tagline: Implements envelope encryption with AWS KMS, encrypting data locally
  with a data encryption key (DEK) and protecting that DEK with a KMS-managed
  key (
summary: Envelope encryption is a strategy where data is encrypted with a data
  encryption key (DEK), and the DEK itself is encrypted with a master key (KEK)
  managed by AWS KMS. This approach allows encrypting large volumes of...
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
  subpath: skills/implementing-envelope-encryption-with-aws-kms
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
  path: skills/implementing-envelope-encryption-with-aws-kms/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:39:20.891Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-envelope-encryption-with-aws-kms
  description: Implements envelope encryption with AWS KMS, encrypting data
    locally with a data encryption key (DEK) and protecting that DEK with a
    KMS-managed key (KEK), covering the encrypt/decrypt flow, KMS key types, and
    security validation criteria. Use when designing key management for
    encrypting large or numerous data objects on AWS, or when reducing direct
    KMS API call volume.
  folder_path: skills/implementing-envelope-encryption-with-aws-kms
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

# Implementing Envelope Encryption with AWS KMS
## Overview

Envelope encryption is a strategy where data is encrypted with a data encryption key (DEK), and the DEK itself is encrypted with a master key (KEK) managed by AWS KMS. This approach allows encrypting large volumes of data locally while keeping the master key secure in a hardware security module (HSM) managed by AWS. This skill covers implementing envelope encryption using AWS KMS GenerateDataKey API.


## When to Use

- When deploying or configuring implementing envelope encryption with aws kms capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Familiarity with cryptography concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Objectives

- Understand the envelope encryption pattern and its advantages
- Generate data encryption keys using AWS KMS GenerateDataKey
- Encrypt/decrypt data locally using DEKs
- Store encrypted DEK alongside ciphertext
- Implement key caching to reduce KMS API calls
- Handle key rotation with automatic re-encryption
- Implement multi-region encryption for disaster recovery

## Key Concepts

### Envelope Encryption Flow

1. Call `kms:GenerateDataKey` to get plaintext DEK + encrypted DEK
2. Use plaintext DEK to encrypt data locally (AES-256-GCM)
3. Store encrypted DEK alongside ciphertext
4. Discard plaintext DEK from memory
5. For decryption: call `kms:Decrypt` on encrypted DEK, then decrypt data

### Advantages Over Direct KMS Encryption

| Aspect | Direct KMS | Envelope Encryption |
|--------|-----------|-------------------|
| Max data size | 4 KB | Unlimited |
| Latency | Network round-trip per operation | Local encryption |
| Cost | $0.03/10,000 requests | Fewer KMS requests |
| Offline | Not possible | Yes (with cached DEKs) |

### KMS Key Types

- **AWS Managed**: AWS creates and manages (`aws/s3`, `aws/ebs`)
- **Customer Managed**: You create and manage policies
- **Custom Key Store**: Backed by CloudHSM cluster

## Security Considerations

- Never store plaintext DEK; only keep encrypted DEK
- Use key policies to restrict who can call GenerateDataKey and Decrypt
- Enable AWS CloudTrail logging for all KMS API calls
- Implement key rotation (automatic annual rotation for CMKs)
- Use encryption context for authenticated encryption metadata
- Handle KMS throttling with exponential backoff

## Validation Criteria

- [ ] GenerateDataKey returns plaintext and encrypted DEK
- [ ] Data encrypts correctly with plaintext DEK using AES-256-GCM
- [ ] Encrypted DEK can be decrypted via KMS Decrypt API
- [ ] Decrypted DEK recovers the original data
- [ ] Plaintext DEK is wiped from memory after use
- [ ] Encryption context is validated during decryption
- [ ] Key rotation re-encrypts DEKs with new master key
