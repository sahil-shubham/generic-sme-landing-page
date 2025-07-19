# LLM Customization Guide - Indian SME Website Template

## 🤖 For AI Assistants and Language Models

This guide helps LLMs efficiently customize the website template for Indian Small and Medium Enterprises (SMEs) across different industry sectors.

## 📋 Quick Start Checklist for LLMs

### 1. Understand the Client's Business
```javascript
// First, determine these key details:
const clientProfile = {
  industry: "electronics_electrical", // Choose from 7 available sectors
  businessType: "B2B", // B2B, B2C, or B2B/B2C
  location: "Mumbai, Maharashtra", // Indian city/state
  targetMarket: "Industrial buyers", // Primary audience
  companySize: "50-200 employees", // SME scale
  products: ["Biometric scanners", "LED lighting"], // Main offerings
  certifications: ["BIS", "CE"], // Relevant standards
}
```

### 2. Sector Selection Process
```bash
# Available sectors with their characteristics:
industrial_machinery     # B2B, blue theme, technical focus
electronics_electrical   # B2B, purple theme, innovation focus  
textiles_garments        # B2B/Export, orange theme, traditional+modern
agriculture_agro         # B2B, green theme, sustainability focus
chemicals_pharmaceuticals # B2B, blue theme, compliance focus
consumer_goods           # B2C, pink theme, family appeal
construction_hardware    # B2B, red theme, strength/durability
```

### 3. Configuration Commands Workflow
```bash
# Step 1: Choose sector
bun run customize sector electronics_electrical

# Step 2: Set appropriate color
bun run customize color purple

# Step 3: Update company details
bun run customize company \
  --name "TechVision Electronics" \
  --title "Advanced Electronic Solutions" \
  --email "info@techvision.co.in" \
  --phone "+91-22-4567-8901"

# Step 4: Verify configuration
bun run customize status
```

## 🏭 Sector-Specific Customization Patterns

### Industrial Machinery & Equipment
```javascript
// Target Audience: Manufacturing managers, procurement teams, industrial buyers
// Key Messaging: Technology, precision, reliability, service support
// Pricing Format: ₹25,00,000 - ₹1,20,00,000 (higher ticket items)
// Certifications: ISO 9001, CE Marking, BIS Standards, Make in India

const industrialMachineryConfig = {
  tone: "Professional, technical, authoritative",
  keywords: ["CNC machines", "automation", "precision", "manufacturing"],
  valueProps: ["Advanced technology", "Local service", "Custom solutions"],
  businessHours: "Monday-Saturday: 9:00 AM - 6:00 PM",
  emergencySupport: true
}
```

### Electronics & Electrical Goods  
```javascript
// Target Audience: IT managers, security officers, facility managers
// Key Messaging: Innovation, smart technology, reliability, energy efficiency
// Pricing Format: ₹15,000 - ₹3,50,000 (varied range)
// Certifications: BIS, RoHS, FCC, CE Marking

const electronicsConfig = {
  tone: "Modern, innovative, reliable",
  keywords: ["biometric", "LED lighting", "sensors", "smart technology"],
  valueProps: ["Cutting-edge tech", "Energy efficient", "Comprehensive support"],
  businessHours: "Monday-Saturday: 9:00 AM - 7:00 PM",
  emergencySupport: false
}
```

### Textiles and Garments
```javascript
// Target Audience: Fashion buyers, export agents, retail chains
// Key Messaging: Heritage craftsmanship, quality, traditional meets modern
// Pricing Format: ₹150 - ₹75,000 per meter/piece (wide range)
// Certifications: GOTS, OEKO-TEX, WRAP, BCI Member

const textilesConfig = {
  tone: "Elegant, traditional, quality-focused",
  keywords: ["cotton fabrics", "silk sarees", "handwoven", "export quality"],
  valueProps: ["Traditional craft", "Modern quality", "Export excellence"],
  businessHours: "Monday-Saturday: 10:00 AM - 6:00 PM",
  seasons: ["Summer Collection", "Winter Collection", "Festival Special"]
}
```

### Agriculture & Agro Products
```javascript
// Target Audience: Farmers, agro-dealers, food processors, cooperatives
// Key Messaging: Sustainability, farmer prosperity, technology integration
// Pricing Format: ₹50 - ₹25,00,000 (from products to machinery)
// Certifications: Organic India, FSSAI, APEDA, Global GAP

const agricultureConfig = {
  tone: "Supportive, sustainable, progressive",
  keywords: ["organic farming", "precision agriculture", "sustainable"],
  valueProps: ["Farmer-centric", "Sustainable practices", "Technology integration"],
  businessHours: "Monday-Saturday: 8:00 AM - 6:00 PM",
  seasonalFocus: true
}
```

