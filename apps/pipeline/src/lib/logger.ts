export const logger = {
  info: (msg: string, ...args: unknown[]) => {
    console.log(`[INFO] ${msg}`, ...args);
  },
  warn: (msg: string, ...args: unknown[]) => {
    console.warn(`[WARN] ⚠️ ${msg}`, ...args);
  },
  error: (msg: string, ...args: unknown[]) => {
    console.error(`[ERROR] ❌ ${msg}`, ...args);
  },
  stage: (num: number, title: string) => {
    console.log(`\n======================================================`);
    console.log(`STAGE ${num}: ${title}`);
    console.log(`======================================================`);
  },
};
