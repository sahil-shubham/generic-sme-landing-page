// Advanced Image Management System with Unsplash Integration
// This system provides curated, high-quality images for different sectors and components

// Unsplash API configuration
export const unsplashConfig = {
  baseUrl: 'https://images.unsplash.com',
  accessKey: process.env.PUBLIC_UNSPLASH_ACCESS_KEY || 'demo',
  quality: 80,
  autoFormat: true,
  sizes: {
    hero: { width: 2070, height: 1380 }, // 3:2 ratio
    product: { width: 800, height: 600 }, // 4:3 ratio
    thumbnail: { width: 400, height: 300 }, // 4:3 ratio
    logo: { width: 200, height: 100 }, // 2:1 ratio
    testimonial: { width: 400, height: 400 }, // 1:1 ratio
    team: { width: 500, height: 500 }, // 1:1 ratio
    facility: { width: 1200, height: 800 }, // 3:2 ratio
    banner: { width: 1920, height: 600 }, // Banner ratio
    card: { width: 600, height: 400 } // 3:2 ratio
  }
};

// Generate optimized Unsplash URL
export function generateUnsplashUrl(photoId, size = 'hero', options = {}) {
  const { width, height } = unsplashConfig.sizes[size] || unsplashConfig.sizes.hero;
  const params = new URLSearchParams({
    ixlib: 'rb-4.0.3',
    ixid: 'M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    auto: 'format',
    fit: 'crop',
    w: width,
    h: height,
    q: options.quality || unsplashConfig.quality,
    ...options
  });
  
  return `${unsplashConfig.baseUrl}/photo-${photoId}?${params}`;
}

