#!/bin/bash

# Setup script for HTML to PDF converter
# This script installs dependencies and sets up the conversion environment

echo "🚀 Setting up HTML to PDF converter..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not available. Please install npm."
    exit 1
fi

echo "✅ npm found: $(npm --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create output directory
echo "📁 Creating output directory..."
mkdir -p ../pdfs

# Make scripts executable
chmod +x html-to-pdf.js
chmod +x setup.sh

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Usage examples:"
echo "  npm run convert:all       # Convert both English and Spanish CVs"
echo "  npm run convert:english   # Convert only English CV"
echo "  npm run convert:spanish   # Convert only Spanish CV"
echo ""
echo "  node html-to-pdf.js --all              # Direct script usage"
echo "  node html-to-pdf.js --file cv_english  # Convert specific file"
echo ""
echo "Output PDFs will be saved in: ../pdfs/"