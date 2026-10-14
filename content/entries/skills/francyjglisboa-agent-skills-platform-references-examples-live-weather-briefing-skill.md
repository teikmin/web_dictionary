---
slug: francyjglisboa-agent-skills-platform-references-examples-live-weather-briefing-skill
name: live-weather-briefing-skill
tagline: Create a current, source-linked weather briefing for a named city using
  the Open-Meteo geocoding and forecast APIs. Activate for requests such as "wha
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
  subpath: references/examples/live-weather-briefing-skill
  official_vendor: false
  license: MIT
signals:
  stars: 2403
  last_commit: 2026-09-15T17:31:46Z
type: agent_skill
skill:
  skill_name: live-weather-briefing-skill
  description: Create a current, source-linked weather briefing for a named city
    using the Open-Meteo geocoding and forecast APIs. Activate for requests such
    as "what is the weather in Sao Paulo?", "prepare a current weather briefing
    for Tokyo", or "get today's live conditions for New York". Do not use for
    travel booking, weather alerts, historical climatology, or safety-critical
    decisions.
  folder_path: references/examples/live-weather-briefing-skill
  extra_files:
    - .claude-plugin/marketplace.json
    - .claude-plugin/plugin.json
    - AGENTS.md
    - EVOLUTION.md
    - README.md
    - VERIFICATION.md
    - contracts/data_contract_open_meteo/.contract_id
    - contracts/data_contract_open_meteo/code/contract_health.py
    - discovery.json
    - evals/corrections/correction-20260827-135741-90678cdffd.json
---

Create a current, source-linked weather briefing for a named city using the Open-Meteo geocoding and forecast APIs. Activate for requests such as "what is the weather in Sao Paulo?", "prepare a current weather briefing for Tokyo", or "get today's live conditions for New York". Do not use for travel booking, weather alerts, historical climatology, or safety-critical decisions.
