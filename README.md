# Comprehensive SME Website Template for India

A highly sophisticated, sector-specific website template designed for Small and Medium Enterprises (SMEs) across India. This template provides industry-tailored configurations for 7 major sectors with comprehensive customization options and modern deployment capabilities.

## 🚀 Quick Start with Bun

```bash
# Install Bun (if not already installed)
curl -fsSL https://bun.sh/install | bash

# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Deploy to Cloudflare Pages
bun run deploy
```

## 🏭 Supported Industry Sectors

This template includes pre-configured setups for:

### 1. **Industrial Machinery & Equipment**
- CNC machines, automation systems, material handling
- B2B focus with technical specifications
- Professional blue theme, engineering-focused content

### 2. **Electronics & Electrical Goods**
- Biometric systems, photocopiers, LED lighting, IoT sensors
- Technology-forward design with purple theme
- Innovation and reliability messaging

### 3. **Textiles and Garments**
- Cotton fabrics, silk sarees, ready-to-wear garments
- Traditional yet modern orange theme
- Heritage craftsmanship with export quality

### 4. **Agriculture & Agro Products**
- Precision agriculture, organic processing, farm equipment
- Growth-oriented green theme
- Sustainability and farmer-centric approach

### 5. **Chemicals and Pharmaceuticals**
- APIs, specialty chemicals, quality control services
- Professional blue theme with regulatory focus
- Scientific precision and compliance messaging

### 6. **Consumer Goods and Household Products**
- Kitchen appliances, home care, personal care
- Friendly pink theme with family appeal
- Value and convenience positioning

### 7. **Construction Materials and Hardware**
- Steel, cement, construction tools
- Bold red theme emphasizing strength
- Durability and infrastructure focus

## 📁 Enhanced Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.astro    # Responsive navigation
│   ├── Hero.astro      # Industry-specific hero sections
│   ├── ClientMarquee.astro  # Client logos display
│   ├── TestimonialsCarousel.astro  # Customer testimonials
│   └── Footer.astro    # Contact and company info
├── config/
│   ├── site.js         # Base configuration
│   └── sectors.js      # Comprehensive sector configurations
├── layouts/
│   └── Layout.astro    # SEO-optimized base layout
├── pages/
│   ├── index.astro     # Dynamic landing page
│   ├── about.astro     # About us page
│   ├── products.astro  # Products with filtering
│   ├── contact.astro   # Contact form
│   └── products/
│       └── [slug].astro # Dynamic product pages
└── styles/
    └── global.css      # Global Tailwind CSS styles

scripts/
├── customize.js        # Enhanced customization utility
└── generate-sector-configs.js  # Sector configuration generator

generated-configs/      # Auto-generated sector configurations
├── sector-comparison-matrix.js
├── llm-prompts.js
└── [sector]-config.js  # Individual sector configs
```

## 🎯 Smart Configuration System

### Quick Sector Switch
```bash
# List available sectors
bun run customize list-sectors

# Switch to a specific sector
bun run customize sector industrial_machinery
bun run customize sector electronics_electrical
bun run customize sector textiles_garments
```

### Easy Customization
```bash
# Change color scheme
bun run customize color blue

# Update company information
bun run customize company --name "YourCompany" --title "Your Business Solutions"

# View current configuration
bun run customize status

# Generate all sector configurations
bun run generate:sectors
```

## 🎨 Advanced Theming

### Available Color Schemes
- **Blue**: Professional and trustworthy
- **Green**: Natural and growth-oriented  
- **Purple**: Creative and innovative
- **Red**: Bold and energetic
- **Orange**: Warm and approachable
- **Pink**: Modern and friendly
- **Indigo**: Deep and sophisticated
- **Teal**: Fresh and modern

### Sector-Specific Styling
Each sector includes:
- Industry-appropriate color palettes
- Contextual imagery guidelines
- Sector-specific messaging frameworks
- Target audience definitions
- Competitive positioning strategies

## 📊 Configuration Examples

### Industrial Machinery Company
```bash
bun run customize sector industrial_machinery
bun run customize color blue
bun run customize company \
  --name "IndoMach Solutions" \
  --title "Industrial Machinery Specialists" \
  --email "sales@indomach.com" \
  --phone "+91-22-4567-8900"
```

### Textile Export Business
```bash
bun run customize sector textiles_garments
bun run customize color orange
bun run customize company \
  --name "Heritage Textiles" \
  --title "Premium Textile Manufacturing" \
  --email "exports@heritagetextiles.com" \
  --phone "+91-80-9876-5432"
```

## 🚀 Deployment Options

### Cloudflare Pages (Recommended)
```bash
# Build and deploy to production
bun run deploy

