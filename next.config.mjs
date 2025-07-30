/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false, // use Next.js image optimizer
    domains: ['localhost', 'yourdomain.com'],
  },
}

export default nextConfig
