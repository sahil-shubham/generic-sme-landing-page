# Deployment Guide

## Quick Deployment Checklist

### Before Deploying

1. **Update Configuration**
   - [ ] Edit `src/config/site.js` with your company details
   - [ ] Replace placeholder logo in `public/logo.png`
   - [ ] Update favicon in `public/favicon.ico`
   - [ ] Add real product images and client logos
   - [ ] Test contact form functionality

2. **Content Review**
   - [ ] Proofread all text content
   - [ ] Verify all links work correctly
   - [ ] Check product information is accurate
   - [ ] Validate contact information

3. **Performance Check**
   - [ ] Run `npm run build` to ensure no errors
   - [ ] Test on mobile devices
   - [ ] Verify image loading performance
   - [ ] Check accessibility compliance

## Deployment Options

### 1. Netlify (Recommended)

**Automatic Deployment from Git:**

1. Push your code to GitHub/GitLab
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy automatically on git push

**Manual Deployment:**

```bash
npm run build
# Upload dist/ folder to Netlify
```

### 2. Vercel

1. Import project from GitHub
2. Vercel auto-detects Astro
3. Deploy with zero configuration

### 3. GitHub Pages

Add to `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

### 4. Traditional Web Hosting

```bash
npm run build
# Upload contents of dist/ folder to your web server
```

## Domain Setup

### Custom Domain

1. **DNS Configuration:**
   - A record: Point to hosting provider IP
   - CNAME: Point to hosting provider domain

2. **SSL Certificate:**
   - Most modern hosts provide automatic SSL
   - Enable HTTPS redirect

### Subdomain Setup

For staging/testing:
- `staging.yourcompany.com`
- `dev.yourcompany.com`

## Environment Variables

If using form submissions or analytics:

```bash
# .env (not committed to git)
PUBLIC_SITE_URL=https://yourcompany.com
PUBLIC_GOOGLE_ANALYTICS_ID=GA_TRACKING_ID
FORM_SUBMISSION_ENDPOINT=https://api.yourservice.com/submit
```

## Post-Deployment Tasks

### 1. SEO Setup

- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta descriptions are unique
- [ ] Test Open Graph previews
- [ ] Check page load speeds

### 2. Analytics

Add to `src/layouts/Layout.astro`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### 3. Form Handling

Replace contact form action with:
- Netlify Forms (automatic)
- Formspree
- EmailJS
- Custom API endpoint

Example for Netlify:
```html
<form netlify name="contact">
  <!-- form fields -->
</form>
```

### 4. Monitoring

Set up monitoring for:
- [ ] Uptime monitoring
- [ ] Performance tracking
- [ ] Error logging
- [ ] Form submission alerts

## Maintenance

### Regular Updates

- [ ] Update dependencies monthly
- [ ] Review and update content quarterly
- [ ] Check for broken links
- [ ] Monitor performance metrics
- [ ] Backup site regularly

### Security

- [ ] Keep dependencies updated
- [ ] Monitor for security vulnerabilities
- [ ] Use HTTPS everywhere
- [ ] Implement CSP headers if needed

## Troubleshooting

### Common Issues

**Build Failures:**
- Check Node.js version (recommended: 18+)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall

**Images Not Loading:**
- Verify image URLs are accessible
- Check image file formats (jpg, png, webp)
- Ensure proper CORS headers for external images

**Styling Issues:**
- Rebuild with `npm run build`
- Check Tailwind CSS compilation
- Verify CSS class names are correct

**Mobile Issues:**
- Test with real devices
- Check viewport meta tag
- Verify touch interactions work

### Performance Optimization

```bash
# Optimize images
npm install -g @squoosh/cli
squoosh-cli --webp public/images/*.jpg

# Analyze bundle
npm run build -- --analyze
```

## Support

For deployment issues:
1. Check this guide first
2. Review hosting provider documentation
3. Test locally with `npm run preview`
4. Check browser console for errors

---

**Ready to Deploy?** Follow the checklist above and choose your preferred deployment method. The template is optimized for static hosting and should deploy without issues on most platforms.