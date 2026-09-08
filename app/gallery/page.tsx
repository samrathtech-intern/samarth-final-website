import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';
import { PageHero } from '@/components/PageHero';
import { CTASection } from '@/components/CTASection';
import { GalleryGrid } from '@/components/GalleryGrid';
import { getGalleryItemsAsync, getProofCertificateItems } from '@/lib/admin-store';
import { galleryItems as defaultGalleryItems, proofCertificateItems as defaultProofCertificates } from '@/lib/data';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Gallery & Certificates',
  description: 'Training sessions, plant visits and professional certificates from Samarth Technoologies consultancy work.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Gallery & Certificates | Samarth Technoologies',
    description: 'Training photos, plant visits, workshops and professional certificates from Samarth Technoologies.'
  }
};

export default async function GalleryPage() {
  const dynamicGallery = await getGalleryItemsAsync();
  const dynamicCertificates = getProofCertificateItems();

  const galleryList = dynamicGallery && dynamicGallery.length > 0 ? dynamicGallery : defaultGalleryItems;
  const certificateList = dynamicCertificates && dynamicCertificates.length > 0 ? dynamicCertificates : defaultProofCertificates;

  const galleryMedia = galleryList.map((item) => ({ ...item, group: 'gallery' as const }));
  const certificateMedia = certificateList.map((item) => ({ ...item, group: 'certificate' as const }));
  const allMedia = [...galleryMedia, ...certificateMedia];



  return (
    <>
      <AnimatedSection className="page-hero page-hero-premium page-hero-compact">
        <PageHero
          eyebrow="Gallery & Certificates"
          title="Real project visuals and professional proof."
          text="A clean view of Samarth Technoologies' training sessions, plant visits, workshops and selected certificates. Browse by category below."
          image="/assets/gallery/gallery-03.webp"
          imageAlt="Food processing plant walkthrough by Samarth Technoologies"
          badges={['Training Sessions', 'Plant Visits', 'Certificates']}
        />
      </AnimatedSection>

      <section className="section gallery-shell-section">
        <div className="container">
          <GalleryGrid items={allMedia} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
