@echo off
REM Windows batch script for HTML to PDF conversion

echo HTML to PDF Converter for CVs
echo ================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if dependencies are installed
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo Error: Failed to install dependencies
        pause
        exit /b 1
    )
)

REM Create output directory if it doesn't exist
if not exist "..\pdfs" (
    mkdir "..\pdfs"
)

REM Parse command line arguments
if "%1"=="" goto :show_menu
if "%1"=="all" goto :convert_all
if "%1"=="english" goto :convert_english
if "%1"=="spanish" goto :convert_spanish
goto :show_usage

:show_menu
echo.
echo Select an option:
echo 1. Convert all CVs (English + Spanish)
echo 2. Convert English CV only
echo 3. Convert Spanish CV only
echo 4. Exit
echo.
set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" goto :convert_all
if "%choice%"=="2" goto :convert_english
if "%choice%"=="3" goto :convert_spanish
if "%choice%"=="4" goto :end
echo Invalid choice. Please try again.
goto :show_menu

:convert_all
echo Converting all CV files...
node html-to-pdf.js --all
goto :end

:convert_english
echo Converting English CV...
node html-to-pdf.js --file cv_english
goto :end

:convert_spanish
echo Converting Spanish CV...
node html-to-pdf.js --file cv_spanish
goto :end

:show_usage
echo.
echo Usage: convert.bat [option]
echo.
echo Options:
echo   all      - Convert both English and Spanish CVs
echo   english  - Convert English CV only
echo   spanish  - Convert Spanish CV only
echo   (none)   - Show interactive menu
echo.
goto :end

:end
echo.
echo Conversion completed!
echo Output files are in: ..\pdfs\
pause