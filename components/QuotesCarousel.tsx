"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

const QUOTES = [
  "Food safety is everyone's responsibility.",
  "Safe food today means a healthier tomorrow.",
  "Quality begins with cleanliness and ends with customer satisfaction.",
  "Clean hands save lives—wash before you handle food.",
  "Food safety isn't expensive; foodborne illness is.",
  "A clean kitchen is the first ingredient of every great meal.",
  "Good food management prevents waste, protects health, and builds trust.",
  "Every step in food handling matters—from farm to fork.",
  "The best recipe always includes hygiene.",
  "Manage food with care because every customer deserves safe meals.",
  "Safety and quality go hand in hand in every successful food business.",
  "Proper storage today prevents contamination tomorrow.",
  "Excellence in food management starts with discipline and consistency.",
  "Inspect, protect, and serve—food safety is a continuous commitment.",
  "Behind every safe meal is a team committed to food safety."
];

export function QuotesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Touch swiping states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const totalQuotes = QUOTES.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalQuotes);
  }, [totalQuotes]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalQuotes) % totalQuotes);
  }, [totalQuotes]);

  const handleNext = () => {
    nextSlide();
    setResetKey(prev => prev + 1);
  };

  const handlePrev = () => {
    prevSlide();
    setResetKey(prev => prev + 1);
  };

  const handleDotClick = (idx: number) => {
    setActiveIndex(idx);
    setResetKey(prev => prev + 1);
  };

  // Autoplay effect
  useEffect(() => {
    if (isPaused) {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
      return;
    }

    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPaused, nextSlide, resetKey]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    
    const minSwipeDistance = 50;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section 
      className="section quotes-section" 
      aria-label="Food Safety Quotes Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        <div className="quotes-carousel-wrapper">
          {/* Decorative background elements */}
          <div className="quotes-deco-glow" aria-hidden="true" />
          <div className="quotes-deco-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>

          <div 
            className="quotes-carousel-track-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="quotes-carousel-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {QUOTES.map((quote, idx) => (
                <div 
                  className={`quotes-slide ${idx === activeIndex ? 'active' : ''}`} 
                  key={idx}
                  aria-hidden={idx !== activeIndex}
                >
                  <span className="quote-mark-icon" aria-hidden="true">“</span>
                  <blockquote className="quote-text">{quote}</blockquote>
                  <cite className="quote-author">Food Safety &amp; Management Guideline</cite>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev} 
            className="quote-nav-btn prev-btn" 
            aria-label="Previous quote"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          
          <button 
            onClick={handleNext} 
            className="quote-nav-btn next-btn" 
            aria-label="Next quote"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="quotes-indicators" role="tablist">
            {QUOTES.map((_, idx) => (
              <button
                key={idx}
                className={`quote-dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(idx)}
                aria-label={`Go to quote ${idx + 1}`}
                aria-selected={idx === activeIndex}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
