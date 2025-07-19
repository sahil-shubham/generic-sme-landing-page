#!/usr/bin/env node

/**
 * Configuration Utility for SME Landing Page Template
 * This script helps LLMs make common configuration changes
 */

const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(__dirname, '..', 'src', 'config', 'site.js');

// Helper functions
function readConfig() {
  try {
    const content = fs.readFileSync(CONFIG_PATH, 'utf8');
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
export const siteConfig = ${JSON.stringify(config, null, 2)};`;
    fs.writeFileSync(CONFIG_PATH, content, 'utf8');
    console.log('✅ Configuration updated successfully!');
    return true;
  } catch (error) {
    console.error('Error writing config:', error.message);
    return false;
  }
}

// Configuration templates
const colorSchemes = {
  blue: {
    primary: "bg-blue-600",
    primaryHover: "hover:bg-blue-700",
    accent: "bg-blue-100",
    text: "text-blue-600",
    gradient: "from-blue-600 to-blue-800"
  },
  green: {
    primary: "bg-green-600",
    primaryHover: "hover:bg-green-700",
    accent: "bg-green-100",
    text: "text-green-600",
    gradient: "from-green-600 to-green-800"
  },
  purple: {
    primary: "bg-purple-600",
    primaryHover: "hover:bg-purple-700",
    accent: "bg-purple-100",
    text: "text-purple-600",
    gradient: "from-purple-600 to-purple-800"
  },
  red: {
    primary: "bg-red-600",
    primaryHover: "hover:bg-red-700",
    accent: "bg-red-100",
    text: "text-red-600",
    gradient: "from-red-600 to-red-800"
  },
  orange: {
    primary: "bg-orange-600",
    primaryHover: "hover:bg-orange-700",
    accent: "bg-orange-100",
    text: "text-orange-600",
    gradient: "from-orange-600 to-orange-800"
  },
  pink: {
    primary: "bg-pink-600",
    primaryHover: "hover:bg-pink-700",
    accent: "bg-pink-100",
    text: "text-pink-600",
    gradient: "from-pink-600 to-pink-800"
  }
};

// Main functions
function changeColorScheme(color) {
  const config = readConfig();
  if (!config) return false;
  
  if (!colorSchemes[color]) {
    console.error(`❌ Invalid color scheme: ${color}`);
    console.log('Available colors:', Object.keys(colorSchemes).join(', '));
    return false;
  }
  
  config.theme.primary = color;
  config.colors[color] = colorSchemes[color];
  
  return writeConfig(config);
}

function updateCompanyInfo(info) {
  const config = readConfig();
  if (!config) return false;
  
  Object.assign(config.site, info);
  
  return writeConfig(config);
}

function updateContactInfo(contact) {
  const config = readConfig();
  if (!config) return false;
  
  Object.assign(config.contact, contact);
  
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
    product.slug = product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }
  
  config.products.push(product);
  
  return writeConfig(config);
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'color':
      const color = args[1];
      if (!color) {
        console.log('Usage: node customize.js color <color-name>');
        console.log('Available colors:', Object.keys(colorSchemes).join(', '));
        process.exit(1);
      }
      changeColorScheme(color);
      break;
      
    case 'company':
      console.log('Interactive company info update not implemented yet.');
      console.log('Edit src/config/site.js directly or use the functions in this script.');
      break;
      
    case 'help':
    default:
      console.log(`
SME Landing Page Template Customization Utility

Usage:
  node customize.js <command> [options]

Commands:
  color <name>    Change color scheme (blue, green, purple, red, orange, pink)
  company         Update company information (interactive)
  help            Show this help message

Examples:
  node customize.js color green
  node customize.js company

For advanced customization, edit src/config/site.js directly.
      `);
      break;
  }
}

module.exports = {
  readConfig,
  writeConfig,
  changeColorScheme,
  updateCompanyInfo,
  updateContactInfo,
  addProduct,
  colorSchemes
};