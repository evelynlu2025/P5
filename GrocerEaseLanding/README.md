# GrocerEase marketing site

Static landing page for **GrocerEase**, the Pittsburgh-focused neighborhood grocery discovery web app ([source code](https://github.com/gsha22/GrocerEase)).

## Quick start

```bash
npm install
cp .env.example .env
# Defaults to https://grocerease-topaz.vercel.app if unset. Override for local Next.js on another port.
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `VITE_APP_ORIGIN` | No | Origin of the live Next.js app (defaults to `https://grocerease-topaz.vercel.app`). Used for app, sign-up, sign-in (`/sign-in`), map, and deals links. |
| `VITE_SITE_URL` | No | Canonical URL of this marketing site (footer). Defaults to `window.location.origin` in the browser. |
| `VITE_CONTACT_EMAIL` | No | When set, adds an “Email the team” link in the footer. |

## Build & preview

```bash
npm run build
npm run preview
```

Deploy `dist/` to Netlify, Vercel static hosting, GitHub Pages, or any static file host.

## Deploy on Vercel (recommended)

This repo’s Git root is the **P5** folder on GitHub (`evelynlu2025/P5`); the site code is in **`GrocerEaseLanding/`**.

1. Push the latest commit to GitHub (include `GrocerEaseLanding/vercel.json`).
2. In [Vercel](https://vercel.com/new) → **Add New Project** → import **`evelynlu2025/P5`**.
3. Set **Root Directory** to **`GrocerEaseLanding`** (Framework Preset should pick up Vite).
4. Under **Environment Variables**, add **`VITE_APP_ORIGIN`** = `https://grocerease-topaz.vercel.app` (or your live app URL), then deploy.
5. Optional: **`VITE_SITE_URL`** = your new marketing URL (e.g. `https://your-landing.vercel.app`) so the footer shows the canonical link.

CLI (from this folder, after `npm i -g vercel` or `npx vercel` and login):

```bash
cd GrocerEaseLanding
npx vercel --prod
```

Link the CLI project to the same GitHub repo if you want preview deployments on every push.

## Media

- **Hero / section photos** live under `public/images/` (sourced from Unsplash / Picsum during setup). Swap them for your own photography any time—keep filenames or update `src/App.tsx`.
- **Team portraits** are under `public/team/` and listed in the `team` array in `src/App.tsx` (names, roles, bios, image paths).

## App routes (deployed)

Shopper sign-up uses `/shopper/signup?callbackUrl=/shopper/account`. Sign-in for everyone uses `/sign-in`. Store owner registration uses `/signup`.

## Branding

The product repo mixes strings (“PGH Local Grocers”, “LocalGrocer”). This site standardizes on **GrocerEase** for customer-facing copy; align the Next.js `layout.tsx` / nav when you are ready.
