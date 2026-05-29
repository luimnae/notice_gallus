#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# Gallus Guide — build & ship helper
#
#   ./deploy.sh build          Build the image locally
#   ./deploy.sh save           Build + export gallus-guide.tar.gz (scp to VPS)
#   ./deploy.sh push           Build + push to $REGISTRY
#   ./deploy.sh run            Build + run locally on $GUIDE_PORT
#
# Env overrides:
#   IMAGE=gallus-guide  TAG=latest  REGISTRY=registry.example.com/you
#   GUIDE_PORT=8080
# ─────────────────────────────────────────────────────────────
set -euo pipefail

IMAGE="${IMAGE:-gallus-guide}"
TAG="${TAG:-latest}"
REGISTRY="${REGISTRY:-}"
GUIDE_PORT="${GUIDE_PORT:-8080}"
REF="${IMAGE}:${TAG}"

build() {
  echo "▸ Building ${REF} ..."
  docker build -t "${REF}" .
  echo "✓ Built ${REF}"
}

cmd="${1:-build}"
case "${cmd}" in
  build)
    build
    ;;
  save)
    build
    echo "▸ Exporting tarball ..."
    docker save "${REF}" | gzip > gallus-guide.tar.gz
    echo "✓ gallus-guide.tar.gz ready."
    echo "  Next:  scp gallus-guide.tar.gz user@vps:/tmp/"
    echo "         ssh user@vps 'gunzip -c /tmp/gallus-guide.tar.gz | docker load && \\"
    echo "                       docker run -d --restart unless-stopped -p 80:80 --name gallus-guide ${REF}'"
    ;;
  push)
    [ -n "${REGISTRY}" ] || { echo "✗ Set REGISTRY=registry.example.com/you"; exit 1; }
    build
    REMOTE="${REGISTRY}/${REF}"
    echo "▸ Tagging + pushing ${REMOTE} ..."
    docker tag "${REF}" "${REMOTE}"
    docker push "${REMOTE}"
    echo "✓ Pushed ${REMOTE}"
    echo "  On VPS:  docker pull ${REMOTE} && docker run -d --restart unless-stopped -p 80:80 --name gallus-guide ${REMOTE}"
    ;;
  run)
    build
    echo "▸ Running on :${GUIDE_PORT} ..."
    docker rm -f gallus-guide >/dev/null 2>&1 || true
    docker run -d --restart unless-stopped -p "${GUIDE_PORT}:80" --name gallus-guide "${REF}"
    echo "✓ http://localhost:${GUIDE_PORT}"
    ;;
  *)
    echo "Usage: ./deploy.sh {build|save|push|run}"
    exit 1
    ;;
esac
