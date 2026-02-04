#!/bin/bash

# AS-Leather Store Hostinger Deployment Script
echo "🚀 Starting AS-Leather Store deployment to Hostinger..."

# Set environment variables
export NEXT_TURBOPACK=0

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf .next out

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Create deployment package
echo "📦 Creating deployment package..."
mkdir -p deploy-package
cp -r .next deploy-package/
cp -r public deploy-package/
cp -r src deploy-package/
cp package.json deploy-package/
cp package-lock.json deploy-package/
cp next.config.js deploy-package/
cp tsconfig.json deploy-package/
cp tailwind.config.js deploy-package/

echo "✅ Build completed successfully!"
echo "📁 Deployment package created in 'deploy-package' folder"
echo ""
echo "📋 Next steps for Hostinger deployment:"
echo "1. Upload all files from 'deploy-package' folder to Hostinger"
echo "2. In Hostinger Node.js Manager, set startup command: npm start"
echo "3. Set Node.js version to 18.x or higher"
echo "4. Start the application"
echo ""
echo "🌐 Your cart functionality will work properly with Node.js hosting!"
