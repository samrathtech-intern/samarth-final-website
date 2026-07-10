import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/components/CTASection';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Food Safety Consultancy',
  description: 'Food safety consultancy support for HACCP, ISO 22000, FSSC, GMP, GHP, hygiene systems, training and audit readiness in Pune.',
  alternates: { canonical: '/food-safety' },
  openGraph: {
    title: 'Food Safety Consultancy | Samarth Technoologies',
    description: 'Practical HACCP, ISO 22000, FSSC, GMP, GHP and hygiene system support for food businesses.'
  }
};

const focusCards = [
  { title: 'Hygiene systems', text: 'Practical sanitation, handling and facility-control practices.' },
  { title: 'Hazard controls', text: 'HACCP-aligned hazard analysis and CCP records.' },
  { title: 'Team readiness', text: 'Food-safety awareness and role-wise implementation support.' },
  { title: 'Audit evidence', text: 'Records, SOPs and corrective actions that support assessment.' }
];

export default function FoodSafetyPage() {
  return (
    <>
      <AnimatedSection className="page-hero page-hero-premium page-hero-compact">
        <PageHero
          eyebrow='Food Safety Systems'
          title='Practical food-safety controls for real production and service environments.'
          text='Support for food manufacturers, caterers, processors and laboratories that need maintainable hygiene systems, hazard controls, team training and certification preparation.'
          image='/assets/brand/food-processing-hero.webp'
          imageAlt='Food processing facility review'
          badges={['HACCP', 'GMP / GHP', 'ISO 22000', 'FSSAI']}
          proofTitle='System focus'
          proofItems={['Hygiene', 'Hazards', 'Records']}
        />
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Food safety focus"
            title="Strong systems begin with simple, maintainable controls."
            text="We help teams convert compliance requirements into daily operating practices, records and review habits."
          />
          <div className="pillar-grid">
            {focusCards.map((item) => (
              <article className="pillar-card" key={item.title}>
                <span className="pillar-icon" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section-soft">
        <div className="container split">
          <div className="panel">
            <h3>What we help with</h3>
            <ul className="clean-list">
              <li>Food safety management system implementation</li>
              <li>HACCP hazard analysis and control planning</li>
              <li>GMP and GHP procedure development</li>
              <li>FSSAI / FoSTaC aligned training and awareness</li>
              <li>Internal audits, gap analysis and corrective action planning</li>
              <li>Records, SOPs, checklists and audit-ready documentation</li>
            </ul>
          </div>
          <div className="panel">
            <h3>Ideal for</h3>
            <div className="info-grid">
              {['Food manufacturers', 'Catering units', 'Dairy & bakery', 'Beverage units', 'Food laboratories', 'Processing plants'].map((item) => (
                <div className="info-card" key={item}>
                  <span>Sector</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
