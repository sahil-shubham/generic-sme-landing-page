#!/usr/bin/env bun

/**
 * Sector Configuration Generator for Indian SME Website Template
 * This script generates complete website configurations for different industry sectors
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = join(__dirname, '..', 'src', 'config', 'site.js');
const SECTORS_PATH = join(__dirname, '..', 'src', 'config', 'sectors.js');
const OUTPUT_DIR = join(__dirname, '..', 'generated-configs');

// Ensure output directory exists
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Helper functions
async function loadModule(path) {
  try {
    const module = await import(path);
    return module;
  } catch (error) {
    console.error(`Error loading module ${path}:`, error.message);
    return null;
  }
}

function saveConfig(config, filename) {
  try {
    const content = `// Generated Site Configuration for ${config.sector || 'Generic'} Sector
// Auto-generated on ${new Date().toISOString()}

export const siteConfig = ${JSON.stringify(config, null, 2)};`;
    
    const filePath = join(OUTPUT_DIR, filename);
    writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Configuration saved: ${filename}`);
    return true;
  } catch (error) {
    console.error(`Error saving config ${filename}:`, error.message);
    return false;
  }
}

function readBaseConfig() {
  try {
    const content = readFileSync(CONFIG_PATH, 'utf8');
    // Extract the config object (simple parsing)
    const match = content.match(/export const siteConfig = ({[\s\S]*});/);
    if (match) {
      return eval('(' + match[1] + ')');
    }
    throw new Error('Could not parse base config');
  } catch (error) {
    console.error('Error reading base config:', error.message);
    return null;
  }
}

// Enhanced configuration templates for different contexts
const contextualContent = {
  hero: {
    business_to_business: {
      suffix: " - Your Trusted Partner for Professional Solutions",
      emphasis: "industry expertise",
      cta_variants: ["Request Quote", "Schedule Consultation", "View Solutions", "Contact Sales"]
    },
    business_to_consumer: {
      suffix: " - Quality Products for Every Home",
      emphasis: "value and convenience",
      cta_variants: ["Shop Now", "Explore Products", "View Catalog", "Get Started"]
    },
    manufacturing: {
      suffix: " - Excellence in Manufacturing Since [Year]",
      emphasis: "quality and reliability",
      cta_variants: ["View Capabilities", "Request Quote", "Tour Facility", "Technical Specs"]
    },
    services: {
      suffix: " - Professional Services You Can Trust",
      emphasis: "expertise and support",
      cta_variants: ["Our Services", "Get Quote", "Schedule Service", "Contact Expert"]
    }
  },
  
  imagery: {
    industrial: {
      primary: "factory, machinery, industrial environment",
      secondary: "workers, precision, modern equipment",
      style: "professional, clean, technical"
    },
    consumer: {
      primary: "home, family, lifestyle",
      secondary: "comfort, convenience, quality",
      style: "warm, inviting, accessible"
    },
    technology: {
      primary: "innovation, digital, modern",
      secondary: "efficiency, smart solutions, future",
      style: "sleek, modern, high-tech"
    },
    traditional: {
      primary: "heritage, craftsmanship, authenticity",
      secondary: "tradition, quality, artisan",
      style: "classic, elegant, timeless"
    }
  },

  messaging: {
    quality_focused: [
      "Quality is our commitment",
      "Excellence in every detail",
      "Uncompromising quality standards",
      "Precision and perfection"
    ],
    innovation_focused: [
      "Innovation drives everything we do",
      "Leading with technology",
      "Smart solutions for modern challenges",
      "Pioneering the future"
    ],
    service_focused: [
      "Customer satisfaction is our priority",
      "Dedicated support every step",
      "Your success is our mission",
      "Partnership beyond products"
    ],
    value_focused: [
      "Premium quality at competitive prices",
      "Maximum value for your investment",
      "Cost-effective solutions",
      "Quality that pays for itself"
    ]
  }
};

// Industry-specific contact information templates
const contactTemplates = {
  industrial: {
    departments: ["Sales", "Technical Support", "Service", "Spare Parts"],
    businessHours: "Monday-Saturday: 9:00 AM - 6:00 PM",
    emergencySupport: true
  },
  consumer: {
    departments: ["Customer Care", "Sales", "Support"],
    businessHours: "Monday-Saturday: 10:00 AM - 7:00 PM",
    emergencySupport: false
  },
  healthcare: {
    departments: ["Sales", "Regulatory Affairs", "Quality Assurance", "Technical"],
    businessHours: "Monday-Friday: 9:00 AM - 6:00 PM",
    emergencySupport: true
  }
};

// Generate comprehensive configurations
async function generateSectorConfigurations() {
  console.log('🚀 Generating sector-specific configurations...\n');
  
  const sectorsModule = await loadModule(`file://${SECTORS_PATH}`);
  if (!sectorsModule) {
    console.error('Failed to load sectors configuration');
    return;
  }

  const baseConfig = readBaseConfig();
  if (!baseConfig) {
    console.error('Failed to load base configuration');
    return;
  }

  const { sectorConfigurations, mergeSectorConfig } = sectorsModule;
  
  // Generate individual sector configurations
  for (const [sectorKey, sectorData] of Object.entries(sectorConfigurations)) {
    console.log(`📋 Generating configuration for: ${sectorData.sectorName}`);
    
    const mergedConfig = mergeSectorConfig(baseConfig, sectorKey);
    
    // Add contextual enhancements
    enhanceConfigWithContext(mergedConfig, sectorKey, sectorData);
    
    // Save individual sector config
    const filename = `${sectorKey.replace(/_/g, '-')}-config.js`;
    saveConfig(mergedConfig, filename);
  }

  // Generate comparison matrix
  generateComparisonMatrix(sectorConfigurations);
  
  // Generate LLM prompt templates
  generateLLMPrompts(sectorConfigurations);
  
  console.log('\n✅ All configurations generated successfully!');
  console.log(`📁 Check the '${OUTPUT_DIR}' directory for generated files.`);
}

function enhanceConfigWithContext(config, sectorKey, sectorData) {
  // Add business context
  if (sectorKey.includes('machinery') || sectorKey.includes('industrial')) {
    config.businessContext = 'B2B';
    config.targetAudience = 'Industrial buyers, manufacturing managers, procurement teams';
  } else if (sectorKey.includes('consumer') || sectorKey.includes('textiles')) {
    config.businessContext = 'B2C/B2B';
    config.targetAudience = 'End consumers, retailers, distributors';
  } else {
    config.businessContext = 'B2B';
    config.targetAudience = 'Business professionals, decision makers, technical experts';
  }

  // Add market positioning
  config.marketPosition = {
    primary: determineMarketPosition(sectorKey),
    differentiators: generateDifferentiators(sectorKey),
    competitiveAdvantage: generateCompetitiveAdvantage(sectorKey)
  };

  // Add content strategy
  config.contentStrategy = {
    tone: determineTone(sectorKey),
    messaging: selectMessaging(sectorKey),
    visualStyle: selectVisualStyle(sectorKey)
  };

  // Add SEO enhancements
  config.seo = {
    localKeywords: generateLocalKeywords(sectorKey),
    industryTerms: generateIndustryTerms(sectorKey),
    targetRegions: ['India', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad']
  };
}

function determineMarketPosition(sectorKey) {
  const positions = {
    industrial_machinery: 'Premium technology provider',
    electronics_electrical: 'Innovation leader',
    textiles_garments: 'Heritage with modern excellence',
    agriculture_agro: 'Sustainable solutions provider',
    chemicals_pharmaceuticals: 'Quality and compliance leader',
    consumer_goods: 'Value and convenience champion',
    construction_hardware: 'Strength and reliability partner'
  };
  return positions[sectorKey] || 'Industry specialist';
}

function generateDifferentiators(sectorKey) {
  const differentiators = {
    industrial_machinery: ['Advanced automation', 'Local service network', 'Custom solutions'],
    electronics_electrical: ['Cutting-edge technology', 'Reliable performance', 'Comprehensive support'],
    textiles_garments: ['Traditional craftsmanship', 'Modern quality', 'Export excellence'],
    agriculture_agro: ['Sustainable practices', 'Farmer-centric approach', 'Technology integration'],
    chemicals_pharmaceuticals: ['Regulatory compliance', 'Quality systems', 'R&D capabilities'],
    consumer_goods: ['Indian preferences', 'Value pricing', 'Wide distribution'],
    construction_hardware: ['Durability focus', 'Project support', 'Technical expertise']
  };
  return differentiators[sectorKey] || ['Quality focus', 'Customer service', 'Innovation'];
}

function generateCompetitiveAdvantage(sectorKey) {
  const advantages = {
    industrial_machinery: 'Deep understanding of Indian manufacturing needs with global technology standards',
    electronics_electrical: 'Combining international technology with local market expertise and support',
    textiles_garments: 'Perfect blend of traditional Indian craftsmanship with modern manufacturing excellence',
    agriculture_agro: 'Comprehensive agricultural solutions from farm to fork with sustainability focus',
    chemicals_pharmaceuticals: 'World-class quality systems meeting global regulatory standards',
    consumer_goods: 'Products designed specifically for Indian households with unmatched value',
    construction_hardware: 'Trusted partner for India\'s infrastructure development with proven reliability'
  };
  return advantages[sectorKey] || 'Industry expertise with customer-focused solutions';
}

function determineTone(sectorKey) {
  const tones = {
    industrial_machinery: 'Professional, technical, authoritative',
    electronics_electrical: 'Modern, innovative, reliable',
    textiles_garments: 'Elegant, traditional, quality-focused',
    agriculture_agro: 'Supportive, sustainable, progressive',
    chemicals_pharmaceuticals: 'Scientific, precise, trustworthy',
    consumer_goods: 'Friendly, accessible, value-oriented',
    construction_hardware: 'Strong, dependable, professional'
  };
  return tones[sectorKey] || 'Professional, customer-focused';
}

function selectMessaging(sectorKey) {
  if (sectorKey.includes('quality') || sectorKey.includes('pharma')) {
    return contextualContent.messaging.quality_focused;
  } else if (sectorKey.includes('electronics') || sectorKey.includes('agro')) {
    return contextualContent.messaging.innovation_focused;
  } else if (sectorKey.includes('consumer')) {
    return contextualContent.messaging.value_focused;
  } else {
    return contextualContent.messaging.service_focused;
  }
}

function selectVisualStyle(sectorKey) {
  if (sectorKey.includes('industrial') || sectorKey.includes('machinery')) {
    return contextualContent.imagery.industrial;
  } else if (sectorKey.includes('consumer')) {
    return contextualContent.imagery.consumer;
  } else if (sectorKey.includes('electronics') || sectorKey.includes('agro')) {
    return contextualContent.imagery.technology;
  } else if (sectorKey.includes('textiles')) {
    return contextualContent.imagery.traditional;
  } else {
    return contextualContent.imagery.industrial;
  }
}

function generateLocalKeywords(sectorKey) {
  const base = sectorKey.replace(/_/g, ' ');
  return [
    `${base} India`,
    `${base} manufacturer India`,
    `${base} supplier Mumbai`,
    `${base} company Delhi`,
    `Indian ${base}`,
    `best ${base} India`,
    `${base} services India`
  ];
}

function generateIndustryTerms(sectorKey) {
  const terms = {
    industrial_machinery: ['CNC machines', 'automation', 'manufacturing equipment', 'industrial tools'],
    electronics_electrical: ['biometric systems', 'LED lighting', 'sensors', 'electronic equipment'],
    textiles_garments: ['cotton fabrics', 'silk sarees', 'garment manufacturing', 'textile industry'],
    agriculture_agro: ['precision agriculture', 'farm equipment', 'organic farming', 'agro processing'],
    chemicals_pharmaceuticals: ['pharmaceutical manufacturing', 'chemical industry', 'API manufacturing', 'drug development'],
    consumer_goods: ['household products', 'kitchen appliances', 'home care', 'FMCG'],
    construction_hardware: ['construction materials', 'building supplies', 'hardware tools', 'infrastructure']
  };
  return terms[sectorKey] || ['industry', 'professional', 'quality', 'services'];
}

function generateComparisonMatrix(sectorConfigurations) {
  console.log('📊 Generating sector comparison matrix...');
  
  const matrix = {
    generatedAt: new Date().toISOString(),
    sectors: {}
  };

  for (const [key, config] of Object.entries(sectorConfigurations)) {
    matrix.sectors[key] = {
      name: config.sectorName,
      theme: config.theme.primary,
      productCount: config.products.length,
      servicesCount: config.services.length,
      certificationsCount: config.certifications.length,
      priceRange: extractPriceRange(config.products),
      targetMarket: determineTargetMarket(key),
      complexity: determineComplexity(config)
    };
  }

  const matrixContent = `// Sector Comparison Matrix
// Generated on ${new Date().toISOString()}

export const sectorMatrix = ${JSON.stringify(matrix, null, 2)};`;

  writeFileSync(join(OUTPUT_DIR, 'sector-comparison-matrix.js'), matrixContent, 'utf8');
  console.log('✅ Sector comparison matrix generated');
}

function extractPriceRange(products) {
  const prices = products.map(p => p.price).filter(Boolean);
  return {
    sample: prices[0] || 'Contact for pricing',
    range: prices.length > 1 ? 'Varied pricing tiers' : 'Single tier'
  };
}

function determineTargetMarket(sectorKey) {
  if (sectorKey.includes('consumer')) return 'B2C + Retail';
  if (sectorKey.includes('industrial') || sectorKey.includes('machinery')) return 'B2B + Industrial';
  if (sectorKey.includes('textiles')) return 'B2B + Export';
  return 'B2B + Professional';
}

function determineComplexity(config) {
  const score = config.products.length + config.services.length + config.certifications.length;
  if (score > 15) return 'High';
  if (score > 10) return 'Medium';
  return 'Low';
}

function generateLLMPrompts(sectorConfigurations) {
  console.log('🤖 Generating LLM prompt templates...');
  
  const prompts = {
    generatedAt: new Date().toISOString(),
    instructions: "These prompts help LLMs customize websites for specific sectors",
    sectors: {}
  };

  for (const [key, config] of Object.entries(sectorConfigurations)) {
    prompts.sectors[key] = {
      sectorName: config.sectorName,
      customizationPrompt: generateCustomizationPrompt(key, config),
      contentPrompt: generateContentPrompt(key, config),
      imagePrompt: generateImagePrompt(key, config)
    };
  }

  const promptsContent = `// LLM Prompt Templates for Sector Customization
// Generated on ${new Date().toISOString()}

export const llmPrompts = ${JSON.stringify(prompts, null, 2)};`;

  writeFileSync(join(OUTPUT_DIR, 'llm-prompts.js'), promptsContent, 'utf8');
  console.log('✅ LLM prompt templates generated');
}

function generateCustomizationPrompt(sectorKey, config) {
  return `You are customizing a website for a ${config.sectorName} company in India. 

Key Focus Areas:
- Target Audience: ${determineTargetMarket(sectorKey)}
- Market Position: ${determineMarketPosition(sectorKey)}
- Tone: ${determineTone(sectorKey)}

Customization Guidelines:
1. Update company information with sector-specific details
2. Use ${config.theme.primary} color scheme for professional appearance
3. Focus on ${config.products.length} main product categories
4. Highlight ${config.services.length} key services
5. Emphasize certifications: ${config.certifications.join(', ')}

Indian Market Considerations:
- Include Indian Rupee pricing
- Mention Indian standards and certifications
- Use locally relevant examples
- Consider both English and regional language support`;
}

function generateContentPrompt(sectorKey, config) {
  return `Create compelling content for a ${config.sectorName} website targeting Indian businesses/consumers.

Content Requirements:
- Hero section with industry-specific messaging
- Product descriptions emphasizing quality and value
- Service information with local context
- Testimonials from Indian clients
- Contact information with Indian phone numbers and addresses

Key Messages to Include:
- ${generateCompetitiveAdvantage(sectorKey)}
- Quality standards and certifications
- Local service and support
- Competitive pricing for Indian market`;
}

function generateImagePrompt(sectorKey, config) {
  const style = selectVisualStyle(sectorKey);
  return `Select images for a ${config.sectorName} website with these characteristics:

Visual Style: ${style.style}
Primary Subjects: ${style.primary}
Secondary Elements: ${style.secondary}

Image Categories Needed:
- Hero background: Modern ${style.primary}
- Product images: High-quality ${style.secondary}
- Company photos: Professional Indian workplace
- Team photos: Diverse Indian professionals
- Facility images: Clean, modern ${style.primary}

Brand Colors: ${config.theme.primary} theme
Ensure all images reflect Indian context and professionalism.`;
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const command = args[0] || 'all';

  switch (command) {
    case 'all':
      await generateSectorConfigurations();
      break;
    case 'list':
      const sectorsModule = await loadModule(`file://${SECTORS_PATH}`);
      if (sectorsModule) {
        const sectors = sectorsModule.getAllSectors();
        console.log('\nAvailable sectors:');
        sectors.forEach(sector => {
          console.log(`  ${sector.key}: ${sector.name}`);
        });
      }
      break;
    case 'sector':
      const sectorKey = args[1];
      if (!sectorKey) {
        console.log('Usage: bun run generate:sectors sector <sector-key>');
        process.exit(1);
      }
      // Generate single sector
      console.log(`Generating configuration for sector: ${sectorKey}`);
      break;
    case 'help':
    default:
      console.log(`
SME Website Template - Sector Configuration Generator

Usage:
  bun run generate:sectors [command] [options]

Commands:
  all              Generate all sector configurations (default)
  list             List all available sectors
  sector <key>     Generate configuration for specific sector
  help             Show this help message

Examples:
  bun run generate:sectors
  bun run generate:sectors list
  bun run generate:sectors sector industrial_machinery

Output:
  Generated files will be saved in the 'generated-configs' directory.
      `);
      break;
  }
}