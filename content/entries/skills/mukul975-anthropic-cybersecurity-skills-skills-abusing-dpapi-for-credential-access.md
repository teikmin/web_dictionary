---
slug: mukul975-anthropic-cybersecurity-skills-skills-abusing-dpapi-for-credential-access
name: abusing-dpapi-for-credential-access
tagline: Extract and decrypt Windows DPAPI-protected secrets (Credential
  Manager, browser logins/cookies, Wi-Fi credentials, KeePass keys) online or
  offline us
categories:
  - security
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-02-25T09:47:50
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: mukul975/Anthropic-Cybersecurity-Skills
  subpath: skills/abusing-dpapi-for-credential-access
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 34367
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
