import { fetchRepoTree, fetchFileContent } from '../sources/github-contents.js';
import { logger } from '../lib/logger.js';
import type { GateCheckedCandidate } from './2-gates.js';
import type { Layer2Evaluation } from '@web-db/schema';

export interface TypeCheckedCandidate extends GateCheckedCandidate {
  layer2: Layer2Evaluation;
}

async function checkSingleCandidate(c: GateCheckedCandidate): Promise<TypeCheckedCandidate> {
  if (!c.layer1.passed) {
    return {
      ...c,
      layer2: {
        detectedType: null,
        evidenceKind: 'none',
        subpaths: [],
      },
    };
  }

  const { paths } = await fetchRepoTree(c.repo.owner, c.repo.name, c.repo.defaultBranch);

  // 1. Check for MCP Server Evidence FIRST
  // 1a. Package manifest SDK check: package.json
  const packageJsonPath = paths.find((p) => p === 'package.json');
  if (packageJsonPath) {
    const content = await fetchFileContent(c.repo.owner, c.repo.name, packageJsonPath);
    if (content) {
      try {
        const pkg = JSON.parse(content);
        const deps = { ...pkg.dependencies, ...pkg.peerDependencies };
        if (deps && deps['@modelcontextprotocol/sdk']) {
          return {
            ...c,
            layer2: {
              detectedType: 'mcp_server',
              evidenceKind: 'mcp_sdk_dependency',
              details: 'Strict dependency on @modelcontextprotocol/sdk in package.json',
              subpaths: [],
            },
          };
        }
      } catch {
        // invalid package.json
      }
    }
  }

  // 1b. Python manifests: pyproject.toml / requirements.txt
  const pythonManifest = paths.find((p) => p === 'pyproject.toml' || p === 'requirements.txt');
  if (pythonManifest) {
    const content = await fetchFileContent(c.repo.owner, c.repo.name, pythonManifest);
    if (content) {
      const isPyproject = pythonManifest === 'pyproject.toml';
      const mcpDepRegex = isPyproject
        ? /["']\s*(?:mcp|fastmcp)(?:\[[^\]]*\])?(?:\s*[>=<~!\s"']|$)/i
        : /^(?:mcp|fastmcp)(?:\[[^\]]*\])?(?:\s*[>=<~!]|$)/im;

      if (mcpDepRegex.test(content)) {
        return {
          ...c,
          layer2: {
            detectedType: 'mcp_server',
            evidenceKind: 'mcp_sdk_dependency',
            details: `Strict dependency on mcp/fastmcp in ${pythonManifest}`,
            subpaths: [],
          },
        };
      }
    }
  }

  // 1c. MCP Server Evidence: server.json manifest conforming to MCP schema
  const serverJsonPath = paths.find((p) => p === 'server.json' || p.endsWith('/server.json'));
  if (serverJsonPath) {
    const content = await fetchFileContent(c.repo.owner, c.repo.name, serverJsonPath);
    if (content) {
      try {
        const parsed = JSON.parse(content);
        if (
          parsed.$schema?.includes('modelcontextprotocol') ||
          parsed.mcpServers ||
          (parsed.name && (parsed.command || parsed.remotes || parsed.version))
        ) {
          return {
            ...c,
            layer2: {
              detectedType: 'mcp_server',
              evidenceKind: 'mcp_server_manifest',
              details: `Valid MCP server.json manifest at ${serverJsonPath}`,
              subpaths: [],
            },
          };
        }
      } catch {
        // invalid JSON
      }
    }
  }

  // 2. Check for Agent Skills (Public SKILL.md files only - skip internal dev scripts)
  const publicSkillPaths = paths.filter((p) => {
    const isSkillMd = p.endsWith('/SKILL.md') || p === 'SKILL.md';
    if (!isSkillMd) return false;

    // Filter out internal hidden dot-directories like .claude/skills, .cursor/skills, .github, etc.
    const parts = p.split('/');
    const hasHiddenSegment = parts.some((part) => part.startsWith('.') && part !== '.');
    return !hasHiddenSegment;
  });

  if (publicSkillPaths.length > 0) {
    const subpaths = publicSkillPaths.map((p) => (p === 'SKILL.md' ? '' : p.replace(/\/SKILL\.md$/, '')));
    return {
      ...c,
      layer2: {
        detectedType: 'agent_skill',
        evidenceKind: 'skill_md_file',
        details: `Found ${publicSkillPaths.length} public SKILL.md file(s)`,
        subpaths,
      },
    };
  }

  // No verified file evidence found
  return {
    ...c,
    layer2: {
      detectedType: null,
      evidenceKind: 'none',
      details: 'No valid MCP SDK, server.json, or public SKILL.md file evidence detected',
      subpaths: [],
    },
  };
}

export async function evaluateLayer2TypeCheck(
  candidates: GateCheckedCandidate[]
): Promise<TypeCheckedCandidate[]> {
  logger.stage(2.5, 'Evaluate Layer 2 Type Check (File Evidence via Git Trees)');
  const qualified = candidates.filter((c) => c.layer1.passed);
  logger.info(`Checking file evidence for ${qualified.length} qualifying repositories in parallel batches...`);

  const results: TypeCheckedCandidate[] = [];
  const chunkSize = 8;
  let processed = 0;

  for (let i = 0; i < candidates.length; i += chunkSize) {
    const chunk = candidates.slice(i, i + chunkSize);
    const chunkResults = await Promise.all(chunk.map((c) => checkSingleCandidate(c)));
    results.push(...chunkResults);

    const chunkQualifiedCount = chunk.filter((c) => c.layer1.passed).length;
    processed += chunkQualifiedCount;
    if (chunkQualifiedCount > 0 && (processed % 24 === 0 || i + chunkSize >= candidates.length)) {
      const confirmedSoFar = results.filter((r) => r.layer2?.detectedType).length;
      logger.info(
        `[Progress: ${Math.min(processed, qualified.length)}/${qualified.length}] Checked repositories (confirmed evidence: ${confirmedSoFar})...`
      );
    }
  }

  const confirmedCount = results.filter((r) => r.layer2?.detectedType).length;
  logger.info(
    `Stage 2.5 Complete: ${confirmedCount} repositories confirmed with verifiable file evidence.`
  );
  return results;
}
