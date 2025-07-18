# Configurable SME Landing Page Template

A modern, responsive, and highly configurable Astro template designed for small-medium enterprises (SMEs). Built with Tailwind CSS and optimized for easy customization via LLM.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.astro    # Navigation bar with responsive design
│   ├── Hero.astro      # Hero section with background image
│   ├── ClientMarquee.astro  # Animated client logos
│   ├── TestimonialsCarousel.astro  # Customer testimonials
│   └── Footer.astro    # Site footer with contact info
├── config/
│   └── site.js         # Main configuration file
├── layouts/
│   └── Layout.astro    # Base layout with SEO meta tags
├── pages/
│   ├── index.astro     # Landing page
│   ├── about.astro     # About us page
│   ├── products.astro  # Products listing
│   ├── contact.astro   # Contact form and info
│   └── products/
│       └── [slug].astro # Dynamic product pages
└── styles/
    └── global.css      # Global Tailwind CSS styles
```

## 🎨 Configuration Guide

### Primary Configuration File: `src/config/site.js`

This is the main file for customizing your site. All content, styling, and behavior can be modified here.

#### Basic Site Information
```javascript
site: {
  name: "YourCompany",
  title: "Professional Business Solutions", 
  description: "We provide innovative solutions for modern businesses",
  url: "https://yourcompany.com",
  logo: "/logo.png",
  favicon: "/favicon.ico"
}
```

#### Theme Configuration
```javascript
theme: {
  primary: "blue",     // Options: blue, green, purple, red, orange, pink
  style: "modern",     // Options: modern, classic, minimal, bold
  layout: "centered",  // Options: centered, wide, compact
}
```

#### Hero Section
```javascript
hero: {
  title: "Transform Your Business with Our Solutions",
  subtitle: "We deliver innovative, scalable solutions...",
  ctaText: "Explore Our Products",
  ctaLink: "/products",
  backgroundImage: "https://images.unsplash.com/...",
  overlayOpacity: "bg-opacity-50" // bg-opacity-30, bg-opacity-50, bg-opacity-70
}
```

## 🎯 Key Features

### 1. Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

### 2. SEO Optimized
- Meta tags in `Layout.astro`
- Open Graph support
- Twitter Card support
- Structured data ready

### 3. Performance Focused
- Lazy loading images
- Optimized animations
- Fast Tailwind CSS
- Minimal JavaScript

### 4. Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader friendly
- High contrast support

## 🛠 Customization Instructions

### Changing Color Schemes

Update the `theme.primary` in `src/config/site.js`:

```javascript
theme: {
  primary: "green", // Changes entire site color scheme
}
```

Available colors: blue, green, purple, red, orange, pink

### Adding New Products

Add to the `products` array in `src/config/site.js`:

```javascript
{
  id: 4,
  name: "New Product Name",
  slug: "new-product-name",
  shortDescription: "Brief description",
  description: "Detailed description",
  price: "Starting at $299/month", 
  image: "https://images.unsplash.com/...",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  category: "New Category"
}
```

### Updating Client Logos

Modify the `clients` array in `src/config/site.js`:

```javascript
{
  name: "Client Name",
  logo: "https://images.unsplash.com/...",
  alt: "Client Name Logo"
}
```

### Customizing Testimonials

Update the `testimonials` array:

```javascript
{
  id: 4,
  name: "Customer Name",
  title: "Position",
  company: "Company Name",
  image: "https://images.unsplash.com/...",
  content: "Testimonial content...",
  rating: 5
}
```

## 🖼 Image Guidelines

### Using Unsplash Images
All sample images use Unsplash with optimized parameters:
- Format: `https://images.unsplash.com/photo-[ID]?ixlib=rb-4.0.3&auto=format&fit=crop&w=[WIDTH]&q=80`
- Replace `[ID]` with Unsplash photo ID
- Replace `[WIDTH]` with desired width

### Image Sizes
- **Hero Background**: 2070x1380px (3:2 ratio)
- **Product Images**: 800x600px (4:3 ratio)  
- **Client Logos**: 200x100px (2:1 ratio)
- **Testimonial Photos**: 400x400px (1:1 ratio)
- **About Page Images**: 800x600px (4:3 ratio)

## 📱 Component Documentation

