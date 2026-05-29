# Déploiement — Gallus Guide

Site statique (Astro) servi par nginx dans un conteneur. Portable : aucun domaine câblé, port hôte configurable.

## Local

```bash
# Build + run on http://localhost:8080
./deploy.sh run
# or
docker compose up -d            # http://localhost:8080
GUIDE_PORT=80 docker compose up -d
```

Build seul :

```bash
./deploy.sh build               # image gallus-guide:latest
docker run -d -p 8080:80 --name gallus-guide gallus-guide:latest
```

## VPS — trois voies

### A · Build sur le VPS (le plus simple)
```bash
git clone <repo> gallus-guide && cd gallus-guide
docker compose up -d            # ou GUIDE_PORT=80 docker compose up -d
```

### B · Tarball (pas de registry)
```bash
./deploy.sh save                                  # → gallus-guide.tar.gz (local)
scp gallus-guide.tar.gz user@VPS:/tmp/
ssh user@VPS 'gunzip -c /tmp/gallus-guide.tar.gz | docker load \
  && docker run -d --restart unless-stopped -p 80:80 --name gallus-guide gallus-guide:latest'
```

### C · Registry
```bash
REGISTRY=registry.example.com/you ./deploy.sh push
# sur le VPS :
docker pull registry.example.com/you/gallus-guide:latest
docker run -d --restart unless-stopped -p 8080:80 --name gallus-guide registry.example.com/you/gallus-guide:latest
```

## Derrière un reverse proxy (TLS + sous-domaine)

Le conteneur écoute en clair sur `:80`. Placez-le derrière votre proxy existant et mappez-le sur un port local (ex. `-p 8080:80`).

**Caddy** (`Caddyfile`) — TLS automatique :
```
guide.exemple.fr {
    reverse_proxy localhost:8080
}
```

**nginx** (host) :
```nginx
server {
    server_name guide.exemple.fr;
    location / { proxy_pass http://127.0.0.1:8080; proxy_set_header Host $host; }
    # certbot --nginx -d guide.exemple.fr
}
```

**Traefik** — labels compose :
```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.guide.rule=Host(`guide.exemple.fr`)"
  - "traefik.http.routers.guide.tls.certresolver=le"
  - "traefik.http.services.guide.loadbalancer.server.port=80"
```

## Mise à jour
```bash
git pull && docker compose up -d --build       # voie A
# ou re-run save/push selon la voie choisie
```

## Notes
- En-têtes de sécurité + CSP, gzip, et cache long sur `/_assets/*` sont gérés dans `docker/nginx.conf`.
- Healthcheck intégré (`wget --spider /`).
- Build reproductible : `node:22-alpine` → `nginx:1.27-alpine`.
