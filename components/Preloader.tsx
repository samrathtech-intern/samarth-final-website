'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/data';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;
    
    // Show preloader on initial load or route change to home
    setLoading(true);
    
    // Add a small delay for the animation to play out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (pathname !== '/') return null;
  if (!loading) return null;

  return (
    <div className={`preloader ${loading ? 'preloader-active' : 'preloader-hidden'}`}>
      <div className="preloader-content">
        <Image 
          src={site.logo} 
          alt={`${site.name} Logo`} 
          width={180} 
          height={130} 
          className="preloader-logo"
          priority
        />
        <div className="preloader-line">
          <div className="preloader-line-inner"></div>
        </div>
      </div>
    </div>
  );
}
