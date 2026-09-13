/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/yoshita-portfolio',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
