---
slug: othmanadi-planning-with-files-skills-i18n-planning-with-files-ar
name: planning-with-files-ar
tagline: "تخطيط مستمر قائم على الملفات لعمل وكلاء الذكاء الاصطناعي متعدد
  الخطوات. يحتفظ بملفات task_plan.md و findings.md و progress.md على القرص،
  وتحقن خطافات "
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
  subpath: skills/i18n/planning-with-files-ar
  official_vendor: false
  license: MIT
signals:
  stars: 27430
  last_commit: 2026-10-12T08:07:36Z
type: agent_skill
skill:
  skill_name: planning-with-files-ar
  description: تخطيط مستمر قائم على الملفات لعمل وكلاء الذكاء الاصطناعي متعدد
    الخطوات. يحتفظ بملفات task_plan.md و findings.md و progress.md على القرص،
    وتحقن خطافات دورة الحياة سياق التخطيط المحدد للمشروع. تقرأ الاستعادة
    التلقائية ملفات تخطيط المشروع فقط. يمكن للأمر الصريح session-catchup.py
    --metadata فحص بيانات وصفية لجلسات الوكيل المحلية التابعة للمشروع نفسه،
    بينما قد يصدر --replay مقتطفات محدودة مؤطرة بقيمة nonce. يمكن للوضع المحكوم
    الاختياري طلب المتابعة فقط عندما يدعمه المضيف، ولا ينفذ أبدًا أوامر معلنة في
    Markdown. لا تتضمن المهارة مسارًا لرفع البيانات عبر الشبكة. تُستخدم للبحث أو
    العمل الذي يحتاج إلى 5 استدعاءات أدوات أو أكثر.
  folder_path: skills/i18n/planning-with-files-ar
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

تخطيط مستمر قائم على الملفات لعمل وكلاء الذكاء الاصطناعي متعدد الخطوات. يحتفظ بملفات task_plan.md و findings.md و progress.md على القرص، وتحقن خطافات دورة الحياة سياق التخطيط المحدد للمشروع. تقرأ الاستعادة التلقائية ملفات تخطيط المشروع فقط. يمكن للأمر الصريح session-catchup.py --metadata فحص بيانات وصفية لجلسات الوكيل المحلية التابعة للمشروع نفسه، بينما قد يصدر --replay مقتطفات محدودة مؤطرة بقيمة nonce. يمكن للوضع المحكوم الاختياري طلب المتابعة فقط عندما يدعمه المضيف، ولا ينفذ أبدًا أوامر معلنة في Markdown. لا تتضمن المهارة مسارًا لرفع البيانات عبر الشبكة. تُستخدم للبحث أو العمل الذي يحتاج إلى 5 استدعاءات أدوات أو أكثر.
