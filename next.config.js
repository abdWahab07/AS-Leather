/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for proper client-side functionality
  // output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true
  },
  // Disable strict mode for production build
  reactStrictMode: false,
  // Ensure proper asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  // Handle base path if needed
  basePath: '',
  // Add proper routing configuration
  skipTrailingSlashRedirect: true,
  // Remove deprecated experimental appDir
  // experimental: {
  //   appDir: true
  // }
}

module.exports = nextConfig
