---
slug: davepoon-buildwithclaude-plugins-gsd-skills-inbox
name: gsd:inbox
tagline: Triage and review all open GitHub issues and PRs against project
  templates and contribution guidelines
summary: One-command triage of the project's GitHub inbox. Fetches all open
  issues and PRs, reviews each against the corresponding template requirements
  (feature, enhancement, bug, chore, fix PR, enhancement PR, feature PR), r...
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/gsd/skills/inbox
  official_vendor: false
  license: MIT
signals:
  stars: 3650
  last_commit: 2026-10-18T23:51:10Z
  stars_delta_7d: 19
  stars_growth_pct: 0.5
  trending_score: 19.1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/gsd/skills/inbox/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:33:26.906Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:inbox
  description: Triage and review all open GitHub issues and PRs against project
    templates and contribution guidelines
  folder_path: plugins/gsd/skills/inbox
  extra_files: []
  pack_total_skills: 400
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

<objective>
One-command triage of the project's GitHub inbox. Fetches all open issues and PRs,
reviews each against the corresponding template requirements (feature, enhancement,
bug, chore, fix PR, enhancement PR, feature PR), reports completeness and compliance,
and optionally applies labels or closes non-compliant submissions.

**Flow:** Detect repo → Fetch open issues + PRs → Classify each by type → Review against template → Report findings → Optionally act (label, comment, close)
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/inbox.md
</execution_context>

<context>
**Flags:**
- `--issues` — Review only issues (skip PRs)
- `--prs` — Review only PRs (skip issues)
- `--label` — Auto-apply recommended labels after review
- `--close-incomplete` — Close issues/PRs that fail template compliance (with comment explaining why)
- `--repo owner/repo` — Override auto-detected repository (defaults to current git remote)
</context>

<process>
Execute the inbox workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/inbox.md end-to-end.
Parse flags from arguments and pass to workflow.
</process>
