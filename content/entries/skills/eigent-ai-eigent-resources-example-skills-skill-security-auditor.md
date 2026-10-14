---
slug: eigent-ai-eigent-resources-example-skills-skill-security-auditor
name: skill-security-auditor
tagline: "Security auditing for code, configs, and infrastructure. Use when the
  user wants to audit or improve security: scan for vulnerabilities (SQL
  injection"
categories:
  - security
status: active
quality_percentile: 75
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: eigent-ai/eigent
  subpath: resources/example-skills/skill-security-auditor
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 15514
  last_commit: 2026-10-13T12:26:39Z
type: agent_skill
skill:
  skill_name: skill-security-auditor
  description: 'Security auditing for code, configs, and infrastructure. Use when
    the user wants to audit or improve security: scan for vulnerabilities (SQL
    injection, XSS, command injection, path traversal), detect hardcoded secrets
    and credentials, review auth and authorization, check dependencies for known
    CVEs, audit config files for insecure defaults, or generate security
    reports. Trigger on "security audit", "vulnerability scan", "code review for
    security", "find secrets", "check for vulnerabilities", "OWASP", "CVE", or
    questions about code security.'
  folder_path: resources/example-skills/skill-security-auditor
  extra_files:
    - LICENSE.txt
    - references/secrets-patterns.md
    - references/vulnerability-patterns.md
    - scripts/scan_project.py
    - scripts/scan_secrets.py
---

Security auditing for code, configs, and infrastructure. Use when the user wants to audit or improve security: scan for vulnerabilities (SQL injection, XSS, command injection, path traversal), detect hardcoded secrets and credentials, review auth and authorization, check dependencies for known CVEs, audit config files for insecure defaults, or generate security reports. Trigger on "security audit", "vulnerability scan", "code review for security", "find secrets", "check for vulnerabilities", "OWASP", "CVE", or questions about code security.
