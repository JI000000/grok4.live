'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  Bars3Icon, 
  XMarkIcon, 
  BoltIcon 
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Deep Dives', href: '/events' },
  { name: 'Videos', href: '/videos' },
  { name: 'About', href: '/about' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isCurrentPage = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'safe-area-top',
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
          : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 group flex-shrink-0"
              aria-label="Grok4.Live Homepage"
            >
              <div className="relative">
                <BoltIcon className="w-6 h-6 lg:w-8 lg:h-8 text-brand-500 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-brand-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
              </div>
              <span className="text-lg lg:text-xl font-bold text-gradient">
                Grok4.Live
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    'hover:bg-gray-800/50 hover:text-white',
                    'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-black',
                    isCurrentPage(item.href)
                      ? 'text-brand-400 bg-brand-500/10'
                      : 'text-gray-300'
                  )}
                  aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                >
                  {item.name}
                  {isCurrentPage(item.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-brand-500 rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Live Indicator & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-medium text-red-400">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span>LIVE</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div className={cn(
        'mobile-menu-container lg:hidden fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw]',
        'bg-gray-950 border-l border-gray-800 transform transition-transform duration-300 ease-out',
        'safe-area-inset safe-area-top safe-area-bottom',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        <div className="flex flex-col h-full">
          
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <Link 
              href="/" 
              className="flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <BoltIcon className="w-6 h-6 text-brand-500" />
              <span className="text-lg font-bold text-gradient">Grok4.Live</span>
            </Link>
            <button
              type="button"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile navigation */}
          <nav className="flex-1 px-4 py-6" role="navigation" aria-label="Mobile navigation">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                    'focus:outline-none focus:ring-2 focus:ring-brand-500',
                    isCurrentPage(item.href)
                      ? 'text-brand-400 bg-brand-500/10 border border-brand-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  )}
                  onClick={() => setIsOpen(false)}
                  aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile menu footer */}
          <div className="px-4 py-6 border-t border-gray-800 space-y-4">
            
            {/* Live indicator */}
            <div className="flex items-center justify-center space-x-2 px-3 py-2 bg-red-500/10 border border-red-500/30 rounded-lg text-sm font-medium text-red-400">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span>LIVE TRACKING</span>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center space-x-4 pt-2">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="Twitter"
              >
                <span className="text-lg">𝕏</span>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="Discord"
              >
                <span className="text-lg">💬</span>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="GitHub"
              >
                <span className="text-lg">📱</span>
              </a>
            </div>

            {/* App version */}
            <div className="text-center text-xs text-gray-500">
              Grok4.Live v1.0
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 