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
  // Astro generates per-build sha256 hashes for the inline scripts/styles it
  // emits and ships them in a <meta> CSP. This keeps a strict policy (no
  // 'unsafe-inline') while letting Astro inline small bundles. nginx drops its
  // own CSP header to avoid a conflicting (intersecting) second policy.
  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        "form-action 'self'",
        "object-src 'none'",
        // frame-ancestors omitted: ignored in a <meta> CSP. Clickjacking is
        // covered by the X-Frame-Options: SAMEORIGIN header from nginx.
      ],
    },
  },
});
