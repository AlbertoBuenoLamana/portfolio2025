@echo off
REM Focused script to install Puppeteer

echo Installing Puppeteer for HTML to PDF conversion...
echo This will download Chromium browser (~200MB)
echo.

REM Try standard installation
echo Attempting standard installation...
npm install puppeteer

if %errorlevel% equ 0 (
    echo ✅ Puppeteer installed successfully!
    goto :test_installation
)

echo ❌ Standard installation failed. Trying alternative methods...
echo.

REM Try with no optional dependencies
echo Trying without optional dependencies...
npm install puppeteer --no-optional

if %errorlevel% equ 0 (
    echo ✅ Puppeteer installed successfully (no optional)!
    goto :test_installation
)

REM Try with different registry
echo Trying with npm registry...
npm install puppeteer --registry https://registry.npmjs.org/

if %errorlevel% equ 0 (
    echo ✅ Puppeteer installed successfully (npm registry)!
    goto :test_installation
)

REM Try with yarn if available
where yarn >nul 2>&1
if %errorlevel% equ 0 (
    echo Trying with Yarn...
    yarn add puppeteer
    if %errorlevel% equ 0 (
        echo ✅ Puppeteer installed successfully (yarn)!
        goto :test_installation
    )
)

echo ❌ All installation methods failed.
echo.
echo Manual steps to try:
echo 1. Clear npm cache: npm cache clean --force
echo 2. Delete node_modules: rmdir /s node_modules
echo 3. Try: npm install puppeteer --no-sandbox
echo 4. Or use alternative: npm install playwright
echo.
pause
exit /b 1

:test_installation
echo.
echo Testing installation...
node -e "console.log('Puppeteer version:', require('puppeteer').version || 'installed')" 2>nul

if %errorlevel% equ 0 (
    echo ✅ Installation verified successfully!
    echo.
    echo You can now run:
    echo   npm run convert:all
    echo   node html-to-pdf.js --all
) else (
    echo ❌ Installation verification failed.
    echo Try running the conversion anyway - it might still work.
)

echo.
pause