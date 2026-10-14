---
slug: timescale-pg-aiguide-skills-find-hypertable-candidates
name: find-hypertable-candidates
tagline: >-
  Use this skill to analyze an existing PostgreSQL database and identify which
  tables should be converted to Timescale/TimescaleDB hypertables.


  **Trigg
categories:
  - databases
status: active
quality_percentile: 43
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: timescale/pg-aiguide
  subpath: skills/find-hypertable-candidates
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1866
  last_commit: 2026-10-07T20:18:02Z
type: agent_skill
skill:
  skill_name: find-hypertable-candidates
  description: >
    Use this skill to analyze an existing PostgreSQL database and identify which
    tables should be converted to Timescale/TimescaleDB hypertables.


    **Trigger when user asks to:**

    - Analyze database tables for hypertable conversion potential

    - Identify time-series or event tables in an existing schema

    - Evaluate if a table would benefit from Timescale/TimescaleDB

    - Audit PostgreSQL tables for migration to Timescale/TimescaleDB/TigerData

    - Score or rank tables for hypertable candidacy



    **Keywords:** hypertable candidate, table analysis, migration assessment,
    Timescale, TimescaleDB, time-series detection, insert-heavy tables, event
    logs, audit tables


    Provides SQL queries to analyze table statistics, index patterns, and query
    patterns. Includes scoring criteria (8+ points = good candidate) and pattern
    recognition for IoT, events, transactions, and sequential data.
  folder_path: skills/find-hypertable-candidates
  extra_files: []
---

Use this skill to analyze an existing PostgreSQL database and identify which tables should be converted to Timescale/TimescaleDB hypertables.

**Trigger when user asks to:**
- Analyze database tables for hypertable conversion potential
- Identify time-series or event tables in an existing schema
- Evaluate if a table would benefit from Timescale/TimescaleDB
- Audit PostgreSQL tables for migration to Timescale/TimescaleDB/TigerData
- Score or rank tables for hypertable candidacy


**Keywords:** hypertable candidate, table analysis, migration assessment, Timescale, TimescaleDB, time-series detection, insert-heavy tables, event logs, audit tables

Provides SQL queries to analyze table statistics, index patterns, and query patterns. Includes scoring criteria (8+ points = good candidate) and pattern recognition for IoT, events, transactions, and sequential data.

