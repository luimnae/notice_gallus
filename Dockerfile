# ─────────────────────────────────────────────
# Gallus Guide — multi-stage build → nginx static
# ─────────────────────────────────────────────

# Stage 1 — build the static site
FROM node:22-alpine AS build
WORKDIR /app

# Install deps first (better layer caching). Lockfile-aware.
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Build
COPY . .
RUN npm run build

# Stage 2 — serve with nginx
FROM nginx:1.27-alpine AS runtime

# Custom server config (gzip, cache, security headers, trailing-slash routing)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
# NOTE: kept OUT of conf.d/ — nginx auto-includes conf.d/*.conf as server
# configs, and a bare add_header snippet there would fail to load.
COPY docker/security-headers.conf /etc/nginx/security-headers.conf

# Static output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
