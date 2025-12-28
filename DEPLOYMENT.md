# Deployment Guide - Data Science Portfolio

## Quick Start

Your portfolio is complete and running locally at `http://localhost:5173`

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

---

## GitHub Pages (Recommended for GitHub)

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Create repo: `hari-krishna-portfolio` (or your preferred name)
3. Initialize with no README

### Step 2: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Data Science Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hari-krishna-portfolio.git
git push -u origin main
```

### Step 3: Configure Vite for GitHub Pages
Edit `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/hari-krishna-portfolio/',  // Change to your repo name
  plugins: [react()],
})
```

### Step 4: Setup GitHub Pages Deployment
Install gh-pages:
```bash
npm install --save-dev gh-pages
```

Update `package.json` scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d dist"
}
```

### Step 5: Deploy
```bash
npm run deploy
```

### Step 6: Enable GitHub Pages
1. Go to repository Settings → Pages
2. Under "Build and deployment"
3. Select source: `Deploy from a branch`
4. Branch: `gh-pages` / `/ (root)`
5. Save

**Your site will be live at:** `https://YOUR_USERNAME.github.io/hari-krishna-portfolio/`

---

## Vercel (Zero-Config, Fastest)

### Step 1: Push to GitHub (if not done)
Follow GitHub Pages steps 1-2 above

### Step 2: Import to Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your GitHub repo
4. Click "Import"
5. Vercel auto-detects Vite, click "Deploy"

**Your site will be live automatically!**

Updates deploy automatically when you push to main.

---

## Netlify

### Step 1: Connect GitHub
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select GitHub, authorize, choose your repo

### Step 2: Configure
- Build command: `npm run build`
- Publish directory: `dist`
- Click "Deploy site"

**Your site is live!** Automatic deploys on every push.

---

## Firebase Hosting

### Step 1: Setup Firebase
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

When prompted:
- Project: Create new or select existing
- Public directory: `dist`
- Single page app: `Yes`

### Step 2: Deploy
```bash
npm run build
firebase deploy
```

**Your site is live at:** `https://YOUR_PROJECT.web.app`

---

## Manual Deployment (Any Host)

### Build
```bash
npm run build
```

### Upload `dist/` folder to your host
- Upload to web server
- Upload to S3 + CloudFront
- Upload to any static hosting

---

## Domain Setup

### Connect Custom Domain to GitHub Pages
1. Go to repository Settings → Pages
2. Under "Custom domain", enter your domain
3. Add DNS records (provided by GitHub)

### Connect Custom Domain to Vercel
1. Project Settings → Domains
2. Add your domain
3. Add DNS records shown

### Connect Custom Domain to Netlify
1. Domain settings in Netlify
2. Add subdomain or custom domain
3. Configure DNS records

---

## Environment Variables (if needed)

Create `.env` file:
```
VITE_API_URL=https://api.example.com
```

Use in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Performance Checklist

- [ ] Built with `npm run build`
- [ ] No console errors in browser
- [ ] Navbar scrolling works smoothly
- [ ] All links functional
- [ ] Responsive on mobile
- [ ] Contact links work (email, LinkedIn)
- [ ] Page loads in < 1 second

---

## Troubleshooting

### GitHub Pages shows 404
- Check `vite.config.js` has correct `base` path
- Ensure `gh-pages` branch exists
- Run `npm run deploy` again

### Blank page appears
- Check browser console for errors
- Ensure correct base path in vite.config.js
- Clear browser cache (Ctrl+Shift+R)

### Styles not loading
- Vite CSS is bundled correctly
- Check for typos in class names
- Ensure index.css imported in App.jsx

---

## Next Steps

1. ✅ Portfolio created locally
2. ⬜ Push to GitHub
3. ⬜ Deploy to GitHub Pages / Vercel / Netlify
4. ⬜ Share with recruiters!

Good luck! 🚀
