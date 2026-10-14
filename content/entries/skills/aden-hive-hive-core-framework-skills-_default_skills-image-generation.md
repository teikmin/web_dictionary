---
slug: aden-hive-hive-core-framework-skills-_default_skills-image-generation
name: hive.image-generation
tagline: Required before calling image_generate. Create and edit images from a
  prompt — generate an image, make a picture / logo / illustration / icon /
  banner
categories:
  - ai-frameworks
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: aden-hive/hive
  subpath: core/framework/skills/_default_skills/image-generation
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 11099
  last_commit: 2026-10-12T11:34:20Z
type: agent_skill
skill:
  skill_name: hive.image-generation
  description: Required before calling image_generate. Create and edit images from
    a prompt — generate an image, make a picture / logo / illustration / icon /
    banner / poster / thumbnail / hero image / mockup / product shot / social
    graphic, or edit / restyle / combine existing images from reference images.
    Uses OpenAI gpt-image-2 through the Hive image service, billed to the user's
    Hive credits like an LLM call (no API key needed). Teaches the exact call
    shape, the quality/cost tradeoff (quality="low" is the default and
    cheapest), reference-image editing, how to show the result to the user with
    attach_file, and the failure modes (out of credits, model unavailable,
    moderation).
  folder_path: core/framework/skills/_default_skills/image-generation
  extra_files: []
---

Required before calling image_generate. Create and edit images from a prompt — generate an image, make a picture / logo / illustration / icon / banner / poster / thumbnail / hero image / mockup / product shot / social graphic, or edit / restyle / combine existing images from reference images. Uses OpenAI gpt-image-2 through the Hive image service, billed to the user's Hive credits like an LLM call (no API key needed). Teaches the exact call shape, the quality/cost tradeoff (quality="low" is the default and cheapest), reference-image editing, how to show the result to the user with attach_file, and the failure modes (out of credits, model unavailable, moderation).
