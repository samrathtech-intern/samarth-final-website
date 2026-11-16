import React from 'react';
import { getBrands } from '@/lib/admin-store';

// Resolve a brand entry to { name, src }.
// Supports all storage formats:
//   "amul.png"                  → plain filename → /Brands/amul.png
//   "clean.png::data:image/..." → Vercel fallback (filename + base64)
//   "data:image/..."            → raw base64 (legacy)
//   "/Brands/amul.png"          → absolute path
function parseBrand(brand: string): { name: string; src: string } {
  const sepIdx = brand.indexOf('::data:');
  if (sepIdx !== -1) {
    return { name: brand.slice(0, sepIdx), src: brand.slice(sepIdx + 2) };
  }
  if (brand.startsWith('data:')) return { name: 'brand logo', src: brand };
  if (brand.startsWith('/') || brand.startsWith('http')) {
    const parts = brand.split('/');
    return { name: parts[parts.length - 1] || brand, src: brand };
  }
  return { name: brand.split('.')[0], src: `/Brands/${brand}` };
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
          {brands.map((brand, i) => {
            const { name, src } = parseBrand(brand);
            return (
              <div key={i} className="marquee-item">
                <img src={src} alt={name} loading="lazy" />
              </div>
            );
          })}
          {/* Duplicate for infinite scroll */}
          {brands.map((brand, i) => {
            const { name, src } = parseBrand(brand);
            return (
              <div key={`dup-${i}`} className="marquee-item" aria-hidden="true">
                <img src={src} alt={name} loading="lazy" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

