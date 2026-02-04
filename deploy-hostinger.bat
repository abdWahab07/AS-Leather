@echo off
echo 🚀 Starting AS-Leather Store deployment to Hostinger...

REM Set environment variables
set NEXT_TURBOPACK=0

REM Clean previous build
echo 🧹 Cleaning previous build...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Build the application
echo 🔨 Building application...
call npm run build

echo ✅ Build completed successfully!
echo.
echo 📋 Next steps for Hostinger deployment:
echo 1. Upload ALL files to Hostinger Node.js hosting:
echo    - .next folder (from build)
echo    - node_modules folder 
echo    - package.json
echo    - package-lock.json
echo    - src folder
echo    - public folder
echo    - next.config.js
echo    - tsconfig.json
echo    - tailwind.config.js
echo.
echo 2. In Hostinger Node.js Manager:
echo    - Set startup command: npm start
echo    - Set Node.js version to 18.x or higher
echo.
echo 3. Start the application
echo.
echo 🌐 Your cart functionality will work properly with Node.js hosting!
pause
