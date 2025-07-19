# Deployment Guide - Bun + Cloudflare Pages

## Quick Deployment Checklist

### ✅ Pre-Deployment Setup

1. **Sector Configuration**
   - [ ] Choose your industry sector: `bun run customize list-sectors`
   - [ ] Apply sector config: `bun run customize sector <your-sector>`
   - [ ] Set color scheme: `bun run customize color <color>`
   - [ ] Update company info: `bun run customize company --name "YourCompany"`

2. **Content Verification**
   - [ ] Replace placeholder company information
   - [ ] Add real product/service details with Indian pricing (₹)
   - [ ] Update contact information with Indian phone numbers
   - [ ] Add relevant Indian certifications (BIS, ISI, etc.)
   - [ ] Test contact form functionality

3. **Asset Optimization**
   - [ ] Replace logo in `public/logo.png`
   - [ ] Update favicon in `public/favicon.ico`
   - [ ] Optimize all images for web (WebP format recommended)
   - [ ] Test mobile responsiveness

4. **Build Testing**
   - [ ] Run `bun run build` to ensure no errors
   - [ ] Test with `bun run preview`
   - [ ] Check all links and forms work
   - [ ] Verify SEO meta tags

## 🚀 Cloudflare Pages Deployment

### Option 1: Automatic Git Deployment (Recommended)

**Step 1: Repository Setup**
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial SME website setup"

# Push to GitHub/GitLab
git remote add origin <your-repo-url>
git push -u origin main
```

**Step 2: Connect to Cloudflare Pages**

1. **Login to Cloudflare Dashboard**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to Pages → Create a project

2. **Connect Git Repository**
   - Choose GitHub/GitLab integration
   - Select your repository
   - Click "Begin setup"

3. **Configure Build Settings**
   ```
   Framework preset: Astro
   Build command: bun run build
   Build output directory: dist
   Root directory: (leave blank)
   Environment variables: (see below)
   ```

4. **Environment Variables (Optional)**
   ```
   NODE_VERSION=18
   BUN_VERSION=latest
   ```

**Step 3: Deploy**
- Click "Save and Deploy"
- Your site will be live at `<project-name>.pages.dev`

### Option 2: Command Line Deployment

**Install Wrangler CLI**
```bash
# Install globally
bun add -g wrangler

# Or use with bun directly
bun wrangler --version
```

**Authenticate with Cloudflare**
```bash
bun wrangler login
```

**Deploy Commands**
```bash
# Build and deploy to production
bun run deploy

# Deploy to preview environment
bun run deploy:preview

# Manual build and deploy
bun run build
bun wrangler pages deploy dist
```

## 🌐 Custom Domain Setup

### Step 1: Add Custom Domain
1. In Cloudflare Pages dashboard, go to your project
2. Navigate to "Custom domains" tab
3. Click "Set up a custom domain"
4. Enter your domain name (e.g., `yourcompany.com`)

### Step 2: DNS Configuration

**If your domain is already on Cloudflare:**
- DNS records will be configured automatically

**If your domain is elsewhere:**
1. Add these DNS records at your domain registrar:
   ```
   Type: CNAME
   Name: www
   Target: <your-pages-subdomain>.pages.dev

   Type: A
   Name: @
   Target: (Cloudflare will provide the IP)
   ```

2. Or transfer nameservers to Cloudflare (recommended)

### Step 3: SSL Certificate
- SSL certificate is automatically provisioned
- Force HTTPS redirect is enabled by default
- Certificate typically takes 10-15 minutes to activate

## ⚡ Performance Optimization

### Build Optimization
```bash
# Enable all optimizations in astro.config.mjs
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});
```

### Cloudflare Page Rules
Add these optimizations in Cloudflare dashboard:

1. **Speed → Optimization**
   - Auto Minify: CSS, JavaScript, HTML ✅
   - Brotli compression ✅
   - Early Hints ✅

2. **Caching**
   - Browser Cache TTL: 4 hours
   - Edge Cache TTL: 2 hours for HTML, 1 month for assets

3. **Security**
   - Always Use HTTPS ✅
   - Automatic HTTPS Rewrites ✅

## 📊 Analytics & Monitoring

### Cloudflare Web Analytics (Free)
```html
<!-- Add to src/layouts/Layout.astro before </head> -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "YOUR_ANALYTICS_TOKEN"}'></script>
```

### Google Analytics 4
```html
<!-- Add to src/layouts/Layout.astro -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring
- Use Cloudflare's built-in analytics
- Monitor Core Web Vitals
- Set up uptime monitoring

