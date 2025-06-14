# HTML to PDF Converter for CV Files

This script converts your HTML CV files to high-quality PDF format using Puppeteer (Chromium-based rendering).

## Features

✅ **High-Quality Output** - Professional PDF generation with proper fonts and styling  
✅ **Batch Processing** - Convert multiple files at once  
✅ **Cross-Platform** - Works on Windows, macOS, and Linux  
✅ **Customizable** - Easy to modify output settings  
✅ **Print-Optimized** - A4 format with proper margins  

## Prerequisites

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

## Quick Setup

### Option 1: Automatic Setup (Recommended)

```bash
# Linux/macOS
cd scripts
chmod +x setup.sh
./setup.sh

# Windows
cd scripts
setup.bat
```

### Option 2: Manual Setup

```bash
cd scripts
npm install
mkdir -p ../pdfs
```

## Usage

### Method 1: NPM Scripts (Easiest)

```bash
# Convert both English and Spanish CVs
npm run convert:all

# Convert only English CV
npm run convert:english

# Convert only Spanish CV
npm run convert:spanish
```

### Method 2: Direct Script Usage

```bash
# Convert all CV files
node html-to-pdf.js --all

# Convert specific file
node html-to-pdf.js --file cv_english
node html-to-pdf.js --file cv_spanish

# Show help
node html-to-pdf.js --help
```

### Method 3: Windows Batch Script

```cmd
# Interactive menu
convert.bat

# Direct commands
convert.bat all
convert.bat english
convert.bat spanish
```

## Output

Generated PDFs will be saved in the `pdfs/` directory:

- `Alberto_Bueno_CV_English.pdf`
- `Alberto_Bueno_CV_Spanish.pdf`

## Configuration

You can modify the PDF settings in `html-to-pdf.js`:

```javascript
const CONFIG = {
  pdfOptions: {
    format: 'A4',           // Page format
    printBackground: true,   // Include background colors/images
    margin: {               // Page margins
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    },
    preferCSSPageSize: true  // Use CSS page size
  }
};
```

## Troubleshooting

### Common Issues

**1. "Node.js not found"**
```bash
# Install Node.js from https://nodejs.org/
# Then verify installation:
node --version
npm --version
```

**2. "Permission denied" (Linux/macOS)**
```bash
chmod +x setup.sh
chmod +x html-to-pdf.js
```

**3. "Puppeteer download failed"**
```bash
# Try manual installation:
npm install puppeteer --no-optional
```

**4. "Input file not found"**
- Make sure your HTML files exist in the parent directory
- Check file names: `cv_english.html`, `cv_spanish.html`

### Advanced Troubleshooting

**Enable debug mode:**
```bash
DEBUG=puppeteer:* node html-to-pdf.js --all
```

**Test with specific Chromium path:**
```bash
# Edit html-to-pdf.js and add:
const browser = await puppeteer.launch({
  executablePath: '/path/to/chrome',  // Your Chrome/Chromium path
  headless: 'new'
});
```

## Dependencies

- **puppeteer** (^21.0.0) - Headless Chrome for PDF generation

## File Structure

```
scripts/
├── html-to-pdf.js      # Main conversion script
├── package.json        # NPM configuration
├── setup.sh           # Linux/macOS setup script
├── convert.bat        # Windows batch script
└── README.md          # This file

../
├── cv_english.html    # Source HTML files
├── cv_spanish.html
└── pdfs/             # Generated PDF output
    ├── Alberto_Bueno_CV_English.pdf
    └── Alberto_Bueno_CV_Spanish.pdf
```

## Examples

### Basic Usage
```bash
# Setup (one time only)
cd scripts
./setup.sh

# Convert all CVs
npm run convert:all
```

### Custom Conversion
```bash
# Convert with specific settings
node html-to-pdf.js --file cv_english

# Check output
ls -la ../pdfs/
```

## License

MIT License - Feel free to modify and use for your own projects.

## Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Verify Node.js and npm are properly installed
3. Ensure HTML files exist and are valid
4. Check file permissions on Linux/macOS

---

**Happy converting! 🚀**