/** @type {import('next').NextConfig} */
const nextConfig = {
    // For GitHub Pages deployment
    basePath: '/portfolio',
    trailingSlash: true,
    output: 'export',
    images: {
      unoptimized: true
    }
  };
  
  module.exports = nextConfig;
  