### Navbar Component
- Responsive navigation with mobile hamburger menu
- Active page highlighting
- Sticky positioning
- CTA button included

### Hero Component  
- Full-screen background image with overlay
- Configurable opacity
- Responsive text sizing
- Animated scroll indicator

### ClientMarquee Component
- Infinite scroll animation
- Hover to pause
- Responsive logo sizing
- Smooth transitions

### TestimonialsCarousel Component
- Auto-playing carousel
- Navigation arrows and dots
- Touch/swipe support
- Keyboard navigation
- Pause on hover

### Footer Component
- Contact information
- Social media links
- Navigation links
- Copyright notice

## 🚀 Deployment

### Build Commands
```bash
# Build for production
npm run build

# Preview build locally  
npm run preview
```

### Deployment Platforms
- **Netlify**: Connect GitHub repo for auto-deploy
- **Vercel**: Import project for instant deployment
- **GitHub Pages**: Use GitHub Actions workflow
- **Static Hosting**: Upload `dist/` folder contents

## 🔧 LLM Customization Guide

### For AI Assistants:

1. **Primary customization location**: `src/config/site.js`
2. **Key areas to modify**:
   - Company information
   - Product details
   - Contact information
   - Color themes
   - Content text

3. **Image replacement**: Update URLs in config file
4. **New pages**: Follow existing pattern in `src/pages/`
5. **Styling**: Modify Tailwind classes in components

### Common Customization Tasks:

#### Task 1: Change Company Information
Edit `site` object in `src/config/site.js`

#### Task 2: Update Color Scheme  
Change `theme.primary` value

#### Task 3: Add New Product
Add object to `products` array

#### Task 4: Modify Hero Section
Update `hero` object properties

#### Task 5: Change Contact Details
Edit `contact` object

## 📋 Task Management

### ✅ Completed Features
- [x] Responsive navigation bar
- [x] Hero section with background image
- [x] Client logos marquee  
- [x] Testimonials carousel
- [x] About us page
- [x] Products listing with filtering
- [x] Individual product pages
- [x] Contact form with validation
- [x] Footer with contact info
- [x] SEO optimization
- [x] Accessibility features
- [x] Mobile responsiveness

### 🔄 Ready for Customization
- [ ] Replace placeholder logo with actual logo
- [ ] Update company information
- [ ] Add real product images
- [ ] Customize color scheme
- [ ] Add actual client logos
- [ ] Update contact form endpoint
- [ ] Add Google Maps integration
- [ ] Customize meta descriptions
- [ ] Add analytics tracking
- [ ] Set up form submissions

### 🚀 Enhancement Ideas
- [ ] Add blog section
- [ ] Implement search functionality  
- [ ] Add multi-language support
- [ ] Create admin dashboard
- [ ] Add e-commerce features
- [ ] Implement user authentication
- [ ] Add live chat widget
- [ ] Create mobile app
- [ ] Add video backgrounds
- [ ] Implement dark mode

## 🎨 Theme Variations

### Available Themes
1. **Modern** (default): Clean, contemporary design
2. **Classic**: Traditional, professional layout
3. **Minimal**: Simple, focused design
4. **Bold**: High-contrast, impactful styling

### Layout Options
1. **Centered**: Content centered with max-width
2. **Wide**: Full-width layouts
3. **Compact**: Tighter spacing and smaller elements

## 📞 Support & Documentation

### File Structure Reference
- **Components**: Reusable UI elements
- **Pages**: Route-based page files
- **Layouts**: Wrapper components for pages
- **Config**: Site configuration and data
- **Styles**: Global CSS and styling

### Best Practices
1. Always update `src/config/site.js` for content changes
2. Use Unsplash URLs for consistent image loading
3. Maintain aspect ratios for images
4. Test on mobile devices
5. Validate forms before deployment
6. Optimize images for web use

## 🔗 External Dependencies

- **Astro**: Static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **Inter Font**: Google Fonts typography
- **Heroicons**: SVG icon library
- **Unsplash**: Sample images

## 📄 License

This template is designed for commercial use. Customize freely for your business needs.

---

**Need help?** This template is designed to be easily customizable by LLMs. Most changes can be made in the `src/config/site.js` file without touching component code.
