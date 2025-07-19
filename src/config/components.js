// Component Variations System
// Multiple design variations for each component to create diverse website layouts

export const componentVariations = {
  // Hero Section Variations
  hero: {
    // Style 1: Classic Centered Hero
    classic_centered: {
      name: "Classic Centered",
      description: "Traditional centered layout with overlay text",
      layout: "centered",
      textPosition: "center",
      overlayStyle: "gradient",
      hasScrollIndicator: true,
      buttonStyle: "solid",
      features: ["background_image", "overlay", "cta_button", "scroll_indicator"],
      bestFor: ["professional", "corporate", "traditional"]
    },

    // Style 2: Split Screen Hero
    split_screen: {
      name: "Split Screen",
      description: "Content on left, image on right",
      layout: "split",
      textPosition: "left",
      overlayStyle: "none",
      hasScrollIndicator: false,
      buttonStyle: "outline",
      features: ["split_layout", "no_overlay", "side_image"],
      bestFor: ["modern", "tech", "startups"]
    },

    // Style 3: Minimal Clean Hero
    minimal_clean: {
      name: "Minimal Clean",
      description: "Clean design with subtle background",
      layout: "centered",
      textPosition: "center",
      overlayStyle: "subtle",
      hasScrollIndicator: false,
      buttonStyle: "ghost",
      features: ["minimal_text", "subtle_background", "clean_typography"],
      bestFor: ["minimal", "elegant", "luxury"]
    },

    // Style 4: Video Background Hero
    video_background: {
      name: "Video Background",
      description: "Dynamic video background with overlay",
      layout: "centered",
      textPosition: "center",
      overlayStyle: "dark",
      hasScrollIndicator: true,
      buttonStyle: "solid",
      features: ["video_background", "dark_overlay", "dynamic_content"],
      bestFor: ["innovative", "dynamic", "entertainment"]
    },

    // Style 5: Card-Based Hero
    card_overlay: {
      name: "Card Overlay",
      description: "Content in floating card over background",
      layout: "card",
      textPosition: "center",
      overlayStyle: "card",
      hasScrollIndicator: false,
      buttonStyle: "solid",
      features: ["floating_card", "glass_effect", "modern_design"],
      bestFor: ["contemporary", "glass_morphism", "modern"]
    }
  },

  // Navigation Variations
  navbar: {
    // Style 1: Traditional Horizontal Nav
    horizontal_classic: {
      name: "Classic Horizontal",
      description: "Traditional horizontal navigation bar",
      layout: "horizontal",
      position: "sticky",
      style: "solid",
      logoPosition: "left",
      menuStyle: "horizontal",
      features: ["sticky_nav", "dropdown_menu", "cta_button"],
      bestFor: ["corporate", "traditional", "professional"]
    },

    // Style 2: Minimal Transparent Nav
    transparent_minimal: {
      name: "Transparent Minimal",
      description: "Clean transparent navigation",
      layout: "horizontal",
      position: "absolute",
      style: "transparent",
      logoPosition: "left",
      menuStyle: "minimal",
      features: ["transparent_background", "minimal_design", "hover_effects"],
      bestFor: ["modern", "minimal", "elegant"]
    },

    // Style 3: Centered Logo Nav
    centered_logo: {
      name: "Centered Logo",
      description: "Logo in center with menu items on sides",
      layout: "centered",
      position: "sticky",
      style: "solid",
      logoPosition: "center",
      menuStyle: "split",
      features: ["centered_logo", "split_menu", "balanced_design"],
      bestFor: ["fashion", "luxury", "creative"]
    },

    // Style 4: Sidebar Navigation
    sidebar_nav: {
      name: "Sidebar Navigation",
      description: "Off-canvas sidebar navigation",
      layout: "sidebar",
      position: "fixed",
      style: "sidebar",
      logoPosition: "top",
      menuStyle: "vertical",
      features: ["sidebar_menu", "hamburger_toggle", "overlay"],
      bestFor: ["portfolio", "creative", "mobile_first"]
    }
  },

  // Product Section Variations
  products: {
    // Style 1: Grid Layout
    grid_classic: {
      name: "Classic Grid",
      description: "Traditional product grid with cards",
      layout: "grid",
      columns: 3,
      cardStyle: "elevated",
      imageRatio: "4:3",
      showPricing: true,
      showCategories: true,
      features: ["hover_effects", "category_filter", "price_display"],
      bestFor: ["e-commerce", "catalog", "b2c"]
    },

    // Style 2: Masonry Layout
    masonry_dynamic: {
      name: "Dynamic Masonry",
      description: "Pinterest-style masonry grid",
      layout: "masonry",
      columns: "auto",
      cardStyle: "flat",
      imageRatio: "variable",
      showPricing: false,
      showCategories: true,
      features: ["dynamic_heights", "isotope_filter", "lazy_loading"],
      bestFor: ["portfolio", "creative", "varied_content"]
    },

    // Style 3: List View
    list_detailed: {
      name: "Detailed List",
      description: "Horizontal list with detailed info",
      layout: "list",
      columns: 1,
      cardStyle: "horizontal",
      imageRatio: "16:9",
      showPricing: true,
      showCategories: true,
      features: ["detailed_descriptions", "comparison_table", "specifications"],
      bestFor: ["b2b", "technical", "detailed_products"]
    },

    // Style 4: Carousel Showcase
    carousel_featured: {
      name: "Featured Carousel",
      description: "Highlighted products in carousel",
      layout: "carousel",
      columns: "auto",
      cardStyle: "featured",
      imageRatio: "3:2",
      showPricing: true,
      showCategories: false,
      features: ["auto_rotate", "navigation_dots", "featured_highlighting"],
      bestFor: ["featured_products", "hero_products", "promotions"]
    }
  },

  // About Section Variations
  about: {
    // Style 1: Split Content
    split_content: {
      name: "Split Content",
      description: "Text and image side by side",
      layout: "split",
      imagePosition: "right",
      contentStyle: "balanced",
      hasStats: true,
      hasTimeline: false,
      features: ["split_layout", "statistics", "image_gallery"],
      bestFor: ["corporate", "professional", "established"]
    },

    // Style 2: Story Timeline
    story_timeline: {
      name: "Story Timeline",
      description: "Company journey in timeline format",
      layout: "timeline",
      imagePosition: "integrated",
      contentStyle: "chronological",
      hasStats: true,
      hasTimeline: true,
      features: ["timeline_design", "milestone_highlights", "progress_indicators"],
      bestFor: ["heritage", "journey", "milestones"]
    },

    // Style 3: Team Focused
    team_focused: {
      name: "Team Focused",
      description: "Emphasis on team members and culture",
      layout: "team_grid",
      imagePosition: "team",
      contentStyle: "people_first",
      hasStats: true,
      hasTimeline: false,
      features: ["team_profiles", "culture_showcase", "values_display"],
      bestFor: ["service_based", "consulting", "personal_brand"]
    },

    // Style 4: Mission Driven
    mission_driven: {
      name: "Mission Driven",
      description: "Focus on mission, vision, and values",
      layout: "centered",
      imagePosition: "background",
      contentStyle: "values_first",
      hasStats: false,
      hasTimeline: false,
      features: ["mission_statement", "values_grid", "impact_metrics"],
      bestFor: ["non_profit", "mission_driven", "social_impact"]
    }
  },

  // Testimonials Variations
  testimonials: {
    // Style 1: Classic Carousel
    carousel_classic: {
      name: "Classic Carousel",
      description: "Traditional testimonial carousel",
      layout: "carousel",
      displayStyle: "single",
      showImages: true,
      showRatings: true,
      autoPlay: true,
      features: ["auto_rotation", "navigation_controls", "rating_stars"],
      bestFor: ["traditional", "corporate", "trust_building"]
    },

    // Style 2: Grid Layout
    grid_showcase: {
      name: "Grid Showcase",
      description: "Multiple testimonials in grid",
      layout: "grid",
      displayStyle: "multiple",
      showImages: true,
      showRatings: true,
      autoPlay: false,
      features: ["static_display", "uniform_cards", "social_proof"],
      bestFor: ["volume", "social_proof", "comprehensive"]
    },

    // Style 3: Featured Quote
    featured_quote: {
      name: "Featured Quote",
      description: "Single large featured testimonial",
      layout: "featured",
      displayStyle: "hero",
      showImages: true,
      showRatings: false,
      autoPlay: false,
      features: ["large_typography", "minimal_design", "impactful_quote"],
      bestFor: ["powerful_quote", "minimal", "impact"]
    },

    // Style 4: Video Testimonials
    video_testimonials: {
      name: "Video Testimonials",
      description: "Video-based customer testimonials",
      layout: "video_grid",
      displayStyle: "video",
      showImages: false,
      showRatings: true,
      autoPlay: false,
      features: ["video_player", "thumbnail_preview", "play_overlay"],
      bestFor: ["authentic", "engaging", "personal"]
    }
  },

  // Footer Variations
  footer: {
    // Style 1: Traditional Multi-Column
    multi_column: {
      name: "Multi-Column",
      description: "Traditional footer with multiple columns",
      layout: "columns",
      columnCount: 4,
      style: "traditional",
      showSocial: true,
      showNewsletter: true,
      features: ["link_columns", "contact_info", "social_links", "newsletter"],
      bestFor: ["corporate", "comprehensive", "information_rich"]
    },

    // Style 2: Minimal Single Row
    minimal_row: {
      name: "Minimal Row",
      description: "Clean single row footer",
      layout: "row",
      columnCount: 1,
      style: "minimal",
      showSocial: true,
      showNewsletter: false,
      features: ["single_row", "essential_links", "social_icons"],
      bestFor: ["minimal", "clean", "simple"]
    },

    // Style 3: Centered Brand Focus
    centered_brand: {
      name: "Centered Brand",
      description: "Brand-focused centered footer",
      layout: "centered",
      columnCount: 1,
      style: "brand_focused",
      showSocial: true,
      showNewsletter: true,
      features: ["large_logo", "brand_message", "centered_design"],
      bestFor: ["brand_focused", "memorable", "impactful"]
    }
  }
};

