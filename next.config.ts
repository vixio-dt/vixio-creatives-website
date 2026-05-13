import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=0, s-maxage=60, stale-while-revalidate=300',
        },
      ],
    },
  ],
}

export default nextConfig
