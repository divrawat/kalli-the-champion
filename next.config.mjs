/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/robots',
        destination: '/api/robots'
      }
    ];
  }
}

export default nextConfig;