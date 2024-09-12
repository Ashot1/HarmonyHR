/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
         { port: '', hostname: 'i.imgur.com', protocol: 'https' },
      ],
   },
}

export default nextConfig
