// @ts-check
import { defineConfig } from 'astro/config';

// Static output, portable: no domain baked in. Served by nginx in Docker.
export default defineConfig({
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  devToolbar: { enabled: false },
  // NOTE: no Astro experimental.csp here. The site sits behind Cloudflare
  // (luimnae.com), which rewrites inline scripts (Rocket Loader / minify) and
  // breaks any hash-based CSP — the inline script's sha256 no longer matches.
  // CSP is therefore served from nginx with 'unsafe-inline' (see
  // docker/security-headers.conf). Safe here: fully static, no user input/auth.
});
