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

### Option A — Deploy from repo root (simplest)

A **`vercel.json` at the repo root** (`P5/vercel.json`) already points install/build/output at `GrocerEaseLanding/`. Import **`evelynlu2025/P5`** and leave **Root Directory** empty or **`.`** — do **not** set Root Directory to `GrocerEaseLanding` in this case, or Vercel will ignore the root config and look for `package.json` at the repo root (and you can get a **404**).

### Option B — Root Directory = `GrocerEaseLanding`

1. Import **`evelynlu2025/P5`**.
2. Set **Root Directory** to **`GrocerEaseLanding`**.
3. Vercel uses **`GrocerEaseLanding/vercel.json`** only.

### For both options

4. Under **Environment Variables**, add **`VITE_APP_ORIGIN`** = `https://grocerease-topaz.vercel.app` (or your live app URL), then redeploy.
5. Optional: **`VITE_SITE_URL`** = your marketing site URL for the footer.

### If you still see 404

Open the deployment **Build Logs** in Vercel: confirm `npm run build` finished and that `dist/index.html` exists. Trigger **Redeploy** after fixing settings.

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