## 🔒 Security Configuration

### Headers Enhancement
Create `public/_headers` file:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Content Security Policy
Add to `src/layouts/Layout.astro`:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;">
```

## 🇮🇳 Indian Market Optimization

### Regional CDN
- Cloudflare automatically serves from nearest edge location
- Indian users get content from Mumbai/Delhi data centers
- Typical load times: 200-500ms across India

### Local SEO Setup
```javascript
// Add to src/config/site.js
seo: {
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "YourCompany",
    "url": "https://yourcompany.com",
    "logo": "https://yourcompany.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Maharashtra",
      "addressLocality": "Mumbai"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-22-xxxx-xxxx",
      "contactType": "customer service"
    }
  }
}
```

### Payment Integration Ready
- Razorpay integration endpoints configured
- Indian payment gateway compatibility
- UPI payment links support

## 🔄 Continuous Deployment

### Automated Builds
```yaml
# .github/workflows/deploy.yml (if using GitHub)
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest
          
      - name: Install dependencies
        run: bun install
        
      - name: Build site
        run: bun run build
        
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: your-project-name
          directory: dist
```

### Preview Deployments
- Every pull request gets a preview URL
- Test changes before going live
- Automatic cleanup of old previews

## 🚨 Troubleshooting

### Common Build Issues

**Error: "bun: command not found"**
```bash
# Set NODE_VERSION in Cloudflare Pages
NODE_VERSION=18
BUN_VERSION=latest

# Or use npm fallback
npm run build
```

**Error: "Module not found"**
```bash
# Clear cache and reinstall
rm -rf node_modules bun.lockb
bun install
bun run build
```

**Error: "Build timeout"**
```bash
# Optimize build performance
export NODE_OPTIONS="--max-old-space-size=4096"
bun run build
```

### Domain Issues

**SSL Certificate Pending**
- Wait 10-15 minutes for automatic provisioning
- Ensure DNS records are correct
- Contact Cloudflare support if stuck

**Domain Not Resolving**
- Check DNS propagation: `dig yourcompany.com`
- Verify nameservers point to Cloudflare
- Clear local DNS cache

## 📱 Mobile & PWA

### Progressive Web App Setup
```javascript
// Add to astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // ... other config
  experimental: {
    assets: true,
  },
  vite: {
    plugins: [
      // Add PWA plugin when ready
    ],
  },
});
```

### Mobile Optimization
- Responsive images with `<picture>` elements
- Touch-friendly button sizes (44px minimum)
- Fast loading on 3G networks
- Indian mobile browser compatibility

## 📈 Post-Deployment Optimization

### Week 1: Monitor Performance
- Check Google PageSpeed Insights
- Monitor Cloudflare Analytics
- Test on various devices and networks
- Gather initial user feedback

### Week 2: SEO Optimization
- Submit sitemap to Google Search Console
- Optimize meta descriptions for Indian keywords
- Add local business schema markup
- Create Google My Business listing

### Month 1: Advanced Features
- A/B test different CTAs
- Add customer chat widget
- Implement lead capture forms
- Set up email marketing integration

## 💰 Cost Optimization

### Cloudflare Pages Pricing
- **Free Tier**: 1 build per minute, 500 builds/month
- **Pro ($20/month)**: 5 builds per minute, 5,000 builds/month
- **Business ($200/month)**: 20 builds per minute, 20,000 builds/month

### Bandwidth & Storage
- 100GB bandwidth free
- Unlimited sites on paid plans
- No storage limits for static sites

### Indian Pricing Considerations
- Use Indian Rupee (₹) pricing throughout
- Consider GST implications for business
- Payment gateway fees (2-3% typical)

---

## 🚀 Ready to Deploy?

### Quick Deploy Command
```bash
# Complete deployment in one command
bun run deploy
```

### Support Resources
- **Cloudflare Docs**: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Bun Documentation**: [bun.sh/docs](https://bun.sh/docs)
- **Astro Deployment**: [docs.astro.build/guides/deploy](https://docs.astro.build/guides/deploy)

Your SME website will be live on Cloudflare's global network with Indian edge locations for optimal performance! 🇮🇳