'use client';

import type { CSSProperties } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type AnimatedSectionProps = HTMLMotionProps<"section"> & {
  revealDelay?: number;
};

export function AnimatedSection({ className = '', revealDelay = 0, style, children, ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className.trim()}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: revealDelay / 1000
      }}
      style={{ ...(style || {}) } as CSSProperties}
      {...props}
    >
      {children}
    </motion.section>
  );
}
