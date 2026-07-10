'use client';

import type { ComponentPropsWithoutRef, CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';

type AnimatedSectionProps = ComponentPropsWithoutRef<'section'> & {
  revealDelay?: number;
};

export function AnimatedSection({ className = '', revealDelay = 0, style, children, ...props }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`reveal-section ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...(style || {}), '--reveal-delay': `${revealDelay}ms` } as CSSProperties}
      {...props}
    >
      {children}
    </section>
  );
}
