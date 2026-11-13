# Hadtah website — free, tested app installers

A plain static website (HTML, CSS and a little JavaScript). No build step, no database,
no trackers. You can open `index.html` straight from your computer to preview it.

## Files

| File | What it is | Do you edit it? |
|---|---|---|
| `apps.js` | **The list of apps.** Every card on the site comes from here. | **Yes — this is the only file you edit to add or change apps.** |
| `admin.html` | A helper form that writes an app entry for you to copy into `apps.js`. Saves and sends nothing. | No |
| `index.html` | The page itself (hero, apps, how to install, about, contact, footer). | Only to change page wording |
| `styles.css` | Colours and layout (Hadtah teal `#2dd4bf` → emerald `#059669`, navy wordmark `#0f1b3d`). | Rarely |
| `app.js` | Search, category filters, details window, light/dark switch. | No |
| `assets/hadtah-logo.svg` | Hadtah "Renew" logo (white circle above a V on a teal-to-emerald circle). | No |
| `assets/hadtah-wordmark.svg` | HADTAH wordmark (same hand-drawn SVG as in Eilpah). | No |
| `assets/icons/` | One icon per app (SVG or PNG, square, about 96×96 or larger). | Add one per new app |
| `favicon.svg` | Browser tab icon. | No |

## How to add a new app (step by step)

1. **Build and test the installer** on at least one Windows 10 or 11 PC
   (PyInstaller → `.exe`, then Inno Setup → `Something_Setup.exe`). Only list it once it works.
2. **Upload the installer** to GitHub Releases (see below) and copy the file's download link.
3. **Add an icon** (optional) to `assets/icons/`, for example `assets/icons/my-app.svg`.
4. **Write the entry.** Easiest: open `admin.html` in your browser, fill the form, press **Copy entry**.
   Or copy an existing `{ ... }` block in `apps.js` and change the values.
5. **Paste it into `apps.js`** inside the square brackets `[ ... ]`. Put a **comma** between blocks:
   ```js
   window.HADTAH_APPS = [
     { ...first app... },
     { ...second app... },   // <- comma here
     { ...your new app... }   // <- no comma after the last one
   ];
   ```
6. **Save, preview** (double-click `index.html`), then **upload** the changed files to your hosting.
   If the apps grid is empty after your change, there is a typing slip in `apps.js`
   (usually a missing comma or quote). Press F12 in the browser and look at the Console for the line number.

### To update an existing app

Change `version`, `size`, `tested_on` and `download_url`, and add a new line at the **top** of its `changelog`:
`{ "version": "1.1", "date": "2026-12-01", "notes": "Fixed saving books." },`

### To remove an app

Delete its whole `{ ... }` block (and the comma before or after it).

## The fields

| Field | Example | Notes |
|---|---|---|
| `id` | `"offline-library"` | Unique, lowercase, dashes instead of spaces. Used in links like `#app/offline-library`. |
| `name` | `"Offline Library App"` | Shown on the card. |
| `category` | `"Education"` | Filter chips are made automatically from the categories you use. |
| `description` | `"Keep a school library's book list…"` | One sentence for the card. |
| `details` | longer text | "What it does" in the details window. |
| `version` | `"1.0"` | |
| `size` | `"14 MB"` | Size of the setup file. Use `"TBA"` or `""` if not known. |
| `platforms` | `["Windows 10", "Windows 11"]` | |
| `tested_on` | `"2026-11-20"` | Date you last tested it (YYYY-MM-DD). Shows the green **Tested and working** badge. Leave `""` until tested. |
| `status` | `"available"` or `"coming soon"` | `"coming soon"` shows a grey **Coming soon** button instead of Download. |
| `download_url` | GitHub Release link | Use `"#"` until the file is uploaded (also shows **Coming soon**). |
| `icon` | `"assets/icons/library.svg"` | Falls back to the Hadtah logo if left out. |
| `changelog` | `[{ "version": "1.0", "date": "2026-11-20", "notes": "First version." }]` | Newest first. |
| `featured` | `true` / `false` | Featured apps show first with a ★ badge. |

## Where to host the installer files: GitHub Releases (recommended)

Installers can be 10–60 MB each. Don't put them inside the website folder and don't use Vercel Blob
(it has a small free quota you have already hit once). **GitHub Releases is free, allows files up to 2 GB each,
and the downloads don't count against your website hosting.**

1. On GitHub, create a public repository, for example `hadtah-apps` (it can be empty apart from a README).
2. Go to **Releases → Draft a new release**.
3. Tag: `library-v1.0` (app name + version). Title: `Offline Library App 1.0`.
4. Drag your `Library_Setup.exe` into the "Attach binaries" box and press **Publish release**.
5. Right-click the file name on the release page → **Copy link**. It looks like:
   ```
   https://github.com/<your-github-username>/hadtah-apps/releases/download/library-v1.0/Library_Setup.exe
   ```
6. Paste that as `download_url` and set `status` to `"available"`.

## Putting the site online

- **Hosting (free):** Vercel or GitHub Pages can host this folder as it is (no build command, output folder = the root).
- **Domain:** buy `hadtah.com` at Namecheap (the domain is a yearly fee), then point it at Vercel or GitHub Pages
  in Namecheap's *Advanced DNS* using the records the host shows you. You don't need Namecheap's paid hosting.
- **Email:** the contact form opens the visitor's email app addressed to `hello@hadtah.com`. That address is a
  placeholder: set up the mailbox (or Namecheap's free email forwarding to your own inbox), or change the address
  in `index.html` (search for `hello@hadtah.com`).
- `admin.html` has nothing secret in it, but you can delete it from the online copy if you prefer.

### Extra fields (optional)

- `downloads`: a list of buttons instead of one `download_url`, e.g.
  `[{ "label": "Android APK", "url": "https://…/App.apk", "size": "4 MB", "kind": "android" }, { "label": "Windows installer", "url": "https://…/Setup.exe", "size": "120 MB", "kind": "windows" }]`
- `open_url` + `open_label`: for web apps, shows an **Open** button (opens in a new tab) instead of Download.
- `note`: a short line shown on the card, e.g. "Test mode".

## Showcase fields (added Nov 2026)
Each app block in `apps.js` can also have:
- `tagline`: one short line under the name.
- `accent`: the app's colour (hex) used for its card glow and step numbers.
- `how`: 3–4 short "How it works" steps.
- `features`: key features (the first 3 also show on the card).
- `benefits`: who the app helps.
- `screenshots`: `[{ "src": "assets/shots/<file>.webp", "alt": "what it shows" }]`, 2–3 per app.

## Ask TTu
`ask-ttu.js` adds the floating "Ask TTu" button and panel. Its address is `TTU_URL` at the top of that file
(switch it to `https://ttu.hadtah.com` once that domain is live). The same file is used in the apps.

## Pages
`index.html`, `schools.html`, `privacy.html`, `terms.html`. `site.js` holds the theme switch, menu and contact form.
