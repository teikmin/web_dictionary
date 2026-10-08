import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';
import { McpEntrySchema, SkillEntrySchema, ClientSchema, CategorySchema } from '@web-db/schema';

export const collections = {
  mcp: defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../../content/entries/mcp',
    }),
    schema: McpEntrySchema,
  }),

  skills: defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: '../../content/entries/skills',
    }),
    schema: SkillEntrySchema,
  }),

  clients: defineCollection({
    loader: async () => {
      const dir = path.resolve(process.cwd(), '../../content/clients');
      if (!fs.existsSync(dir)) return [];
      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'));
      return files.map((file) => {
        const raw = fs.readFileSync(path.join(dir, file), 'utf8');
        const parsed = yaml.parse(raw);
        return {
          id: parsed.id || path.basename(file, path.extname(file)),
          ...parsed,
        };
      });
    },
    schema: ClientSchema,
  }),

  categories: defineCollection({
    loader: async () => {
      const dir = path.resolve(process.cwd(), '../../content/categories');
      if (!fs.existsSync(dir)) return [];
      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.yaml') || f.endsWith('.yml'));
      return files.map((file) => {
        const raw = fs.readFileSync(path.join(dir, file), 'utf8');
        const parsed = yaml.parse(raw);
        return {
          id: parsed.id || path.basename(file, path.extname(file)),
          ...parsed,
        };
      });
    },
    schema: CategorySchema,
  }),
};