// Sector-specific image collections with multiple variations
export const sectorImageCollections = {
  industrial_machinery: {
    hero: {
      variations: [
        {
          id: '1581092160607-ee22621dd758',
          alt: 'Modern industrial manufacturing facility',
          mood: 'professional',
          description: 'Clean, modern factory floor with advanced machinery'
        },
        {
          id: '1516996087931-5ae405802f4f',
          alt: 'CNC machine in operation',
          mood: 'technical',
          description: 'Precision CNC machining center in action'
        },
        {
          id: '1518709268805-4e9042af2176',
          alt: 'Industrial automation systems',
          mood: 'innovative',
          description: 'Robotic automation and control systems'
        },
        {
          id: '1578662996442-48f60103fc96',
          alt: 'Steel manufacturing plant',
          mood: 'powerful',
          description: 'Heavy industrial steel production facility'
        }
      ]
    },
    products: {
      variations: [
        {
          id: '1516996087931-5ae405802f4f',
          alt: 'CNC Machining Center',
          category: 'precision_machinery'
        },
        {
          id: '1566576721346-d4a3b4eaeb55',
          alt: 'Conveyor System',
          category: 'material_handling'
        },
        {
          id: '1518709268805-4e9042af2176',
          alt: 'Industrial Robot',
          category: 'automation'
        },
        {
          id: '1592600670092-7b4cbae88458',
          alt: 'Industrial Tools',
          category: 'tools'
        }
      ]
    },
    team: {
      variations: [
        {
          id: '1507003211169-0a1dd7228f2d',
          alt: 'Industrial engineer',
          role: 'engineer'
        },
        {
          id: '1472099645785-5658abf4ff4e',
          alt: 'Manufacturing manager',
          role: 'manager'
        },
        {
          id: '1560250097-0b93528c311a',
          alt: 'Technical specialist',
          role: 'specialist'
        }
      ]
    }
  },

  electronics_electrical: {
    hero: {
      variations: [
        {
          id: '1518709268805-4e9042af2176',
          alt: 'High-tech electronics laboratory',
          mood: 'innovative',
          description: 'Clean, modern electronics development lab'
        },
        {
          id: '1555421689-491a97ff2040',
          alt: 'Biometric fingerprint scanner',
          mood: 'secure',
          description: 'Advanced biometric security technology'
        },
        {
          id: '1558618666-4c1d51c6c9b5',
          alt: 'LED lighting installation',
          mood: 'bright',
          description: 'Professional LED lighting systems'
        },
        {
          id: '1576086213369-97a306d36557',
          alt: 'Electronic circuit testing',
          mood: 'precise',
          description: 'Quality control and testing laboratory'
        }
      ]
    },
    products: {
      variations: [
        {
          id: '1555421689-491a97ff2040',
          alt: 'Biometric Scanner',
          category: 'security_systems'
        },
        {
          id: '1586281010138-8e1b33aa4d3a',
          alt: 'Multifunction Printer',
          category: 'office_equipment'
        },
        {
          id: '1558618666-4c1d51c6c9b5',
          alt: 'LED High Mast Light',
          category: 'lighting'
        },
        {
          id: '1518709268805-4e9042af2176',
          alt: 'IoT Sensor',
          category: 'sensors'
        }
      ]
    }
  },

  textiles_garments: {
    hero: {
      variations: [
        {
          id: '1558769132-cb1aea458c5e',
          alt: 'Traditional textile weaving',
          mood: 'heritage',
          description: 'Traditional handloom weaving process'
        },
        {
          id: '1583391733956-3750e0ff4e8b',
          alt: 'Silk saree collection',
          mood: 'elegant',
          description: 'Beautiful collection of traditional silk sarees'
        },
        {
          id: '1445205170230-053b83016050',
          alt: 'Modern garment manufacturing',
          mood: 'contemporary',
          description: 'Modern garment production facility'
        },
        {
          id: '1434389677669-e08b4cac3105',
          alt: 'Fabric texture close-up',
          mood: 'detailed',
          description: 'High-quality fabric texture and weave'
        }
      ]
    },
    products: {
      variations: [
        {
          id: '1558769132-cb1aea458c5e',
          alt: 'Premium Cotton Fabric',
          category: 'fabrics'
        },
        {
          id: '1583391733956-3750e0ff4e8b',
          alt: 'Silk Saree',
          category: 'traditional_wear'
        },
        {
          id: '1445205170230-053b83016050',
          alt: 'Ready-to-Wear Garments',
          category: 'modern_clothing'
        }
      ]
    }
  },

  agriculture_agro: {
    hero: {
      variations: [
        {
          id: '1500937386664-56d1dfef3854',
          alt: 'Modern agricultural field',
          mood: 'sustainable',
          description: 'Sustainable farming with modern techniques'
        },
        {
          id: '1605000797499-95a51c5269ae',
          alt: 'Precision agriculture technology',
          mood: 'innovative',
          description: 'Advanced farming technology and equipment'
        },
        {
          id: '1560114928-40f1f1eb26a0',
          alt: 'Organic food processing',
          mood: 'natural',
          description: 'Organic food processing and packaging'
        },
        {
          id: '1581833971358-2c8b550f87b3',
          alt: 'Agricultural machinery',
          mood: 'efficient',
          description: 'Modern farm equipment and machinery'
        }
      ]
    },
    products: {
      variations: [
        {
          id: '1605000797499-95a51c5269ae',
          alt: 'Precision Agriculture System',
          category: 'farm_technology'
        },
        {
          id: '1560114928-40f1f1eb26a0',
          alt: 'Organic Food Products',
          category: 'food_processing'
        },
        {
          id: '1581833971358-2c8b550f87b3',
          alt: 'Farm Equipment',
          category: 'machinery'
        }
      ]
    }
  },

  chemicals_pharmaceuticals: {
    hero: {
      variations: [
        {
          id: '1582719471384-894fbb16e074',
          alt: 'Modern pharmaceutical laboratory',
          mood: 'scientific',
          description: 'State-of-the-art pharmaceutical research lab'
        },
        {
          id: '1559757148-5c350d0d3c56',
          alt: 'Chemical production facility',
          mood: 'industrial',
          description: 'Advanced chemical manufacturing plant'
        },
        {
          id: '1576086213369-97a306d36557',
          alt: 'Quality control laboratory',
          mood: 'precise',
          description: 'Analytical testing and quality control'
        }
      ]
    },
    products: {
      variations: [
        {
          id: '1582719471384-894fbb16e074',
          alt: 'Pharmaceutical APIs',
          category: 'apis'
        },
        {
          id: '1559757148-5c350d0d3c56',
          alt: 'Specialty Chemicals',
          category: 'chemicals'
        },
        {
          id: '1576086213369-97a306d36557',
          alt: 'Quality Testing Services',
          category: 'testing'
        }
      ]
    }
  },

  consumer_goods: {
    hero: {
      variations: [
        {
          id: '1586023492125-27b2c045efd7',
          alt: 'Modern Indian kitchen',
          mood: 'homely',
          description: 'Contemporary Indian home kitchen setup'
        },
        {
          id: '1556909114-f6e7ad7d3136',
          alt: 'Kitchen appliances',
          mood: 'convenient',
          description: 'Modern kitchen appliances and gadgets'
        },
        {
          id: '1585421514738-01798e348b17',
          alt: 'Home care products',
          mood: 'clean',
          description: 'Eco-friendly home cleaning products'
        },
        {
          id: '1556760544-74068565f05c',
          alt: 'Personal care essentials',
          mood: 'wellness',
          description: 'Natural personal care and wellness products'
        }
      ]
    },
    products: {
      variations: [
        {
          id: '1556909114-f6e7ad7d3136',
          alt: 'Smart Kitchen Appliances',
          category: 'appliances'
        },
        {
          id: '1585421514738-01798e348b17',
          alt: 'Home Care Products',
          category: 'cleaning'
        },
        {
          id: '1556760544-74068565f05c',
          alt: 'Personal Care Items',
          category: 'personal_care'
        }
      ]
    }
  },

  construction_hardware: {
    hero: {
      variations: [
        {
          id: '1541888946425-d81bb19240f5',
          alt: 'Modern construction site',
          mood: 'strong',
          description: 'Large-scale construction project in progress'
        },
        {
          id: '1578662996442-48f60103fc96',
          alt: 'Steel construction materials',
          mood: 'industrial',
          description: 'High-quality steel construction materials'
        },
        {
          id: '1606107557195-0e29a4b5b4aa',
          alt: 'Cement manufacturing',
          mood: 'solid',
          description: 'Modern cement production facility'
        },
        {
          id: '1592600670092-7b4cbae88458',
          alt: 'Construction tools and hardware',
          mood: 'professional',
          description: 'Professional-grade construction tools'
        }
      ]
    },
    products: {
      variations: [
        {
          id: '1578662996442-48f60103fc96',
          alt: 'Construction Steel',
          category: 'steel'
        },
        {
          id: '1606107557195-0e29a4b5b4aa',
          alt: 'Cement Products',
          category: 'cement'
        },
        {
          id: '1592600670092-7b4cbae88458',
          alt: 'Hardware Tools',
          category: 'tools'
        }
      ]
    }
  }
};

