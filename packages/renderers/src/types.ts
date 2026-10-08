import type { LaunchSpec, SkillSpec } from '@web-db/schema';

export type ClientId = 'claude-code' | 'codex' | 'antigravity';

export interface ClientConfigOutput {
  clientId: ClientId;
  clientName: string;
  mcpSnippet?: string;
  mcpCommand?: string;
  skillInstallPath?: string;
  skillInstructions?: string;
}

export interface ClientAdapter {
  id: ClientId;
  name: string;
  renderMcp(serverName: string, spec: LaunchSpec): ClientConfigOutput;
  renderSkill(skillName: string, spec: SkillSpec): ClientConfigOutput;
}
