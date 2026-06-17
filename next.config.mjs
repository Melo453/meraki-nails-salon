/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
     allowedDevOrigins: ["192.168.1.6"],
     allowedDevOrigins: ['10.243.4.58'],
}

export default nextConfig
