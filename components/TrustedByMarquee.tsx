import React from 'react';
import { getBrands } from '@/lib/admin-store';

// Resolve a brand entry to a usable <img> src.
// Entries saved before the fix are plain filenames like "clean.png".
// Entries saved after the fix are full URLs: data:..., /Brands/..., etc.
function brandSrc(brand: string): string {
  if (brand.startsWith('data:') || brand.startsWith('/') || brand.startsWith('http')) {
    return brand;
  }
  return `/Brands/${brand}`;
}

function brandAlt(brand: string): string {
  if (brand.startsWith('data:')) return 'brand logo';
  return brand.split('.')[0];
}

export function TrustedByMarquee({ brands: customBrands }: { brands?: string[] } = {}) {
  const brands = customBrands && customBrands.length > 0 ? customBrands : getBrands();

  return (
    <section className="trusted-marquee-section">
      <div className="container">
        <h3 className="marquee-title">TRUSTED by Industries</h3>
      </div>
      <div className="marquee-container">
        <div className="marquee-content">
          {brands.map((brand, i) => (
            <div key={i} className="marquee-item">
              <img src={brandSrc(brand)} alt={brandAlt(brand)} loading="lazy" />
            </div>
          ))}
          {/* Duplicate for infinite scroll */}
          {brands.map((brand, i) => (
            <div key={`dup-${i}`} className="marquee-item" aria-hidden="true">
              <img src={brandSrc(brand)} alt={brandAlt(brand)} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

