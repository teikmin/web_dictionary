---
slug: nvidia-skills-skills-amc-run-rtsp-calibration
name: amc-run-rtsp-calibration
tagline: "Calibrate a new dataset from live RTSP camera streams via the
  AutoMagicCalib REST API. Use when the user provides RTSP URLs or asks to
  calibrate live "
categories:
  - dev-tools
status: active
quality_percentile: 54
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: NVIDIA/skills
  subpath: skills/amc-run-rtsp-calibration
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 3581
  last_commit: 2026-10-09T15:27:20Z
type: agent_skill
skill:
  skill_name: amc-run-rtsp-calibration
  description: Calibrate a new dataset from live RTSP camera streams via the
    AutoMagicCalib REST API. Use when the user provides RTSP URLs or asks to
    calibrate live cameras; VIOS records clips, AMC ingests them, then runs
    calibration.
  folder_path: skills/amc-run-rtsp-calibration
  extra_files:
    - BENCHMARK.md
    - evals/evals.json
    - scripts/run_rtsp_calibration.py
    - skill-card.md
    - skill.oms.sig
---

Calibrate a new dataset from live RTSP camera streams via the AutoMagicCalib REST API. Use when the user provides RTSP URLs or asks to calibrate live cameras; VIOS records clips, AMC ingests them, then runs calibration.
