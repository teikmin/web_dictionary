---
slug: francyjglisboa-agent-skills-platform-references-examples-github-release-briefing-skill
name: github-release-briefing-skill
tagline: Create a source-linked briefing for the latest published GitHub release
  of a public repository. Use for engineering teams tracking a dependency releas
categories:
  - dev-tools
status: active
quality_percentile: 31
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: FrancyJGLisboa/agent-skills-platform
  subpath: references/examples/github-release-briefing-skill
  official_vendor: false
  license: MIT
signals:
  stars: 2403
  last_commit: 2026-09-15T17:31:46Z
type: agent_skill
skill:
  skill_name: github-release-briefing-skill
  description: Create a source-linked briefing for the latest published GitHub
    release of a public repository. Use for engineering teams tracking a
    dependency release; do not use it to publish releases or change
    repositories.
  folder_path: references/examples/github-release-briefing-skill
  extra_files:
    - AGENTS.md
    - README.md
    - VERIFICATION.md
    - contracts/data_contract_github_releases/.contract_id
    - contracts/data_contract_github_releases/code/contract_health.py
    - discovery.json
    - evals/caliper/github-release-briefing-skill.eval.yaml
    - evals/github-release-briefing.eval.md
    - evals/golden/anthropic-sdk-python/input.txt
    - evals/golden/flask/input.txt
---

Create a source-linked briefing for the latest published GitHub release of a public repository. Use for engineering teams tracking a dependency release; do not use it to publish releases or change repositories.
