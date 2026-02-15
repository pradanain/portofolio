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
const envSite = process.env.SITE_URL || process.env.PUBLIC_SITE_URL;
const envBase = process.env.BASE_PATH || process.env.PUBLIC_BASE_PATH;

const normalizeSite = (value) => {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  try {
    return new URL(trimmed).toString().replace(/\/$/, '');
  } catch {
    try {
      return new URL(`https://${trimmed}`).toString().replace(/\/$/, '');
    } catch {
      return undefined;
    }
  }
};

const normalizeBase = (value) => {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const withSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return withSlash.endsWith('/') ? withSlash : `${withSlash}/`;
};

const fallbackSite = isGithubPages
  ? repo && !isUserPage
    ? `https://${owner}.github.io/${repo}`
    : `https://${owner}.github.io`
  : 'https://pradanain.github.io/portofolio';

const site = normalizeSite(envSite) ?? fallbackSite;
const base =
  normalizeBase(envBase) ??
  (isGithubPages && repo && !isUserPage ? `/${repo}/` : '/');

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