// Generic images for common use cases
export const genericImages = {
  team: {
    indian_professionals: [
      { id: '1507003211169-0a1dd7228f2d', alt: 'Indian business professional', gender: 'male' },
      { id: '1494790108755-2616b612b4c0', alt: 'Indian businesswoman', gender: 'female' },
      { id: '1472099645785-5658abf4ff4e', alt: 'Indian tech professional', gender: 'male' },
      { id: '1438761681033-6461ffad8d80', alt: 'Indian female executive', gender: 'female' },
      { id: '1560250097-0b93528c311a', alt: 'Indian engineer', gender: 'male' },
      { id: '1580489944761-15a19d654956', alt: 'Indian business team lead', gender: 'female' }
    ]
  },
  
  facilities: {
    indian_offices: [
      { id: '1522071820081-009f0129c71c', alt: 'Modern Indian office space' },
      { id: '1521791136064-9c38b9c5b645', alt: 'Indian corporate workspace' },
      { id: '1551434678-e076c223a692', alt: 'Professional meeting room' },
      { id: '1560520653-9e0347c5cb66', alt: 'Indian startup office' }
    ]
  },
  
  locations: {
    indian_cities: [
      { id: '1570168007204-dfb8c6dc3bae', alt: 'Mumbai skyline', city: 'Mumbai' },
      { id: '1587474680262-88b03ca2330a', alt: 'Delhi business district', city: 'Delhi' },
      { id: '1596436622104-ab0ffa4962a2', alt: 'Bangalore tech hub', city: 'Bangalore' },
      { id: '1582553028-c7ab9ff6c73c', alt: 'Chennai industrial area', city: 'Chennai' }
    ]
  },
  
  abstract: {
    patterns: [
      { id: '1557804506-669a67965ba0', alt: 'Professional blue pattern', color: 'blue' },
      { id: '1553095066-5014bc7b7f2d', alt: 'Growth green pattern', color: 'green' },
      { id: '1534777782611-8c89a0f2fd9f', alt: 'Innovation purple pattern', color: 'purple' },
      { id: '1557682250-33bd709cbe85', alt: 'Energy orange pattern', color: 'orange' },
      { id: '1534777767766-3297c6d4a0a8', alt: 'Strength red pattern', color: 'red' }
    ]
  }
};

