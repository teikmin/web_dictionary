---
slug: deusdata-codebase-memory-mcp
name: codebase-memory-mcp
tagline: High-performance code intelligence MCP server. Indexes codebases into a
  persistent knowledge graph — average repo in milliseconds. 158 languages, sub-
summary: High-quality parsing through tree-sitter AST analysis across all 162
  languages, enhanced with Hybrid LSP semantic type resolution for Python,
  TypeScript / JavaScript / JSX / TSX, PHP, C#, Go, C, C++, Java, Kotlin, Rus...
categories:
  - databases
status: active
quality_percentile: 92
selection_reason: quality_percentile
first_seen: 2026-02-24T22:01:00
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: DeusData/codebase-memory-mcp
  official_vendor: false
  license: MIT
signals:
  stars: 46502
  last_commit: 2026-10-13T04:18:43Z
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: DeusData/codebase-memory-mcp
  path: README.md
  branch: main
  fetched_at: 2026-10-14T14:54:53.418Z
  truncated: true
type: mcp_server
launch:
  transport: stdio
  args: []
  env_vars: []
  confidence: none
---

# codebase-memory-mcp
**The fastest and most efficient code intelligence engine for AI coding agents.** Full-indexes an average repository in milliseconds, the Linux kernel (28M LOC, 75K files) in 3 minutes. Answers structural queries in under 1ms. Ships as a native executable with a small verified runtime-asset set for macOS, Linux, and Windows — download, run `install`, done.

