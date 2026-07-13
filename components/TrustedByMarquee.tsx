import React from 'react';

const brands = [
  "ABInBev.png", "Aditya Milk.png", "Allied Blenders & Distillers.jpeg", "Bailley.jpeg", "Bisleri.jpeg", "Diageo.png", "Dinshaw's.png", "Gits Food Products.png", "Haldiram's.png", "Havmor.png", "Heineken.png", "Heritage Foods.png", "ITC.png", "Kwality Wall's.png", "Lactalis India.png", "Lotte.png", "Marrio Marquis.png", "Meraki Hospitality.png", "Modi_dairy.jpeg", "Pernod Ricard.png", "Schreiber Dynamix Dairies.png", "Sonai Dairy.jpeg", "Stregis.png", "Suruchi Dairy.png", "Ubgroup.png", "Vadilal.png", "amul.png", "amwaj.png", "anglo-eastern.png", "bacardi.png", "bademiya.jpeg", "campa.png", "caneindia.jpeg", "chitale_agro.jpeg", "chitale_dairy.png", "cocacola.jpeg", "compassgroup.png", "dairy_power.jpeg", "daund_sugar.jpeg", "irctc.jpeg", "katraj_dairy.jpeg", "khatri_bandhu.jpeg", "modelez.jpeg", "modern_dairy.png", "moon_bev.png", "mother_dairy.png", "nandini.jpeg", "natural_sugar.jpeg", "nestle.jpeg", "osi.png", "oxycool.png", "parag_milk.png", "paras.jpeg", "parle_Agro.jpeg", "parle_products.png", "piyush_nutra.png", "ponlait.png", "pride_hotels.png", "radico_spirit.jpeg", "sahydri.png", "sphurti.jpeg", "tat.jpeg", "the_leela.png", "vasundhra.jpeg", "vishaka.jpeg", "yemek_doha.png"
];

export function TrustedByMarquee() {
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
