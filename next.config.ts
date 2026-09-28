import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
    ],
  },
  // OpenNext (Cloudflare) requires the standalone output so that
  // `.next/standalone` is produced and the cache assets step can read
  // `.next/standalone/.next/server/pages-manifest.json`.
  output: 'standalone' as const,
  outputFileTracingRoot: process.cwd(),
};

export default withNextIntl(nextConfig);
