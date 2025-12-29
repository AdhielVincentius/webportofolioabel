/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Add trailing slash for better compatibility
  trailingSlash: true,
}

module.exports = nextConfig