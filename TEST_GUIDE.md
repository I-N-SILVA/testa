# Plyaz Landing Page - Testing Guide

## 🚨 Quick Fix for Dependencies

The npm cache has permission issues. Here are the solutions:

### Option 1: Fix npm cache permissions (Recommended)
```bash
sudo chown -R $(whoami) ~/.npm
npm cache clean --force
npm install --legacy-peer-deps
```

### Option 2: Use Yarn instead
```bash
# Install yarn if not already installed
npm install -g yarn

# Install dependencies with yarn
yarn install
```

### Option 3: Use pnpm (as specified in package.json)
```bash
# Install pnpm if not already installed
npm install -g pnpm

# Install dependencies
pnpm install
```

## 🚀 Start Development Server

Once dependencies are installed, run:
```bash
# With npm
npm run dev

# With yarn  
yarn dev

# With pnpm (recommended)
pnpm dev
```

The server will start at: **http://localhost:3000**

## 🧪 Testing Checklist

### ✅ SEO Features to Test

1. **Visit sitemap**: `http://localhost:3000/sitemap.xml`
2. **Check robots.txt**: `http://localhost:3000/robots.txt`
3. **View page source** and verify:
   - Meta tags (title, description, Open Graph)
   - Canonical URLs
   - Structured data (JSON-LD)
   - Hreflang tags

### 🎨 Animation Features to Test

1. **Hero Section**:
   - Watch title lines appear sequentially
   - Observe button hover effects
   - Notice video overlay fade-in

2. **Feature Cards**:
   - Scroll down to see cards animate in
   - Hover over cards for lift effects
   - Notice icon scaling on hover

3. **Team Section**:
   - CEO card special entrance
   - Team members staggered appearance
   - Background football field reveal

4. **Partners Section**:
   - Logo grayscale to color on hover
   - Logo scaling effects

5. **Blog Section**:
   - New blog cards with hover effects
   - Gradient backgrounds
   - Button interactions

6. **Footer**:
   - Progressive content reveal
   - Link hover animations

7. **Navigation**:
   - Header slide-down animation
   - Link underline effects
   - Button hover states

### 🌍 Internationalization Testing

Test different locales:
- `http://localhost:3000/en` (English)
- `http://localhost:3000/es` (Spanish)  
- `http://localhost:3000/fr` (French)
- `http://localhost:3000/it` (Italian)
- `http://localhost:3000/pt-PT` (Portuguese Portugal)
- `http://localhost:3000/pt-BR` (Portuguese Brazil)

## 🔧 Troubleshooting

### If animations don't work:
- Check browser console for JavaScript errors
- Ensure Framer Motion library loaded correctly
- Try refreshing the page

### If SEO features don't work:
- Verify environment variables are set
- Check that sitemap route is accessible
- Ensure metadata is being generated

### Performance Testing:
- Open Chrome DevTools
- Go to Lighthouse tab
- Run performance audit
- Check Core Web Vitals

## 📱 Mobile Testing

Test on different screen sizes:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

All animations should be responsive and work smoothly across devices.

## 🎯 Expected Results

**SEO Score**: 95-100/100
**Performance**: 90-95/100 (with videos)
**Accessibility**: 95-100/100
**Best Practices**: 100/100

The page should feel premium, smooth, and engaging with all animations working seamlessly!