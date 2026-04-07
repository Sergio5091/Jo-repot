# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Port Autonome d'Abidjan — Recrutement (`paa-recruitment`)
- **Type**: react-vite (frontend-only, no backend)
- **Preview path**: `/`
- **Purpose**: Recruitment portal for the Port Autonome d'Abidjan (PAA), Côte d'Ivoire
- **Pages**:
  - `/` — Landing page with congratulations message and CTA to the form
  - `/formulaire` — 4-step registration form (Identity, Availability, CNPS, Engagement)
- **Components**:
  - `src/pages/Index.tsx` — Landing page
  - `src/pages/FormPage.tsx` — Multi-step form wrapper with progress bar
  - `src/components/steps/StepIdentity.tsx` — Step 1: Personal identity fields
  - `src/components/steps/StepAvailability.tsx` — Step 2: Health info + availability date + salary info
  - `src/components/steps/StepCNPS.tsx` — Step 3: CNPS card status, number, or payment proof upload
  - `src/components/steps/StepEngagement.tsx` — Step 4: Summary + checkboxes + submit
  - `src/components/SuccessCard.tsx` — Post-submission success screen
- **Design**: Dark navy/blue maritime theme with emerald green accents
- **Country**: Côte d'Ivoire, phone prefix +225, social org: CNPS
