'use client';

import { useEffect, useState } from 'react';

const taglines = [
  'Complete Food Industry Consultancy – From Idea to Successful Production.',
  'Engineering Excellence for the Future of Food Processing Industry.',
  'From Vision to Value in Food Processing.'
];

export function RotatingTagline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % taglines.length);
        setVisible(true);
      }, 400);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="rotating-tagline"
      aria-live="polite"
      aria-atomic="true"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {taglines[index]}
    </span>
  );
}