// Layout Templates combining multiple component variations
export const layoutTemplates = {
  // Template 1: Corporate Professional
  corporate_professional: {
    name: "Corporate Professional",
    description: "Traditional corporate layout for established businesses",
    sector: ["industrial_machinery", "chemicals_pharmaceuticals", "construction_hardware"],
    components: {
      navbar: "horizontal_classic",
      hero: "classic_centered",
      products: "grid_classic",
      about: "split_content",
      testimonials: "carousel_classic",
      footer: "multi_column"
    },
    colorScheme: ["blue", "navy", "gray"],
    mood: "professional",
    trustLevel: "high"
  },

  // Template 2: Modern Tech
  modern_tech: {
    name: "Modern Tech",
    description: "Contemporary design for technology companies",
    sector: ["electronics_electrical", "agriculture_agro"],
    components: {
      navbar: "transparent_minimal",
      hero: "split_screen",
      products: "masonry_dynamic",
      about: "team_focused",
      testimonials: "grid_showcase",
      footer: "minimal_row"
    },
    colorScheme: ["purple", "blue", "green"],
    mood: "innovative",
    trustLevel: "medium"
  },

  // Template 3: Heritage & Tradition
  heritage_traditional: {
    name: "Heritage & Traditional",
    description: "Classic design celebrating heritage and tradition",
    sector: ["textiles_garments"],
    components: {
      navbar: "centered_logo",
      hero: "classic_centered",
      products: "carousel_featured",
      about: "story_timeline",
      testimonials: "featured_quote",
      footer: "centered_brand"
    },
    colorScheme: ["orange", "gold", "brown"],
    mood: "heritage",
    trustLevel: "high"
  },

  // Template 4: Consumer Friendly
  consumer_friendly: {
    name: "Consumer Friendly",
    description: "Approachable design for consumer-facing businesses",
    sector: ["consumer_goods"],
    components: {
      navbar: "horizontal_classic",
      hero: "card_overlay",
      products: "grid_classic",
      about: "team_focused",
      testimonials: "video_testimonials",
      footer: "multi_column"
    },
    colorScheme: ["pink", "orange", "green"],
    mood: "friendly",
    trustLevel: "medium"
  },

  // Template 5: Minimal Elegant
  minimal_elegant: {
    name: "Minimal Elegant",
    description: "Clean and elegant design for premium brands",
    sector: ["chemicals_pharmaceuticals", "textiles_garments"],
    components: {
      navbar: "transparent_minimal",
      hero: "minimal_clean",
      products: "list_detailed",
      about: "mission_driven",
      testimonials: "featured_quote",
      footer: "minimal_row"
    },
    colorScheme: ["gray", "black", "white"],
    mood: "elegant",
    trustLevel: "high"
  }
};

