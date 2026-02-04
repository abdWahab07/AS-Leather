# AS-Leather Store Deployment Guide

## Deploying to Hostinger

### Prerequisites
- Hostinger account with hosting plan
- Your project files ready
- Node.js and npm installed locally

### Step 1: Build Your Next.js Application

1. **Install dependencies:**
```bash
npm install
```

2. **Build the production version:**
```bash
npm run build
```

3. **Export static files (if using static hosting):**
```bash
npm run export
```

### Step 2: Prepare for Hostinger Deployment

#### Option A: Static Site Deployment (Recommended for most cases)

1. **Update package.json** - Add export script:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build && next export"
  }
}
```

2. **Update next.config.js** (create if doesn't exist):
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

3. **Build and export:**
```bash
npm run export
```

4. **Upload to Hostinger:**
   - The `out` folder contains your static files
   - Upload all contents of the `out` folder to your Hostinger public_html directory

#### Option B: Node.js Application Deployment

1. **Ensure your package.json has:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

2. **Build the application:**
```bash
npm run build
```

3. **Upload to Hostinger:**
   - Upload all project files (except node_modules)
   - Set up Node.js environment in Hostinger
   - Run `npm install --production` on the server
   - Start the application with `npm start`

### Step 3: Hostinger Setup

#### For Static Hosting:
1. Log in to Hostinger control panel
2. Go to File Manager
3. Navigate to public_html
4. Upload all files from the `out` folder
5. Ensure your index.html is in the root

#### For Node.js Hosting:
1. Log in to Hostinger control panel
2. Go to Node.js Manager
3. Create a new Node.js application
4. Set up the application:
   - Root directory: Your project folder
   - Startup file: server.js or index.js
   - Node.js version: 18.x or higher
5. Upload your project files
6. Install dependencies via SSH or File Manager
7. Start the application

### Step 4: Environment Variables

Create a `.env.production` file for production:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Step 5: Domain Configuration

1. In Hostinger, go to Domains
2. Point your domain to the hosting
3. Wait for DNS propagation (usually 24-48 hours)

### Step 6: SSL Certificate

1. Enable free SSL in Hostinger
2. Configure HTTPS redirect
3. Update any hardcoded HTTP links to HTTPS

### Troubleshooting

#### Common Issues:
1. **404 Errors**: Check file paths and routing
2. **Images not loading**: Ensure image paths are correct
3. **CSS not loading**: Check CSS file paths
4. **API errors**: Verify environment variables

#### Debug Steps:
1. Check browser console for errors
2. Verify file permissions on Hostinger
3. Check Hostinger error logs
4. Test with a simple HTML file first

### Performance Optimization

1. **Enable Gzip compression** in Hostinger
2. **Set up caching headers**
3. **Optimize images** before upload
4. **Minify CSS and JS** (Next.js does this automatically)

### Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test contact forms
- [ ] Check social media links
- [ ] Verify Google Analytics (if implemented)
- [ ] Test checkout process (if applicable)

### Maintenance

1. **Regular backups** via Hostinger
2. **Update dependencies** periodically
3. **Monitor site performance**
4. **Check for security updates**

### Support

If you encounter issues:
1. Check Hostinger documentation
2. Contact Hostinger support
3. Review Next.js deployment guides
4. Check community forums

---

## Quick Deployment Commands

```bash
# For static deployment
npm install
npm run export
# Upload contents of 'out' folder to Hostinger

# For Node.js deployment
npm install
npm run build
# Upload all files and run 'npm start' on server
```

### Important Notes

- Always test locally before deploying
- Keep a backup of your working version
- Use version control (Git) for better deployment management
- Consider using a staging environment first
