// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// Single source of truth for the public origin: PUBLIC_SITE_URL (shell or .env).
// Unset until the client owns a domain; canonical, sitemap and robots then stay off.
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), 'PUBLIC_');
const site = (process.env.PUBLIC_SITE_URL ?? env.PUBLIC_SITE_URL)?.trim().replace(/\/+$/, '') || undefined;

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site,
  integrations: site ? [sitemap()] : [],
});