// Client logo placeholder generator
export const clientLogos = {
  generateLogo: (companyName, industry = 'generic') => {
    // Use a service like Logo.dev or UI Avatars for placeholder logos
    const logoServices = {
      logodev: `https://img.logo.dev/${encodeURIComponent(companyName)}.com?token=pk_demo&size=200`,
      uiavatars: `https://ui-avatars.com/api/?name=${encodeURIComponent(companyName)}&size=200&background=random&color=fff&format=png`,
      placeholder: `https://via.placeholder.com/200x100/4F46E5/FFFFFF?text=${encodeURIComponent(companyName)}`
    };
    
    return logoServices.placeholder; // Default to placeholder service
  },
  
  // Indian company examples for testimonials
  indianCompanies: [
    { name: 'Tata Consultancy', industry: 'technology' },
    { name: 'Infosys Ltd', industry: 'technology' },
    { name: 'Reliance Industries', industry: 'petrochemicals' },
    { name: 'Mahindra Group', industry: 'automotive' },
    { name: 'Wipro Technologies', industry: 'technology' },
    { name: 'Bajaj Auto', industry: 'automotive' },
    { name: 'Godrej Industries', industry: 'consumer_goods' },
    { name: 'Asian Paints', industry: 'chemicals' },
    { name: 'Bharti Airtel', industry: 'telecommunications' },
    { name: 'ITC Limited', industry: 'consumer_goods' }
  ]
};

// Image selection utility functions
export class ImageSelector {
  constructor(sector = 'generic') {
    this.sector = sector;
    this.collection = sectorImageCollections[sector] || {};
  }
  
  // Get hero image based on mood
  getHeroImage(mood = 'professional', variation = 0) {
    const heroImages = this.collection.hero?.variations || [];
    
    // Filter by mood if specified
    const moodImages = mood !== 'professional' 
      ? heroImages.filter(img => img.mood === mood)
      : heroImages;
    
    const selectedImages = moodImages.length > 0 ? moodImages : heroImages;
    const imageIndex = variation % selectedImages.length;
    const selectedImage = selectedImages[imageIndex];
    
    if (!selectedImage) return this.getFallbackHero();
    
    return {
      url: generateUnsplashUrl(selectedImage.id, 'hero'),
      alt: selectedImage.alt,
      description: selectedImage.description
    };
  }
  
