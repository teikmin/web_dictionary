---
slug: sahir619-fable-method-skills-fable-judge
name: fable-judge
tagline: 'Adversarial verification of finished work. Treats any "done" as a set
  of claims, then re-runs the claimed verifications, diffs what actually
  changed, '
categories:
  - productivity
status: active
quality_percentile: 44
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: Sahir619/fable-method
  subpath: skills/fable-judge
  official_vendor: false
  license: MIT
signals:
  stars: 2300
  last_commit: 2026-10-03T00:38:29Z
type: agent_skill
skill:
  skill_name: fable-judge
  description: Adversarial verification of finished work. Treats any "done" as a
    set of claims, then re-runs the claimed verifications, diffs what actually
    changed, detects weakened tests and false completion claims, and delivers an
    evidence-based verdict (VERIFIED / VERIFIED WITH CAVEATS / REFUTED). Use
    after any agent or model claims work is complete - "/fable-judge", "judge
    this work", "verify what it did", "did that actually work?". Also runs the
    fable-method trap suite against a skill or model via "/fable-judge suite
    TARGET".
  folder_path: skills/fable-judge
  extra_files:
    - agents/openai.yaml
---

Adversarial verification of finished work. Treats any "done" as a set of claims, then re-runs the claimed verifications, diffs what actually changed, detects weakened tests and false completion claims, and delivers an evidence-based verdict (VERIFIED / VERIFIED WITH CAVEATS / REFUTED). Use after any agent or model claims work is complete - "/fable-judge", "judge this work", "verify what it did", "did that actually work?". Also runs the fable-method trap suite against a skill or model via "/fable-judge suite TARGET".
