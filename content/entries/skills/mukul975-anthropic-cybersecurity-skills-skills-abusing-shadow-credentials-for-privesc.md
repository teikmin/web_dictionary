---
slug: mukul975-anthropic-cybersecurity-skills-skills-abusing-shadow-credentials-for-privesc
name: abusing-shadow-credentials-for-privesc
tagline: Take over Active Directory accounts by writing attacker-controlled
  public keys to msDS-KeyCredentialLink (Shadow Credentials) with pyWhisker,
  Whisker,
categories:
  - security
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: mukul975/Anthropic-Cybersecurity-Skills
  subpath: skills/abusing-shadow-credentials-for-privesc
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 34367
  last_commit: 2026-08-31T04:32:44Z
type: agent_skill
skill:
  skill_name: abusing-shadow-credentials-for-privesc
  description: Take over Active Directory accounts by writing attacker-controlled
    public keys to msDS-KeyCredentialLink (Shadow Credentials) with pyWhisker,
    Whisker, or Certipy, then authenticate via PKINIT to recover the target's NT
    hash without a password reset. Use when BloodHound shows
    GenericWrite/GenericAll/AddKeyCredentialLink over a target, as a stealthier
    alternative to ForceChangePassword, during authorized red-team engagements.
  folder_path: skills/abusing-shadow-credentials-for-privesc
  extra_files:
    - LICENSE
    - references/api-reference.md
    - references/standards.md
    - scripts/agent.py
---

Take over Active Directory accounts by writing attacker-controlled public keys to msDS-KeyCredentialLink (Shadow Credentials) with pyWhisker, Whisker, or Certipy, then authenticate via PKINIT to recover the target's NT hash without a password reset. Use when BloodHound shows GenericWrite/GenericAll/AddKeyCredentialLink over a target, as a stealthier alternative to ForceChangePassword, during authorized red-team engagements.
