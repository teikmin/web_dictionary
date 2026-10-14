---
slug: dotnet-skills-plugins-dotnet-advanced-skills-nuget-trusted-publishing
name: nuget-trusted-publishing
tagline: "Set up NuGet trusted publishing (OIDC) on a GitHub Actions repo —
  replaces long-lived API keys with short-lived tokens. USE FOR: trusted
  publishing, N"
categories:
  - dev-tools
status: active
quality_percentile: 49
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: dotnet/skills
  subpath: plugins/dotnet-advanced/skills/nuget-trusted-publishing
  official_vendor: false
  license: MIT
signals:
  stars: 5617
  last_commit: 2026-10-13T16:25:34Z
type: agent_skill
skill:
  skill_name: nuget-trusted-publishing
  description: >
    Set up NuGet trusted publishing (OIDC) on a GitHub Actions repo — replaces
    long-lived API keys with short-lived tokens. USE FOR: trusted publishing,
    NuGet OIDC, keyless NuGet publish, migrate from NuGet API key, NuGet/login,
    secure NuGet publishing. DO NOT USE FOR: publishing to private feeds or
    Azure Artifacts (OIDC is nuget.org only). INVOKES: shell (powershell or
    bash), edit, create, ask_user for guided repo setup.
  folder_path: plugins/dotnet-advanced/skills/nuget-trusted-publishing
  extra_files:
    - references/package-types.md
    - references/publish-workflow.md
---

Set up NuGet trusted publishing (OIDC) on a GitHub Actions repo — replaces long-lived API keys with short-lived tokens. USE FOR: trusted publishing, NuGet OIDC, keyless NuGet publish, migrate from NuGet API key, NuGet/login, secure NuGet publishing. DO NOT USE FOR: publishing to private feeds or Azure Artifacts (OIDC is nuget.org only). INVOKES: shell (powershell or bash), edit, create, ask_user for guided repo setup.

