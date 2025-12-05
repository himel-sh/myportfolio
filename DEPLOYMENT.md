# Deployment Guide

## Option 1: Deploy to Vercel (Recommended)

### Method A: Using Vercel CLI

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Login to Vercel**

```bash
vercel login
```

3. **Deploy**

```bash
vercel
```

4. **Deploy to Production**

```bash
vercel --prod
```

### Method B: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

**Build Settings (Auto-detected):**

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

---

## Option 2: Deploy to Netlify

### Using Netlify CLI

1. **Install Netlify CLI**

```bash
npm install -g netlify-cli
```

2. **Login**

```bash
netlify login
```

3. **Initialize and Deploy**

```bash
netlify init
netlify deploy --prod
```

### Using Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

---

## Option 3: Deploy to GitHub Pages

1. **Install gh-pages**

```bash
npm install --save-dev gh-pages
```

2. **Update package.json**
   Add these scripts:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Add homepage field:

```json
"homepage": "https://yourusername.github.io/repository-name"
```

3. **Update vite.config.js**

```javascript
export default defineConfig({
  plugins: [react()],
  base: "/repository-name/",
});
```

4. **Deploy**

```bash
npm run deploy
```

---

## Before Deploying - Checklist

✅ Make sure all dependencies are installed:

```bash
npm install
```

✅ Test the build locally:

```bash
npm run build
npm run preview
```

✅ Check for any errors in the console

✅ Verify all images load correctly

✅ Test all links work

---

## Recommended: Vercel

**Why Vercel?**

- ✅ Free for personal projects
- ✅ Automatic HTTPS
- ✅ Auto-deploys on git push
- ✅ Fast global CDN
- ✅ Perfect for React/Vite projects
- ✅ Custom domain support

**Quick Deploy:**

```bash
npm install -g vercel
vercel login
vercel --prod
```

Your site will be live in seconds! 🚀
