---
slug: dotnet-skills-agents-skills-authoring-github-workflows
name: skills
tagline: Repository for skills to assist AI coding agents with .NET and C#
categories:
  - ai-frameworks
status: active
quality_percentile: 66
selection_reason: quality_percentile
first_seen: 2026-02-03T22:51:09Z
last_updated: 2026-10-08T15:17:45.934Z
source:
  kind: github_repo
  repo: dotnet/skills
  subpath: .agents/skills/authoring-github-workflows
  license: MIT
signals:
  stars: 5571
  last_commit: 2026-10-07T15:56:57Z
type: agent_skill
skill:
  skill_name: authoring-github-workflows
  description: "Author and review GitHub Actions workflow YAML safely so
    syntactically-valid YAML can't ship a workflow that GitHub Actions refuses
    to run. USE FOR: editing, adding, or reviewing any file under
    .github/workflows/, writing run-name/name/if/env/run values that contain ${{
    }} expressions, diagnosing a run that fails with 'This run likely failed
    because of a workflow file issue' and no jobs starting, deciding when a
    workflow scalar must be quoted, validating workflows with actionlint. DO NOT
    USE FOR: authoring application YAML unrelated to GitHub Actions, Azure
    Pipelines, GitLab CI, or non-workflow YAML. SCOPE: this skill covers
    *syntactic/structural* correctness of workflow YAML (quoting, parsing,
    actionlint); for *semantic and functional* workflow design (what a workflow
    should do, agentic-workflow behavior), see
    .github/agents/agentic-workflows.agent.md — the two are complementary.
    INVOKES: actionlint (downloaded pinned binary) plus git/grep for
    inspection."
  folder_path: .agents/skills/authoring-github-workflows
  extra_files: []
---

Author and review GitHub Actions workflow YAML safely so syntactically-valid YAML can't ship a workflow that GitHub Actions refuses to run. USE FOR: editing, adding, or reviewing any file under .github/workflows/, writing run-name/name/if/env/run values that contain ${{ }} expressions, diagnosing a run that fails with 'This run likely failed because of a workflow file issue' and no jobs starting, deciding when a workflow scalar must be quoted, validating workflows with actionlint. DO NOT USE FOR: authoring application YAML unrelated to GitHub Actions, Azure Pipelines, GitLab CI, or non-workflow YAML. SCOPE: this skill covers *syntactic/structural* correctness of workflow YAML (quoting, parsing, actionlint); for *semantic and functional* workflow design (what a workflow should do, agentic-workflow behavior), see .github/agents/agentic-workflows.agent.md — the two are complementary. INVOKES: actionlint (downloaded pinned binary) plus git/grep for inspection.
