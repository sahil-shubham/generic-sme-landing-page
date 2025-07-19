// Comprehensive Sector Configurations for Indian SMEs
// This file contains pre-built configurations for different industry sectors

export const sectorConfigurations = {
  // Industrial Machinery & Equipment
  industrial_machinery: {
    sectorName: "Industrial Machinery & Equipment",
    site: {
      name: "IndoMach Solutions",
      title: "Industrial Machinery & Equipment Specialists",
      description: "Leading manufacturer and supplier of industrial machinery, automation solutions, and precision equipment for modern manufacturing",
      keywords: "industrial machinery, manufacturing equipment, automation, precision tools, factory equipment, CNC machines"
    },
    theme: {
      primary: "blue",
      style: "modern",
      layout: "wide"
    },
    hero: {
      title: "Powering India's Manufacturing Revolution",
      subtitle: "From precision CNC machines to complete automation solutions, we deliver world-class industrial equipment that drives efficiency and productivity",
      ctaText: "View Our Machinery",
      ctaLink: "/products",
      backgroundImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlayOpacity: "bg-opacity-60"
    },
    products: [
      {
        name: "CNC Machining Centers",
        slug: "cnc-machining-centers",
        shortDescription: "High-precision CNC machines for complex manufacturing",
        description: "Advanced computer numerical control machining centers designed for high-precision manufacturing. Features multi-axis capabilities, automatic tool changers, and integrated quality control systems.",
        price: "₹25,00,000 - ₹1,20,00,000",
        image: "https://images.unsplash.com/photo-1516996087931-5ae405802f4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["5-axis machining capability", "Automatic tool changer", "In-process measurement", "CAM software included", "24/7 technical support", "Training included"],
        category: "Precision Machinery"
      },
      {
        name: "Industrial Automation Systems",
        slug: "industrial-automation-systems",
        shortDescription: "Complete factory automation and control systems",
        description: "Comprehensive automation solutions including PLCs, SCADA systems, robotic integration, and process control for manufacturing excellence.",
        price: "₹5,00,000 - ₹50,00,000",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["PLC programming", "SCADA integration", "Robotic automation", "Process monitoring", "Remote diagnostics", "Energy optimization"],
        category: "Automation"
      },
      {
        name: "Material Handling Equipment",
        slug: "material-handling-equipment",
        shortDescription: "Conveyor systems and warehouse automation",
        description: "Advanced material handling solutions including conveyor systems, automated storage, and warehouse management systems for efficient logistics.",
        price: "₹2,00,000 - ₹15,00,000",
        image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Modular design", "Variable speed control", "Safety systems", "Easy maintenance", "Custom configurations", "Installation support"],
        category: "Material Handling"
      }
    ],
    services: [
      "Equipment Installation & Commissioning",
      "Preventive Maintenance Programs",
      "Technical Training & Certification",
      "Spare Parts & Service Support",
      "Equipment Modernization",
      "Performance Optimization"
    ],
    certifications: ["ISO 9001:2015", "CE Marking", "BIS Standards", "Make in India"]
  },

  // Electronics & Electrical Goods
  electronics_electrical: {
    sectorName: "Electronics & Electrical Goods",
    site: {
      name: "ElectroTech India",
      title: "Advanced Electronics & Electrical Solutions",
      description: "Comprehensive range of electronic devices, electrical equipment, and smart technology solutions for businesses and institutions",
      keywords: "electronics, electrical equipment, fingerprint scanners, photocopiers, LED lighting, sensors, automation"
    },
    theme: {
      primary: "purple",
      style: "modern",
      layout: "centered"
    },
    hero: {
      title: "Smart Electronics for Modern India",
      subtitle: "From advanced biometric systems to intelligent lighting solutions, we provide cutting-edge electronic and electrical products that enhance security, efficiency, and productivity",
      ctaText: "Explore Products",
      ctaLink: "/products",
      backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlayOpacity: "bg-opacity-50"
    },
    products: [
      {
        name: "Biometric Fingerprint Scanners",
        slug: "biometric-fingerprint-scanners",
        shortDescription: "Advanced biometric access control systems",
        description: "High-security fingerprint scanning systems with advanced algorithms for accurate identification. Suitable for offices, factories, and government institutions.",
        price: "₹15,000 - ₹85,000",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["99.9% accuracy", "1:N identification", "TCP/IP connectivity", "Anti-spoofing technology", "Weather resistant", "Mobile app integration"],
        category: "Security Systems"
      },
      {
        name: "Multifunction Photocopier Machines",
        slug: "multifunction-photocopier-machines",
        shortDescription: "Professional printing and document solutions",
        description: "High-speed multifunction printers with scanning, copying, and network capabilities. Perfect for offices and business centers.",
        price: "₹45,000 - ₹3,50,000",
        image: "https://images.unsplash.com/photo-1586281010138-8e1b33aa4d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["High-speed printing", "Duplex scanning", "Network connectivity", "Mobile printing", "Document security", "Cost control"],
        category: "Office Equipment"
      },
      {
        name: "LED High Mast Lighting",
        slug: "led-high-mast-lighting",
        shortDescription: "Energy-efficient outdoor lighting solutions",
        description: "Professional LED high mast lighting systems for stadiums, parking areas, and industrial complexes with intelligent controls and energy savings.",
        price: "₹1,20,000 - ₹8,50,000",
        image: "https://images.unsplash.com/photo-1558618666-4c1d51c6c9b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["80% energy savings", "Smart controls", "Weather resistant", "25-year lifespan", "Remote monitoring", "Custom pole heights"],
        category: "Lighting Solutions"
      },
      {
        name: "Industrial IoT Sensors",
        slug: "industrial-iot-sensors",
        shortDescription: "Smart sensors for Industry 4.0 applications",
        description: "Advanced wireless sensors for temperature, humidity, pressure, and motion monitoring with cloud connectivity and real-time alerts.",
        price: "₹5,000 - ₹45,000",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Wireless connectivity", "Cloud integration", "Real-time monitoring", "Mobile alerts", "Long battery life", "Weatherproof design"],
        category: "IoT Solutions"
      }
    ],
    services: [
      "Installation & Configuration",
      "Annual Maintenance Contracts",
      "Technical Support & Training",
      "Custom Integration Solutions",
      "Warranty & Repair Services",
      "System Upgrades"
    ],
    certifications: ["BIS Certification", "RoHS Compliance", "FCC Approved", "CE Marking", "ISO 9001:2015"]
  },

  // Textiles and Garments
  textiles_garments: {
    sectorName: "Textiles and Garments",
    site: {
      name: "Heritage Textiles",
      title: "Premium Textiles & Garment Manufacturing",
      description: "Traditional craftsmanship meets modern technology in our premium textile and garment manufacturing for domestic and export markets",
      keywords: "textiles, garments, fabric manufacturing, cotton, silk, export, fashion, traditional wear"
    },
    theme: {
      primary: "orange",
      style: "classic",
      layout: "wide"
    },
    hero: {
      title: "Weaving India's Textile Legacy",
      subtitle: "From traditional handlooms to modern manufacturing facilities, we create premium quality textiles and garments that showcase India's rich heritage while meeting global standards",
      ctaText: "View Collections",
      ctaLink: "/products",
      backgroundImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlayOpacity: "bg-opacity-40"
    },
    products: [
      {
        name: "Premium Cotton Fabrics",
        slug: "premium-cotton-fabrics",
        shortDescription: "100% pure cotton fabrics in various weaves",
        description: "High-quality cotton fabrics sourced from the finest cotton growing regions of India. Available in various weaves, weights, and finishes for apparel and home textiles.",
        price: "₹150 - ₹800 per meter",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["100% pure cotton", "GOTS certified", "Colorfast dyes", "Multiple weights", "Custom prints", "Export quality"],
        category: "Cotton Textiles"
      },
      {
        name: "Traditional Silk Sarees",
        slug: "traditional-silk-sarees",
        shortDescription: "Handwoven silk sarees with traditional motifs",
        description: "Exquisite handwoven silk sarees featuring traditional Indian motifs and designs. Each piece represents hours of skilled craftsmanship by master weavers.",
        price: "₹5,000 - ₹75,000",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Pure silk", "Handwoven", "Traditional motifs", "Natural dyes", "GI tagged", "Artisan crafted"],
        category: "Silk Products"
      },
      {
        name: "Ready-to-Wear Garments",
        slug: "ready-to-wear-garments",
        shortDescription: "Contemporary fashion for domestic and export",
        description: "Modern ready-to-wear clothing line combining contemporary designs with traditional Indian elements. Manufactured to international quality standards.",
        price: "₹500 - ₹5,000",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Contemporary designs", "Quality stitching", "Size range S-XXXL", "Color variants", "Export quality", "Sustainable fabrics"],
        category: "Garments"
      }
    ],
    services: [
      "Custom Fabric Development",
      "Private Label Manufacturing",
      "Design & Pattern Making",
      "Quality Testing & Certification",
      "Export Documentation",
      "Logistics & Shipping"
    ],
    certifications: ["GOTS Certified", "OEKO-TEX Standard", "WRAP Certification", "BCI Member", "ISO 9001:2015"]
  },

  // Agriculture & Agro Products
  agriculture_agro: {
    sectorName: "Agriculture & Agro Products",
    site: {
      name: "AgriTech Solutions",
      title: "Modern Agriculture & Premium Agro Products",
      description: "Sustainable farming solutions and premium agricultural products that nourish communities while supporting farmer prosperity",
      keywords: "agriculture, farming, organic products, agro processing, farm equipment, sustainable farming, food processing"
    },
    theme: {
      primary: "green",
      style: "modern",
      layout: "wide"
    },
    hero: {
      title: "Cultivating India's Agricultural Future",
      subtitle: "From innovative farming technologies to premium processed foods, we're committed to sustainable agriculture that benefits farmers, consumers, and the environment",
      ctaText: "Explore Solutions",
      ctaLink: "/products",
      backgroundImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlayOpacity: "bg-opacity-50"
    },
    products: [
      {
        name: "Precision Agriculture Systems",
        slug: "precision-agriculture-systems",
        shortDescription: "Smart farming technology for optimal yields",
        description: "Advanced precision agriculture solutions including soil sensors, drone monitoring, and automated irrigation systems to maximize crop yields while minimizing resource usage.",
        price: "₹2,50,000 - ₹15,00,000",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Soil monitoring", "Drone surveillance", "Automated irrigation", "Weather integration", "Mobile app control", "Data analytics"],
        category: "Farm Technology"
      },
      {
        name: "Organic Food Processing",
        slug: "organic-food-processing",
        shortDescription: "Premium organic food products and processing",
        description: "State-of-the-art food processing facility producing certified organic products including grains, spices, and packaged foods with complete traceability.",
        price: "₹50 - ₹500 per kg",
        image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Organic certified", "FSSAI approved", "Traceability system", "Custom packaging", "Export quality", "Cold chain logistics"],
        category: "Food Processing"
      },
      {
        name: "Agricultural Machinery",
        slug: "agricultural-machinery",
        shortDescription: "Modern farm equipment and machinery",
        description: "Comprehensive range of agricultural machinery including tractors, harvesters, and specialized equipment designed for Indian farming conditions.",
        price: "₹3,50,000 - ₹25,00,000",
        image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Fuel efficient", "Low maintenance", "Local service", "Financing options", "Training provided", "Warranty support"],
        category: "Farm Equipment"
      }
    ],
    services: [
      "Farm Mechanization Consulting",
      "Soil Testing & Analysis",
      "Crop Advisory Services",
      "Organic Certification Support",
      "Post-Harvest Management",
      "Market Linkage Programs"
    ],
    certifications: ["Organic India Certified", "FSSAI Licensed", "APEDA Registered", "ISO 22000", "Global GAP"]
  },

  // Chemicals and Pharmaceuticals
  chemicals_pharmaceuticals: {
    sectorName: "Chemicals and Pharmaceuticals",
    site: {
      name: "ChemPharma Industries",
      title: "Quality Chemicals & Pharmaceutical Solutions",
      description: "Manufacturing high-quality chemicals and pharmaceutical products with stringent quality controls and regulatory compliance",
      keywords: "chemicals, pharmaceuticals, API, drug manufacturing, specialty chemicals, research, quality control"
    },
    theme: {
      primary: "blue",
      style: "professional",
      layout: "centered"
    },
    hero: {
      title: "Advancing Healthcare Through Chemistry",
      subtitle: "Our state-of-the-art manufacturing facilities produce premium chemicals and pharmaceutical products that meet global quality standards and contribute to better health outcomes",
      ctaText: "View Products",
      ctaLink: "/products",
      backgroundImage: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlayOpacity: "bg-opacity-60"
    },
    products: [
      {
        name: "Active Pharmaceutical Ingredients",
        slug: "active-pharmaceutical-ingredients",
        shortDescription: "High-purity APIs for drug manufacturing",
        description: "Premium quality Active Pharmaceutical Ingredients manufactured under cGMP conditions with complete documentation and regulatory support for generic drug manufacturers.",
        price: "₹2,000 - ₹50,000 per kg",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["cGMP certified", "DMF support", "Analytical testing", "Regulatory documentation", "Custom synthesis", "Scale-up support"],
        category: "APIs"
      },
      {
        name: "Specialty Chemical Solutions",
        slug: "specialty-chemical-solutions",
        shortDescription: "Custom chemicals for industrial applications",
        description: "Specialized chemical solutions for various industries including agrochemicals, dyes, and industrial intermediates with custom synthesis capabilities.",
        price: "₹500 - ₹20,000 per kg",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Custom synthesis", "Pilot scale", "Process optimization", "Quality assurance", "Technical support", "Regulatory compliance"],
        category: "Specialty Chemicals"
      },
      {
        name: "Quality Control Services",
        slug: "quality-control-services",
        shortDescription: "Comprehensive analytical testing services",
        description: "Full-service analytical laboratory providing comprehensive testing services for pharmaceuticals, chemicals, and related products with NABL accreditation.",
        price: "₹1,000 - ₹25,000 per test",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["NABL accredited", "Method development", "Validation studies", "Stability testing", "Impurity profiling", "Regulatory support"],
        category: "Testing Services"
      }
    ],
    services: [
      "Contract Manufacturing",
      "Process Development",
      "Regulatory Consulting",
      "Quality Assurance",
      "Custom Synthesis",
      "Analytical Method Development"
    ],
    certifications: ["WHO-GMP", "US FDA", "EU GMP", "ISO 9001:2015", "NABL Accredited", "DSIR Recognized"]
  },

  // Consumer Goods and Household Products
  consumer_goods: {
    sectorName: "Consumer Goods and Household Products",
    site: {
      name: "HomeComfort Essentials",
      title: "Quality Consumer Goods & Household Products",
      description: "Innovative and affordable consumer products that enhance daily life with quality, convenience, and value for Indian families",
      keywords: "consumer goods, household products, kitchen appliances, home care, personal care, FMCG, retail"
    },
    theme: {
      primary: "pink",
      style: "modern",
      layout: "wide"
    },
    hero: {
      title: "Enhancing Every Indian Home",
      subtitle: "From innovative kitchen appliances to essential household products, we create solutions that make daily life more convenient, comfortable, and enjoyable for families across India",
      ctaText: "Shop Products",
      ctaLink: "/products",
      backgroundImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlayOpacity: "bg-opacity-45"
    },
    products: [
      {
        name: "Smart Kitchen Appliances",
        slug: "smart-kitchen-appliances",
        shortDescription: "Modern kitchen solutions for Indian homes",
        description: "Innovative kitchen appliances designed specifically for Indian cooking styles, featuring energy efficiency, durability, and user-friendly operation.",
        price: "₹2,500 - ₹35,000",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Energy efficient", "Indian recipes", "Easy cleaning", "Compact design", "Safety features", "Warranty included"],
        category: "Kitchen Appliances"
      },
      {
        name: "Eco-Friendly Home Care",
        slug: "eco-friendly-home-care",
        shortDescription: "Natural and biodegradable cleaning products",
        description: "Environmentally conscious home care products made from natural ingredients that are safe for families while being effective against dirt and germs.",
        price: "₹150 - ₹800",
        image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Natural ingredients", "Biodegradable", "Child safe", "Effective cleaning", "Pleasant fragrance", "Value packs"],
        category: "Home Care"
      },
      {
        name: "Personal Care Essentials",
        slug: "personal-care-essentials",
        shortDescription: "Daily essentials for personal hygiene and care",
        description: "Complete range of personal care products including skincare, hair care, and hygiene essentials formulated for Indian skin and hair types.",
        price: "₹99 - ₹1,500",
        image: "https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Dermatologically tested", "Natural extracts", "All skin types", "Paraben free", "Value pricing", "Family size options"],
        category: "Personal Care"
      }
    ],
    services: [
      "Retail Distribution Network",
      "Customer Support Services",
      "Product Demonstration",
      "Home Delivery Options",
      "Bulk Purchase Discounts",
      "Loyalty Programs"
    ],
    certifications: ["ISI Mark", "BIS Standards", "FSSAI Licensed", "ISO 9001:2015", "Eco-Mark Certified"]
  },

  // Construction Materials and Hardware
  construction_hardware: {
    sectorName: "Construction Materials and Hardware",
    site: {
      name: "BuildStrong Materials",
      title: "Premium Construction Materials & Hardware",
      description: "High-quality construction materials and hardware solutions for residential, commercial, and infrastructure projects across India",
      keywords: "construction materials, building supplies, hardware, cement, steel, tools, infrastructure, building materials"
    },
    theme: {
      primary: "red",
      style: "bold",
      layout: "wide"
    },
    hero: {
      title: "Building India's Infrastructure",
      subtitle: "From premium construction materials to specialized hardware, we provide the foundation for India's growing infrastructure with products that ensure strength, durability, and sustainability",
      ctaText: "View Materials",
      ctaLink: "/products",
      backgroundImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      overlayOpacity: "bg-opacity-50"
    },
    products: [
      {
        name: "High-Grade Construction Steel",
        slug: "high-grade-construction-steel",
        shortDescription: "Premium quality TMT bars and structural steel",
        description: "Superior quality TMT bars and structural steel products manufactured to international standards for maximum strength and corrosion resistance in construction projects.",
        price: "₹45,000 - ₹65,000 per ton",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["High tensile strength", "Corrosion resistant", "Earthquake resistant", "BIS certified", "Various grades", "Custom lengths"],
        category: "Steel Products"
      },
      {
        name: "Advanced Cement Solutions",
        slug: "advanced-cement-solutions",
        shortDescription: "Specialized cement for different construction needs",
        description: "Comprehensive range of cement products including OPC, PPC, and specialized cement for different construction applications with superior strength and workability.",
        price: "₹350 - ₹450 per bag",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["High compressive strength", "Low heat of hydration", "Workability enhancer", "Durability assured", "Environment friendly", "Bulk supply"],
        category: "Cement"
      },
      {
        name: "Professional Hardware Tools",
        slug: "professional-hardware-tools",
        shortDescription: "Complete range of construction and hardware tools",
        description: "Professional-grade tools and hardware for construction, including power tools, hand tools, fasteners, and safety equipment for contractors and builders.",
        price: "₹500 - ₹50,000",
        image: "https://images.unsplash.com/photo-1592600670092-7b4cbae88458?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        features: ["Professional grade", "Ergonomic design", "Durable materials", "Safety certified", "Warranty included", "Service support"],
        category: "Tools & Hardware"
      }
    ],
    services: [
      "Project Material Planning",
      "Technical Consultation",
      "Site Delivery Services",
      "Quality Testing Support",
      "Contractor Training Programs",
      "After-Sales Service"
    ],
    certifications: ["BIS Standards", "ISI Mark", "ISO 9001:2015", "Environment Clearance", "Quality Assured"]
  }
};

// Helper function to get configuration by sector
export function getSectorConfig(sectorKey) {
  return sectorConfigurations[sectorKey] || null;
}

// Get all available sectors
export function getAllSectors() {
  return Object.keys(sectorConfigurations).map(key => ({
    key,
    name: sectorConfigurations[key].sectorName
  }));
}

// Merge sector configuration with base configuration
export function mergeSectorConfig(baseConfig, sectorKey) {
  const sectorConfig = getSectorConfig(sectorKey);
  if (!sectorConfig) return baseConfig;

  return {
    ...baseConfig,
    site: { ...baseConfig.site, ...sectorConfig.site },
    theme: { ...baseConfig.theme, ...sectorConfig.theme },
    hero: { ...baseConfig.hero, ...sectorConfig.hero },
    products: sectorConfig.products || baseConfig.products,
    services: sectorConfig.services || [],
    certifications: sectorConfig.certifications || [],
    sector: sectorConfig.sectorName
  };
}