import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: 'blur' | 'skeleton' | 'none';
  fallbackSrc?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  objectFit = 'cover',
  loading = 'lazy',
  priority = false,
  onLoad,
  onError,
  placeholder = 'skeleton',
  fallbackSrc,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the image comes into view
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, loading]);

  // Generate WebP source if the original is not already WebP
  const getWebPSource = (originalSrc: string) => {
    if (originalSrc.endsWith('.webp')) return originalSrc;
    // For now, return the original source since WebP versions aren't pre-generated
    // The build process optimizes the original images instead
    return originalSrc;
  };

  // Generate different sizes for responsive images
  const getSrcSet = (originalSrc: string) => {
    const baseSrc = originalSrc.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const extension = originalSrc.match(/\.(jpg|jpeg|png|webp)$/i)?.[0] || '.png';
    
    // For now, return the original src. In a real implementation, you'd have multiple sizes
    return `${originalSrc} 1x`;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const imageStyle = {
    objectFit,
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '100%',
  };

  const renderPlaceholder = () => {
    if (placeholder === 'none') return null;
    
    if (placeholder === 'skeleton') {
      return (
        <div 
          className={cn(
            "absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded",
            className
          )}
          style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : '100%',
          }}
        />
      );
    }

    if (placeholder === 'blur') {
      return (
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded",
            className
          )}
          style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : '100%',
          }}
        />
      );
    }
  };

  const currentSrc = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <div 
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
      }}
    >
      {/* Placeholder */}
      {!isLoaded && renderPlaceholder()}
      
      {/* Actual image */}
      {isInView && (
        <img
          ref={imgRef}
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          style={imageStyle}
          width={width}
          height={height}
          decoding="async"
        />
      )}

      {/* Error state */}
      {hasError && !fallbackSrc && (
        <div 
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 rounded",
            className
          )}
          style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : '100%',
          }}
        >
          <div className="text-center">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">Image not found</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OptimizedImage;