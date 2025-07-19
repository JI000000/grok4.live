// 性能监控工具

// 是否为开发环境
const isDevelopment = process.env.NODE_ENV === 'development';

// Web Vitals 监控
export function reportWebVitals() {
  if (typeof window === 'undefined') return;

  // 简化的性能监控，不依赖web-vitals
  if (isDevelopment) {
    console.log('[Performance] Web Vitals monitoring initialized');
  }
}

// 动态导入性能监控
export function trackDynamicImport(moduleName: string) {
  const start = performance.now();
  
  return {
    onLoad: () => {
      const end = performance.now();
      if (isDevelopment) {
        console.log(`[Performance] ${moduleName}: ${(end - start).toFixed(2)}ms`);
      }
    },
    onError: (error: Error) => {
      if (isDevelopment) {
        console.error('Dynamic import failed:', error);
      }
    }
  };
}

// 组件渲染性能监控
export function trackComponentRender(componentName: string) {
  const start = performance.now();
  
  return {
    onRender: () => {
      const end = performance.now();
      if (isDevelopment) {
        console.log(`[Performance] ${componentName}: ${(end - start).toFixed(2)}ms`);
      }
    }
  };
}

// 图片加载性能监控
export function trackImageLoad(src: string) {
  const start = performance.now();
  
  return {
    onLoad: () => {
      const end = performance.now();
      if (isDevelopment) {
        console.log(`[Image] ${src.split('/').pop()}: ${(end - start).toFixed(2)}ms`);
      }
    },
    onError: (error: Error) => {
      if (isDevelopment) {
        console.error(`[Image] Failed to load ${src}:`, error);
      }
    }
  };
}

// Service Worker 注册
export function registerServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((_registration) => {
        if (isDevelopment) {
          console.log('Service Worker registered successfully');
        }
      })
      .catch((error) => {
        if (isDevelopment) {
          console.error('Service Worker registration failed:', error);
        }
      });
  });
}

// Bundle 大小分析
export function analyzeBundle() {
  if (typeof window === 'undefined' || !isDevelopment) return;

  // 分析当前页面的资源大小
  const resources = performance.getEntriesByType('resource');
  let totalSize = 0;

  resources.forEach((resource) => {
    const size = (resource as any).transferSize || 0;
    totalSize += size;
    
    if (resource.name.includes('.js') || resource.name.includes('.css')) {
      console.log(`[Bundle] ${resource.name.split('/').pop()}: ${(size / 1024).toFixed(2)}KB`);
    }
  });

  console.log(`[Bundle] Total size: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);
}

// 内存使用监控
export function trackMemoryUsage() {
  if (typeof window === 'undefined' || !('memory' in performance)) return;

  const memory = (performance as any).memory;
  
  if (isDevelopment) {
    console.log(`[Memory] Used: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`[Memory] Total: ${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`[Memory] Limit: ${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)}MB`);
  }
}

// 网络状态监控
export function trackNetworkStatus() {
  if (typeof window === 'undefined' || !('connection' in navigator)) return;

  const connection = (navigator as any).connection;
  
  if (isDevelopment) {
    console.log(`[Network] Type: ${connection.effectiveType}`);
    console.log(`[Network] Downlink: ${connection.downlink}Mbps`);
    console.log(`[Network] RTT: ${connection.rtt}ms`);
  }
}

// 错误监控
export function setupErrorMonitoring() {
  if (typeof window === 'undefined') return;

  window.addEventListener('error', (event) => {
    if (isDevelopment) {
      console.error('[Error]', event.error);
    }
    
    // 发送到错误监控服务
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: event.error?.message || 'Unknown error',
        fatal: false,
      });
    }
  });

  window.addEventListener('unhandledrejection', (event) => {
    if (isDevelopment) {
      console.error('[Unhandled Rejection]', event.reason);
    }
    
    // 发送到错误监控服务
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: 'Unhandled promise rejection',
        fatal: false,
      });
    }
  });
}

// 初始化所有性能监控
export function initPerformanceMonitoring() {
  reportWebVitals();
  registerServiceWorker();
  setupErrorMonitoring();
  
  if (isDevelopment) {
    analyzeBundle();
    trackMemoryUsage();
    trackNetworkStatus();
  }
} 