### Chemicals and Pharmaceuticals
```javascript
// Target Audience: Pharma companies, research labs, quality managers
// Key Messaging: Quality, compliance, regulatory standards, scientific precision
// Pricing Format: ₹1,000 - ₹50,000 per kg (specialized products)
// Certifications: WHO-GMP, US FDA, EU GMP, NABL Accredited

const chemPharmaConfig = {
  tone: "Scientific, precise, trustworthy",
  keywords: ["pharmaceutical", "API", "quality control", "cGMP"],
  valueProps: ["Regulatory compliance", "Quality systems", "R&D capabilities"],
  businessHours: "Monday-Friday: 9:00 AM - 6:00 PM",
  documentationFocus: true
}
```

### Consumer Goods and Household Products
```javascript
// Target Audience: Families, homemakers, retail buyers, distributors
// Key Messaging: Value, convenience, family-friendly, Indian preferences
// Pricing Format: ₹99 - ₹35,000 (consumer price points)
// Certifications: ISI Mark, BIS Standards, FSSAI (for food-related)

const consumerGoodsConfig = {
  tone: "Friendly, accessible, value-oriented",
  keywords: ["household products", "kitchen appliances", "family", "convenience"],
  valueProps: ["Indian preferences", "Value pricing", "Wide distribution"],
  businessHours: "Monday-Saturday: 10:00 AM - 7:00 PM",
  festivalOffers: true
}
```

### Construction Materials and Hardware
```javascript
// Target Audience: Contractors, builders, architects, project managers
// Key Messaging: Strength, durability, infrastructure, quality assurance
// Pricing Format: ₹350 - ₹65,000 per unit/ton (bulk pricing)
// Certifications: BIS Standards, ISI Mark, Environment Clearance

const constructionConfig = {
  tone: "Strong, dependable, professional",
  keywords: ["construction materials", "steel", "cement", "infrastructure"],
  valueProps: ["Durability focus", "Project support", "Technical expertise"],
  businessHours: "Monday-Saturday: 8:00 AM - 6:00 PM",
  bulkOrders: true
}
```

## 🎨 Visual and Content Strategy by Sector

### Image Selection Guidelines
```javascript
const imageryGuidelines = {
  industrial_machinery: {
    primary: "factory floors, precision machinery, workers in safety gear",
    secondary: "technical drawings, quality control, modern facilities",
    style: "professional, clean, technical"
  },
  electronics_electrical: {
    primary: "high-tech devices, clean labs, digital interfaces",
    secondary: "innovation, efficiency, smart solutions",
    style: "sleek, modern, high-tech"
  },
  textiles_garments: {
    primary: "traditional looms, fabric textures, artisan work",
    secondary: "heritage craftsmanship, quality materials",
    style: "classic, elegant, timeless"
  },
  // ... similar for other sectors
}
```

### Content Tone Adaptation
```javascript
const toneExamples = {
  b2b_technical: "Our precision CNC machining centers deliver exceptional accuracy with advanced multi-axis capabilities, ensuring your manufacturing processes meet the highest quality standards.",
  
  b2b_consultative: "We partner with you to understand your unique challenges and deliver customized solutions that drive efficiency and growth.",
  
  b2c_friendly: "Make your home more comfortable and convenient with our range of thoughtfully designed products that understand Indian family needs.",
  
  traditional_heritage: "Each piece reflects centuries of traditional craftsmanship, handwoven by skilled artisans who have perfected their art through generations."
}
```

## 📞 Indian Market Localization

### Contact Information Templates
```javascript
const indianContactInfo = {
  businessRegistration: {
    gst: "27XXXXX1234X1Z5", // GST format
    cin: "U12345XX2020PTC123456", // Corporate Identity Number
    msme: "UDYAM-XX-12-1234567" // MSME Registration
  },
  
  phoneNumbers: {
    landline: "+91-22-1234-5678", // City code format
    mobile: "+91-98765-43210", // Mobile format
    whatsapp: "+91-98765-43210", // Often same as mobile
    tollfree: "1800-123-4567" // Toll-free format
  },
  
  addresses: {
    format: "Building Name, Street, Area, City - PIN Code, State, India",
    example: "Tech Tower, MG Road, Andheri East, Mumbai - 400069, Maharashtra, India"
  }
}
```

