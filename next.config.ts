import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ['192.168.68.*'],
  images: {
    unoptimized: true,
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      new URL('http://localhost:1337/**'),
      new URL('https://cms.surdo-logoped.ru/**'),
    ],
  },
};

export default nextConfig;
