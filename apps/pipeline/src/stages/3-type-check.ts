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

  // 1. Check for Agent Skill (SKILL.md files)
  const skillMdPaths = paths.filter((p) => p.endsWith('/SKILL.md') || p === 'SKILL.md');
  if (skillMdPaths.length > 0) {
    const subpaths = skillMdPaths.map((p) => (p === 'SKILL.md' ? '' : p.replace(/\/SKILL\.md$/, '')));
    return {
      ...c,
      layer2: {
        detectedType: 'agent_skill',
        evidenceKind: 'skill_md_file',
        details: `Found ${skillMdPaths.length} SKILL.md file(s)`,
        subpaths,
      },
    };
  }

  // 2. Check for MCP Server Evidence: server.json manifest
  const hasServerJson = paths.some((p) => p.endsWith('server.json'));
  if (hasServerJson) {
    return {
      ...c,
      layer2: {
        detectedType: 'mcp_server',
        evidenceKind: 'mcp_server_manifest',
        details: 'Contains server.json manifest',
        subpaths: [],
      },
    };
  }

  // 3. Package manifest SDK check: package.json
  const packageJsonPath = paths.find((p) => p === 'package.json');
  if (packageJsonPath) {
    const content = await fetchFileContent(c.repo.owner, c.repo.name, packageJsonPath);
    if (content && content.includes('@modelcontextprotocol/sdk')) {
      return {
        ...c,
        layer2: {
          detectedType: 'mcp_server',
          evidenceKind: 'mcp_sdk_dependency',
          details: 'Depends on @modelcontextprotocol/sdk in package.json',
          subpaths: [],
        },
      };
    }
  }

  // 4. Python manifests: pyproject.toml / requirements.txt
  const pythonManifest = paths.find((p) => p === 'pyproject.toml' || p === 'requirements.txt');
  if (pythonManifest) {
    const content = await fetchFileContent(c.repo.owner, c.repo.name, pythonManifest);
    if (content && (content.includes('mcp') || content.includes('fastmcp'))) {
      return {
        ...c,
        layer2: {
          detectedType: 'mcp_server',
          evidenceKind: 'mcp_sdk_dependency',
          details: `Contains mcp/fastmcp in ${pythonManifest}`,
          subpaths: [],
        },
      };
    }
  }

  // 5. Topic and implementation heuristic
  if (c.repo.topics.includes('mcp-server')) {
    const hasServerFiles = paths.some((p) => /mcp|server/i.test(p));
    if (hasServerFiles) {
      return {
        ...c,
        layer2: {
          detectedType: 'mcp_server',
          evidenceKind: 'mcp_sdk_dependency',
          details: 'Has mcp-server topic and server implementation files',
          subpaths: [],
        },
      };
    }
  }

  // No file evidence found
  return {
    ...c,
    layer2: {
      detectedType: null,
      evidenceKind: 'none',
      details: 'No valid MCP SDK, server.json, or SKILL.md file evidence detected',
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
