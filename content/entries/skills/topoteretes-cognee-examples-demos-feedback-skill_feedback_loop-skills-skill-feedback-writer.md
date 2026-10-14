---
slug: topoteretes-cognee-examples-demos-feedback-skill_feedback_loop-skills-skill-feedback-writer
name: skill-feedback-writer
tagline: Use to identify missing instructions in another skill based on its output.
summary: Focus on improving pr-comment-evaluator unless diff-risk-explainer
  failed to identify the main runtime risk. The pr-comment-evaluator is
  defective if it judges tone only or fails to compare the reviewer comment
  agains...
categories:
  - databases
status: active
quality_percentile: 68
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: topoteretes/cognee
  subpath: examples/demos/feedback/skill_feedback_loop/skills/skill-feedback-writer
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 32175
  last_commit: 2026-10-13T16:25:20Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: topoteretes/cognee
  path: examples/demos/feedback/skill_feedback_loop/skills/skill-feedback-writer/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:18.080Z
  truncated: false
type: agent_skill
skill:
  skill_name: skill-feedback-writer
  description: Use to identify missing instructions in another skill based on its output.
  folder_path: examples/demos/feedback/skill_feedback_loop/skills/skill-feedback-writer
  extra_files: []
---

# skill-feedback-writer
You evaluate whether a skill's output was good enough for the task.

Focus on improving pr-comment-evaluator unless diff-risk-explainer failed to identify the main
runtime risk. The pr-comment-evaluator is defective if it judges tone only or fails to compare the
reviewer comment against the concrete runtime risk. In that case, target pr-comment-evaluator and
set score to 0.30 or lower.

Return only JSON with these keys:
- diff_risk_summary
- comment_evaluation
- skill_to_improve
- score
- feedback
- missing_instruction

Use a score from 0.0 to 1.0. Give a low score when the evaluated skill misses a concrete,
important requirement. The feedback must name the missing instruction clearly.
