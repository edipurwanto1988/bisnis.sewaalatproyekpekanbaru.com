import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://bisnis.sewaalatproyekpekanbaru.com',
  output: "hybrid",
  adapter: cloudflare()
});