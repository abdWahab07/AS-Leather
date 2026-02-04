# Hostinger Deployment Fix for Cart Functionality

## Issue
Cart sidebar not working when deployed on Hostinger due to build/export process.

## Root Causes
1. **Static Export Issues**: Next.js static export may not handle client-side state properly
2. **Missing Build Files**: Some components may not be properly included in the export
3. **JavaScript Execution**: Hostinger's static hosting may have limitations

## Solutions

### Option 1: Fix Static Export (Recommended)

#### 1. Update next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for now
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Ensure proper asset handling
  reactStrictMode: false,
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: '',
  // Add this for proper client-side functionality
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
```

#### 2. Update package.json scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build"
  }
}
```

#### 3. Build for Node.js hosting instead of static
```bash
npm run build
```

### Option 2: Use Node.js Hosting on Hostinger

1. **In Hostinger Control Panel**:
   - Go to Node.js Manager
   - Create new Node.js application
   - Set Node.js version to 18.x or higher

2. **Upload ALL project files** (including node_modules folder or run npm install on server)

3. **Set startup file** to:
   - `package.json` script: `start`
   - Or direct command: `npm start`

### Option 3: Fix Cart Component for Static Export

If you must use static hosting, update CartSidebar.tsx:

```javascript
// Add this at the top of CartSidebar.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Add localStorage persistence
export default function CartSidebar({ isOpen, onClose }) {
  const [cartItems, setCartItems] = useState([]);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      } else {
        // Default items for demo
        setCartItems([
          {
            id: 1,
            name: "Executive Messenger",
            price: 485,
            quantity: 1,
            image: "/Products/1.jpeg",
            category: "Messenger Bags"
          },
          {
            id: 2,
            name: "Heritage Briefcase",
            price: 595,
            quantity: 1,
            image: "/Products/2.jpeg",
            category: "Briefcases"
          }
        ]);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Rest of your component...
}
```

### Option 4: Check File Structure on Hostinger

Ensure these files are uploaded correctly:
```
/public/
  /Products/
    1.jpeg
    2.jpeg
    3.jpeg
    4.jpeg
    5.jpeg
  /HomePage/
    backgroundImage.jpg
  /HeroSection/
    heroVideo.mp4

/src/
  /app/
    layout.tsx
    page.tsx
    globals.css
  /components/
    Navigation.tsx
    Homepage.tsx
    CartSidebar.tsx
    Testimonial.tsx
    ContactUs.tsx
    Footer.tsx

package.json
next.config.js
tsconfig.json
tailwind.config.js
```

## Testing Steps

1. **Check Browser Console**:
   - Open your site on Hostinger
   - Press F12 → Console tab
   - Look for JavaScript errors

2. **Verify File Paths**:
   - Check if all images load correctly
   - Verify CSS files are accessible

3. **Test Cart Functionality**:
   - Click cart icon
   - Check if sidebar opens
   - Look for console errors

## Common Hostinger Issues

### 1. File Permissions
- Ensure all files have correct permissions (644 for files, 755 for directories)

### 2. .htaccess Issues
Add this to your .htaccess file:
```apache
# Handle Next.js routing
RewriteEngine On
RewriteRule ^(.*)$ /index.html [L]
```

### 3. MIME Types
Ensure JavaScript files are served correctly:
```apache
AddType application/javascript .js
AddType text/css .css
```

## Quick Fix Checklist

- [ ] Remove `output: 'export'` from next.config.js
- [ ] Use Node.js hosting instead of static
- [ ] Upload all files including node_modules
- [ ] Check browser console for errors
- [ ] Verify file paths are correct
- [ ] Test cart functionality

## Recommended Approach

**Use Node.js hosting on Hostinger** instead of static hosting for full Next.js functionality including:
- Client-side state management
- Dynamic cart functionality
- Proper routing
- Server-side features

## Support

If issues persist:
1. Contact Hostinger support
2. Check their documentation for Next.js deployment
3. Consider using Vercel or Netlify for easier Next.js deployment
