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
   domains: ['localhost', 'backend.dentalsnoreclinic.com'],
  },
}

export default nextConfig
