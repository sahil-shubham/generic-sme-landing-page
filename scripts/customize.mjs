#!/usr/bin/env bun

/**
 * Enhanced Configuration Utility for SME Landing Page Template
 * This script helps with comprehensive customization including sector switching
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = join(__dirname, '..', 'src', 'config', 'site.js');
const SECTORS_PATH = join(__dirname, '..', 'src', 'config', 'sectors.js');

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
  console.log(`✅ Switched to ${sectorConfigurations[sectorKey].sectorName}`);
  
  return writeConfig(mergedConfig);
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
  console.log(`  Phone: ${config.contact.phone}\n`);
  return true;
}

// Interactive setup wizard
async function runSetupWizard() {
  console.log('🧙 Welcome to the SME Website Setup Wizard!\n');
  
  // This would typically use a proper CLI library like inquirer
  // For now, showing the structure
  console.log('This wizard will help you configure your website step by step.');
  console.log('For a full interactive experience, consider using:');
  console.log('  bun add inquirer');
  console.log('  bun add chalk');
  console.log('\nCurrent available commands:');
  console.log('  bun run customize sector <sector-name>');
  console.log('  bun run customize color <color-name>');
  console.log('  bun run customize company');
  console.log('  bun run customize list-sectors');
  console.log('  bun run customize status');
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'color':
      const color = args[1];
      if (!color) {
        console.log('Usage: bun run customize color <color-name>');
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
        console.log('Usage: bun run customize sector <sector-key>');
        await listSectors();
        process.exit(1);
      }
      await switchSector(sector);
      break;

    case 'company':
      // Interactive company update would go here
      console.log('Interactive company info update:');
      console.log('Example: bun run customize company --name "YourCompany" --title "Your Business Title"');
      
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
      console.log('Add product feature - implement with proper CLI library');
      console.log('Example structure needed in future implementation');
      break;

    case 'remove-product':
      const productId = args[1];
      if (!productId) {
        console.log('Usage: bun run customize remove-product <product-id>');
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
  bun run customize <command> [options]

Commands:
  color <name>           Change color scheme
  sector <key>           Switch to specific industry sector
  company [options]      Update company information
  add-product           Add a new product (interactive)
  remove-product <id>   Remove product by ID
  list-products         Show all current products
  list-sectors          Show all available sectors
  status                Show current configuration
  wizard                Run interactive setup wizard
  help                  Show this help message

Color Options:
  blue, green, purple, red, orange, pink, indigo, teal

Sector Examples:
  industrial_machinery, electronics_electrical, textiles_garments,
  agriculture_agro, chemicals_pharmaceuticals, consumer_goods,
  construction_hardware

Company Update Examples:
  bun run customize company --name "TechCorp" --title "Technology Solutions"
  bun run customize company --email "info@techcorp.com" --phone "+91-99999-00000"

Quick Start:
  1. bun run customize list-sectors
  2. bun run customize sector <your-sector>
  3. bun run customize color <preferred-color>
  4. bun run customize company --name "YourCompany"
  5. bun run customize status

For advanced customization, edit src/config/site.js directly.
      `);
      break;
  }
}

export {
  readConfig,
  writeConfig,
  changeColorScheme,
  switchSector,
  updateCompanyInfo,
  updateContactInfo,
  addProduct,
  removeProduct,
  listProducts,
  listSectors,
  showCurrentConfig,
  colorSchemes
};