---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-memory-protection-with-dep-aslr
name: implementing-memory-protection-with-dep-aslr
tagline: Implements memory protection mechanisms including DEP (Data Execution
  Prevention), ASLR (Address Space Layout Randomization), CFG (Control Flow
  Guard)
summary: Use this skill when hardening endpoints against memory-based exploits
  by configuring DEP, ASLR, CFG, and Windows Exploit Protection system-wide and
  per-application mitigations.
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
  subpath: skills/implementing-memory-protection-with-dep-aslr
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
  path: skills/implementing-memory-protection-with-dep-aslr/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:39:20.896Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-memory-protection-with-dep-aslr
  description: >
    Implements memory protection mechanisms including DEP (Data Execution
    Prevention), ASLR (Address Space Layout Randomization), CFG (Control Flow
    Guard), and other exploit mitigations to prevent memory corruption attacks.
    Use when hardening endpoints against buffer overflow exploits, ROP chains,
    and code injection. Activates for requests involving memory protection,
    exploit mitigation, DEP, ASLR, or CFG configuration.
  folder_path: skills/implementing-memory-protection-with-dep-aslr
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

# Implementing Memory Protection with DEP and ASLR
## When to Use

Use this skill when hardening endpoints against memory-based exploits by configuring DEP, ASLR, CFG, and Windows Exploit Protection system-wide and per-application mitigations.

## Prerequisites

- Windows 10/11 or Windows Server 2016+ with administrative privileges
- Group Policy management access for enterprise-wide deployment
- Understanding of memory corruption attack techniques (buffer overflow, ROP chains)
- Test environment for validating application compatibility with exploit mitigations

## Workflow

### Step 1: Configure System-Level Mitigations

```powershell
# Enable system-wide DEP (Data Execution Prevention)
# Boot configuration: OptIn (default), OptOut (recommended), AlwaysOn
bcdedit /set nx AlwaysOn

# Verify ASLR status (enabled by default on modern Windows)
Get-ProcessMitigation -System
# MandatoryASLR, BottomUpASLR, HighEntropyASLR should be ON

# Enable all system-level mitigations
Set-ProcessMitigation -System -Enable DEP,SEHOP,ForceRelocateImages,BottomUp,HighEntropy
```

### Step 2: Configure Per-Application Mitigations

```powershell
# Harden high-risk applications (browsers, Office, PDF readers)
Set-ProcessMitigation -Name "WINWORD.EXE" -Enable DEP,SEHOP,ForceRelocateImages,CFG,StrictHandle
Set-ProcessMitigation -Name "EXCEL.EXE" -Enable DEP,SEHOP,ForceRelocateImages,CFG,StrictHandle
Set-ProcessMitigation -Name "AcroRd32.exe" -Enable DEP,SEHOP,ForceRelocateImages,CFG
Set-ProcessMitigation -Name "chrome.exe" -Enable DEP,CFG,ForceRelocateImages
Set-ProcessMitigation -Name "msedge.exe" -Enable DEP,CFG,ForceRelocateImages

# Export configuration for deployment
Get-ProcessMitigation -RegistryConfigFilePath "C:\exploit_protection.xml"
# Deploy via Intune or GPO
```

### Step 3: Deploy via Intune/GPO

```
Intune: Endpoint Security → Attack Surface Reduction → Exploit Protection
  Import exploit_protection.xml template

GPO: Computer Configuration → Admin Templates → Windows Components
  → Windows Defender Exploit Guard → Exploit Protection
  → "Use a common set of exploit protection settings" → Enabled
  → Point to XML file on network share
```

## Key Concepts

| Term | Definition |
|------|-----------|
| **DEP** | Marks memory pages as non-executable to prevent shellcode execution in data regions |
| **ASLR** | Randomizes memory addresses of loaded modules to defeat hardcoded ROP gadgets |
| **CFG** | Validates indirect call targets at runtime to prevent control flow hijacking |
| **SEHOP** | Validates SEH chain integrity to prevent SEH-based exploitation |

## Tools & Systems
- **Windows Exploit Protection**: Built-in per-process mitigation management
- **EMET (legacy)**: Enhanced Mitigation Experience Toolkit (predecessor, now deprecated)
- **ProcessMitigations PowerShell**: Get/Set-ProcessMitigation cmdlets

## Common Pitfalls
- **DEP compatibility**: Legacy 32-bit applications may crash with DEP AlwaysOn. Use OptOut with exceptions.
- **Mandatory ASLR breaking apps**: Some applications are not ASLR-compatible. Test before enforcing ForceRelocateImages.
- **CFG limited to compiled-in support**: CFG only works for applications compiled with /guard:cf. Cannot be retroactively applied.
