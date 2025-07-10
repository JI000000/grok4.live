// Performance monitoring and optimization utilities

// Type definitions for Web APIs
interface PerformanceMemory {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  sources: any[];
}

interface FirstInputDelay extends PerformanceEntry {
  processingStart: number;
}

// Debounce function for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate?: boolean
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(this: ThisParameterType<T>, ...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };
    
    const callNow = immediate && !timeout;
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(this, args);
  };
}

// Throttle function for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Lazy loading observer for images and components
export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
  };

  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
}

// Preload critical resources
export function preloadResource(href: string, as: string, type?: string): void {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  }
}

// Preload images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

// Web Vitals monitoring
export interface WebVitalsMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
}

export function reportWebVitals(metric: WebVitalsMetric): void {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, metric.value, metric);
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    // Example: Send to Google Analytics
    if ('gtag' in window) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }

    // Example: Send to custom analytics
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metric),
    }).catch(error => {
      console.error('Failed to send web vitals:', error);
    });
  }
}

// Dynamic import wrapper with error handling
export async function dynamicImport<T>(
  importFn: () => Promise<T>,
  fallback?: () => T
): Promise<T> {
  try {
    return await importFn();
  } catch (error) {
    console.error('Dynamic import failed:', error);
    if (fallback) {
      return fallback();
    }
    throw error;
  }
}

// Memory usage monitoring
export function getMemoryUsage(): PerformanceMemory | null {
  if (typeof window !== 'undefined' && 'memory' in performance) {
    return (performance as any).memory as PerformanceMemory;
  }
  return null;
}

// Performance timing utilities
export function measurePerformance<T>(
  name: string,
  fn: () => T
): T {
  if (typeof window === 'undefined') {
    return fn();
  }

  const start = performance.now();
  const result = fn();
  const end = performance.now();
  
  console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`);
  return result;
}

export async function measureAsyncPerformance<T>(
  name: string,
  fn: () => Promise<T>
): Promise<T> {
  if (typeof window === 'undefined') {
    return fn();
  }

  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  
  console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`);
  return result;
}

// Resource hints
export function addResourceHints(): void {
  if (typeof window === 'undefined') return;

  const head = document.head;

  // DNS prefetch for external domains
  const dnsPrefetchDomains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'images.unsplash.com',
    'analytics.google.com',
  ];

  dnsPrefetchDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    head.appendChild(link);
  });

  // Preconnect to critical domains
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    if (domain.includes('gstatic')) {
      link.crossOrigin = 'anonymous';
    }
    head.appendChild(link);
  });
}

// Critical CSS inlining helper
export function inlineCriticalCSS(css: string): void {
  if (typeof window === 'undefined') return;

  const style = document.createElement('style');
  style.textContent = css;
  style.setAttribute('data-critical', 'true');
  document.head.appendChild(style);
}

// Service Worker registration
export async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js');
    console.log('Service Worker registered successfully');
    return registration;
  } catch (error) {
    console.error('Service Worker registration failed:', error);
    return null;
  }
}

// Bundle size analysis helper
export function analyzeBundleSize(): void {
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') {
    return;
  }

  // Get all script tags
  const scripts = Array.from(document.querySelectorAll('script[src]'));
  let totalSize = 0;

  scripts.forEach(async (script) => {
    const src = (script as HTMLScriptElement).src;
    if (src.includes('_next/static')) {
      try {
        const response = await fetch(src);
        const size = parseInt(response.headers.get('content-length') || '0');
        totalSize += size;
        console.log(`[Bundle] ${src.split('/').pop()}: ${(size / 1024).toFixed(2)}KB`);
      } catch (error) {
        console.error('Failed to analyze bundle:', error);
      }
    }
  });

  setTimeout(() => {
    console.log(`[Bundle] Total size: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);
  }, 1000);
}

// Cumulative Layout Shift (CLS) monitoring
export function monitorCLS(): void {
  if (typeof window === 'undefined') return;

  let clsValue = 0;
  const clsEntries: LayoutShift[] = [];

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries() as LayoutShift[]) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        clsEntries.push(entry);
      }
    }
  });

  observer.observe({ type: 'layout-shift', buffered: true });

  // Report CLS on visibility change
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      console.log(`[CLS] Final value: ${clsValue.toFixed(4)}`);
    }
  });
}

// First Input Delay (FID) monitoring
export function monitorFID(): void {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries() as FirstInputDelay[]) {
      console.log(`[FID] Value: ${entry.processingStart - entry.startTime}ms`);
    }
  });

  observer.observe({ type: 'first-input', buffered: true });
}

// Largest Contentful Paint (LCP) monitoring
export function monitorLCP(): void {
  if (typeof window === 'undefined') return;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(`[LCP] Value: ${lastEntry.startTime}ms`);
  });

  observer.observe({ type: 'largest-contentful-paint', buffered: true });
} 