@echo off
REM Windows setup script for HTML to PDF converter

echo 🚀 Setting up HTML to PDF converter for Windows...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    echo    Visit: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js found: 
node --version

REM Check if npm is available
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not available. Please install npm.
    pause
    exit /b 1
)

echo ✅ npm found: 
npm --version

echo.
echo 📦 Installing dependencies...
echo This may take a few minutes as Puppeteer downloads Chromium...
echo.

REM Install dependencies with verbose output
npm install --verbose

if %errorlevel% neq 0 (
    echo.
    echo ❌ Installation failed. Trying alternative method...
    echo.
    
    REM Try with different registry
    npm install puppeteer --registry https://registry.npmjs.org/
    
    if %errorlevel% neq 0 (
        echo ❌ Still failed. Please try manual installation:
        echo    npm install puppeteer --no-optional
        pause
        exit /b 1
    )
)

REM Create output directory
echo.
echo 📁 Creating output directory...
if not exist "..\pdfs" (
    mkdir "..\pdfs"
    echo ✅ Created: ..\pdfs\
) else (
    echo ✅ Directory already exists: ..\pdfs\
)

echo.
echo 🎉 Setup completed successfully!
echo.
echo Usage examples:
echo   npm run convert:all       # Convert both English and Spanish CVs
echo   npm run convert:english   # Convert only English CV
echo   npm run convert:spanish   # Convert only Spanish CV
echo.
echo   node html-to-pdf.js --all              # Direct script usage
echo   node html-to-pdf.js --file cv_english  # Convert specific file
echo.
echo Output PDFs will be saved in: ..\pdfs\
echo.
pause