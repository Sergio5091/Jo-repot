#!/bin/bash
set -e

# Installer pnpm globalement
npm install -g pnpm

# Installer les dépendances avec pnpm
pnpm install --frozen-lockfile

# Builder le projet
pnpm run build
