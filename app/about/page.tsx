import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/components/CTASection';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { site, whyChooseUs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Samarth Technoologies, Pune-based food safety, ISO, FSSAI and certification consultancy firm founded by Mr. Amrendra Mahamuni.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Samarth Technoologies',
    description: 'Food safety, ISO, FSSAI and certification consultancy support from Pune, Maharashtra.'
  }
};


const approachCards = [
  {
    title: 'Requirement-led consulting',
    text: 'Recommendations are based on actual process gaps, certification scope and operational maturity.',
    num: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  },
  {
    title: 'Practical documentation',
    text: 'Documents are designed to be usable by teams, not only presentable during an audit.',
    num: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    )
  },
  {
    title: 'Training-backed adoption',
    text: 'Implementation is supported with awareness, review and role-wise communication.',
    num: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: 'Ethical coordination',
    text: 'Clients receive transparent guidance on certification steps, evidence and responsibilities.',
    num: '04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    )
  }
];

const milestones = [
  { label: 'Founded', value: site.established, text: 'Pune-based consultancy built around food technology and certification support.' },
  { label: 'QCI Membership', value: site.qciMembership, text: 'Recognised professional membership supporting consultancy credibility.' },
  { label: 'Consultants', value: site.consultants, text: 'Networked delivery capability for documentation, training and implementation.' }
];

export default function AboutPage() {
  return (
    <>
      <AnimatedSection className="page-hero page-hero-premium page-hero-compact">
        <PageHero
          eyebrow='Company Profile'
          title='Food-safety and certification consulting with grounded implementation support.'
          text='Samarth Technoologies helps growing organisations build practical ISO, FSSAI, HACCP, BRC and accreditation systems through clear documentation, training and review-led delivery.'
          image='/assets/brand/food-safety-training-hero.webp'
          imageAlt='Food safety training and consulting session'
          badges={['Pune-based consultancy', 'QCI member firm', 'FoSTaC training expertise']}
          proofTitle='Company strengths'
          proofItems={['Food technology', 'Certification planning', 'Practical records']}
        />
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="Founded in Pune"
              title="Built around food technology, certification clarity and ethical implementation support."
            />
            <div className="prose prose-premium">
              <p>
                {site.legalName} was founded by {site.owner}. The firm is located in Pune, Maharashtra and is a member of Quality Council of India (QCI). Membership No: {site.qciMembership}.
              </p>
              <p>
                Mr. Amrendra Mahamuni is a Food Engineering &amp; Technologist from ICT. He is associated with FSSAI FoSTaC as a FoSTaC trainer and assessor, and is a national level resource person / master trainer of Ministry of Food Processing Industries (MoFPI), Government of India.
              </p>
              <p>
                The team supports clients with requirement study, documentation, implementation, training, internal-audit preparation and coordination with certification bodies where required.
              </p>
            </div>
          </div>
          <div className="panel profile-panel">
            <span className="panel-kicker">Company Snapshot</span>
            <h3>Professional details at a glance</h3>
            <div className="info-grid">
              <div className="info-card"><span>Owner</span><strong>{site.owner}</strong></div>
              <div className="info-card"><span>Established</span><strong>{site.established}</strong></div>
              <div className="info-card"><span>Nature</span><strong>Service Provider</strong></div>
              <div className="info-card"><span>Consultants</span><strong>{site.consultants}</strong></div>
              <div className="info-card"><span>GST</span><strong>{site.gst}</strong></div>
              <div className="info-card"><span>PAN</span><strong>{site.pan}</strong></div>
              <div className="info-card"><span>QCI Membership</span><strong>{site.qciMembership}</strong></div>
              <div className="info-card"><span>UDYAM</span><strong>{site.udyam}</strong></div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section approach-section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Working Values"
            title="A consulting approach that stays clear, useful and audit-focused."
            text="The goal is to build systems that your team can understand, operate and improve after the certification work is complete."
          />
          <div className="approach-card-grid">
            {approachCards.map((item) => (
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

      <AnimatedSection className="section section-soft">
        <div className="container timeline-grid">
          {milestones.map((item) => (
            <article className="timeline-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="container split split-equal">
          <div className="panel founder-panel">
            <span className="eyebrow">Leadership</span>
            <h3>{site.owner}</h3>
            <p>
              Food technology consultant, FSSAI/FoSTaC trainer and assessor with a practical, training-oriented approach to certification readiness.
            </p>
          </div>
          <div className="panel">
            <h3>Why Prefer Samarth Technoologies?</h3>
            <ul className="clean-list">
              {whyChooseUs.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section-soft">
        <div className="container split">
          <div className="panel">
            <h3>Qualification</h3>
            <p>B.Sc. Chemistry, B.Tech Food Engineering &amp; Technology, ICT Mumbai, DBM, FSSAI/FoSTaC Trainer, Assessor and Auditor. US FDA/PCQI approved for human food, MSME ZED &amp; LEAN Assessor, Director of Maharashtra Ayurved Food Business Operators Association.</p>
          </div>
          <div className="panel panel-dark">
            <h3>Consulting Approach</h3>
            <p>Practical systems, clean evidence, responsible implementation and transparent coordination with client teams.</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Special Credentials"
            title="Additional professional recognition and affiliations."
          />
          <div className="credentials-highlight-grid">
            <div className="credential-highlight-card">
              <span className="credential-highlight-icon" aria-hidden="true">★</span>
              <h3>MSME ZED &amp; LEAN Assessor</h3>
              <p>Certified assessor under the MSME Zero Effect Zero Defect (ZED) scheme, Government of India.</p>
            </div>
            <div className="credential-highlight-card">
              <span className="credential-highlight-icon" aria-hidden="true">🇺🇸</span>
              <h3>PCQI – US FDA Approved</h3>
              <p>Preventive Controls Qualified Individual (PCQI) approved by the US Food &amp; Drug Administration for human food.</p>
            </div>
            <div className="credential-highlight-card">
              <span className="credential-highlight-icon" aria-hidden="true">🏛</span>
              <h3>Director – Maharashtra Ayurved FBO Association</h3>
              <p>Director, Maharashtra Ayurved Food Business Operators Association — supporting the sector with compliance expertise.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
