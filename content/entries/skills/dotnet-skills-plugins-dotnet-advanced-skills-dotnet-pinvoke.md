---
slug: dotnet-skills-plugins-dotnet-advanced-skills-dotnet-pinvoke
name: dotnet-pinvoke
tagline: Correctly call native (C/C++) libraries from .NET using P/Invoke and
  LibraryImport. Covers function signatures, string marshalling, memory
  lifetime, S
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
  subpath: plugins/dotnet-advanced/skills/dotnet-pinvoke
  official_vendor: false
  license: MIT
signals:
  stars: 5617
  last_commit: 2026-10-13T16:25:34Z
type: agent_skill
skill:
  skill_name: dotnet-pinvoke
  description: >
    Correctly call native (C/C++) libraries from .NET using P/Invoke and
    LibraryImport. Covers function signatures, string marshalling, memory
    lifetime, SafeHandle, and cross-platform patterns. USE FOR: writing new
    P/Invoke or LibraryImport declarations, reviewing or debugging existing
    native interop code, wrapping a C or C++ library for use in .NET, diagnosing
    crashes, memory leaks, or corruption at the managed/native boundary. DO NOT
    USE FOR: COM interop, C++/CLI mixed-mode assemblies, or pure managed code
    with no native dependencies.
  folder_path: plugins/dotnet-advanced/skills/dotnet-pinvoke
  extra_files:
    - references/diagnostics.md
    - references/type-mapping.md
---

Correctly call native (C/C++) libraries from .NET using P/Invoke and LibraryImport. Covers function signatures, string marshalling, memory lifetime, SafeHandle, and cross-platform patterns. USE FOR: writing new P/Invoke or LibraryImport declarations, reviewing or debugging existing native interop code, wrapping a C or C++ library for use in .NET, diagnosing crashes, memory leaks, or corruption at the managed/native boundary. DO NOT USE FOR: COM interop, C++/CLI mixed-mode assemblies, or pure managed code with no native dependencies.

