---
slug: metalbear-co-mirrord-mirrord-mcp-corpus-skills-mirrord-header-propagation
name: mirrord-header-propagation
tagline: Makes a codebase propagate W3C baggage (the `baggage` header carrying
  `mirrord-session=<key>`) end to end, so mirrord HTTP filters, preview
  environmen
categories:
  - dev-tools
status: active
quality_percentile: 38
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:22:24.653Z
source:
  kind: github_repo
  repo: metalbear-co/mirrord
  subpath: mirrord/mcp/corpus/skills/mirrord-header-propagation
  official_vendor: false
  license: MIT
signals:
  stars: 5365
  last_commit: 2026-10-13T15:20:03Z
type: agent_skill
skill:
  skill_name: mirrord-header-propagation
  description: >
    Makes a codebase propagate W3C baggage (the `baggage` header carrying
    `mirrord-session=<key>`) end to end, so mirrord HTTP filters, preview
    environments, and queue splitting can route a whole request chain to one
    developer's session. Detects existing OpenTelemetry, Datadog, or other
    tracing that can already propagate baggage and enables it; otherwise adds a
    small propagation layer. Covers inbound/outbound HTTP and gRPC, publishing
    to and consuming from Kafka, RabbitMQ, SQS/SNS, GCP Pub/Sub, Azure Service
    Bus, NATS, Redis Pub/Sub, BullMQ and Temporal, per-message context restore
    in consumers, and storage hand-offs such as a GCS signed URL upload that
    triggers Pub/Sub or an S3 presigned upload that triggers SQS. Ends with a
    report of every flow found and which ones still drop the header. Use when
    the user asks to propagate headers, baggage, tracestate, the mirrord session
    key, or trace context across services or queues, or when a mirrord filter
    matches the first service but not downstream services or queue consumers.
  folder_path: mirrord/mcp/corpus/skills/mirrord-header-propagation
  extra_files:
    - README.md
    - references/libraries.md
    - references/propagation-layer.md
    - references/storage-handoffs.md
---

Makes a codebase propagate W3C baggage (the `baggage` header carrying `mirrord-session=<key>`) end to end, so mirrord HTTP filters, preview environments, and queue splitting can route a whole request chain to one developer's session. Detects existing OpenTelemetry, Datadog, or other tracing that can already propagate baggage and enables it; otherwise adds a small propagation layer. Covers inbound/outbound HTTP and gRPC, publishing to and consuming from Kafka, RabbitMQ, SQS/SNS, GCP Pub/Sub, Azure Service Bus, NATS, Redis Pub/Sub, BullMQ and Temporal, per-message context restore in consumers, and storage hand-offs such as a GCS signed URL upload that triggers Pub/Sub or an S3 presigned upload that triggers SQS. Ends with a report of every flow found and which ones still drop the header. Use when the user asks to propagate headers, baggage, tracestate, the mirrord session key, or trace context across services or queues, or when a mirrord filter matches the first service but not downstream services or queue consumers.