High-quality parsing through [tree-sitter](https://tree-sitter.github.io/tree-sitter/) AST analysis across all 162 languages, enhanced with [**Hybrid LSP** semantic type resolution](#hybrid-lsp) for Python, TypeScript / JavaScript / JSX / TSX, PHP, C#, Go, C, C++, Java, Kotlin, Rust, and Perl — producing a persistent knowledge graph of functions, classes, call chains, HTTP routes, and cross-service links. 17 MCP tools. No language runtime, hosted service, or API key. Plug and play across 45 supported automatic/conditional client surfaces.

> **Research** — The design and benchmarks behind this project are described in the preprint [*Codebase-Memory: Tree-Sitter-Based Knowledge Graphs for LLM Code Exploration via MCP*](https://arxiv.org/abs/2603.27277) (arXiv:2603.27277). Evaluated across 31 real-world repositories: 83% answer quality, 10× fewer tokens, 2.1× fewer tool calls vs. file-by-file exploration.

> **Security & Trust** — This tool reads your codebase and writes to your agent configuration files. That is what it is designed to do. If you prefer to audit before running, the [full source is here](https://github.com/DeusData/codebase-memory-mcp). For each release product, three behaviourally identical executable candidates (unstripped, debug-stripped, stripped) are submitted to VirusTotal before testing; the selected candidate is then packaged with its SHA-256 unchanged. Release notes link every measured candidate result. Publication permits only the narrowly documented single-Microsoft `!ml` tolerance in [SECURITY.md](https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md#our-release-policy). All processing happens 100% locally; your code never leaves your machine. Found a security issue? We want to know — see [SECURITY.md](https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md). Security is Priority #1 for us.

<p align="center">
  <img src="https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/docs/graph-ui-screenshot.png" alt="Graph visualization UI showing the codebase-memory-mcp knowledge graph" width="800">
  <br>
  <em>Built-in 3D graph visualization — explore your knowledge graph at localhost:9749</em>
</p>

## Why codebase-memory-mcp

- **Extreme indexing speed** — Linux kernel (28M LOC, 75K files) in 3 minutes. RAM-first pipeline: LZ4 compression, in-memory SQLite, fused Aho-Corasick pattern matching. Memory released after indexing.
- **Plug and play** — native executable plus authenticated release-owned assets for macOS (arm64/amd64), Linux (arm64/amd64), and Windows (amd64). The native install needs no Docker, language runtime, or API keys. Download → `install` → restart agent → done.
- **162 languages** — vendored tree-sitter grammars compiled into the binary. Nothing to install, nothing that breaks.
- **120x fewer tokens** — 5 structural queries: ~3,400 tokens vs ~412,000 via file-by-file search. One graph query replaces dozens of grep/read cycles.
- **45 supported automatic/conditional client surfaces** — `install` configures detected clients and safely activates conditional clients only when their documented platform, marker, or explicit existing config path is present. See [Multi-Agent Support](#multi-agent-support) for the complete matrix and manual/UI-only boundaries.
- **CBM Atlas** — the built-in human interface at `localhost:9749`: a reading IDE over the index (explorer and read-only Monaco reader, a semantic twin that follows the caret, flow, bug-hunt and change-scope reading modes, the 3D galaxy, source-cited answers, project management), served from the binary itself.
- **Infrastructure-as-code indexing** — Dockerfiles, container images, docker compose, Kubernetes manifests, and Kustomize overlays indexed as graph nodes with cross-references. `Resource` nodes for K8s kinds and compose services, `Image` nodes joining the images that are built and run, `Module` nodes for Kustomize overlays with `IMPORTS` edges to referenced resources — a Service walks to the program its container runs.
- **17 MCP tools** — search, trace, architecture, impact analysis, targeted index-coverage checks, Cypher queries, dead code detection, cross-service HTTP linking, ADR management, and more.

## Quick Start

**One-line install** (macOS / Linux):
```bash
curl -fsSL https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.sh | bash
```

With graph visualization UI:
```bash
curl -fsSL https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.sh | bash
```

**Windows** (PowerShell):
```powershell
# 1. Download the installer
Invoke-WebRequest -Uri https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.ps1 -OutFile install.ps1

# 2. (Optional but recommended) Inspect the script
notepad install.ps1

# 3. Unblock the downloaded file (removes Mark-of-the-Web restriction added by browsers/Invoke-WebRequest)
Unblock-File .\install.ps1

# 4. Run it
.\install.ps1

```

> **Note:** If you see a script execution policy error, run `Set-ExecutionPolicy -Scope Process Bypass` first, or invoke with `PowerShell -ExecutionPolicy Bypass -File .\install.ps1`.

Options: `--skip-config` (binary only, no agent setup), `--dir=<path>` (custom location).

> **Antivirus note:** Microsoft Defender may flag a release binary as
> `Trojan:Script/Wacatac.B!ml`. This is a known false positive — typically 61 of
> ~62 engines return clean, and the same detection family hits `gh`, llama.cpp,
> Godot and Microsoft's own Go toolchain. See
> [Antivirus False Positives](https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md#antivirus-false-positives) for the
> evidence, how to verify the artifacts yourself, and how to report it if you
> think we are wrong.

Restart your coding agent. Say **"Index this project"** — done.

<details>
<summary>Manual install</summary>

1. **Download** the archive for your platform from the [latest release](https://github.com/DeusData/codebase-memory-mcp/releases/latest):
   - `codebase-memory-mcp-<os>-<arch>.tar.gz` (macOS/Linux) or `.zip` (Windows)

2. **Extract and install** (each archive includes `install.sh` or `install.ps1`):

   macOS / Linux:
   ```bash
   tar xzf codebase-memory-mcp-*.tar.gz
   ./install.sh
   ```

   Windows (PowerShell):
   ```powershell
   Expand-Archive codebase-memory-mcp-windows-amd64.zip -DestinationPath .
   Unblock-File .\install.ps1
   .\install.ps1
   ```

3. **Restart** your coding agent.

The `install` command automatically strips macOS quarantine attributes and ad-hoc signs the binary — no manual `xattr`/`codesign` needed.
</details>

The `install` command auto-detects installed coding agents and configures their documented MCP entries plus durable instructions, skills, and lifecycle hooks where supported.

### Session Coordination Daemon

CBM automatically shares one per-account coordination daemon across Claude Code, Codex, OpenCode, and every other configured client. There is no opt-in setting for MCP servers or hook clients: the first daemon-backed CBM session starts it, each session registers its own work, and the final session shuts it down. The daemon owns long-lived background services such as watchers, shared indexing jobs, and the optional UI. Closing one session cancels work owned only by that session, while work still needed by another session continues.

The detached daemon does not depend on an MCP frontend's stderr. It keeps owner-only durable records under the canonical `${CBM_CACHE_DIR}/logs` directory (default `~/.cache/codebase-memory-mcp/logs`):

| File | Contents |
|------|----------|
| `cbm-daemon.log` | Daemon lifecycle, watcher/indexing, UI, resource, and error events. |
| `daemon-conflicts.ndjson` | Exact-build, coordination-ABI, and cache-root admission conflicts. |
| `activation-events.ndjson` | Install/update/uninstall activation progress and outcomes. |

Thin frontends still write immediate startup and session-specific errors to their own stderr; MCP JSON-RPC stdout remains clean.

All active CBM processes must run the exact same version, executable build, coordination ABI, and canonical cache root. Equivalent `CBM_CACHE_DIR` aliases resolve to the same root; a genuinely different root is rejected while any CBM process is active. MCP servers, hooks, one-shot CLI commands, temporary index workers, and the daemon share a crash-safe OS admission barrier; starting an ordinary conflicting process fails before doing work and records an explicit conflict in `${CBM_CACHE_DIR}/logs/daemon-conflicts.ndjson`.

The native `install`, `update`, and `uninstall` commands are the deliberate exception to that conflict rule. Download, verification, and private same-filesystem staging happen first so a bad candidate never disrupts active work. Activation then publishes account-wide maintenance intent, asks the daemon and every temporary local operation to cancel, and waits to a finite deadline for all coordinated CBM processes to exit. It holds the admission and lifetime barriers exclusively while changing the active binary, configuration, PATH, or indexes. New CBM work cannot enter during this window. Activation progress and results are recorded in `${CBM_CACHE_DIR}/logs/activation-events.ndjson`, and a successful command tells you to restart open coding-agent sessions so they launch the activated build.

Package-manager setup (npm, PyPI, or Go) verifies and publishes a coherent private cached runtime set. Sidecars are replaced before the executable with per-file atomic renames; an interrupted multi-file publication is detected and repaired on the next launch rather than being described as one crash-atomic filesystem transaction. It does not replace the active native installation and therefore does not stop running CBM sessions. When that cached binary is executed, it still enters the same exact-build admission barrier. The shell and PowerShell installers invoke the verified candidate's native `install` command, so they do receive the full account-wide activation guarantee.

The ordinary `cli` mode runs one command locally, but it is not disconnected from the daemon above: it connects to the shared coordination daemon — starting one if none is already running — for that same admission barrier plus per-project locks on graph mutations. Its connection is a `cli_session`: it never registers with the background watcher and never starts a UI, and it holds the admission lease only for the command's lifetime. If the command's own connection is what started the daemon, that daemon exits again once the command closes and no other session is attached; if a daemon was already running, the command simply joins and leaves it exactly as found. While the command is running, a temporary monitor separately lets activation cancel that operation and its supervised worker safely; the monitor exits with the command and never becomes a standing daemon. See [CLI Mode](#cli-mode) for details.

### CBM Lens Beta — the human interface

The MCP tools are the agent's interface to the code graph; **CBM Lens Beta** is the human's. It is built into the binary — every install on every channel has it:

```bash
codebase-memory-mcp --ui=true --port=9749
```

Open `http://localhost:9749` in your browser. The UI is owned by the shared coordination daemon, so concurrent agent sessions do not start duplicate HTTP servers.

CBM Lens builds on **CodeAtlasWeb**, a reading IDE built by [Bernhard Jackiewicz](https://github.com/BernhardJackiewicz) on the CBM read surface (design and tracking in #1964). It runs air-gapped on loopback, reaches no cloud, and every panel names where its facts come from; what the index did not record is shown as a gap, never filled in with a guess.

When something in CBM Lens does not load, the page has already written it down: its console output, uncaught errors and failed requests go to `${CBM_CACHE_DIR}/logs/ui.log` (default `~/.cache/codebase-memory-mcp/logs/ui.log`, one JSON line per entry, rotated once at 5 MiB). The projects panel (alt+p) shows the tail under "This server", `GET http://localhost:9749/api/ui-log?lines=200` returns it, and a bug report can attach the file.

- **Explorer and reader** — the indexed file tree and a read-only Monaco reader whose source comes from the index.
- **Semantic twin** — follows the caret: what the symbol under it holds, calls, raises and touches, as facts or as pseudocode, pitched at who is reading.
- **Reading modes** — `[w]hy am I here` picks a way in (hunt a bug, scope a change, understand the project, pick an entry point); **flow** walks the calls in the order they run; **bug hunt** compares the expected path into a symbol with what `ingest_traces` observed; **change scope** shows what a change reaches and what covers it.
- **Galaxy** — the persistent 3D graph with focus following in both directions, and a hierarchy view of the entry subgraph.
- **Command line** — search by meaning while you type; a line ending in `?` builds a source-cited answer from indexed fact cards, with an optional local-model wording pass (a llama-server sidecar you start yourself; off by default, and no model or binary ships).
- **Live agents** — an opt-in overlay of AI agents working in the same repository, fed by a loopback bridge over tool-hook events (`graph-ui/agents/`).
- **`[p]rojects`** — index a repository, check or remove an index, edit the project's decision record, and see the server's processes and log.
- **`[?]help`** — what it reads, what it cannot do, and every key it listens to, derived from the wiring itself.

Open a project with `?project=<name>` in the address, or pick it in the projects panel. The frontend's own README, plan, honesty rules and recorded proof runs live under `graph-ui/`.

### Auto-Index

Enable automatic indexing on MCP session start:

```bash
codebase-memory-mcp config set auto_index true
```

When enabled, new projects are indexed automatically on first connection. Previously-indexed projects are registered with the background watcher for ongoing git-based change detection. Configurable file limit: `config set auto_index_limit 50000`.

The watcher follows MCP sessions: it watches the project each open MCP session is rooted in (the client's working directory) and stops when the last session for that project closes. A repository indexed with `cli index_repository`, or indexed from a session rooted somewhere else, is not watched — re-run `index_repository` after changing it. `index_status` reports this in its `watch` object: `watched`, and either the poll cadence and last scan time or the `reason` it is not watched.

Watcher registration is controlled separately by `auto_watch` (default `true`). Set `config set auto_watch false` to keep a session from registering its project with the background watcher — useful when working across many projects and you want each session contained to explicit indexing.

To turn the watcher off entirely, set `config set watcher_enabled false` (default `true`): the background poll thread never starts and no project is registered, while `auto_index` and manual `index_repository` keep working. Unlike `auto_watch` — which is consulted per session — `watcher_enabled` is read once when the background daemon starts, so run `codebase-memory-mcp daemon stop` after changing it; reconnecting your MCP client alone will not restart the daemon. See [docs/CONFIGURATION.md](https://github.com/DeusData/codebase-memory-mcp/blob/main/docs/CONFIGURATION.md#2-cli-managed-runtime-settings).

The watcher follows **git** projects only by default: a project indexed from a directory that is not a git repository is not watched and stays at its last index until you run `index_repository` again. To have such roots polled too, set `config set watch_non_git true` (default `false`, read when the daemon starts): they are then checked on the same cadence with a file-tree scan that uses the indexer's own ignore rules.

### Keeping Up to Date

**Updates run from the install script on every platform, not from inside the running binary.** `codebase-memory-mcp update` validates your flags and then prints the exact command to run:

```bash
# macOS / Linux
bash "<install-dir>/install.sh"
```

```powershell
# Windows
powershell -ExecutionPolicy Bypass -File "<install-dir>\install.ps1"
```

The install script is placed next to the binary at install time, so the printed path resolves beside the executable. It is idempotent, so re-running it *is* the update: it stops the daemon, retires the running binary, installs the new one, and cleans up.

Why it works this way. On Windows it is a hard requirement — a running executable cannot replace its own image, so the swap has to happen from a process that is not the binary being replaced. On macOS and Linux it is a deliberate choice: an in-process updater is structurally a downloader (fetch an archive, verify it, unpack it, mark a file executable, run it), and shipping that composite in every binary to serve a command most people run a handful of times is a poor trade. The release archives now carry no download URLs at all, and **cbm makes no network request of its own accord** — it does not check for new versions in the background, and nothing phones home. You find out about releases from the install script, your package manager, or GitHub.

If PowerShell refuses to run the script because the file came from the internet, `Unblock-File` it first.

Installed through **npm or pip**? Update with your package manager on every platform (`npm install -g codebase-memory-mcp@latest` / `pip install -U codebase-memory-mcp`).

### Uninstall

```bash
codebase-memory-mcp uninstall
```

Removes owned agent config entries, skills, hooks, instructions, and the installed binary. Existing graph indexes are listed and **kept by default**. `-y`/`--yes`, `-n`/`--no`, and noninteractive input keep them unless `--delete-indexes` is explicitly given. An interactive terminal without that flag is asked separately; the default answer is to keep them.

```bash
codebase-memory-mcp uninstall -y --delete-indexes   # also delete every project index
codebase-memory-mcp uninstall --dry-run --delete-indexes   # preview; change nothing
```

`--delete-indexes` is explicit consent and takes precedence over `--no`; `--dry-run` always preserves the files. When indexes are kept, uninstall prints their cache directory (`${CBM_CACHE_DIR:-~/.cache/codebase-memory-mcp}`) and how to remove them.

The install script placed beside the binary is **reported, not deleted** — uninstall prints its path and the `rm` command for it. It is left alone on purpose: it may be your own copy, a symlink into a checkout, or managed by a package manager, and an uninstaller should not delete a file it cannot prove it owns.

## Features

### Graph & analysis
- **Architecture overview**: `get_architecture` returns languages, packages, entry points, routes, hotspots, boundaries, layers, and clusters in a single call
- **Architecture Decision Records**: `manage_adr` persists architectural decisions across sessions
- **Louvain community detection**: Discovers functional modules by clustering call edges
- **Git diff impact mapping**: `detect_changes` maps uncommitted changes to affected symbols with risk classification
- **Call graph**: Resolves function calls across files and packages (import-aware, type-inferred)
- **Dead code detection**: Finds functions with zero callers, excluding entry points
- **Cypher-like queries**: `MATCH (f:Function)-[:CALLS]->(g) WHERE f.name = 'main' RETURN g.name`

### Search
- **Semantic search** (the `semantic_query` parameter of `search_graph`, not a separate tool): vector search across the entire graph, powered by bundled Nomic `nomic-embed-code` embeddings (40K tokens, 768d int8) compiled into the binary — no API key, no Ollama, no Docker. 11-signal combined scoring (TF-IDF, RRI, API/Type/Decorator signatures, AST profiles, data flow, Halstead-lite, MinHash, module proximity, graph diffusion).
- **BM25 full-text search** via SQLite FTS5 with `cbm_camel_split` tokenizer (camelCase / snake_case aware)
- **Structural search** (`search_graph`): regex name patterns, label filters, min/max degree, file scoping
- **Code search** (`search_code`): graph-augmented grep over indexed files only

### Cross-service linking
- **HTTP** route ↔ call-site matching with confidence scoring
- **gRPC, GraphQL, tRPC** service detection with protobuf Route extraction
- **Channel detection** (`EMITS` / `LISTENS_ON`) for Socket.IO, EventEmitter, and generic pub-sub patterns across 8 languages with constant resolution

### Cross-repo intelligence
- **`CROSS_*` edges** link nodes across multiple repos indexed under the same store
- **Multi-galaxy 3D UI layout** for cross-repo architecture visualization
- **Cross-repo architecture summary** combining services, routes, and dependencies across the indexed fleet
- **Run status**: `index_status` (and the UI layout next to `linked_projects`) carries a `cross_repo` object, `{"status":"never_run"}` until `index_repository(mode="cross-repo-intelligence")` has run with that project as the source, then `"ran"` with `last_run_at`, `outcome`, `targets`, `projects_scanned`, `total_cross_edges` and `skipped_projects`. That is how you tell "never linked" apart from "linked, nothing matched". The status is stored in the project's own index next to its `CROSS_*` edges, so a reindex that rebuilds the index drops both at once and the status goes back to `never_run`.
- **Skipped stores**: `target_projects: ["*"]` skips an index built before the #768 schema change rather than failing the whole run. The response lists each one as `skipped_projects: [{"name", "reason": "pre_768_schema", "hint": "reindex this project"}]`.

### Edge types (selected)
- `CALLS` — a callable is invoked at the source site
- `CALL_REFERENCE` — a callable is used at a supported reference site (for example, a direct value argument) and resolves to one exact target
- `USAGE` — an identifier is used, but a unique callable target is not proven (including ambiguous or complex expressions)
- `IMPORTS`, `DEFINES`, `IMPLEMENTS`, `INHERITS`
- `HTTP_CALLS`, `ASYNC_CALLS` (cross-service)
- `SPAWNS` — the caller starts another program (`subprocess.run`, `exec.Command`, `posix_spawn`, `Process.Start`, a shell command or Make recipe running a program by path, ...); the target is a `Process` node named after the program, or `<dynamic>` when the program is not a literal. When a shell script, Make recipe, GitHub Actions step or Prow job runs a script of the repository (`./hack/x.sh`, `bash hack/x.sh`), the target is that script's `Module` (else its `File`); `make TARGET` (also `$(MAKE)`, `-C`, `-f`) targets the rule of that target, followed through included makefiles; edges from CI carry `ci` and `job`. A Dockerfile's last stage `ENTRYPOINT` (else `CMD`) spawns what the container runs (`api: dockerfile`): the repository script or source copied into the image, the Go `main` of a binary a stage builds with `go build -o`, else a `Process`
- `INFRA_MAPS` — a Kubernetes Service to each workload whose pod labels carry every `key: value` of the Service's selector, within one namespace
- `USAGE` with `ref: image` — a Kubernetes workload (any pod template: containers, initContainers, CronJobs, custom resources) or a docker compose service to the `Image` it runs
- `DEPLOYS` — what puts manifests, kustomizations or charts on a cluster, to what it puts there: a Flux Kustomization or Argo Application to the kustomizations / manifests / chart of its path, a Flux HelmRelease to its chart (`spec.chart` or `chartRef` → OCIRepository), a shell command or Make recipe (`kubectl apply -f/-k`, `kustomize build | kubectl apply`, `helm install/upgrade/template`), a Go installer loading a chart with the Helm SDK, a Terraform `helm_release`. A chart outside the repository is a shared external `Chart`; the edge says `via` (`flux`, `argo`, `helmrelease`, `kubectl`, `kustomize`, `helm`, `helm-sdk`, `terraform`, ...)
- `DEPENDS_ON` — a Helm chart to the charts it declares (the local chart for a resolvable `file://` repository, otherwise an external `Chart`; the edge keeps `repository`), and a `go.mod` / `requirements.txt` file to an external `Package`; a Dockerfile to the `Image`s it builds on (`via: from`, `copy-from`); an `Image` to the Dockerfile it is built from (`via: build`; `tool`: `skaffold`, `compose`, `docker-build` for `docker` / `podman` / `nerdctl` / `buildah` build commands in scripts, Make and CI); a compose service to the services its `depends_on` / `links` name
- `CONFIGURES` — code reading an environment variable to the shared `EnvVar` of that name (`strategy: env_access`); a Kubernetes container, compose service or Dockerfile (`ENV` of the image) setting one to that container's own `EnvVar` (`strategy: env_set`, with `source`: `value`, `configMapKeyRef`, `secretKeyRef`, `fieldRef`, ..., `compose`, `dockerfile` — values are never stored)
- `EMITS`, `LISTENS_ON` (channels)
- `DATA_FLOWS` with arg-to-param mapping + field access chains
- `SIMILAR_TO` (MinHash + LSH near-clone detection, Jaccard scored)
- `SEMANTICALLY_RELATED` (vocabulary-mismatch, same-language, score ≥ 0.80)

### Indexing pipeline
- **158 vendored tree-sitter grammars** compiled into the binary
- **Generic package / module resolution** — bare specifiers like `@myorg/pkg`, `github.com/foo/bar`, `use my_crate::foo` resolved via manifest scanning (`package.json`, `go.mod`, `Cargo.toml`, `pyproject.toml`, `composer.json`, `pubspec.yaml`, `pom.xml`, `build.gradle`, `mix.exs`, `*.gemspec`)
- **Infrastructure-as-code indexing** — Dockerfiles (`Dockerfile.*`, `*.Dockerfile`, `Containerfile`: bases, what the container runs, `ENV`), container images (`Image`: the normalised repository, tag and digest on the edges; a repository built from several Dockerfiles, one per component tag, gets an `Image` per component), docker compose services (`Resource`), Kubernetes manifests (`Resource`), Kustomize overlays (`IMPORTS` to their entries), Helm charts (`Chart`, `DEPENDS_ON`), Terraform / OpenTofu (`.tf`, `.tofu`, `.tfvars`) as graph nodes. A Service walks to the code it runs: Service → workload → `Image` → Dockerfile → `main`
- **[Hybrid LSP semantic type resolution](#hybrid-lsp)** for Python, TypeScript / JavaScript / JSX / TSX, PHP, C#, Go, C, C++, Java, Kotlin, Rust, and Perl — a lightweight C implementation of language type-resolution algorithms, structurally inspired by and compatible with major language servers including tsserver / typescript-go, pyright, gopls, Roslyn, Eclipse JDT, and rust-analyzer (parameter binding, return-type inference, generic substitution, JSX component dispatch, JSDoc inference for plain JS files, namespace + trait + late-static-binding resolution for PHP, file-scoped namespaces + records + LINQ method syntax for C#, class-hierarchy + overload + lambda resolution for Java, extension-function + scope-function resolution for Kotlin, trait-method + UFCS resolution for Rust)
- **RAM-first pipeline**: LZ4 compression, in-memory SQLite, single dump at end. Memory released after.

### Distribution & operation
- **Native runtime set, zero infrastructure services**: SQLite-backed, persists to `~/.cache/codebase-memory-mcp/`
- **Auto-sync**: Background watcher detects file changes in the project an MCP session is working in and re-indexes it automatically (other indexed repos: re-run `index_repository`)
- **Route nodes**: REST endpoints are first-class graph entities
- **CLI mode**: `codebase-memory-mcp cli search_graph '{"project": "my-project", "name_pattern": ".*Handler.*"}'`
- **Available on**: npm, PyPI, Homebrew, Scoop, Winget, Chocolatey, AUR, `go install`

## Team-Shared Graph Artifact

Commit a single compressed file to your repo and your teammates skip the reindex.

`.codebase-memory/graph.db.zst` is a zstd-compressed snapshot of the knowledge graph that lives next to your source. The artifact is opt-in: `index_repository` writes it only with `persistence: true` (the default is `false`), and once it exists later indexes refresh it; when a teammate clones the repo and runs `codebase-memory-mcp` for the first time, the artifact is decompressed and incremental indexing fills in their local diff.

- **Format**: SQLite database, indexes stripped, `VACUUM INTO` compacted, then zstd 1.5.7 compressed (8–13:1 ratio typical)
- **Two tiers**:
  - **Best** (`zstd -9` + index strip + `VACUUM INTO`) — written by `index_repository` with `persistence: true`
  - **Fast** (`zstd -3`) — refreshes an existing artifact on every other index (including the watcher's low-latency incremental updates)
- **Bootstrap**: when no local DB exists but the artifact is present, `index_repository` imports the artifact first, then runs incremental indexing — avoiding the full reindex cost
- **No merge pain**: a `.codebase-memory/.gitattributes` line with `merge=ours` is auto-created on first export, so concurrent edits don't produce conflicts on the binary artifact
- **Commit it deliberately**: the artifact is rewritten on every index, including the watcher's Fast tier, and git stores each rewrite as a full new blob. Committing every refresh is what turns a 20 MB file into gigabytes of history — one team reached ~6 GB across ~350 commits of this single path. Pick a cadence (a release, a milestone, a nightly job) rather than committing every save.
- **Git LFS, if it must move on every commit**: track it from the **repo-root** `.gitattributes` and leave the auto-created `.codebase-memory/.gitattributes` in place — the nearer file goes on supplying `merge=ours`, and only `filter` comes from the root:
  ```gitattributes
  .codebase-memory/graph.db.zst filter=lfs diff=lfs merge=lfs -text
  ```
  Track only the `.zst`; `artifact.json` is small and carries the schema version. The attribute applies to future commits only, so a repo that already has the blobs in history needs `git-filter-repo` to rewrite them first. Two costs to weigh before adopting it: GitHub meters LFS storage and bandwidth, and its objects cannot be pruned without contacting support; and every teammate needs `git lfs install` — without it their checkout leaves a pointer file where the artifact should be, the integrity-checked import refuses it, and they fall back to a full reindex.
- **Optional**: never committed unless you want it. Add `.codebase-memory/` to `.gitignore` if you prefer everyone to reindex from scratch.

The result is similar in spirit to graphify's `graphify-out/` directory, but as a single compressed file with explicit two-tier export, integrity-checked import, and zero merge friction.

## How It Works

codebase-memory-mcp is a **structural analysis backend** — it builds and queries the knowledge graph. It does **not** include an LLM. Instead, it relies on your MCP client (Claude Code, or any MCP-compatible agent) to be the intelligence layer.

```
You: "what calls ProcessOrder?"

Agent calls: trace_path(function_name="ProcessOrder", direction="inbound")

codebase-memory-mcp: executes graph query, returns structured results

Agent: presents the call chain in plain English
```

**Why no built-in LLM?** Other code graph tools embed an LLM for natural language → graph query translation. This means extra API keys, extra cost, and another model to configure. With MCP, the agent you're already talking to *is* the query translator.

## Performance

Benchmarked on Apple M3 Pro:

| Operation | Time | Notes |
|-----------|------|-------|
| **Linux kernel full index** | **3 min** | 28M LOC, 75K files → 4.81M nodes, 7.72M edges |
| Linux kernel fast index | 1m 12s | 1.88M nodes |
| Django full index | ~6s | 49K nodes, 196K edges |
| Cypher query | <1ms | Relationship traversal |
| Name search (regex) | <10ms | SQL LIKE pre-filtering |
| Dead code detection | ~150ms | Full graph scan with degree filtering |
| Trace call path (depth=5) | <10ms | BFS traversal |

**RAM-first pipeline**: All indexing runs in memory (LZ4 HC compressed read, in-memory SQLite, single dump at end). Memory is released back to the OS after indexing completes.

**Token efficiency**: Five structural queries consumed ~3,400 tokens via codebase-memory-mcp versus ~412,000 tokens via file-by-file grep exploration — a **99.2% reduction**.

To measure comparable quality, latency, and agent-efficiency metrics on your own workload, see [Measuring quality, latency, and agent savings](https://github.com/DeusData/codebase-memory-mcp/blob/main/docs/MEASURING_SAVINGS.md). Exact reproduction of the figures above requires the original inputs and raw artifacts.

## Troubleshooting & Diagnostics

codebase-memory-mcp runs **100% locally and collects no telemetry** — your code, queries, environment, and usage never leave your machine. That privacy guarantee also means that when you hit something we can't reproduce on our side (a slow memory climb over hours, a performance regression, a leak that only appears after days of real use), **we have no data at all unless you choose to send it.** Here is how to capture it yourself.

### Capture a diagnostics log

Set `CBM_DIAGNOSTICS=1` before the first daemon-backed MCP session starts, then reproduce the problem (let it run as long as it takes — a slow leak needs time to show in the trend). The shared daemon captures this setting from the session that starts it. If it is already running, close all daemon-backed sessions so it exits before changing the setting. The daemon creates a fresh owner-private `cbm-diagnostics-<pid>-<random>` directory below the system temp directory (`$TMPDIR` or `/tmp` on macOS/Linux, `%TEMP%` on Windows). The exact paths are recorded by the `diagnostics.start` event in `${CBM_CACHE_DIR}/logs/cbm-daemon.log`:

| File | What it is |
|------|------------|
| `trajectory.ndjson` | **The memory trajectory** — one JSON line every 5 s with `rss`, `committed` (Windows commit charge), `peak_*`, `page_faults`, `fd`, and `queries`. **This is the file we need for memory/leak reports** — the *trend over time* is what pinpoints a leak. It is **kept on disk after the server exits** (so you can grab it post-mortem) and rotates to `trajectory.ndjson.1` past ~8 MB. |
| `snapshot.json` | The latest snapshot only — handy for a quick live check. Removed on clean exit. |

The private randomized directory prevents another local account from pre-placing a link or special file at a predictable diagnostics path. Its `<pid>` component is the shared daemon's process ID, also recorded by the `daemon.start` event. Set the variable consistently in the `env` block of each agent's MCP server config, or export it before launching the first session.

### What to share

When you open a memory/performance issue, **attach the `.ndjson` trajectory** — it contains no source code or query text, only resource counters. If you'd rather not attach a file, paste it (or an agent's summary of it) into the issue: your assistant can read the NDJSON directly and report whether `rss`/`committed` grow monotonically, how fast, and relative to query count — which is exactly what we need to find the cause.

## Installation

### Pre-built Binaries

| Platform | Archive |
|----------|---------|
| macOS (Apple Silicon) | `codebase-memory-mcp-darwin-arm64.tar.gz` |
| macOS (Intel) | `codebase-memory-mcp-darwin-amd64.tar.gz` |
| Linux (x86_64) | `codebase-memory-mcp-linux-amd64.tar.gz` |
| Linux (ARM64) | `codebase-memory-mcp-linux-arm64.tar.gz` |
| Windows (x86_64) | `codebase-memory-mcp-windows-amd64.zip` |

Every release includes `checksums.txt` with SHA-256 hashes. The executable is self-contained — no adjacent data file is required. Linux `-portable` archives contain the fully static builds; ordinary platform archives use their native system ABI.

> **Windows note**: SmartScreen may show a warning for unsigned software. Click **"More info"** → **"Run anyway"**. Verify integrity with `checksums.txt`.

### Setup Scripts

<details>
<summary>Automated download + install</summary>

**macOS / Linux:**

```bash
curl -fsSL https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/scripts/setup.sh | bash
```

**Windows (PowerShell):**

```powershell
irm https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/scripts/setup-windows.ps1 | iex
```

</details>

### AUR (Arch Linux)

```bash
yay -S codebase-memory-mcp-bin
```

```bash
paru -S codebase-memory-mcp-bin
```

The `codebase-memory-mcp-bin` package is available at: https://aur.archlinux.org/packages/codebase-memory-mcp-bin

### Nix (flake)

The flake exposes two server packages plus the standalone frontend:

| Package | Contents |
|---------|----------|
| `default` (`codebase-memory-mcp`) | Standard server, no UI |
| `codebase-memory-mcp-ui` | Server with the graph UI embedded (`--ui=true` works) |
| `graph-ui` | Just the built frontend assets (`dist/`) |

Run directly without installing:

```bash
# Standard server
nix run github:DeusData/codebase-memory-mcp

# Server with the embedded graph UI
nix run github:DeusData/codebase-memory-mcp#codebase-memory-mcp-ui -- --ui=true --port=9749
# then open http://127.0.0.1:9749
```

Or build a binary into `./result/bin/codebase-memory-mcp`:

```bash
nix build github:DeusData/codebase-memory-mcp                          # standard
nix build github:DeusData/codebase-memory-mcp#codebase-memory-mcp-ui   # with UI
```

Working in a clone? Use `.` in place of the flake URL, e.g. `nix run .#codebase-memory-mcp-ui -- --ui=true`, or drop into a shell that puts the binary on `PATH` with `nix shell .#codebase-memory-mcp-ui`.

> **Note:** launched by hand (not from an MCP client) the server exits as soon as `stdin` closes — that's normal MCP behaviour. Keep `stdin` open while testing the UI, e.g. `sleep infinity | codebase-memory-mcp --ui=true --port=9749`. The `codebase-memory-mcp-ui` package embeds the UI at build time; `nix run`'ing the standard `default` package with `--ui=true` will refuse to start the HTTP server.

### Install via Claude Code

```
You: "Install this MCP server: https://github.com/DeusData/codebase-memory-mcp"
```

### Build from Source

<details>
<summary>Prerequisites: C compiler + zlib</summary>

| Requirement | Check | Install |
|-------------|-------|---------|
| **C compiler** (gcc or clang) | `gcc --version` or `clang --version` | macOS: `xcode-select --install`, Linux: `apt install build-essential` |
| **C++ compiler** | `g++ --version` or `clang++ --version` | Same as above |
| **zlib** | — | macOS: included, Linux: `apt install zlib1g-dev` |
| **Git** | `git --version` | Pre-installed on most systems |

</details>

```bash
git clone https://github.com/DeusData/codebase-memory-mcp.git
cd codebase-memory-mcp
scripts/build.sh --with-ui          # the shipped composition (graph UI embedded)
scripts/build.sh                    # without the UI (development only)
# Binary at: build/c/codebase-memory-mcp   (codebase-memory-mcp.exe on Windows)
```

Every platform ships **one self-contained executable**: the graph UI and the agent integration templates are linked into the binary, so an extracted archive is immediately complete.

Run the test suite (8,060 tests across 141 suites):

```bash
scripts/test.sh                     # full: clean sanitizer build + all suites + guards
scripts/test.sh --suites <name>     # one suite, incremental, seconds
build/c/test-runner --list-suites   # what is available
```

`scripts/test.sh` is the same entry the CI gates run, so a local pass means the same thing a CI pass does. The canonical local artifact-flow check builds both stripped/unstripped candidates, defaults to the stripped candidate for this explicitly unscanned local run, packages those exact bytes, extracts the archive, and smokes it:

```bash
scripts/ci/smoke-artifact.sh <linux|darwin|windows> <amd64|arm64>
```

`scripts/package-release.sh` is intentionally a lower-level immutable boundary:
it accepts only an already-final `--selected-binary` plus its
`--expected-sha256`; it never builds, strips, signs, or relinks the executable.

### Manual MCP Configuration

<details>
<summary>If you prefer not to use the install command</summary>

Add to `~/.claude.json` (user scope) or project `.mcp.json`:

```json
{
  "mcpServers": {
    "codebase-memory-mcp": {
      "command": "/path/to/codebase-memory-mcp",
      "args": []
    }
  }
}
```

Restart your agent. Verify with `/mcp` — you should see `codebase-memory-mcp` with 17 tools.

</details>

## Multi-Agent Support

`install` configures 45 client surfaces: 39 detected automatically and 6
conditional or explicit. “Conditional” means the installer writes only when the
documented platform or an explicit, already-existing config path proves the
target is active. It never flips experimental feature flags, enables plugins,
YOLO modes, global permission bypasses, or third-party instruction trust.

Where a client has a documented custom-agent format, the installer creates three
exact-owned definitions from one canonical contract:

- **Scout (Tier 1)** — about 3–4 narrow calls for fast positive, provisional discovery; no absence, exhaustive-impact, or dead-code claims.
- **Verify (Tier 2, default)** — task-directed graph evidence, exact source checks, path coverage for every cited file, and scope coverage before negative claims.
- **Auditor (Tier 3)** — bounded scope, current index generation, complete relevant pagination, broader relationship checks, and explicit unresolved limitations.

Every direct tier batches `check_index_coverage` for its evidence paths and reads
flagged ranges or skipped/excluded files directly. A clean coverage result means
only “no recorded gap,” never proof of completeness. Clients without safe child
MCP access receive the same three tiers as parent-handoff agents; the parent must
supply project, generation, pagination state, graph evidence, and coverage
results. Updates migrate only byte-identical prior Verify definitions and never
overwrite user-modified agents.

| Agent | Activation | MCP config | Durable context / augmentation |
|-------|------------|------------|--------------------------------|
| Claude Code | Detected | `~/.claude.json` | Skill + three exact-tool graph agents; `SessionStart`, `SubagentStart`, non-blocking `PreToolUse` for `Grep`/`Glob`/`Bash`, and post-`Read` coverage |
| Codex CLI | Detected | `$CODEX_HOME/config.toml` | Managed `AGENTS.md` activation pointer, skill, three read-only agents; `SessionStart` + `SubagentStart` |
| Gemini CLI | Detected | `.gemini/settings.json` | `GEMINI.md`, three explicit read/graph-tool subagents; `BeforeTool`, `AfterTool` `read_file` coverage, and `SessionStart` |
| Zed | Detected | platform `settings.json` (JSONC) | `AGENTS.md` + shared skill |
| OpenCode | Detected | `$OPENCODE_CONFIG` or resolved global config | `AGENTS.md`, skill, three deny-by-default read-only agents; plugin adds grep/glob graph lookup, post-`read` coverage, first-tool-result session context, and post-compaction reinjection |
| Antigravity | Detected | `.gemini/config/mcp_config.json` | `.gemini/GEMINI.md` |
| Aider | Detected | — | `CONVENTIONS.md` via `.aider.conf.yml` |
| KiloCode | Detected | `.config/kilo/kilo.jsonc` | Rule + three graph-tool subagents with deny-by-default permissions |
| VS Code | Detected | platform `Code/User/mcp.json` | `~/.copilot/skills`, three read-only agents, `sessionStart` + `subagentStart` |
| Cursor | Detected | `.cursor/mcp.json` | Skill + three read-only parent-handoff agents; context hooks withheld because session injection races and `readonly` blocks MCP |
| Windsurf | Detected | `~/.codeium/windsurf/mcp_config.json` | Always-on `global_rules.md` |
| Augment / Auggie | Detected | `~/.augment/settings.json` | Rule, three read-only handoff subagents, `SessionStart` + post-`view` coverage |
| OpenClaw | Detected | `$OPENCLAW_CONFIG_PATH` or state `openclaw.json` | Active-workspace `AGENTS.md` + `TOOLS.md`; compaction reinjection |
| Kiro | Detected | `$KIRO_HOME/settings/mcp.json` | Steering, skill, three JSON agents with isolated Scout/Analysis-profile MCP and explicit graph-tool selectors (`includeMcpJson: false`) |
| Junie | Detected | `.junie/mcp/mcp.json` | Skill + three graph subagents for EAP-capable builds; Scout and Analysis server aliases hard-limit the tier tool surfaces; no ineffective EAP `SessionStart` hook |
| Hermes | Detected | `$HERMES_HOME/config.yaml` | Skill + fail-open `pre_llm_call` context augmentation |
| OpenHands | Detected | `.openhands/mcp.json` | Shared `.agents/skills/codebase-memory/SKILL.md` |
| Cline | Detected | `~/.cline/mcp.json` + `${CLINE_DATA_DIR:-~/.cline/data}/settings/cline_mcp_settings.json` | Rule + skill; automatic file hooks withheld because they auto-activate and their output is not reliably consumed; child agents cannot use MCP |
| Warp | Detected, skill only | UI, Warp Drive, or per invocation (manual) | Shared `~/.agents/skills/codebase-memory/SKILL.md` |
| Qwen Code | Detected | `.qwen/settings.json` | `QWEN.md`, skill, three explicit read/graph-tool agents; `SessionStart`, `SubagentStart`, and post-`ReadFile` coverage |
| GitHub Copilot CLI | Detected | `$COPILOT_HOME/mcp-config.json` | Instructions, skill, three read-only agents; `sessionStart` + `subagentStart` |
| Factory Droid | Detected | `.factory/mcp.json` | `AGENTS.md`, skill, three droids with exact per-tier graph-tool lists (without additive whole-server exposure); `SessionStart` + post-`Read` coverage on macOS/Linux, withheld on Windows |
| Crush | Detected | `.config/crush/crush.json` | Managed context path with explicit parent-to-child handoff |
| Goose | Detected | `.config/goose/config.yaml` | `.goosehints` |
| Mistral Vibe | Detected | `$VIBE_HOME/config.toml` | `AGENTS.md`, skill, and three matched agent/prompt pairs with explicit read-only graph-tool allowlists |
| Grok Build | Detected | `$GROK_HOME/config.toml` | Owned `rules/codebase-memory.md`, skill, three graph agents with named-server `mcpInheritance` and exact `server__tool` dispatcher ids; context hooks withheld because its passive hook events discard stdout |
| Qoder CLI | Detected | `~/.qoder/settings.json` | Skill, three directly MCP-attached agents with named-server scoping and exact per-tier graph-tool lists; `SessionStart`, `SubagentStart`, and post-`Read` coverage, including documented PowerShell execution on Windows |
| Kimi Code CLI | Detected | `$KIMI_CODE_HOME/mcp.json` (default `~/.kimi-code`) | Same-root `AGENTS.md` + skill; fail-open `UserPromptSubmit` hook in `config.toml` |
| GitLab Duo CLI | Detected | `$GLAB_CONFIG_DIR/duo/mcp.json` or platform fallback | Fail-open user `SessionStart` on macOS/Linux; hook withheld on Windows; no experimental global skill enablement |
| Rovo Dev CLI | Detected | configured override or `~/.rovodev/mcp.json` | Global `AGENTS.md`, skill + three read-only handoff subagents; no undocumented hook |
| Amp | Detected | `~/.config/agents/skills/codebase-memory/mcp.json` | Colocated skill + `~/.config/amp/AGENTS.md`; no plugin |
| Devin CLI / Local | Detected | `~/.config/devin/config.json` (platform app-data path on Windows) | Same-root `AGENTS.md` + skill; macOS/Linux `UserPromptSubmit` + `PostCompaction`, and `SessionStart` only when Claude does not already provide it; hooks withheld on Windows |
| Tabnine | Detected | `~/.tabnine/mcp_servers.json` | MCP only; no experimental/YOLO setting |
| Continue / cn | Conditional | Existing `~/.continue/config.yaml` or `$CBM_CONTINUE_CONFIG_PATH` | MCP only |
| Visual Studio | Conditional, Windows | `~/.mcp.json` | MCP only |
| TRAE | Conditional | Existing `$CBM_TRAE_CONFIG_PATH` | MCP only |
| Roo Code | Conditional | Existing `$CBM_ROO_CONFIG_PATH` | MCP only |
| Amazon Q Developer IDE | Detected | `~/.aws/amazonq/default.json` (preserves an existing `agents/default.json` or legacy `mcp.json`) | MCP only |
| CodeBuddy Code CLI | Detected | `~/.codebuddy/.mcp.json` (preserves an active deprecated/legacy file) | `CODEBUDDY.md`, skill, three read-only graph agents; beta hooks are not auto-installed |
| IBM Bob Shell | Detected by `bob` | `~/.bob/mcp_settings.json` | Shared rule; no invented hook or agent |
| Pochi | Detected | `~/.pochi/config.jsonc` (`mcp`) | `README.pochi.md`, skill, and three `readFile`-only parent-handoff agents |
| Pi | Detected | — | `~/.pi/agent/AGENTS.md` + skill; MCP/subagents require an explicit reviewed extension |
| IBM Bob IDE | Conditional | Existing `~/.bob/mcp.json` | Shared rule + IDE skill; no invented hook or agent |
| Oh My Pi (omp) | Detected | Effective agent directory (`OMP_PROFILE` / `PI_CODING_AGENT_DIR`; default `~/.omp/agent/mcp.json`) | Skill and three direct-MCP graph-tool subagents (Scout/Verify/Auditor); preserves user `AGENTS.md` |
| Sourcegraph Cody | Explicit opt-in | Existing `$CBM_CODY_CONFIG_PATH` | MCP only |

For Codex, install keeps only a tiny managed activation pointer in global
`$CODEX_HOME/AGENTS.md`; all detailed behavior lives in the installed `codebase-memory` skill.
Fresh installs create the pointer, upgrades replace the legacy full managed block while preserving
all user-owned bytes, and uninstall removes only the managed pointer.

### Sessions, compaction, and subagents

Hooks installed by this project are fail-open and context-only. Claude Code's
`PreToolUse` observes `Grep`/`Glob`/`Bash` and injects matching graph symbols as
`additionalContext`; `PostToolUse` on `Read` adds targeted coverage context when
the graph could not fully parse or index that file. It never denies or replaces
the requested tool call.

Claude Code, Codex CLI, Qwen Code, GitHub Copilot CLI, and VS Code's Copilot
runtime receive paired session/subagent context where the vendor exposes a
documented context-output contract. Codex users must review and trust installed
hooks through `/hooks`; changing a hook definition changes its trust hash, so an
update can require re-trust. Qoder uses `SessionStart`, `SubagentStart`, and
post-`Read` coverage, including its documented PowerShell executor on Windows.
Kimi uses `UserPromptSubmit`, while Hermes uses `pre_llm_call`; both retain their
documented Windows execution paths. Devin installs
`UserPromptSubmit` and `PostCompaction` on macOS/Linux and adds `SessionStart`
only when Claude's equivalent managed hook is not present. GitLab Duo gets a
narrowly scoped macOS/Linux user `SessionStart` entry on its experimental hook
surface. GitLab Duo, Devin, and Factory hooks are withheld on Windows
because those vendors do not document a deterministic shell/executor contract
there. Gemini CLI, Factory Droid, and Augment also add documented post-read/view
coverage context but expose no equivalent documented child-start context.

For runtimes without a stable context-producing lifecycle event, durable files
carry the contract across fresh sessions and compaction: verify the graph project
and index freshness, query structural facts in the parent, then pass the project,
qualified symbols, paths, and call-chain evidence in every delegated task.
Claude, Codex, Gemini, Kiro, Qwen, Copilot, CodeBuddy, OpenCode, Kilo, Vibe,
Qoder, Junie, Factory, and Grok Build receive Scout, Verify, and Auditor graph profiles.
Kiro embeds this MCP server with `--tool-profile scout` for Scout and
`--tool-profile analysis` for Verify/Auditor. Junie registers equivalent named
server aliases because its subagent schema filters by server rather than by
individual tool. Both process profiles use positive allowlists: Scout exposes
seven fast inspection tools, Analysis exposes eleven, and future or mutating
tools remain unavailable until explicitly reviewed. If either Junie alias
collides with user configuration, the installer preserves it and installs
parent-handoff profiles instead. Qoder combines its documented named-server
selection with exact tier-specific MCP tool IDs. Factory uses exact registered
MCP tool IDs without its additive `mcpServers` field, which would expose the
whole server. Codex, Kilo, Vibe, and other capable formats likewise enumerate
the narrowest supported tool set. Rovo, Cursor, Augment, Pochi, and Cline use parent handoff where direct
child MCP is unavailable or unsafe; Pochi is limited to `readFile`, and Cline
child agents cannot use MCP.

Cline's file hooks auto-activate when present, and current Cline does not
reliably consume their context output, so automatic adapters are withheld and
older owned adapters are cleaned up. CodeBuddy's beta, version-gated hooks are
not auto-installed. Junie's EAP
`SessionStart` output is documented as ignored, so no context hook is installed.
Junie custom agents remain EAP-dependent. Qoder can resolve higher-priority
project or plugin agents before user agents with the same name; reload the
client after installation or profile changes.
Cursor context
hooks are withheld: session context injection has a known race, `subagentStart`
is control-only, and read-only subagents cannot safely receive MCP access. Grok Build's
passive hook events (`SessionStart`, `SubagentStart`, `PostToolUse`) discard
stdout and `PreToolUse` honors only deny/rewrite decisions, so its context hooks
are withheld; Grok also reads Claude and Cursor MCP, skill, and hook files
through its compat layer, and the native `config.toml` entry shadows that copy
by name. Rovo
has no documented session context-output hook, and Bob
documents neither a suitable hook nor a custom-agent surface. Those surfaces are
not approximated with invented augmentation. Kimi plugins, Amp plugins, and
GitLab experimental global skills remain opt-in.

OpenClaw reinjects the `Codebase Knowledge Graph (codebase-memory-mcp)` AGENTS
section after compaction and places the same guidance in `TOOLS.md`, the bootstrap
files inherited by its subagents. Automatic augmentation covers the active/default
workspace. Separate `agents.list[].workspace` directories require making that
workspace active for installation or copying the managed block there.

The installed Claude shim is named `cbm-code-discovery-gate` for backward
compatibility; despite the legacy name, it never gates or blocks.

### Manual or UI-managed integrations

These are intentionally not counted as automatic installs: Qodo MCP is added
through its UI and may be governed by enterprise allowlists; Warp MCP is managed
through Warp Drive/UI or per invocation (only the shared skill is automatic);
JetBrains AI Assistant / ACP is IDE-managed; GitHub Copilot coding agent, Jules,
and CodeRabbit are cloud/repository-managed; Replit exposes a remote/service
integration rather than a stable local user-global client; BLACKBOX AI does not
document a stable arbitrary user-global MCP/instruction/agent schema; Plandex has
no stable global registry safe to mutate; and SWE-agent uses explicit YAML and is
no longer a suitable automatic global target.

*(README truncated for display. [Read the full README on GitHub](https://github.com/DeusData/codebase-memory-mcp)).*
