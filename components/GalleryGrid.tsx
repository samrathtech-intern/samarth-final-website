'use client';

import { useState } from 'react';
import { SafeImage } from '@/components/SafeImage';

type GalleryItem = {
  src: string;
  title: string;
  tag: string;
  group?: string;
  category?: string;
};

import { galleryCategories } from '@/lib/data';

// GALLERY_CATEGORIES removed to use imported galleryCategories

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? items
    : items.filter((item) => item.category === activeCategory);

  return (
    <div className="gallery-shell">
      {/* Category filter tabs */}
      <div className="gallery-filter-bar" role="tablist" aria-label="Filter gallery by category">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`gallery-filter-tab${activeCategory === cat ? ' is-active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="gallery-masonry-grid">
        {filtered.map((item, idx) => (
          <article
            className="gallery-masonry-card"
            key={item.src}
            onClick={() => setLightboxIndex(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setLightboxIndex(idx); }}
            aria-label={`Open ${item.title}`}
          >
            <SafeImage
              src={item.src}
              alt={item.title}
              loading="lazy"
              fallbackSrc="/brand/samarth-emblem.png"
            />
            <div className="gallery-card-overlay">
              <span className="gallery-tag">{item.tag}</span>
              <strong>{item.title}</strong>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="gallery-empty">
          <p>No items in this category yet. Check back soon.</p>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="gallery-lightbox-overlay"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="gallery-lightbox-close"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >✕</button>
          <button
            className="gallery-lightbox-nav gallery-lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0); }}
            aria-label="Previous image"
          >‹</button>
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <SafeImage
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              fallbackSrc="/brand/samarth-emblem.png"
            />
            <p className="gallery-lightbox-caption">{filtered[lightboxIndex].title}</p>
          </div>
          <button
            className="gallery-lightbox-nav gallery-lightbox-next"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => prev !== null ? (prev + 1) % filtered.length : 0); }}
            aria-label="Next image"
          >›</button>
        </div>
      )}
    </div>
  );
}
