---
slug: mukul975-anthropic-cybersecurity-skills-skills-abusing-dpapi-for-credential-access
name: Anthropic-Cybersecurity-Skills
tagline: "817 structured cybersecurity skills for AI agents · Mapped to 6
  frameworks: MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, D3FEND, NIST AI RMF &
  MITRE F3 (F"
categories:
  - security
  - ai-frameworks
  - dev-tools
status: active
quality_percentile: 61
selection_reason: quality_percentile
first_seen: 2026-02-25T09:47:50Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: mukul975/Anthropic-Cybersecurity-Skills
  subpath: skills/abusing-dpapi-for-credential-access
  license: Apache-2.0
signals:
  stars: 33900
  last_commit: 2026-08-31T04:32:44Z
type: agent_skill
skill:
  skill_name: abusing-dpapi-for-credential-access
  description: Extract and decrypt Windows DPAPI-protected secrets (Credential
    Manager, browser logins/cookies, Wi-Fi credentials, KeePass keys) online or
    offline using SharpDPAPI, SharpChrome, Mimikatz, or Impacket's dpapi.py,
    including domain-wide decryption via the DPAPI backup key. Use during
    authorized red-team credential-access engagements after gaining a foothold
    or when triaging DPAPI blobs pulled from a host.
  folder_path: skills/abusing-dpapi-for-credential-access
  extra_files:
    - LICENSE
    - references/api-reference.md
    - references/standards.md
    - scripts/agent.py
---

Extract and decrypt Windows DPAPI-protected secrets (Credential Manager, browser logins/cookies, Wi-Fi credentials, KeePass keys) online or offline using SharpDPAPI, SharpChrome, Mimikatz, or Impacket's dpapi.py, including domain-wide decryption via the DPAPI backup key. Use during authorized red-team credential-access engagements after gaining a foothold or when triaging DPAPI blobs pulled from a host.
