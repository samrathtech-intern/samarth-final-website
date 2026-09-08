import React from 'react';
import { getBrands } from '@/lib/admin-store';

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
              <img src={`/Brands/${brand}`} alt={brand.split('.')[0]} loading="lazy" />
            </div>
          ))}
          {/* Duplicate for infinite scroll */}
          {brands.map((brand, i) => (
            <div key={`dup-${i}`} className="marquee-item" aria-hidden="true">
              <img src={`/Brands/${brand}`} alt={brand.split('.')[0]} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

