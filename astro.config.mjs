import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isGithubPages = process.env.GITHUB_PAGES === 'true' && owner;
const isUserPage =
  !!repo &&
  !!owner &&
  repo.toLowerCase() === `${owner}.github.io`.toLowerCase();
const site = isGithubPages ? `https://${owner}.github.io` : 'https://novanniindipradana.com';
const base = isGithubPages && repo && !isUserPage ? `/${repo}` : '/';

export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  },

  integrations: [react(), sitemap()]
});
