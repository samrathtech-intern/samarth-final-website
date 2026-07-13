'use client';

import { useEffect, useState, CSSProperties } from 'react';
import Image from 'next/image';

type SafeImageProps = {
  src?: string;
  fallbackSrc?: string;
  alt?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  style?: CSSProperties;
};

export function SafeImage({ src, fallbackSrc = '/illustrations/hero-compliance-consulting.svg', alt = '', className, loading = 'lazy', style }: SafeImageProps) {
  const [imageSrc, setImageSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setImageSrc(src || fallbackSrc);
  }, [src, fallbackSrc]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      style={style}
      onError={() => setImageSrc(fallbackSrc)}
    />
  );
}
