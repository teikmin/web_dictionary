import type { LaunchSpec, SkillSpec } from '@web-db/schema';
import { claudeCodeAdapter } from './claude-code.js';
import { codexAdapter } from './codex.js';
import { antigravityAdapter } from './antigravity.js';
import type { ClientAdapter, ClientConfigOutput, ClientId } from './types.js';

export * from './types.js';
export { claudeCodeAdapter, codexAdapter, antigravityAdapter };

export const adapters: Record<ClientId, ClientAdapter> = {
  'claude-code': claudeCodeAdapter,
  codex: codexAdapter,
  antigravity: antigravityAdapter,
};

export function getAdapter(id: ClientId): ClientAdapter {
  const adapter = adapters[id];
  if (!adapter) throw new Error(`Unknown client ID: ${id}`);
  return adapter;
}

export function renderMcpForAllClients(
  serverName: string,
  spec: LaunchSpec
): Record<ClientId, ClientConfigOutput> {
  return {
    'claude-code': claudeCodeAdapter.renderMcp(serverName, spec),
    codex: codexAdapter.renderMcp(serverName, spec),
    antigravity: antigravityAdapter.renderMcp(serverName, spec),
  };
}

export function renderSkillForAllClients(
  skillName: string,
  spec: SkillSpec
): Record<ClientId, ClientConfigOutput> {
  return {
    'claude-code': claudeCodeAdapter.renderSkill(skillName, spec),
    codex: codexAdapter.renderSkill(skillName, spec),
    antigravity: antigravityAdapter.renderSkill(skillName, spec),
  };
}
