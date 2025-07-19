#!/usr/bin/env bun

/**
 * Enhanced Configuration Utility for SME Landing Page Template
 * Now includes image generation, component variations, and layout templates
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = join(__dirname, '..', 'src', 'config', 'site.js');
const SECTORS_PATH = join(__dirname, '..', 'src', 'config', 'sectors.js');
const IMAGES_PATH = join(__dirname, '..', 'src', 'config', 'images.js');
const COMPONENTS_PATH = join(__dirname, '..', 'src', 'config', 'components.js');

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

function readConfig() {
  try {
    const content = readFileSync(CONFIG_PATH, 'utf8');
    // Extract the config object (simple parsing)
    const match = content.match(/export const siteConfig = ({[\s\S]*});/);
    if (match) {
      return eval('(' + match[1] + ')');
    }
    throw new Error('Could not parse config');
  } catch (error) {
    console.error('Error reading config:', error.message);
    return null;
  }
}

function writeConfig(config) {
  try {
    const content = `// Site Configuration - Easily customizable by LLM
// Last modified: ${new Date().toISOString()}
// Generated with enhanced image and component support

export const siteConfig = ${JSON.stringify(config, null, 2)};`;
    writeFileSync(CONFIG_PATH, content, 'utf8');
    console.log('✅ Configuration updated successfully!');
    return true;
  } catch (error) {
    console.error('Error writing config:', error.message);
    return false;
  }
}

// Enhanced color schemes with more options
const colorSchemes = {
  blue: {
    primary: "bg-blue-600",
    primaryHover: "hover:bg-blue-700",
    accent: "bg-blue-100",
    text: "text-blue-600",
    gradient: "from-blue-600 to-blue-800",
    description: "Professional and trustworthy"
  },
  green: {
    primary: "bg-green-600",
    primaryHover: "hover:bg-green-700",
    accent: "bg-green-100",
    text: "text-green-600",
    gradient: "from-green-600 to-green-800",
    description: "Natural and growth-oriented"
  },
  purple: {
    primary: "bg-purple-600",
    primaryHover: "hover:bg-purple-700",
    accent: "bg-purple-100",
    text: "text-purple-600",
    gradient: "from-purple-600 to-purple-800",
    description: "Creative and innovative"
  },
  red: {
    primary: "bg-red-600",
    primaryHover: "hover:bg-red-700",
    accent: "bg-red-100",
    text: "text-red-600",
    gradient: "from-red-600 to-red-800",
    description: "Bold and energetic"
  },
  orange: {
    primary: "bg-orange-600",
    primaryHover: "hover:bg-orange-700",
    accent: "bg-orange-100",
    text: "text-orange-600",
    gradient: "from-orange-600 to-orange-800",
    description: "Warm and approachable"
  },
  pink: {
    primary: "bg-pink-600",
    primaryHover: "hover:bg-pink-700",
    accent: "bg-pink-100",
    text: "text-pink-600",
    gradient: "from-pink-600 to-pink-800",
    description: "Modern and friendly"
  },
  indigo: {
    primary: "bg-indigo-600",
    primaryHover: "hover:bg-indigo-700",
    accent: "bg-indigo-100",
    text: "text-indigo-600",
    gradient: "from-indigo-600 to-indigo-800",
    description: "Deep and sophisticated"
  },
  teal: {
    primary: "bg-teal-600",
    primaryHover: "hover:bg-teal-700",
    accent: "bg-teal-100",
    text: "text-teal-600",
    gradient: "from-teal-600 to-teal-800",
    description: "Fresh and modern"
  }
};

// Main functions
async function changeColorScheme(color) {
  const config = readConfig();
  if (!config) return false;
  
  if (!colorSchemes[color]) {
    console.error(`❌ Invalid color scheme: ${color}`);
    console.log('Available colors:');
    Object.entries(colorSchemes).forEach(([key, scheme]) => {
      console.log(`  ${key}: ${scheme.description}`);
    });
    return false;
  }
  
  config.theme.primary = color;
  if (!config.colors) config.colors = {};
  config.colors[color] = colorSchemes[color];
  
  console.log(`🎨 Changed color scheme to ${color} (${colorSchemes[color].description})`);
  return writeConfig(config);
}

async function switchSector(sectorKey) {
  console.log(`🔄 Switching to sector: ${sectorKey}`);
  
  const sectorsModule = await loadModule(`file://${SECTORS_PATH}`);
  if (!sectorsModule) {
    console.error('❌ Failed to load sectors configuration');
    return false;
  }

  const { sectorConfigurations, mergeSectorConfig } = sectorsModule;
  const baseConfig = readConfig();
  
  if (!baseConfig) {
    console.error('❌ Failed to load base configuration');
    return false;
  }

  if (!sectorConfigurations[sectorKey]) {
    console.error(`❌ Invalid sector: ${sectorKey}`);
    console.log('Available sectors:');
    Object.entries(sectorConfigurations).forEach(([key, config]) => {
      console.log(`  ${key}: ${config.sectorName}`);
    });
    return false;
  }

  const mergedConfig = mergeSectorConfig(baseConfig, sectorKey);
  
  // Add images for the sector
  await addSectorImages(mergedConfig, sectorKey);
  
  console.log(`✅ Switched to ${sectorConfigurations[sectorKey].sectorName}`);
  
  return writeConfig(mergedConfig);
}

async function addSectorImages(config, sectorKey, options = {}) {
  const imagesModule = await loadModule(`file://${IMAGES_PATH}`);
  if (!imagesModule) {
    console.log('⚠️  Images module not available, using placeholder images');
    return;
  }

  const { generateSectorImages } = imagesModule;
  
  const imageOptions = {
    heroMood: options.heroMood || 'professional',
    heroVariation: options.heroVariation || 0,
    productCount: options.productCount || config.products?.length || 3,
    teamCount: options.teamCount || 3,
    clientCount: options.clientCount || 6,
    ...options
  };

  try {
    const sectorImages = generateSectorImages(sectorKey, imageOptions);
    
    // Update hero background
    if (sectorImages.hero && config.hero) {
      config.hero.backgroundImage = sectorImages.hero.url;
      config.hero.imageAlt = sectorImages.hero.alt;
      config.hero.imageDescription = sectorImages.hero.description;
    }

    // Update product images
    if (sectorImages.products && config.products) {
      config.products.forEach((product, index) => {
        if (sectorImages.products[index]) {
          product.image = sectorImages.products[index].url;
          product.imageAlt = sectorImages.products[index].alt;
        }
      });
    }

    // Update client logos
    if (sectorImages.clients && !config.clients) {
      config.clients = sectorImages.clients;
    }

    // Add team images if not present
    if (sectorImages.team && !config.team) {
      config.team = sectorImages.team;
    }

    console.log(`📸 Generated ${Object.keys(sectorImages).length} image sets for ${sectorKey}`);
  } catch (error) {
    console.log('⚠️  Could not generate sector images:', error.message);
  }
}

async function applyLayoutTemplate(templateName, sectorKey = null) {
  const componentsModule = await loadModule(`file://${COMPONENTS_PATH}`);
  if (!componentsModule) {
    console.error('❌ Failed to load components configuration');
    return false;
  }

  const { layoutTemplates, getComponentVariationSelector } = componentsModule;
  
  if (!layoutTemplates[templateName]) {
    console.error(`❌ Invalid template: ${templateName}`);
    console.log('Available templates:');
    Object.entries(layoutTemplates).forEach(([key, template]) => {
      console.log(`  ${key}: ${template.name} - ${template.description}`);
    });
    return false;
  }

  const config = readConfig();
  if (!config) return false;

  const template = layoutTemplates[templateName];
  
  // Apply template configurations
  config.layoutTemplate = templateName;
  config.componentVariations = template.components;
  config.designMood = template.mood;
  config.trustLevel = template.trustLevel;
  
  // Apply color scheme if not already set
  if (template.colorScheme && template.colorScheme.length > 0) {
    const primaryColor = template.colorScheme[0];
    if (colorSchemes[primaryColor]) {
      config.theme.primary = primaryColor;
      if (!config.colors) config.colors = {};
      config.colors[primaryColor] = colorSchemes[primaryColor];
    }
  }

  console.log(`🎨 Applied layout template: ${template.name}`);
  console.log(`   Design mood: ${template.mood}`);
  console.log(`   Trust level: ${template.trustLevel}`);
  console.log(`   Components: ${Object.values(template.components).join(', ')}`);
  
  return writeConfig(config);
}

async function generateVariations(sectorKey, count = 3) {
  const componentsModule = await loadModule(`file://${COMPONENTS_PATH}`);
  if (!componentsModule) {
    console.error('❌ Failed to load components configuration');
    return false;
  }

  const { generateLayoutVariations } = componentsModule;
  
  try {
    const variations = generateLayoutVariations(sectorKey, count);
    
    console.log(`🎯 Generated ${variations.length} layout variations for ${sectorKey}:`);
    
    variations.forEach((variation, index) => {
      console.log(`\n  Variation ${index + 1}: ${variation.template.name}`);
      console.log(`    Mood: ${variation.metadata.mood}`);
      console.log(`    Colors: ${variation.metadata.colorScheme.join(', ')}`);
      console.log(`    Trust: ${variation.metadata.trustLevel}`);
      console.log(`    Hero: ${variation.components.hero.name}`);
      console.log(`    Products: ${variation.components.products.name}`);
    });

    // Save variations to generated-configs
    const fs = await import('fs');
    const path = await import('path');
    
    const outputDir = path.join(__dirname, '..', 'generated-configs');
    const variationsFile = path.join(outputDir, `${sectorKey}-variations.js`);
    
    const content = `// Layout Variations for ${sectorKey}
// Generated on ${new Date().toISOString()}

export const layoutVariations = ${JSON.stringify(variations, null, 2)};`;

    fs.writeFileSync(variationsFile, content, 'utf8');
    console.log(`\n📁 Saved variations to: ${sectorKey}-variations.js`);
    
    return true;
  } catch (error) {
    console.error('Error generating variations:', error.message);
    return false;
  }
}

async function refreshImages(sectorKey = null, options = {}) {
  const config = readConfig();
  if (!config) return false;

  const currentSector = sectorKey || config.sector || 'generic';
  
  console.log(`📸 Refreshing images for sector: ${currentSector}`);
  
  // Add fresh images
  await addSectorImages(config, currentSector, {
    heroVariation: options.heroVariation || Math.floor(Math.random() * 4),
    heroMood: options.heroMood || 'professional',
    ...options
  });

  return writeConfig(config);
}

function updateCompanyInfo(info) {
  const config = readConfig();
  if (!config) return false;
  
  if (info.name) config.site.name = info.name;
  if (info.title) config.site.title = info.title;
  if (info.description) config.site.description = info.description;
  if (info.url) config.site.url = info.url;
  
  console.log('✅ Company information updated');
  return writeConfig(config);
}

function updateContactInfo(contact) {
  const config = readConfig();
  if (!config) return false;
  
  if (contact.email) config.contact.email = contact.email;
  if (contact.phone) config.contact.phone = contact.phone;
  if (contact.address) {
    config.contact.address = { ...config.contact.address, ...contact.address };
  }
  
  console.log('✅ Contact information updated');
  return writeConfig(config);
}

function addProduct(product) {
  const config = readConfig();
  if (!config) return false;
  
  // Generate ID and slug if not provided
  if (!product.id) {
    product.id = Math.max(...config.products.map(p => p.id)) + 1;
  }
  if (!product.slug && product.name) {
    product.slug = product.name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }
  
  // Ensure required fields
  if (!product.name) {
    console.error('❌ Product name is required');
    return false;
  }
  
  config.products.push(product);
  console.log(`✅ Added product: ${product.name}`);
  return writeConfig(config);
}

function removeProduct(productId) {
  const config = readConfig();
  if (!config) return false;
  
  const index = config.products.findIndex(p => p.id === parseInt(productId));
  if (index === -1) {
    console.error(`❌ Product with ID ${productId} not found`);
    return false;
  }
  
  const removedProduct = config.products.splice(index, 1)[0];
  console.log(`✅ Removed product: ${removedProduct.name}`);
  return writeConfig(config);
}

function listProducts() {
  const config = readConfig();
  if (!config) return false;
  
  console.log('\n📦 Current Products:');
  config.products.forEach(product => {
    console.log(`  ${product.id}: ${product.name} (${product.category || 'No category'})`);
  });
  console.log(`\nTotal: ${config.products.length} products\n`);
  return true;
}

async function listSectors() {
  const sectorsModule = await loadModule(`file://${SECTORS_PATH}`);
  if (!sectorsModule) {
    console.error('❌ Failed to load sectors configuration');
    return false;
  }

  const { getAllSectors } = sectorsModule;
  const sectors = getAllSectors();
  
  console.log('\n🏭 Available Sectors:');
  sectors.forEach(sector => {
    console.log(`  ${sector.key}: ${sector.name}`);
  });
  console.log(`\nTotal: ${sectors.length} sectors available\n`);
  return true;
}

async function listTemplates() {
  const componentsModule = await loadModule(`file://${COMPONENTS_PATH}`);
  if (!componentsModule) {
    console.error('❌ Failed to load components configuration');
    return false;
  }

  const { layoutTemplates } = componentsModule;
  
  console.log('\n🎨 Available Layout Templates:');
  Object.entries(layoutTemplates).forEach(([key, template]) => {
    console.log(`  ${key}: ${template.name}`);
    console.log(`    ${template.description}`);
    console.log(`    Sectors: ${template.sector.join(', ')}`);
    console.log(`    Mood: ${template.mood} | Trust: ${template.trustLevel}`);
    console.log('');
  });
  return true;
}

function showCurrentConfig() {
  const config = readConfig();
  if (!config) return false;
  
  console.log('\n📊 Current Configuration:');
  console.log(`  Company: ${config.site.name}`);
  console.log(`  Title: ${config.site.title}`);
  console.log(`  Theme: ${config.theme.primary} (${config.theme.style})`);
  console.log(`  Products: ${config.products.length}`);
  console.log(`  Sector: ${config.sector || 'Generic'}`);
  console.log(`  Email: ${config.contact.email}`);
  console.log(`  Phone: ${config.contact.phone}`);
  console.log(`  Layout Template: ${config.layoutTemplate || 'Default'}`);
  console.log(`  Design Mood: ${config.designMood || 'Professional'}`);
  console.log(`  Hero Image: ${config.hero?.backgroundImage ? '✅ Set' : '❌ Not set'}`);
  console.log(`  Component Variations: ${config.componentVariations ? '✅ Applied' : '❌ Not applied'}\n`);
  return true;
}

// Interactive setup wizard
async function runSetupWizard() {
  console.log('🧙 Welcome to the Enhanced SME Website Setup Wizard!\n');
  
  console.log('This wizard now includes:');
  console.log('✨ Smart image generation with Unsplash integration');
  console.log('🎨 Multiple component variations and layout templates');
  console.log('🏭 Comprehensive sector-specific configurations');
  console.log('🎯 Layout variation generation for A/B testing\n');
  
  console.log('Quick commands to get started:');
  console.log('  npm run customize list-sectors      # See all available sectors');
  console.log('  npm run customize list-templates    # See layout templates');
  console.log('  npm run customize sector <sector>   # Apply sector configuration');
  console.log('  npm run customize template <name>   # Apply layout template');
  console.log('  npm run customize refresh-images    # Generate new images');
  console.log('  npm run customize variations <sector> # Generate layout variations');
  console.log('  npm run customize status            # View current configuration');
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'color':
      const color = args[1];
      if (!color) {
        console.log('Usage: npm run customize color <color-name>');
        console.log('\nAvailable colors:');
        Object.entries(colorSchemes).forEach(([key, scheme]) => {
          console.log(`  ${key}: ${scheme.description}`);
        });
        process.exit(1);
      }
      await changeColorScheme(color);
      break;
      
    case 'sector':
      const sector = args[1];
      if (!sector) {
        console.log('Usage: npm run customize sector <sector-key>');
        await listSectors();
        process.exit(1);
      }
      await switchSector(sector);
      break;

    case 'template':
      const template = args[1];
      const templateSector = args[2];
      if (!template) {
        console.log('Usage: npm run customize template <template-name> [sector]');
        await listTemplates();
        process.exit(1);
      }
      await applyLayoutTemplate(template, templateSector);
      break;

    case 'variations':
      const varSector = args[1];
      const varCount = parseInt(args[2]) || 3;
      if (!varSector) {
        console.log('Usage: npm run customize variations <sector-key> [count]');
        await listSectors();
        process.exit(1);
      }
      await generateVariations(varSector, varCount);
      break;

    case 'refresh-images':
      const refreshSector = args[1];
      const heroMood = args[2];
      await refreshImages(refreshSector, { heroMood });
      break;

    case 'company':
      // Interactive company update would go here
      console.log('Company information update:');
      console.log('Example: npm run customize company --name "YourCompany" --title "Your Business Title"');
      
      // Parse named arguments
      const companyInfo = {};
      for (let i = 1; i < args.length; i += 2) {
        const key = args[i]?.replace('--', '');
        const value = args[i + 1];
        if (key && value) {
          companyInfo[key] = value;
        }
      }
      
      if (Object.keys(companyInfo).length > 0) {
        updateCompanyInfo(companyInfo);
      }
      break;

    case 'add-product':
      console.log('Add product feature - Enhanced with image generation');
      console.log('Future: Interactive product addition with auto-generated images');
      break;

    case 'remove-product':
      const productId = args[1];
      if (!productId) {
        console.log('Usage: npm run customize remove-product <product-id>');
        listProducts();
        process.exit(1);
      }
      removeProduct(productId);
      break;

    case 'list-products':
      listProducts();
      break;

    case 'list-sectors':
      await listSectors();
      break;

    case 'list-templates':
      await listTemplates();
      break;

    case 'status':
      showCurrentConfig();
      break;

    case 'wizard':
      await runSetupWizard();
      break;
      
    case 'help':
    default:
      console.log(`
SME Landing Page Template - Enhanced Customization Utility

Usage:
  npm run customize <command> [options]

Core Commands:
  color <name>             Change color scheme
  sector <key>             Switch to specific industry sector
  template <name>          Apply layout template
  company [options]        Update company information
  status                   Show current configuration

Advanced Commands:
  variations <sector> [n]  Generate layout variations for A/B testing
  refresh-images [sector]  Generate new images with Unsplash
  list-sectors            Show all available sectors
  list-templates          Show all layout templates
  wizard                  Run interactive setup wizard

Product Management:
  add-product             Add a new product (interactive)
  remove-product <id>     Remove product by ID
  list-products           Show all current products

Color Options:
  blue, green, purple, red, orange, pink, indigo, teal

Layout Templates:
  corporate_professional  - Traditional corporate layout
  modern_tech            - Contemporary tech design
  heritage_traditional   - Classic heritage design
  consumer_friendly      - Approachable consumer design
  minimal_elegant        - Clean elegant design

Examples:
  npm run customize sector electronics_electrical
  npm run customize template modern_tech
  npm run customize color purple
  npm run customize variations textiles_garments 5
  npm run customize refresh-images industrial_machinery
  npm run customize company --name "TechCorp" --title "Technology Solutions"

Enhanced Features:
  🖼️  Automatic image generation with Unsplash integration
  🎨  Multiple component variations and layout templates
  🎯  A/B testing layout generation
  🏭  Comprehensive sector-specific configurations
  📱  Mobile-optimized responsive designs

For advanced customization, edit configuration files directly.
      `);
      break;
  }
}

export {
  readConfig,
  writeConfig,
  changeColorScheme,
  switchSector,
  applyLayoutTemplate,
  generateVariations,
  refreshImages,
  addSectorImages,
  updateCompanyInfo,
  updateContactInfo,
  addProduct,
  removeProduct,
  listProducts,
  listSectors,
  listTemplates,
  showCurrentConfig,
  colorSchemes
};