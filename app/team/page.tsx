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
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                )
              },
              { 
                title: 'Practical records', 
                text: 'Forms and registers are designed around real plant and office workflows.',
                num: '02',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                )
              },
              { 
                title: 'Role-wise training', 
                text: 'Teams receive guidance based on responsibility, not generic theory.',
                num: '03',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )
              },
              { 
                title: 'Review-driven closure', 
                text: 'Open points are tracked and closed before assessment whenever possible.',
                num: '04',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                )
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
