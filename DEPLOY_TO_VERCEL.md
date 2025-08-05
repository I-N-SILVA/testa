# 🚀 Deploy Plyaz Landing Page to Vercel

## Option 1: One-Click Deploy (EASIEST) ⚡

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/I-N-SILVA/testa&env=NEXT_PUBLIC_BASE_URL&envDescription=Your%20deployed%20site%20URL%20(e.g.%20https://your-site.vercel.app)&project-name=plyaz-landing&repository-name=plyaz-landing)

**Steps:**
1. Click the "Deploy with Vercel" button above
2. Sign in to Vercel with GitHub
3. Set `NEXT_PUBLIC_BASE_URL` to your future Vercel URL
4. Click "Deploy"
5. ✅ **Done!** Your site is live in ~2 minutes

---

## Option 2: Vercel CLI (RECOMMENDED) 🛠️

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Deploy
```bash
cd landing-page
vercel
```

### Step 3: Follow Interactive Prompts
```
? Set up and deploy "~/landing-page"? Y
? Which scope do you want to deploy to? [Your Account]
? What's your project's name? plyaz-landing
? In which directory is your code located? ./
? Want to modify these settings? N
```

### Step 4: Set Environment Variables
```bash
vercel env add NEXT_PUBLIC_BASE_URL
# Enter your deployed URL: https://plyaz-landing-xyz.vercel.app
```

### Step 5: Redeploy with Environment Variables
```bash
vercel --prod
```

✅ **Your site is live!**

---

## Option 3: GitHub Integration 🔗

### Step 1: Go to Vercel Dashboard
1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "**New Project**"

### Step 2: Import Repository
1. Find "**I-N-SILVA/testa**" in your repositories
2. Click "**Import**"

### Step 3: Configure Project
```
Project Name: plyaz-landing
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next (leave default)
Install Command: npm install --legacy-peer-deps
Development Command: npm run dev
```

### Step 4: Environment Variables
Add in **Settings** → **Environment Variables**:
```
NEXT_PUBLIC_BASE_URL = https://your-project.vercel.app
```

### Step 5: Deploy
Click "**Deploy**" and wait ~2 minutes

✅ **Your enhanced landing page is live!**

---

## 🔧 Required Configuration

### Environment Variables
| Variable | Required | Example | Description |
|----------|----------|---------|-------------|
| `NEXT_PUBLIC_BASE_URL` | ✅ Yes | `https://plyaz-landing.vercel.app` | Your site's URL for SEO |
| `GOOGLE_SITE_VERIFICATION` | ❌ Optional | `abc123xyz` | Google Search Console |
| `NEXT_PUBLIC_COMING_SOON` | ❌ Optional | `false` | Show coming soon page |

### Build Settings (Auto-detected)
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Install Command**: `npm install --legacy-peer-deps`
- **Output Directory**: `.next`

---

## 🎯 What You'll Get After Deployment

### 🌐 Live URLs
- **Main Site**: `https://your-project.vercel.app`
- **Multi-language**: `/en`, `/es`, `/fr`, `/it`, `/pt-PT`, `/pt-BR`
- **SEO Files**: `/sitemap.xml`, `/robots.txt`

### ⚡ Performance
- **Lighthouse SEO**: 95-100/100
- **Performance**: 90-95/100
- **Accessibility**: 95-100/100
- **Best Practices**: 100/100

### 🎨 Features Live
- ✅ **Stunning motion animations** throughout
- ✅ **Premium SEO optimization** 
- ✅ **Multi-language support** (6 languages)
- ✅ **Progressive Web App** features
- ✅ **Mobile-responsive design**
- ✅ **Social media optimization**

---

## 🛠️ Troubleshooting

### Build Fails?
**Solution**: Ensure install command is set to:
```bash
npm install --legacy-peer-deps
```

### Environment Variables Not Working?
**Solutions**:
1. Check exact format: `https://your-project.vercel.app` (no trailing slash)
2. Redeploy after adding variables
3. Check Variables are marked as "Production" and "Development"

### Animations Not Working?
**Solutions**:
1. Check browser console for errors
2. Ensure Framer Motion dependency installed
3. Clear browser cache and hard refresh

### SEO Features Not Working?
**Solutions**:
1. Verify `NEXT_PUBLIC_BASE_URL` is set correctly
2. Test sitemap: `https://your-site.com/sitemap.xml`
3. Test robots: `https://your-site.com/robots.txt`

---

## 🎉 Post-Deployment Checklist

### ✅ Immediate Testing
- [ ] Site loads at your Vercel URL
- [ ] All animations working smoothly
- [ ] Navigation between pages works
- [ ] Mobile responsive design works
- [ ] Multiple languages accessible

### ✅ SEO Testing  
- [ ] Sitemap accessible: `/sitemap.xml`
- [ ] Robots.txt accessible: `/robots.txt`
- [ ] Page source shows rich metadata
- [ ] Social sharing previews work
- [ ] Google PageSpeed Insights score 90+

### ✅ Performance Testing
- [ ] Lighthouse audit shows 90+ scores
- [ ] Animations run at 60fps
- [ ] Page load time under 3 seconds
- [ ] Core Web Vitals all green

---

## 🚀 Optional: Custom Domain

### Step 1: Purchase Domain
Buy your domain from any provider (Namecheap, GoDaddy, etc.)

### Step 2: Add to Vercel
1. Go to Project → **Settings** → **Domains**
2. Add your domain: `plyaz.com`
3. Add www subdomain: `www.plyaz.com`

### Step 3: Configure DNS
Point your domain's DNS to Vercel:
```
CNAME: www → cname.vercel-dns.com
A: @ → 76.76.19.61
```

### Step 4: Update Environment Variable
```bash
NEXT_PUBLIC_BASE_URL=https://plyaz.com
```

✅ **Your site is now live on your custom domain!**

---

Your enhanced Plyaz landing page with **world-class SEO** and **stunning animations** is now ready to impress visitors and rank high in search engines! 🎉