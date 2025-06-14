#!/usr/bin/env node

/**
 * HTML to PDF Converter for CV Files
 * Converts HTML CV files to high-quality PDF format
 * 
 * Usage:
 *   node html-to-pdf.js [options]
 *   
 * Options:
 *   --file <filename>    Convert specific file (without .html extension)
 *   --all               Convert all CV files
 *   --help              Show help
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

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
    },
    preferCSSPageSize: true
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
 * Convert single HTML file to PDF
 */
async function convertToPDF(inputFile, outputFile) {
  const inputPath = path.join(CONFIG.inputDir, inputFile);
  const outputPath = path.join(CONFIG.outputDir, outputFile);
  
  // Check if input file exists
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input file not found: ${inputPath}`);
  }
  
  console.log(`🔄 Converting ${inputFile} to ${outputFile}...`);
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport for consistent rendering
    await page.setViewport({
      width: 1200,
      height: 1600,
      deviceScaleFactor: 2
    });
    
    // Load HTML file
    const htmlContent = fs.readFileSync(inputPath, 'utf8');
    await page.setContent(htmlContent, {
      waitUntil: ['networkidle0', 'domcontentloaded'],
      timeout: 30000
    });
    
    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');
    
    // Generate PDF
    await page.pdf({
      path: outputPath,
      ...CONFIG.pdfOptions
    });
    
    console.log(`✅ Successfully converted to: ${outputPath}`);
    
  } finally {
    await browser.close();
  }
}

/**
 * Convert all CV files
 */
async function convertAll() {
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
 * Show help information
 */
function showHelp() {
  console.log(`
HTML to PDF Converter for CV Files
==================================

Usage:
  node html-to-pdf.js [options]

Options:
  --file <filename>    Convert specific file (e.g., --file cv_english)
  --all               Convert all CV files
  --help              Show this help message

Examples:
  node html-to-pdf.js --all
  node html-to-pdf.js --file cv_english
  node html-to-pdf.js --file cv_spanish.html

Available files:
${CONFIG.cvFiles.map(f => `  - ${f.input} → ${f.output}`).join('\n')}

Output directory: ${CONFIG.outputDir}
`);
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  
  // Ensure output directory exists
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

// Handle uncaught errors
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});

// Run main function
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  convertToPDF,
  convertAll,
  convertSpecific
};