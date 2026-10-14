---
slug: othmanadi-planning-with-files-skills-i18n-planning-with-files-es
name: planning-with-files-es
tagline: Planificación persistente basada en archivos para tareas multipaso de
  agentes de IA. Mantiene task_plan.md, findings.md y progress.md en disco; los
  ho
categories:
  - dev-tools
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: OthmanAdi/planning-with-files
  subpath: skills/i18n/planning-with-files-es
  official_vendor: false
  license: MIT
signals:
  stars: 27430
  last_commit: 2026-10-12T08:07:36Z
type: agent_skill
skill:
  skill_name: planning-with-files-es
  description: Planificación persistente basada en archivos para tareas multipaso
    de agentes de IA. Mantiene task_plan.md, findings.md y progress.md en disco;
    los hooks del ciclo de vida inyectan contexto seleccionado de planificación
    del proyecto. La recuperación automática solo lee los archivos de
    planificación del proyecto. session-catchup.py --metadata, solicitado de
    forma explícita, puede inspeccionar metadatos locales de sesiones del mismo
    proyecto; --replay puede emitir extractos limitados y enmarcados con nonce.
    El modo con gate opcional solo puede solicitar que el host continúe si este
    lo admite y nunca ejecuta comandos declarados en Markdown. El skill no tiene
    ninguna ruta de carga por red. Úsalo para investigación o trabajo que
    requiera 5 o más llamadas a herramientas.
  folder_path: skills/i18n/planning-with-files-es
  extra_files:
    - scripts/attest-plan.ps1
    - scripts/attest-plan.sh
    - scripts/check-complete.ps1
    - scripts/check-complete.sh
    - scripts/gate-stop.sh
    - scripts/init-session.ps1
    - scripts/init-session.sh
    - scripts/inject-plan.py
    - scripts/inject-plan.sh
    - scripts/ledger-append.ps1
---

Planificación persistente basada en archivos para tareas multipaso de agentes de IA. Mantiene task_plan.md, findings.md y progress.md en disco; los hooks del ciclo de vida inyectan contexto seleccionado de planificación del proyecto. La recuperación automática solo lee los archivos de planificación del proyecto. session-catchup.py --metadata, solicitado de forma explícita, puede inspeccionar metadatos locales de sesiones del mismo proyecto; --replay puede emitir extractos limitados y enmarcados con nonce. El modo con gate opcional solo puede solicitar que el host continúe si este lo admite y nunca ejecuta comandos declarados en Markdown. El skill no tiene ninguna ruta de carga por red. Úsalo para investigación o trabajo que requiera 5 o más llamadas a herramientas.
