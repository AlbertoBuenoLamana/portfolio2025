#!/usr/bin/env node

/**
 * HTML to PDF Converter using Playwright (Alternative to Puppeteer)
 * Lighter alternative that often installs more reliably
 */

const fs = require('fs');
const path = require('path');

// Try to use Playwright, fall back to alternatives
let browser;
let usesPlaywright = false;

try {
  const { chromium } = require('playwright');
  browser = chromium;
  usesPlaywright = true;
  console.log('✅ Using Playwright for PDF generation');
} catch (error) {
  console.log('⚠️ Playwright not found, falling back to browser-based solution');
}

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, '..'),
  outputDir: path.join(__dirname, '..', 'pdfs'),
  cvFiles: [
    {
      input: 'cv_english.html',
      output: 'Alberto_Bueno_CV_English.pdf'
    },
    {
      input: 'cv_spanish.html', 
      output: 'Alberto_Bueno_CV_Spanish.pdf'
    }
  ],
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0.5in',
      right: '0.5in', 
      bottom: '0.5in',
      left: '0.5in'
    }
  }
};

/**
 * Create output directory if it doesn't exist
 */
function ensureOutputDir() {
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    console.log(`✅ Created output directory: ${CONFIG.outputDir}`);
  }
}

/**
 * Generate fallback instructions if no headless browser available
 */
function generateFallbackInstructions() {
  console.log(`
📋 FALLBACK INSTRUCTIONS
========================

Since automated PDF generation is not available, please follow these steps:

1. Open your browser (Chrome, Edge, or Firefox)
2. Navigate to the HTML files:
   - file://${path.resolve(CONFIG.inputDir, 'cv_english.html')}
   - file://${path.resolve(CONFIG.inputDir, 'cv_spanish.html')}

3. Print to PDF:
   - Press Ctrl+P (Windows) or Cmd+P (Mac)
   - Select "Save as PDF" as destination
   - Choose these settings:
     * Paper size: A4
     * Margins: Default
     * Background graphics: Enable
   - Save as:
     * Alberto_Bueno_CV_English.pdf
     * Alberto_Bueno_CV_Spanish.pdf

4. Save PDFs to: ${CONFIG.outputDir}

Alternative: Use online HTML to PDF converters:
- https://html-css-js.com/html/generator/
- https://www.sejda.com/html-to-pdf
- https://smallpdf.com/html-to-pdf
`);
}

/**
 * Convert using Playwright
 */
async function convertWithPlaywright(inputFile, outputFile) {
  const inputPath = path.join(CONFIG.inputDir, inputFile);
  const outputPath = path.join(CONFIG.outputDir, outputFile);
  
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input file not found: ${inputPath}`);
  }
  
  console.log(`🔄 Converting ${inputFile} to ${outputFile}...`);
  
  const browserInstance = await browser.launch({
    headless: true
  });
  
  try {
    const context = await browserInstance.newContext();
    const page = await context.newPage();
    
    // Set viewport
    await page.setViewportSize({
      width: 1200,
      height: 1600
    });
    
    // Load HTML file
    const htmlContent = fs.readFileSync(inputPath, 'utf8');
    await page.setContent(htmlContent, {
      waitUntil: 'networkidle'
    });
    
    // Generate PDF
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: CONFIG.pdfOptions.margin
    });
    
    console.log(`✅ Successfully converted to: ${outputPath}`);
    
  } finally {
    await browserInstance.close();
  }
}

/**
 * Main conversion function
 */
async function convertToPDF(inputFile, outputFile) {
  if (usesPlaywright) {
    return await convertWithPlaywright(inputFile, outputFile);
  } else {
    throw new Error('No PDF generation library available');
  }
}

/**
 * Convert all files
 */
async function convertAll() {
  if (!usesPlaywright) {
    generateFallbackInstructions();
    return;
  }
  
  console.log('🚀 Starting batch conversion...\n');
  
  for (const file of CONFIG.cvFiles) {
    try {
      await convertToPDF(file.input, file.output);
    } catch (error) {
      console.error(`❌ Failed to convert ${file.input}:`, error.message);
    }
  }
  
  console.log('\n🎉 Batch conversion completed!');
}

/**
 * Convert specific file
 */
async function convertSpecific(filename) {
  if (!usesPlaywright) {
    generateFallbackInstructions();
    return;
  }
  
  const inputFile = filename.endsWith('.html') ? filename : `${filename}.html`;
  const baseName = path.basename(inputFile, '.html');
  const outputFile = `Alberto_Bueno_${baseName.replace('cv_', '').replace('_', '_CV_')}.pdf`;
  
  try {
    await convertToPDF(inputFile, outputFile);
    console.log('✅ Conversion completed!');
  } catch (error) {
    console.error('❌ Conversion failed:', error.message);
    process.exit(1);
  }
}

/**
 * Show help
 */
function showHelp() {
  console.log(`
HTML to PDF Converter (Playwright version)
==========================================

Usage:
  node html-to-pdf-playwright.js [options]

Options:
  --file <filename>    Convert specific file
  --all               Convert all CV files
  --help              Show this help

Examples:
  node html-to-pdf-playwright.js --all
  node html-to-pdf-playwright.js --file cv_english
`);
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  
  ensureOutputDir();
  
  if (args.length === 0 || args.includes('--help')) {
    showHelp();
    return;
  }
  
  if (args.includes('--all')) {
    await convertAll();
    return;
  }
  
  const fileIndex = args.indexOf('--file');
  if (fileIndex !== -1 && args[fileIndex + 1]) {
    const filename = args[fileIndex + 1];
    await convertSpecific(filename);
    return;
  }
  
  console.error('❌ Invalid arguments. Use --help for usage information.');
  process.exit(1);
}

if (require.main === module) {
  main().catch(console.error);
}