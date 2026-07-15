/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/framework.html',
        destination: '/framework',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
