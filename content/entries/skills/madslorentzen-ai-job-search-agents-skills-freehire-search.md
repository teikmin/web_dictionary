---
slug: madslorentzen-ai-job-search-agents-skills-freehire-search
name: ai-job-search
tagline: "The job search that runs on your machine. AI job application framework
  built on Claude Code: evaluate postings, tailor CVs, write cover letters, prep
  "
categories:
  - ai-frameworks
  - productivity
status: active
quality_percentile: 100
selection_reason: quality_percentile
first_seen: 2026-03-18T14:33:04Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: MadsLorentzen/ai-job-search
  subpath: .agents/skills/freehire-search
  license: MIT
signals:
  stars: 45190
  last_commit: 2026-10-05T17:27:43Z
type: agent_skill
skill:
  skill_name: freehire-search
  description: >
    Use this skill to search live software / tech / data / engineering job
    listings across many countries and markets (and remote) via the freehire.me
    aggregator's public API, or to look up a specific posting. It aggregates
    roles from ~50 ATS platforms into one schema, so a single skill covers many
    markets — but its faceted filtering (skills, category, seniority) is tuned
    tech-first, so scope triggers to technical roles. Trigger phrases: find a
    tech job, software job search, developer jobs, engineering vacancies,
    data/ML jobs, DevOps roles, remote developer jobs, "are there any <tech
    role> jobs in <place>", look up this freehire job posting.
  folder_path: .agents/skills/freehire-search
  extra_files:
    - cli/README.md
    - cli/package.json
    - cli/src/cli.ts
    - cli/src/commands/detail.ts
    - cli/src/commands/search.ts
    - cli/src/helpers.ts
    - cli/tests/cli-flag-validation.test.ts
    - cli/tests/commands.test.ts
    - cli/tests/helpers.ts
    - cli/tests/parsing.test.ts
---

Use this skill to search live software / tech / data / engineering job listings across many countries and markets (and remote) via the freehire.me aggregator's public API, or to look up a specific posting. It aggregates roles from ~50 ATS platforms into one schema, so a single skill covers many markets — but its faceted filtering (skills, category, seniority) is tuned tech-first, so scope triggers to technical roles. Trigger phrases: find a tech job, software job search, developer jobs, engineering vacancies, data/ML jobs, DevOps roles, remote developer jobs, "are there any <tech role> jobs in <place>", look up this freehire job posting.