### Pricing and Business Terms
```javascript
const indianBusinessTerms = {
  pricing: {
    currency: "₹", // Indian Rupee symbol
    format: "₹12,34,567", // Indian numbering system (lakhs/crores)
    gst: "Price + 18% GST", // Standard GST rate
    payment: "Advance payment, LC, Bank guarantee accepted"
  },
  
  businessHours: {
    standard: "Monday to Saturday: 9:30 AM to 6:30 PM",
    half_day: "Saturday: 9:30 AM to 1:30 PM",
    lunch: "Lunch Break: 1:00 PM to 2:00 PM"
  },
  
  holidays: {
    note: "Closed on all national holidays and local festivals",
    major: ["Diwali", "Holi", "Eid", "Christmas", "Independence Day", "Republic Day"]
  }
}
```

### Regional Customization
```javascript
const regionalCustomization = {
  northIndia: {
    majorCities: ["Delhi", "Gurgaon", "Noida", "Chandigarh"],
    languages: ["Hindi", "English", "Punjabi"],
    businessCulture: "Relationship-focused, formal approach"
  },
  
  westIndia: {
    majorCities: ["Mumbai", "Pune", "Ahmedabad", "Surat"],
    languages: ["Marathi", "Gujarati", "English"],
    businessCulture: "Commercial hub, fast-paced"
  },
  
  southIndia: {
    majorCities: ["Bangalore", "Chennai", "Hyderabad", "Kochi"],
    languages: ["Tamil", "Telugu", "Kannada", "Malayalam", "English"],
    businessCulture: "Tech-savvy, education-focused"
  },
  
  eastIndia: {
    majorCities: ["Kolkata", "Bhubaneswar", "Guwahati"],
    languages: ["Bengali", "Hindi", "English"],
    businessCulture: "Traditional, relationship-based"
  }
}
```

## 🔍 SEO Optimization for Indian Market

### Local Keywords Integration
```javascript
const seoStrategy = {
  primaryKeywords: [
    "{product/service} India",
    "{product/service} manufacturer India",
    "best {product/service} company India",
    "{product/service} supplier {city}"
  ],
  
  localKeywords: [
    "{product/service} Mumbai",
    "{product/service} Delhi",
    "{product/service} Bangalore",
    "{product/service} Chennai",
    "{product/service} Pune"
  ],
  
  industryKeywords: [
    "Make in India {sector}",
    "Indian {sector} company",
    "{sector} exports India",
    "{sector} manufacturer Gujarat/Maharashtra/Tamil Nadu"
  ]
}
```

### Meta Tags Template
```html
<!-- Optimized for Indian search -->
<title>{Company Name} - {Primary Service} | Leading {Sector} Company in India</title>
<meta name="description" content="{Company Name} is a leading {sector} company in India, offering {key products/services}. Serving clients across Mumbai, Delhi, Bangalore with quality products and excellent service.">
<meta name="keywords" content="{primary keywords}, {local keywords}, {industry keywords}">

<!-- Local Business Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "{Company Name}",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "{State}",
    "addressLocality": "{City}"
  }
}
</script>
```

## 🛠 Common Customization Scenarios

### Scenario 1: Industrial Equipment Manufacturer
```javascript
// Client: CNC machine manufacturer in Chennai
const scenario1 = {
  sector: "industrial_machinery",
  location: "Chennai, Tamil Nadu",
  target: "Automotive and aerospace manufacturers",
  
  customization: {
    hero: {
      title: "Precision CNC Solutions for India's Manufacturing Excellence",
      subtitle: "Advanced machining centers designed for automotive, aerospace, and precision engineering industries across South India",
      cta: "View Our Technology"
    },
    
    products: [
      {
        name: "5-Axis CNC Machining Centers",
        price: "₹45,00,000 - ₹1,20,00,000",
        features: ["Siemens control", "Automatic tool changer", "In-process gauging"]
      }
    ],
    
    certifications: ["ISO 9001:2015", "CE Marking", "Make in India"],
    serviceAreas: ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Kerala"]
  }
}
```

### Scenario 2: Textile Export Business
```javascript
// Client: Cotton fabric exporter from Gujarat
const scenario2 = {
  sector: "textiles_garments",
  location: "Ahmedabad, Gujarat",
  target: "International buyers and domestic fashion brands",
  
  customization: {
    hero: {
      title: "Premium Indian Cotton Fabrics for Global Markets",
      subtitle: "Exporting finest quality cotton textiles from the heart of Gujarat's textile hub to over 25 countries worldwide",
      cta: "Export Catalog"
    },
    
    products: [
      {
        name: "Organic Cotton Fabrics",
        price: "₹280 - ₹450 per meter",
        features: ["GOTS certified", "Zero harmful chemicals", "Export quality"]
      }
    ],
    
    certifications: ["GOTS Certified", "OEKO-TEX Standard", "WRAP Certification"],
    exportMarkets: ["USA", "EU", "Australia", "Japan", "UAE"]
  }
}
```