# Deploy to preview environment
bun run deploy:preview
```

### Manual Cloudflare Setup
1. Connect your repository to Cloudflare Pages
2. Build command: `bun run build`
3. Output directory: `dist`
4. Environment variables: Set in Cloudflare dashboard

### Alternative Platforms
- **Netlify**: Auto-detects Astro, zero configuration
- **Vercel**: Import from GitHub, automatic deployment
- **GitHub Pages**: Use provided workflow in `.github/workflows/`

## 🔧 Customization for LLMs

### Sector-Specific Prompts
The template generates LLM-friendly prompts for each sector:

```javascript
// Example: Electronics sector customization prompt
"You are customizing a website for an Electronics & Electrical Goods company in India.
Target Audience: Business professionals, decision makers, technical experts
Market Position: Innovation leader
Tone: Modern, innovative, reliable
Focus on 4 main product categories with comprehensive support services."
```

### Content Strategy Guidelines
Each sector includes:
- **Business Context**: B2B vs B2C focus
- **Target Audience**: Specific buyer personas
- **Messaging Framework**: Key value propositions
- **Visual Style**: Industry-appropriate imagery
- **SEO Strategy**: Local and industry keywords

## 📈 Advanced Features

### Indian Market Focus
- **Pricing**: Indian Rupee (₹) format
- **Certifications**: BIS, ISI, FSSAI, ISO standards
- **Locations**: Major Indian cities and regions
- **Language**: English with regional considerations
- **Business Culture**: Local business practices

### SEO Optimization
- Industry-specific meta tags
- Local keyword optimization
- Schema markup for Indian businesses
- Mobile-first responsive design
- Fast loading times

### Analytics Ready
- Google Analytics integration
- Conversion tracking setup
- Performance monitoring
- User behavior analysis

## 🛠 Development Tools

### Bun-Powered Development
- **Fast**: 10x faster than npm
- **Modern**: Built-in TypeScript support
- **Simple**: Single runtime for everything

### Quality Assurance
- Automated testing setup
- Code formatting with Prettier
- ESLint configuration
- Performance monitoring

## 📋 LLM Integration Guide

### For AI Assistants

**Primary customization approach:**
1. Run `bun run customize list-sectors` to see options
2. Use `bun run customize sector <sector-key>` for industry setup
3. Customize with `bun run customize company` for basic info
4. Fine-tune colors with `bun run customize color <color>`
5. Review with `bun run customize status`

**Key configuration locations:**
- `src/config/site.js` - Main configuration
- `src/config/sectors.js` - Industry-specific settings
- `generated-configs/` - AI-friendly prompts and examples

### Content Customization Tasks

1. **Company Branding**: Update logos, colors, company information
2. **Product Catalog**: Add/modify products with Indian pricing
3. **Services Portfolio**: Customize service offerings
4. **Contact Information**: Local phone numbers and addresses
5. **Certifications**: Add relevant Indian certifications
6. **Client References**: Include Indian companies and testimonials

## 🌟 Template Highlights

### Industry Expertise
- **7 Major Sectors**: Comprehensive coverage of Indian SME landscape
- **Cultural Relevance**: Designed for Indian business environment
- **Regulatory Awareness**: Includes relevant certifications and standards

### Technical Excellence
- **Modern Framework**: Astro + Tailwind CSS + Bun
- **Performance Optimized**: Sub-second loading times
- **SEO Ready**: Built-in optimization for Indian markets
- **Mobile First**: Responsive design for all devices

### Business Value
- **Quick Setup**: Operational website in minutes
- **Professional Design**: Enterprise-grade appearance
- **Scalable Architecture**: Grows with your business
- **Cost Effective**: Open source with premium features

## 📞 Support & Community

### Getting Help
1. **Documentation**: Comprehensive guides and examples
2. **Configuration Tool**: Interactive customization scripts
3. **Sector Examples**: Real-world industry implementations
4. **LLM Prompts**: AI-friendly customization guidance

### Best Practices
- Start with sector-specific configuration
- Customize gradually with testing
- Use Indian business context
- Optimize for local search
- Include relevant certifications

## 📄 License

This template is designed for commercial use by Indian SMEs. Customize freely for your business needs while maintaining attribution to the original template.

---

**Ready to build your SME website?** 

1. `bun run customize list-sectors` - Choose your industry
2. `bun run customize sector <your-sector>` - Apply sector configuration  
3. `bun run customize company --name "YourCompany"` - Add your details
4. `bun run dev` - Start customizing
5. `bun run deploy` - Go live on Cloudflare

Transform your business presence with a professional website tailored for Indian SMEs! 🇮🇳
