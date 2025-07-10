import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// Generate a blur data URL for placeholder
const generateBlurDataURL = (width: number = 8, height: number = 6) => {
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1f2937"/>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)"/>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#374151;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#111827;stop-opacity:0.8" />
        </linearGradient>
      </defs>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 85,
  placeholder = 'blur',
  blurDataURL,
  sizes,
  fill = false,
  objectFit = 'cover',
  objectPosition = 'center',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  };

  // Default blur data URL if not provided
  const defaultBlurDataURL = blurDataURL || generateBlurDataURL(width, height);

  // Default sizes for responsive images
  const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  if (hasError) {
    return (
      <div 
        className={cn(
          'bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center',
          'text-gray-400 text-sm',
          className
        )}
        style={{ 
          width: fill ? '100%' : width, 
          height: fill ? '100%' : height,
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      >
        <div className="text-center p-4">
          <div className="text-2xl mb-2">📷</div>
          <div>Image failed to load</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={placeholder === 'blur' ? defaultBlurDataURL : undefined}
        sizes={defaultSizes}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100'
        )}
        style={{
          objectFit: fill ? objectFit : undefined,
          objectPosition: fill ? objectPosition : undefined,
        }}
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

// Specialized image components
export function HeroImage(props: Omit<OptimizedImageProps, 'priority' | 'sizes'>) {
  return (
    <OptimizedImage
      {...props}
      priority={true}
      sizes="100vw"
      quality={90}
    />
  );
}

export function CardImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
      quality={80}
    />
  );
}

export function ThumbnailImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      sizes="(max-width: 768px) 50vw, 200px"
      quality={75}
    />
  );
}

export function AvatarImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      sizes="80px"
      quality={70}
      className={cn('rounded-full', props.className)}
    />
  );
} 