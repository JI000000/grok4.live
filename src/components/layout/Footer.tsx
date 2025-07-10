import React from 'react';
import Link from 'next/link';
import { BoltIcon } from '@heroicons/react/24/outline';
import type { SocialLink } from '@/types';

const footerLinks = {
  about: [
    { href: '/about', label: 'About Us' },
    { href: '/mission', label: 'Our Mission' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ],
  content: [
    { href: '/events', label: 'Deep Dives' },
    { href: '/videos', label: 'Video Library' },
    { href: '/timeline', label: 'Timeline' },
    { href: '/analysis', label: 'Analysis' },
  ],
  connect: [
    { href: '/newsletter', label: 'Newsletter' },
    { href: '/rss', label: 'RSS Feed' },
    { href: '/api', label: 'API Access' },
    { href: '/community', label: 'Community' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/cookies', label: 'Cookie Policy' },
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
};

const socialLinks: SocialLink[] = [
  { platform: 'Twitter', url: 'https://twitter.com/grok4live', icon: '𝕏' },
  { platform: 'GitHub', url: 'https://github.com/grok4live', icon: '⚡' },
  { platform: 'Discord', url: 'https://discord.gg/grok4live', icon: '💬' },
  { platform: 'RSS', url: '/rss.xml', icon: '📡' },
];

export function Footer() {
  return (
    <footer className="bg-gray-950/95 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">ABOUT</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">CONTENT</h3>
            <ul className="space-y-3">
              {footerLinks.content.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">CONNECT</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">LEGAL</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Brand & Copyright */}
            <div className="flex items-center gap-3">
              <BoltIcon className="w-5 h-5 text-brand-500" />
              <span className="text-gray-400">
                © 2025 Grok4.Live • Built for truth seekers
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.platform}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-brand-400 transition-colors duration-200 flex items-center gap-2"
                  title={social.platform}
                >
                  <span className="text-lg">{social.icon}</span>
                  <span className="text-sm">{social.platform}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800/30">
            <p className="text-xs text-gray-500 text-center max-w-4xl mx-auto leading-relaxed">
              Grok4.Live is an independent tracker and analysis platform. We are not affiliated with xAI, Elon Musk, 
              or any official Grok AI development. All content is for informational purposes only. Opinions expressed 
              are those of the authors and do not necessarily reflect the views of xAI or related entities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 