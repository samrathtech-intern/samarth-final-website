'use client';

import React, { useEffect, useState } from 'react';

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

// Hardcoded fallback (shown instantly before API responds)
const DEFAULT_BRANDS = [
  "ABInBev.png", "Aditya Milk.png", "Allied Blenders & Distillers.jpeg", "Bailley.jpeg", "Bisleri.jpeg",
  "Diageo.png", "Dinshaw's.png", "Gits Food Products.png", "Haldiram's.png", "Havmor.png",
  "Heineken.png", "Heritage Foods.png", "ITC.png", "Kwality Wall's.png", "Lactalis India.png",
  "Lotte.png", "Marrio Marquis.png", "Meraki Hospitality.png", "Modi_dairy.jpeg", "Pernod Ricard.png",
  "Schreiber Dynamix Dairies.png", "Sonai Dairy.jpeg", "Stregis.png", "Suruchi Dairy.png",
  "Ubgroup.png", "Vadilal.png", "amul.png", "amwaj.png", "anglo-eastern.png", "bacardi.png",
  "bademiya.jpeg", "campa.png", "caneindia.jpeg", "chitale_agro.jpeg", "chitale_dairy.png",
  "cocacola.jpeg", "compassgroup.png", "dairy_power.jpeg", "daund_sugar.jpeg", "irctc.jpeg",
  "katraj_dairy.jpeg", "khatri_bandhu.jpeg", "modelez.jpeg", "modern_dairy.png", "moon_bev.png",
  "mother_dairy.png", "nandini.jpeg", "natural_sugar.jpeg", "nestle.jpeg", "osi.png", "oxycool.png",
  "parag_milk.png", "paras.jpeg", "parle_Agro.jpeg", "parle_products.png", "piyush_nutra.png",
  "ponlait.png", "pride_hotels.png", "radico_spirit.jpeg", "sahydri.png", "sphurti.jpeg",
  "tat.jpeg", "the_leela.png", "vasundhra.jpeg", "vishaka.jpeg", "yemek_doha.png",
  "wave-bev.jpeg", "vishaka-dairy.jpeg", "mehendale-farm.jpeg", "7-apple.jpeg",
  "katdare.jpeg", "makson.jpeg", "morde.jpeg", "rib-ballon.jpeg"
];

export function TrustedByMarquee() {
  const [brands, setBrands] = useState<string[]>(DEFAULT_BRANDS);

  useEffect(() => {
    // Fetch the live brands list (includes any newly uploaded logos)
    fetch('/api/admin/brands', { cache: 'no-store' })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok && Array.isArray(data.brands) && data.brands.length > 0) {
          setBrands(data.brands);
        }
      })
      .catch(() => {
        // Keep showing defaults silently if API fails
      });
  }, []);

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
