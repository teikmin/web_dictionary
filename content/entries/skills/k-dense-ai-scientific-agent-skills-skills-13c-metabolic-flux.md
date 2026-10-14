---
slug: k-dense-ai-scientific-agent-skills-skills-13c-metabolic-flux
name: 13c-metabolic-flux
tagline: Estimates intracellular metabolic fluxes from steady-state carbon-13
  isotope-tracing measurements using validated atom maps, mfapy isotope
  simulation,
categories:
  - ai-frameworks
status: active
quality_percentile: 68
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: K-Dense-AI/scientific-agent-skills
  subpath: skills/13c-metabolic-flux
  official_vendor: false
  license: MIT
signals:
  stars: 48703
  last_commit: 2026-10-12T09:43:31Z
type: agent_skill
skill:
  skill_name: 13c-metabolic-flux
  description: Estimates intracellular metabolic fluxes from steady-state
    carbon-13 isotope-tracing measurements using validated atom maps, mfapy
    isotope simulation, constrained multistart fitting, and flux-profile
    diagnostics. Use for 13C-MFA, carbon tracing, mass isotopomer distributions
    (MDVs/MIDs), positional isotopomers, parallel tracer experiments, and
    determining whether labeling data constrain a pathway flux. Distinguishes
    measured-label inference from COBRA flux balance analysis and flags
    experiments requiring nonstationary MFA.
  folder_path: skills/13c-metabolic-flux
  extra_files:
    - assets/branch-fluxes.json
    - assets/branch-identifiable.json
    - assets/branch-model.json
    - assets/branch-unresolved.json
    - assets/mfapy-license.txt
    - assets/requirements.txt
    - assets/tca-fluxes.json
    - assets/tca-model.json
    - assets/tca-reference-mdv.json
    - assets/tca-tracer.json
---

Estimates intracellular metabolic fluxes from steady-state carbon-13 isotope-tracing measurements using validated atom maps, mfapy isotope simulation, constrained multistart fitting, and flux-profile diagnostics. Use for 13C-MFA, carbon tracing, mass isotopomer distributions (MDVs/MIDs), positional isotopomers, parallel tracer experiments, and determining whether labeling data constrain a pathway flux. Distinguishes measured-label inference from COBRA flux balance analysis and flags experiments requiring nonstationary MFA.
