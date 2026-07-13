import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/components/CTASection';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { serviceCategories } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Consultancy Services',
  description: 'Explore ISO 9001, ISO 22000, HACCP, GMP, GHP, FSSC, BRC, ISO 17020, ISO 17025 and food industry training services in Pune.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Consultancy Services | Samarth Technoologies',
    description: 'ISO, food safety, accreditation, plant setup and training services for audit-ready businesses.'
  }
};

const serviceHighlights = [
  { label: 'Documentation', text: 'Manuals, SOPs, forms, checklists and implementation records.' },
  { label: 'People Readiness', text: "Training and awareness built around your team's real responsibilities." },
  { label: 'Audit Preparation', text: 'Internal reviews, closure tracking and evidence readiness before assessment.' }
];

export default function ServicesPage() {
  return (
    <>
      <AnimatedSection className="page-hero page-hero-premium page-hero-compact">
        <PageHero
          eyebrow='Certification Support'
          title='Consultancy services for confident compliance and stronger systems.'
          text='Choose from ISO, food-safety, accreditation, plant setup and training services built around clear scope, usable records, team readiness and certification-stage confidence.'
          image='/assets/brand/food-processing-hero.webp'
          imageAlt='Food processing plant consulting support'
          badges={['ISO systems', 'Food safety', 'Laboratory readiness', 'Training']}

        />
      </AnimatedSection>

      <AnimatedSection className="section section-tight">
        <div className="container split split-equal service-intro-grid">
          <div className="panel panel-dark">
            <span className="panel-kicker">Service Logic</span>
            <h3>Every service is mapped to implementation, evidence and audit readiness.</h3>
            <p>Instead of generic documentation, each engagement focuses on practical records, team awareness and certification-stage confidence.</p>
          </div>
          <div className="panel">
            <h3>What you receive</h3>
            <ul className="clean-list">
              <li>Gap study and scope understanding</li>
              <li>Documentation, SOPs, records and checklists</li>
              <li>Training and awareness sessions</li>
              <li>Internal audit and corrective action support</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {serviceCategories.map((category) => (
        <AnimatedSection className="section section-soft" key={category.label}>
          <div className="container">
            <SectionHeading
              eyebrow={category.label}
              title={`${category.label} Services`}
              text={category.description}
            />
            <div className="service-grid">
              {category.services.map((service) => (
                <ServiceCard service={service} key={service.slug || service.title} category={category.label} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      ))}

      <AnimatedSection className="section">
        <div className="container">
          <div className="service-highlights-grid">
            {serviceHighlights.map((item) => (
              <div className="service-highlight-card" key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