### Scenario 3: Electronics Components Supplier
```javascript
// Client: Electronics distributor in Bangalore
const scenario3 = {
  sector: "electronics_electrical",
  location: "Bangalore, Karnataka",
  target: "Electronics manufacturers and system integrators",
  
  customization: {
    hero: {
      title: "Electronic Components & Solutions for India's Tech Capital",
      subtitle: "Comprehensive range of electronic components, sensors, and automation solutions serving Bangalore's thriving electronics industry",
      cta: "Product Catalog"
    },
    
    products: [
      {
        name: "Industrial IoT Sensors",
        price: "₹2,500 - ₹18,000",
        features: ["Industry 4.0 ready", "Wireless connectivity", "Indian conditions tested"]
      }
    ],
    
    certifications: ["BIS Certification", "RoHS Compliance", "CE Marking"],
    serviceAreas: ["Karnataka", "Tamil Nadu", "Andhra Pradesh", "Telangana"]
  }
}
```

## 📝 Content Generation Templates

### Product Description Template
```javascript
const productDescTemplate = `
{Product Name} - {Brief Description}

Our {product name} is designed specifically for {target market} in India, combining {key technology/feature} with {local advantage}. 

Key Features:
• {Feature 1 with local relevance}
• {Feature 2 with technical detail}
• {Feature 3 with business benefit}
• {Feature 4 with Indian standard compliance}

Technical Specifications:
{Relevant technical details}

Applications:
Ideal for {use case 1}, {use case 2}, and {use case 3} across industries like {industry 1}, {industry 2}, and {industry 3}.

Support & Service:
Complete installation, training, and maintenance support available across {service regions}.

Price: {Indian Rupee pricing} + GST
Delivery: Pan-India delivery within {timeframe}
Warranty: {warranty period} with local service support
`
```

### About Us Section Template
```javascript
const aboutUsTemplate = `
Established in {year}, {Company Name} has emerged as a leading {sector description} company based in {city}, {state}. 

Our Mission:
To provide {target market} with {value proposition} that combines {key differentiator 1} with {key differentiator 2}.

Our Expertise:
• Over {years} years of experience in {sector}
• Serving {number}+ satisfied customers across India
• {Key achievement or recognition}
• Committed to {company values}

Why Choose Us:
✓ {Competitive advantage 1}
✓ {Competitive advantage 2}  
✓ {Competitive advantage 3}
✓ Pan-India service and support network

Our facility in {location} is equipped with {facility description} and follows {quality standards} to ensure consistent quality and timely delivery.

We are proud members of {industry associations} and certified under {certifications}, reflecting our commitment to excellence and customer satisfaction.
`
```

## 🚀 Quick Implementation Checklist

### Phase 1: Basic Setup (5 minutes)
- [ ] `bun run customize list-sectors` - Review available sectors
- [ ] `bun run customize sector {chosen-sector}` - Apply sector configuration
- [ ] `bun run customize color {appropriate-color}` - Set color scheme
- [ ] `bun run customize status` - Verify basic setup

### Phase 2: Company Information (10 minutes)
- [ ] Update company name, title, and description
- [ ] Add Indian contact information (phone, email, address)
- [ ] Include GST number and business registration details
- [ ] Add relevant Indian certifications

### Phase 3: Content Customization (15 minutes)
- [ ] Modify product/service descriptions with Indian pricing
- [ ] Update about us section with company history
- [ ] Add client testimonials with Indian company names
- [ ] Include service areas and delivery information

### Phase 4: Final Review (5 minutes)
- [ ] Check all Indian Rupee pricing formats
- [ ] Verify phone numbers use +91 country code
- [ ] Ensure addresses follow Indian format
- [ ] Test all links and contact forms

## 🎯 Success Metrics

After customization, the website should achieve:
- **Industry Relevance**: 95%+ content relevant to chosen sector
- **Local Context**: All pricing, contacts, and references use Indian format
- **Professional Appeal**: Design and messaging appropriate for B2B/B2C audience
- **SEO Readiness**: Optimized for Indian market search queries
- **Mobile Friendly**: Responsive design for Indian mobile users

---

**Ready to start customizing?** Use this guide to efficiently transform the template into a professional website that resonates with Indian SME markets! 🇮🇳