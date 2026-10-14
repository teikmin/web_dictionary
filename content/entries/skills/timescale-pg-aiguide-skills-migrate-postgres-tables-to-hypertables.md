---
slug: timescale-pg-aiguide-skills-migrate-postgres-tables-to-hypertables
name: migrate-postgres-tables-to-hypertables
tagline: >-
  Use this skill to migrate identified PostgreSQL tables to
  Timescale/TimescaleDB hypertables with optimal configuration and validation.


  **Trigger when
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
  subpath: skills/migrate-postgres-tables-to-hypertables
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1866
  last_commit: 2026-10-07T20:18:02Z
type: agent_skill
skill:
  skill_name: migrate-postgres-tables-to-hypertables
  description: >
    Use this skill to migrate identified PostgreSQL tables to
    Timescale/TimescaleDB hypertables with optimal configuration and validation.


    **Trigger when user asks to:**

    - Migrate or convert PostgreSQL tables to hypertables

    - Execute hypertable migration with minimal downtime

    - Plan blue-green migration for large tables

    - Validate hypertable migration success

    - Configure compression after migration


    **Prerequisites:** Tables already identified as candidates (use
    find-hypertable-candidates first if needed)


    **Keywords:** migrate to hypertable, convert table, Timescale, TimescaleDB,
    blue-green migration, in-place conversion, create_hypertable, migration
    validation, compression setup


    Step-by-step migration planning including: partition column selection, chunk
    interval calculation, PK/constraint handling, migration execution (in-place
    vs blue-green), and performance validation queries.
  folder_path: skills/migrate-postgres-tables-to-hypertables
  extra_files: []
---

Use this skill to migrate identified PostgreSQL tables to Timescale/TimescaleDB hypertables with optimal configuration and validation.

**Trigger when user asks to:**
- Migrate or convert PostgreSQL tables to hypertables
- Execute hypertable migration with minimal downtime
- Plan blue-green migration for large tables
- Validate hypertable migration success
- Configure compression after migration

**Prerequisites:** Tables already identified as candidates (use find-hypertable-candidates first if needed)

**Keywords:** migrate to hypertable, convert table, Timescale, TimescaleDB, blue-green migration, in-place conversion, create_hypertable, migration validation, compression setup

Step-by-step migration planning including: partition column selection, chunk interval calculation, PK/constraint handling, migration execution (in-place vs blue-green), and performance validation queries.