// Component variation selector utility
export class ComponentVariationSelector {
  constructor(sector, mood = 'professional', layout = 'auto') {
    this.sector = sector;
    this.mood = mood;
    this.layout = layout;
  }

  // Get recommended template based on sector and mood
  getRecommendedTemplate() {
    const templates = Object.entries(layoutTemplates);
    
    // Find templates that match the sector
    const sectorMatches = templates.filter(([key, template]) => 
      template.sector.includes(this.sector)
    );

    if (sectorMatches.length > 0) {
      // Find best mood match
      const moodMatch = sectorMatches.find(([key, template]) => 
        template.mood === this.mood
      );
      
      return moodMatch ? moodMatch[1] : sectorMatches[0][1];
    }

    // Fallback to mood-based selection
    const moodMatches = templates.filter(([key, template]) => 
      template.mood === this.mood
    );

    return moodMatches.length > 0 ? moodMatches[0][1] : layoutTemplates.corporate_professional;
  }

  // Get specific component variation
  getComponentVariation(componentType, variationName = null) {
    const variations = componentVariations[componentType];
    if (!variations) return null;

    if (variationName && variations[variationName]) {
      return variations[variationName];
    }

    // Auto-select based on mood and sector
    const template = this.getRecommendedTemplate();
    const recommendedVariation = template.components[componentType];
    
    return variations[recommendedVariation] || Object.values(variations)[0];
  }

