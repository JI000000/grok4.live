import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

// Structured data for organization
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Grok4.Live",
  "description": "The definitive source for Grok AI model evolution tracking and analysis",
  "url": "https://grok4.live",
  "logo": "https://grok4.live/logo.png",
  "sameAs": [
    "https://twitter.com/grok4live",
    "https://discord.gg/grok4live"
  ],
  "foundingDate": "2024-07-10",
  "founders": [
    {
      "@type": "Person",
      "name": "Grok4.Live Editorial Team"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "editorial@grok4.live",
    "contactType": "Editorial"
  }
};

// Structured data for website
const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Grok4.Live",
  "description": "Comprehensive coverage of xAI's Grok AI model developments, controversies, and capabilities",
  "url": "https://grok4.live",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://grok4.live/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "about": {
    "@type": "Thing",
    "name": "Grok AI",
    "description": "xAI's advanced language model"
  }
};

export const metadata: Metadata = {
  title: {
    default: 'Grok4.Live - The Unfiltered Chronicle of AI Evolution',
    template: '%s | Grok4.Live',
  },
  description: 'The definitive source for tracking, analyzing, and reporting on xAI\'s Grok AI model evolution. Breaking news, in-depth analysis, and comprehensive coverage of AI\'s most unpredictable model.',
  keywords: [
    'Grok',
    'xAI',
    'Elon Musk',
    'AI model',
    'artificial intelligence',
    'machine learning',
    'AI news',
    'tech analysis',
    'MechaHitler incident',
    'Grok 4 release',
    'AI evolution',
    'AI safety',
    'language model',
  ],
  authors: [{ name: 'Grok4.Live Editorial Team' }],
  creator: 'Grok4.Live',
  publisher: 'Grok4.Live',
  metadataBase: new URL('https://grok4.live'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://grok4.live',
    siteName: 'Grok4.Live',
    title: 'Grok4.Live - The Unfiltered Chronicle of AI Evolution',
    description: 'The definitive source for tracking xAI\'s Grok AI model evolution. Breaking news, in-depth analysis, and comprehensive coverage.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grok4.Live - AI Evolution Tracking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Grok4Live',
    creator: '@Grok4Live',
    title: 'Grok4.Live - The Unfiltered Chronicle of AI Evolution',
    description: 'Breaking news and in-depth analysis of xAI\'s Grok AI model evolution.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google AdSense Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-9751155071098091" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        
        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="//vercel.com" />
        <link rel="dns-prefetch" href="//cloudflare.com" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2CKEZ4ZELX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2CKEZ4ZELX');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9751155071098091"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {children}
        
        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Grok4.Live',
              url: 'https://grok4.live',
              description: 'The definitive source for tracking xAI\'s Grok AI model evolution',
              publisher: {
                '@type': 'Organization',
                name: 'Grok4.Live',
                url: 'https://grok4.live',
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://grok4.live/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </body>
    </html>
  );
} 