  // Get product images by category
  getProductImages(category = null, count = 3) {
    const productImages = this.collection.products?.variations || [];
    
    const filteredImages = category 
      ? productImages.filter(img => img.category === category)
      : productImages;
    
    return filteredImages.slice(0, count).map(img => ({
      url: generateUnsplashUrl(img.id, 'product'),
      alt: img.alt,
      category: img.category
    }));
  }
  
  // Get team member images
  getTeamImages(count = 3, genderBalance = true) {
    const teamImages = this.collection.team?.variations || genericImages.team.indian_professionals;
    
    if (genderBalance && teamImages.length >= count) {
      // Try to balance gender representation
      const males = teamImages.filter(img => img.gender === 'male' || img.role);
      const females = teamImages.filter(img => img.gender === 'female' || img.role);
      
      const balanced = [];
      const half = Math.floor(count / 2);
      
      for (let i = 0; i < half && i < males.length; i++) {
        balanced.push(males[i]);
      }
      
      for (let i = 0; i < count - half && i < females.length; i++) {
        balanced.push(females[i]);
      }
      
      return balanced.map(img => ({
        url: generateUnsplashUrl(img.id, 'team'),
        alt: img.alt,
        role: img.role || 'Team Member'
      }));
    }
    
    return teamImages.slice(0, count).map(img => ({
      url: generateUnsplashUrl(img.id, 'team'),
      alt: img.alt,
      role: img.role || 'Team Member'
    }));
  }
  
  // Get facility/office images
  getFacilityImages(count = 2) {
    const facilityImages = genericImages.facilities.indian_offices;
    
    return facilityImages.slice(0, count).map(img => ({
      url: generateUnsplashUrl(img.id, 'facility'),
      alt: img.alt
    }));
  }
  
  // Get client logos (placeholder)
  getClientLogos(companies = [], count = 6) {
    if (companies.length === 0) {
      companies = clientLogos.indianCompanies
        .sort(() => 0.5 - Math.random())
        .slice(0, count);
    }
    
    return companies.map(company => ({
      name: typeof company === 'string' ? company : company.name,
      logo: typeof company === 'string' 
        ? clientLogos.generateLogo(company)
        : clientLogos.generateLogo(company.name, company.industry),
      alt: `${typeof company === 'string' ? company : company.name} Logo`
    }));
  }
  
  // Fallback images
  getFallbackHero() {
    return {
      url: generateUnsplashUrl('1551434678-e076c223a692', 'hero'),
      alt: 'Professional business environment',
      description: 'Modern professional workspace'
    };
  }
  
  // Get themed background patterns
  getBackgroundPattern(color = 'blue') {
    const patterns = genericImages.abstract.patterns;
    const colorPattern = patterns.find(p => p.color === color) || patterns[0];
    
    return {
      url: generateUnsplashUrl(colorPattern.id, 'banner'),
      alt: colorPattern.alt
    };
  }
  
  // Generate complete image set for a sector
  generateImageSet(options = {}) {
    const {
      heroMood = 'professional',
      heroVariation = 0,
      productCount = 3,
      teamCount = 3,
      facilityCount = 2,
      clientCount = 6,
      includePatterns = false
    } = options;
    
    return {
      hero: this.getHeroImage(heroMood, heroVariation),
      products: this.getProductImages(null, productCount),
      team: this.getTeamImages(teamCount),
      facilities: this.getFacilityImages(facilityCount),
      clients: this.getClientLogos([], clientCount),
      ...(includePatterns && { 
        backgroundPattern: this.getBackgroundPattern() 
      })
    };
  }
}

// Export utility function for easy use
export function getImageSelector(sector) {
  return new ImageSelector(sector);
}

// Export image generation helper
export function generateSectorImages(sector, options = {}) {
  const selector = new ImageSelector(sector);
  return selector.generateImageSet(options);
}