  // Generate complete component set
  generateComponentSet() {
    const template = this.getRecommendedTemplate();
    const componentSet = {};

    Object.keys(componentVariations).forEach(componentType => {
      componentSet[componentType] = this.getComponentVariation(componentType);
    });

    return {
      template: template,
      components: componentSet,
      metadata: {
        sector: this.sector,
        mood: this.mood,
        layout: this.layout,
        colorScheme: template.colorScheme,
        trustLevel: template.trustLevel
      }
    };
  }

  // Get variation alternatives for A/B testing
  getVariationAlternatives(componentType) {
    const variations = componentVariations[componentType];
    if (!variations) return [];

    return Object.entries(variations).map(([key, variation]) => ({
      key,
      ...variation
    }));
  }
}

// Style mixing utilities
export const styleMixer = {
  // Mix components from different templates
  createCustomMix: (baseTemplate, overrides = {}) => {
    const base = layoutTemplates[baseTemplate] || layoutTemplates.corporate_professional;
    
    return {
      ...base,
      components: {
        ...base.components,
        ...overrides
      },
      name: `Custom Mix (${base.name})`,
      description: `Custom variation based on ${base.name}`
    };
  },

  // Generate random combinations for inspiration
  generateRandomCombination: (sector) => {
    const components = {};
    
    Object.keys(componentVariations).forEach(componentType => {
      const variations = Object.keys(componentVariations[componentType]);
      const randomVariation = variations[Math.floor(Math.random() * variations.length)];
      components[componentType] = randomVariation;
    });

    return {
      name: "Random Inspiration",
      description: "Randomly generated component combination",
      sector: [sector],
      components,
      mood: "experimental",
      trustLevel: "variable"
    };
  },

  // Get complementary combinations
  getComplementaryCombinations: (primaryComponent, componentType) => {
    // Logic to suggest components that work well together
    const complementaryMap = {
      hero: {
        classic_centered: ["horizontal_classic", "grid_classic", "carousel_classic"],
        split_screen: ["transparent_minimal", "masonry_dynamic", "grid_showcase"],
        minimal_clean: ["transparent_minimal", "list_detailed", "featured_quote"]
      },
      navbar: {
        horizontal_classic: ["classic_centered", "grid_classic", "multi_column"],
        transparent_minimal: ["split_screen", "minimal_clean", "minimal_row"],
        centered_logo: ["classic_centered", "carousel_featured", "centered_brand"]
      }
    };

    return complementaryMap[componentType]?.[primaryComponent] || [];
  }
};

// Export main functions
export function getComponentVariationSelector(sector, mood, layout) {
  return new ComponentVariationSelector(sector, mood, layout);
}

export function getVariationForComponent(sector, componentType, variationName) {
  const selector = new ComponentVariationSelector(sector);
  return selector.getComponentVariation(componentType, variationName);
}

export function generateLayoutVariations(sector, count = 5) {
  const variations = [];
  const selector = new ComponentVariationSelector(sector);
  
  // Add recommended template
  variations.push(selector.generateComponentSet());
  
  // Add mood variations
  const moods = ['professional', 'innovative', 'heritage', 'friendly', 'elegant'];
  moods.slice(0, count - 1).forEach(mood => {
    const moodSelector = new ComponentVariationSelector(sector, mood);
    variations.push(moodSelector.generateComponentSet());
  });
  
  return variations;
}