# Gallus — Notices techniques

Interactive technical-documentation site (pose & réglage de menuiseries) for Gallus
Menuiseries. Built from the source `.docx` / `.pdf` notices into a hub + three notice
pages with an interactive step navigator (method chips → step rail → check-off, progress,
auto-advance, localStorage). Monochromatic dark glassmorphism (Noir Sidéral · Sable ·
Bronze), Ivy Presto Display + Futura LXT.

## Stack
Astro 5 (static output) · vanilla-TS navigator · nginx (Docker) · strict CSP.

## Develop
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run check      # astro check (types)
```

## Docker / deploy
Multi-stage build (`node:22-alpine` → `nginx:1.27-alpine`). See `DEPLOY.md`.
```bash
docker build -t notice-gallus .
docker run -d -p 8080:80 notice-gallus
```
Deployed via Coolify on the IONOS VPS → **noticeg.luimnae.com** (Traefik wildcard + Let's Encrypt).

## Content
All French copy is verbatim from the source notices. `src/data/site.ts` is the single
content source; diagrams/photos in `public/img/`, brand fonts in `public/fonts/`.
