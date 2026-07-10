'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { SafeImage } from '@/components/SafeImage';

export type MediaItem = {
  src: string;
  title: string;
  tag: string;
  group: 'gallery' | 'certificate';
};

type MediaLightboxProps = {
  items: MediaItem[];
};

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Work Photos', value: 'gallery' },
  { label: 'Certificates', value: 'certificate' }
] as const;

type FilterValue = (typeof filters)[number]['value'];

const fallbackImage = '/brand/samarth-emblem.png';

export function MediaLightbox({ items }: MediaLightboxProps) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [viewerMode, setViewerMode] = useState<'fit' | 'scroll'>('fit');

  const visibleItems = useMemo(() => {
    if (activeFilter === 'all') return items;
    return items.filter((item) => item.group === activeFilter);
  }, [activeFilter, items]);

  const activeItem = activeIndex === null ? null : visibleItems[activeIndex] ?? null;

  const closeViewer = () => {
    setViewerMode('fit');
    setActiveIndex(null);
  };

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null || visibleItems.length < 1) return current;
      return current === 0 ? visibleItems.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null || visibleItems.length < 1) return current;
      return current === visibleItems.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setViewerMode('fit');
    setActiveIndex(null);
  }, [activeFilter]);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const openedItem = visibleItems[activeIndex];
    setViewerMode(openedItem?.group === 'certificate' ? 'scroll' : 'fit');
    document.body.classList.add('lightbox-open');
    return () => document.body.classList.remove('lightbox-open');
  }, [activeIndex, visibleItems]);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeViewer();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, visibleItems.length]);

  const viewer = activeItem ? (
    <div className="lightbox-shell" role="dialog" aria-modal="true" aria-label={`${activeItem.title} preview`}>
      <button className="lightbox-backdrop" type="button" aria-label="Close preview" onClick={closeViewer} />

      <div className={`lightbox-panel ${viewerMode === 'scroll' ? 'is-scrollable-view' : 'is-fit-view'}`.trim()}>
        <div className="lightbox-topbar">
          <div>
            <span>{activeItem.tag}</span>
            <h3>{activeItem.title}</h3>
          </div>
          <div className="lightbox-top-actions">
            <button
              type="button"
              className="lightbox-fit-toggle"
              onClick={() => setViewerMode((current) => current === 'fit' ? 'scroll' : 'fit')}
              aria-pressed={viewerMode === 'scroll'}
            >
              {viewerMode === 'scroll' ? 'Fit to screen' : 'Scrollable view'}
            </button>
            <button type="button" className="lightbox-close" onClick={closeViewer} aria-label="Close preview">
              ×
            </button>
          </div>
        </div>

        <div className="lightbox-image-wrap">
          <img
            key={activeItem.src}
            src={activeItem.src}
            alt={`${activeItem.title} enlarged view`}
            onError={(event) => {
              event.currentTarget.src = fallbackImage;
            }}
          />
        </div>

        <div className="lightbox-controls">
          <button type="button" onClick={showPrevious} aria-label="Show previous image">
            ← Previous
          </button>
          <span>{(activeIndex ?? 0) + 1} / {visibleItems.length}</span>
          <button type="button" onClick={showNext} aria-label="Show next image">
            Next →
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="media-library" id="gallery-showcase">
      <div className="media-library-toolbar">
        <div>
          <span className="panel-kicker">Gallery</span>
          <h2>Project photos and professional certificates.</h2>
          <p>Training sessions, plant reviews and selected professional certificates arranged in one clean showcase.</p>
        </div>
        <div className="media-filter-strip" aria-label="Gallery filters">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter.value}
              className={activeFilter === filter.value ? 'is-active' : undefined}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="media-masonry-grid">
        {visibleItems.map((item, index) => (
          <button
            type="button"
            className={`media-tile ${item.group === 'certificate' ? 'media-tile-certificate' : 'media-tile-gallery'}`}
            key={`${item.group}-${item.src}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${item.title}`}
          >
            <SafeImage
              src={item.src}
              alt={item.group === 'certificate' ? `${item.title} certificate` : `${item.title} photo`}
              loading="lazy"
              fallbackSrc={fallbackImage}
            />
            <span className="media-tile-overlay">
              <small>{item.tag}</small>
              <strong>{item.title}</strong>
            </span>
          </button>
        ))}
      </div>

      {isMounted && activeItem ? createPortal(viewer, document.body) : null}
    </div>
  );
}
