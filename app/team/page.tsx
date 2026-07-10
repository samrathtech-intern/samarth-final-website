import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/components/CTASection';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the Samarth Technoologies team led by Mr. Amrendra Mahamuni, food technology consultant and ISO/FSSAI/FoSTaC trainer.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Our Team | Samarth Technoologies',
    description: 'Experienced food safety, ISO, training and consultancy professionals led by Mr. Amrendra Mahamuni.'
  }
};

const credentials = [
  // ── Original credentials ──────────────────────────────
  'Food Technology Consultant',
  'ISO 9001 & ISO 22000 Lead Auditor',
  'ISO 14001 Lead Auditor',
  'Internal Auditor for NABH',
  'ISO 9001 Internal Auditor',
  'ISO 22000 Internal Auditor',
  'ISO 14001 Internal Auditor',
  'HACCP Internal Auditor',
  // ── FoSTaC & FSSAI ───────────────────────────────────
  'FSSAI FoSTaC Trainer and Assessor for Milk & Milk Products Industry',
  'FSSAI FoSTaC Trainer and Assessor for Advanced Manufacturing Industry',
  'FSSAI FoSTaC Trainer and Assessor for Street Food Vendors',
  'FSSAI FoSTaC Trainer and Assessor for Catering Industry',
  'FSSAI FoSTaC Trainer & Assessor – Advanced Catering, Bakery, Water & Water Based Beverages',
  'FSSAI FoSTaC Trainer & Assessor – Water & Water Based Beverage Industry',
  'FSSAI FoSTaC Trainer & Assessor – Advanced Bakery Industry',
  // ── FSSAI Audit ──────────────────────────────────────
  'FSSAI authorised auditor for Schedule 4, Eat Right Campus, Hygiene Rating & BHOG',
  'FSSAI Hygiene Rating Auditor',
  'FSSAI Schedule 4 Auditor',
  'FSSAI Eat Right Campus Auditor',
  // ── Other ────────────────────────────────────────────
  'Internal Auditor for ISO 17020:2012 Conformity Assessment by CII & Institute of Quality',
  'MSME ZED & Lean Assessor',
  'PCQI – US FDA Approved for Human Food',
  'Director – Maharashtra Ayurved Food Business Operators Association'
];

const strengths = ['Training-first delivery', 'Documentation discipline', 'Audit preparation', 'Commercial coordination'];

export default function TeamPage() {
  return (
    <>
      <AnimatedSection className="page-hero page-hero-premium page-hero-compact">
        <PageHero
          eyebrow='Professional Team'
          title='Experienced consultants for training, documentation and certification readiness.'
          text='Led by Mr. Amrendra Mahamuni, the team brings food technology, lead auditor, FoSTaC training and commercial coordination strengths into one clear consulting workflow.'
          image='/assets/certificates/exemplar-global-training.webp'
          imageAlt='Lead auditor training certificate'
          badges={['Lead auditor expertise', 'FoSTaC training', 'Client coordination']}
          proofTitle='Team Focus'
          proofItems={['Consulting', 'Training', 'Coordination']}
        />
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="container split team-layout-grid">
          <article className="panel team-card team-card-featured">
            <div className="avatar">AM</div>
            <div>
              <span className="panel-kicker">Lead Consultant</span>
              <h3>Mr. Amrendra Mahamuni</h3>
              <p><strong>Director • Food Technology Consultant</strong></p>
              <ul className="clean-list" style={{ marginTop: 18 }}>
                {credentials.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </article>
          <div className="team-side-stack">
            <article className="panel team-card compact-team-card">
              <div className="avatar">AM</div>
              <div>
                <span className="panel-kicker">Commercial Coordination</span>
                <h3>Mrs. Aaditi Mahamuni</h3>
                <p><strong>Commercial Manager</strong></p>
                <p>Supports commercial coordination, enquiry follow-up and client communication so consultancy assignments move smoothly from discussion to delivery.</p>
              </div>
            </article>
            <article className="panel panel-dark">
              <h3>Team Strengths</h3>
              <div className="capability-grid capability-grid-light">
                {strengths.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
            <article className="panel">
              <h3>Key Recognitions</h3>
              <div className="info-grid">
                <div className="info-card"><span>Govt. of India</span><strong>MoFPI Master Trainer</strong></div>
                <div className="info-card"><span>US FDA</span><strong>PCQI Approved</strong></div>
                <div className="info-card"><span>MSME</span><strong>ZED & Lean Assessor</strong></div>
                <div className="info-card"><span>UDYAM</span><strong>{site.udyam}</strong></div>
              </div>
            </article>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section-soft">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Team Approach"
            title="Consulting support designed around clarity, confidence and continuity."
            text="The team focuses on practical implementation so client staff can maintain systems even after certification work is complete."
          />
          <div className="approach-card-grid">
            {[
              { 
                title: 'Clear communication', 
                text: 'Scope, documents and next steps are explained in business-friendly language.',
                num: '01',
                icon: <img src="/icons/precision-icon.png" alt="Communication icon" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              },
              { 
                title: 'Practical records', 
                text: 'Forms and registers are designed around real plant and office workflows.',
                num: '02',
                icon: <img src="/icons/doc-icon.png" alt="Records icon" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              },
              { 
                title: 'Role-wise training', 
                text: 'Teams receive guidance based on responsibility, not generic theory.',
                num: '03',
                icon: <img src="/icons/training-icon.png" alt="Training icon" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              },
              { 
                title: 'Review-driven closure', 
                text: 'Open points are tracked and closed before assessment whenever possible.',
                num: '04',
                icon: <img src="/icons/audit-icon.png" alt="Review icon" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              }
            ].map((item) => (
              <article className="approach-card" key={item.title}>
                <div className="approach-card-top">
                  <span className="approach-card-icon" aria-hidden="true">{item.icon}</span>
                  <span className="approach-card-num">{item.num}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
