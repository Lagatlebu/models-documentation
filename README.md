# Trading Knowledge Base

A personal trading system documentation app. Document your models, concepts, and rules. Works fully offline.

## Install on your phone

1. Push this repo to GitHub
2. Go to repo **Settings → Pages → Source → GitHub Actions**
3. Wait ~1 minute for the deploy to finish
4. Open `https://YOUR_USERNAME.github.io/REPO_NAME` on your phone in Chrome
5. Tap the banner **"Install Trading KB"** that appears after a few seconds — or tap Chrome menu → **Add to Home Screen**
6. Done. The app icon appears on your home screen and works offline.

## What's inside

- **Models** — document setups with description, market structure, entry trigger, confluences, SL/TP, invalidation, sketch canvas, and real trade examples with chart screenshots
- **Concepts** — foundational ideas in your own words + sketch
- **Rules** — numbered rule sets you refine over time

## Deploy steps (first time)

```bash
cd knowledgebase
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/trading-kb.git
git push -u origin main
```

Then in GitHub: Settings → Pages → Source → **GitHub Actions**

## Local testing

```bash
cd www
npx serve .
# Open http://localhost:3000 in Chrome
```

## Data

All data is stored locally on your device using IndexedDB. Nothing is sent to any server.
