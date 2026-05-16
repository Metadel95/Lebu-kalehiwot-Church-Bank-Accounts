# Lebu Kale Heywet — Bank Accounts Page

A clean, mobile-friendly webpage displaying the official church bank account numbers for Lebu Kale Heywet Church. Visitors can tap once to copy any account number.

## Files

```
index.html   — Main page
style.css    — All styles
app.js       — Copy-to-clipboard logic
logo.svg     — Church logo
vercel.json  — Vercel deployment config
```

## Deploying to Vercel via GitHub

### 1. Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it something like `lebu-kale-heywet-accounts`
4. Set it to **Public** (required for free Vercel deploys)
5. Click **Create repository**

### 2. Push these files to GitHub

In your terminal (or use GitHub Desktop):

```bash
cd lebu-kale-heywet-accounts
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lebu-kale-heywet-accounts.git
git push -u origin main
```

### 3. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click **Add New → Project**
3. Import your `lebu-kale-heywet-accounts` repository
4. Vercel will auto-detect it as a static site — no build settings needed
5. Click **Deploy**

Your site will be live at `https://lebu-kale-heywet-accounts.vercel.app` (or a custom domain you set up).

### 4. Custom domain (optional)

In your Vercel project → **Settings → Domains**, add your domain (e.g. `accounts.lebukaleheywet.org`).

## Making updates

Any time you push a new commit to the `main` branch on GitHub, Vercel will automatically redeploy the site within ~30 seconds.
