import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  title: 'Grok4.Live - Grok 4 vs ChatGPT: Complete AI Comparison & Analysis',
  description: 'BREAKING: Grok 4 wins 7/7 categories vs ChatGPT. 25.4% vs 21% accuracy, 40% cheaper API costs. Complete comparison, benchmarks, and developer guides.',
  keywords: [
    'Grok 4 vs ChatGPT', 'Grok 4 API pricing', 'Grok 4 benchmarks', 'Humanity\'s Last Exam',
    'Grok AI', 'xAI', 'Elon Musk', 'AI News', 'Artificial Intelligence', 'Machine Learning',
    'AI Safety', 'Grok 4', 'AI Analysis', 'Tech News', 'Heavy model', 'multi-agent AI',
    'AI breakthrough', 'Constitutional AI', 'AGI implications', 'Grok 4 performance',
    'ChatGPT comparison', 'AI model benchmarks', 'Grok 4 pricing', 'AI API costs'
  ],
  authors: [{ name: 'Grok4.Live Editorial Team' }],
  creator: 'Grok4.Live',
  publisher: 'Grok4.Live',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://grok4.live',
    siteName: 'Grok4.Live',
    title: 'Grok 4 vs ChatGPT: Complete AI Comparison & Analysis',
    description: 'BREAKING: Grok 4 wins 7/7 categories vs ChatGPT. 25.4% vs 21% accuracy, 40% cheaper API costs. Complete comparison and benchmarks.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@grok4live',
    creator: '@grok4live',
    title: 'Grok 4 vs ChatGPT: Complete AI Comparison & Analysis',
    description: 'BREAKING: Grok 4 wins 7/7 categories vs ChatGPT. 25.4% vs 21% accuracy, 40% cheaper API costs. Complete comparison and benchmarks.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://grok4.live',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Technology',
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
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://pagead2.googlesyndication.com https://platform.twitter.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; media-src 'self' https:; frame-src 'self' https://x.com https://www.youtube.com https://platform.twitter.com; connect-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self';" />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-2CKEZ4ZELX'}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-2CKEZ4ZELX'}');
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