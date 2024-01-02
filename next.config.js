/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'tuit.uz',
            port: '',
            pathname: '/image/upload/**'
        }
    ]
  },
};

module.exports = nextConfig;
