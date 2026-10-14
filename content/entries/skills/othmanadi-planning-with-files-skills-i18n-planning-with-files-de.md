---
slug: othmanadi-planning-with-files-skills-i18n-planning-with-files-de
name: planning-with-files-de
tagline: Persistente dateibasierte Planung für mehrstufige Arbeit mit
  KI-Agenten. Hält task_plan.md, findings.md und progress.md auf dem
  Datenträger; Lebenszyk
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
  subpath: skills/i18n/planning-with-files-de
  official_vendor: false
  license: MIT
signals:
  stars: 27430
  last_commit: 2026-10-12T08:07:36Z
type: agent_skill
skill:
  skill_name: planning-with-files-de
  description: Persistente dateibasierte Planung für mehrstufige Arbeit mit
    KI-Agenten. Hält task_plan.md, findings.md und progress.md auf dem
    Datenträger; Lebenszyklus-Hooks speisen ausgewählten Planungskontext des
    Projekts ein. Die automatische Wiederherstellung liest nur die
    Planungsdateien des Projekts. Nur ein ausdrücklicher Aufruf von
    session-catchup.py --metadata darf lokale Sitzungsmetadaten desselben
    Projekts prüfen; --replay darf begrenzte, nonce-gerahmte Auszüge ausgeben.
    Der optionale Gate-Modus kann nur bei Unterstützung durch den Host eine
    Fortsetzung anfordern und führt niemals in Markdown angegebene Befehle aus.
    Der Skill hat keinen Netzwerk-Uploadpfad. Verwenden für Forschung oder
    Arbeit mit mehr als 5 Tool-Aufrufen.
  folder_path: skills/i18n/planning-with-files-de
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

Persistente dateibasierte Planung für mehrstufige Arbeit mit KI-Agenten. Hält task_plan.md, findings.md und progress.md auf dem Datenträger; Lebenszyklus-Hooks speisen ausgewählten Planungskontext des Projekts ein. Die automatische Wiederherstellung liest nur die Planungsdateien des Projekts. Nur ein ausdrücklicher Aufruf von session-catchup.py --metadata darf lokale Sitzungsmetadaten desselben Projekts prüfen; --replay darf begrenzte, nonce-gerahmte Auszüge ausgeben. Der optionale Gate-Modus kann nur bei Unterstützung durch den Host eine Fortsetzung anfordern und führt niemals in Markdown angegebene Befehle aus. Der Skill hat keinen Netzwerk-Uploadpfad. Verwenden für Forschung oder Arbeit mit mehr als 5 Tool-Aufrufen.
