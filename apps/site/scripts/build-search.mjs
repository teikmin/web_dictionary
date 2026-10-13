import { execSync } from 'node:child_process';

async function runPagefind() {
  // Brief pause to allow Windows directory locks from Astro build to release
  await new Promise((r) => setTimeout(r, 600));

  try {
    execSync('npx pagefind --site dist', { stdio: 'inherit' });
  } catch (err) {
    console.warn('Pagefind initial index attempt hit file lock, retrying in 1s...');
    await new Promise((r) => setTimeout(r, 1200));
    execSync('npx pagefind --site dist', { stdio: 'inherit' });
  }
}

runPagefind();
