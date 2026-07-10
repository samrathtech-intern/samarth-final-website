'use client';

import { ImgHTMLAttributes, useEffect, useState } from 'react';

type SafeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export function SafeImage({ src, fallbackSrc = '/illustrations/hero-compliance-consulting.svg', alt, ...props }: SafeImageProps) {
  const [imageSrc, setImageSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setImageSrc(src || fallbackSrc);
  }, [src, fallbackSrc]);

  return (
    <img
      {...props}
      src={typeof imageSrc === 'string' ? imageSrc : fallbackSrc}
      alt={alt || ''}
      onError={() => setImageSrc(fallbackSrc)}
    />
  );
}
