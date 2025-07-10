/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Experimental features
  experimental: {
    // Enable modern bundling
    esmExternals: true,
  },

  // Image optimization
  images: {
    // Define allowed image domains
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'picsum.photos',
      'res.cloudinary.com',
      'grok4.live',
      'pagead2.googlesyndication.com',
      'googletagmanager.com',
    ],
    // Enable image formats
    formats: ['image/webp', 'image/avif'],
    // Image sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable optimization
    unoptimized: false,
  },

  // Compression
  compress: true,
  
  // Generate standalone output for deployment
  output: 'standalone',

  // Custom headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          // Content Security Policy - updated for GA/AdSense
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel.com *.googletagmanager.com *.googlesyndication.com *.google-analytics.com *.doubleclick.net",
              "style-src 'self' 'unsafe-inline' fonts.googleapis.com",
              "img-src 'self' data: blob: *.unsplash.com *.cloudinary.com *.vercel.com *.googlesyndication.com *.google-analytics.com *.doubleclick.net",
              "font-src 'self' fonts.gstatic.com",
              "connect-src 'self' *.vercel.com *.analytics.google.com *.google-analytics.com *.googlesyndication.com",
              "media-src 'self' blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests"
            ].join('; '),
          }
        ],
      },
      // Cache static assets
      {
        source: '/(_next/static|favicon\\.ico|robots\\.txt|sitemap\\.xml|ads\\.txt)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache images - fixed regex pattern
      {
        source: '/:path*\\.(png|jpe?g|webp|avif|gif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=31536000',
          },
        ],
      },
      // Cache API routes
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=3600',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Redirect old routes if any
      {
        source: '/blog/:path*',
        destination: '/events/:path*',
        permanent: true,
      },
      {
        source: '/articles/:path*',
        destination: '/events/:path*',
        permanent: true,
      },
    ];
  },

  // Rewrites for clean URLs
  async rewrites() {
    return [
      // API rewrites if needed
      {
        source: '/health',
        destination: '/api/health',
      },
    ];
  },

  // Webpack optimizations
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      // Tree shaking optimization
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Split chunks for better caching
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 1,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
          common: {
            minChunks: 2,
            priority: -5,
            reuseExistingChunk: true,
          },
        },
      };
    }

    // Bundle analyzer (only in development)
    if (process.env.ANALYZE === 'true' && !dev && !isServer) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: './analyze/client.html',
          openAnalyzer: false,
        })
      );
    }

    return config;
  },

  // Environment variables
  env: {
    SITE_URL: process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000',
  },

  // TypeScript config
  typescript: {
    // Type checking during build
    tsconfigPath: './tsconfig.json',
  },

  // ESLint config
  eslint: {
    // Run ESLint during build
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },

  // Internationalization (if needed in the future)
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

  // PoweredByHeader
  poweredByHeader: false,

  // Generate buildId for caching
  generateBuildId: async () => {
    return process.env.VERCEL_GIT_COMMIT_SHA || 'development';
  },
};

export default nextConfig; 