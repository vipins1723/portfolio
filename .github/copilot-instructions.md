# Copilot instructions for this repository

## Project overview

This repository is a small Vite + React + TypeScript portfolio app. It is a single-page frontend with no backend, database, or routing layer. The app boots in `src/main.tsx`, renders the top-level `App` from `src/App.tsx`, and relies on the global CSS in `src/index.css` and `src/App.css` for layout and styling.

Keep changes aligned with that architecture: this is a lightweight client-side app, not a multi-service application.

## Build, lint, and validation commands

Use the project scripts from the repo root:

- Install dependencies: `npm install`
- Start the dev server: `npm run dev`
- Create a production build: `npm run build`
- Run the linter: `npm run lint`
- Preview the production build: `npm run preview`

There is no dedicated test runner configured in this repo. For targeted validation when you need a single-file check, prefer direct commands such as:

- `npx eslint src/App.tsx`
- `npx tsc --noEmit`

This is more appropriate than a broad suite because the project currently has no repo-level test script.

## Architecture and file responsibilities

- `src/main.tsx` is the app entry point and mounts React into `#root`.
- `src/App.tsx` is the primary page/component entry and should remain the main place for UI composition.
- `src/App.css` contains app-specific component styling.
- `src/index.css` contains the global theme and base layout rules.
- `public/` is for static files served directly by Vite.
- `src/assets/` is for imported images and bundled assets.

Avoid introducing new app structure (router, server, state library, API layer) unless the task explicitly requires it. The current repo is intentionally small and static.

## Repository conventions and patterns

- Follow the existing Vite + React 19 + TypeScript pattern rather than adding new frameworks or conventions.
- Keep the UI simple and component-based; prefer edits to the existing app structure over introducing a larger architecture.
- Use local asset imports for images and icons (for example `import heroImg from './assets/hero.png'`) instead of hard-coded URLs.
- Keep styling changes in the existing CSS files unless a task clearly calls for a new pattern; this repo does not use CSS modules or a component-library setup.
- Prefer incremental, minimal changes that match the current code style and the default Vite template conventions.
- Do not add backend or authentication code unless explicitly requested; this repo is a frontend-only portfolio site.

## Helpful context for future changes

This project is a static portfolio page with a small number of files. When making changes, start by checking the current app entry and styling files before introducing new abstractions. The repository is intentionally lightweight and should stay that way unless there is an explicit requirement to expand it.
