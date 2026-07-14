import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { BrandPhilosophySection } from '@/components/BrandPhilosophySection';
import { CTASection } from '@/components/CTASection';
import { FaqSection } from '@/components/FaqSection';
import { RotatingTagline } from '@/components/RotatingTagline';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { StatsSection } from '@/components/StatsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { TrustBar } from '@/components/TrustBar';
import { SafeImage } from '@/components/SafeImage';
import { QuotesCarousel } from '@/components/QuotesCarousel';
import { certificateItems, galleryItems, processSteps, services, site, trustAreas, whyChooseUs } from '@/lib/data';

const trustIndicators = [
  'Pune-based consulting team',
  'QCI member firm',
  'FSSAI FoSTaC certified trainer'
];

const industriesServed = [
  { title: 'Food manufacturing & processing units', iconPath: '/icons/factory-icon.png' },
  { title: 'Dairy, bakery, beverage & catering businesses', iconPath: '/icons/dairy-icon.png' },
  { title: 'Testing & calibration laboratories', iconPath: '/icons/lab-icon.jpeg' },
  { title: 'Inspection bodies & agribusinesses', iconPath: '/icons/agri-icon.jpeg' },
  { title: 'Manufacturing & process industries', iconPath: '/icons/equipment-icon.png' },
  { title: 'Hospitality and institutional food services', iconPath: '/icons/hospitality-icon.png' }
];

const heroCapabilities = ['ISO 9001', 'ISO 22000', 'HACCP', 'BRC', 'FSSAI', 'GMP / GHP'];


const standardShowcase = [
  { code: 'ISO', title: 'Management Systems', text: 'ISO 9001, ISO 22000, ISO 45001 and aligned documentation support.', iconPath: '/icons/iso-icon.jpeg' },
  { code: 'FS', title: 'Food Safety Systems', text: 'HACCP, GMP, GHP, FSSC, BRC and FSSAI/FoSTaC implementation support.', iconPath: '/icons/foodsafety-icon.jpeg' },
  { code: 'LAB', title: 'Laboratory Readiness', text: 'ISO 17020 and ISO 17025 accreditation preparation for inspection and testing teams.', iconPath: '/icons/lab-icon.jpeg' },
  { code: 'PLANT', title: 'Plant & Project Support', text: 'Food processing plant, lab setup and practical compliance planning.', iconPath: '/icons/factory-icon.png' }
];

const deliveryPillars = [
  {
    title: 'Gap study',
    text: 'Understand current process maturity before recommending the right certification path.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    )
  },
  {
    title: 'Documentation',
    text: 'Build SOPs, records, checklists and manuals that teams can maintain.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  },
  {
    title: 'Training',
    text: 'Prepare people with practical food-safety, hygiene and audit-readiness awareness.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    title: 'Audit readiness',
    text: 'Review records, corrective actions and evidence before the assessment stage.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  }
];

export default function HomePage() {
  const featured = services.filter((s) => s.slug).slice(0, 6);

  return (
    <>
      <AnimatedSection className="hero hero-modern">
        <div className="container hero-grid hero-grid-modern">
          <div className="hero-copy hero-copy-modern">
            <span className="eyebrow">Food safety, ISO &amp; compliance consultancy</span>
            <h1>Complete Food Industry Consultancy – From Idea to Successful Production.</h1>
            <div className="hero-rotating-tagline-wrap">
              <RotatingTagline />
            </div>
            <p className="hero-trust-statement">
              Food Safety &nbsp;•&nbsp; ISO Standards &nbsp;•&nbsp; Plant Setup &nbsp;•&nbsp; Compliance &nbsp;•&nbsp; Training
            </p>
            <p>
              {site.legalName} helps food businesses, manufacturers and laboratories implement ISO, FSSAI, HACCP, BRC and related management systems with hands-on documentation, training and audit-readiness support from a Pune-based team.
            </p>
            <div className="hero-actions">
              <Link href="/services" className="btn btn-primary">Explore Services</Link>
              <Link href="/contact" className="btn btn-secondary">Talk to a Consultant</Link>
            </div>
            <div className="hero-trust-row" aria-label="Trust indicators">
              {trustIndicators.map((item) => (
                <span className="trust-pill" key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-metric-strip" aria-label="Consulting profile snapshot">
              <div><strong>{site.established}</strong><span>Established</span></div>
              <div><strong>{site.consultants}</strong><span>Consultants</span></div>
              <div><strong>QCI</strong><span>{site.qciMembership}</span></div>
            </div>
          </div>

          <div className="technology-visual certification-visual" aria-label="Certification delivery focus overview">
            <div className="certification-main-card">
              <div className="certification-card-header">
                <span className="panel-kicker">Certification Focus</span>
                <span className="certification-status">Readiness Roadmap</span>
              </div>
              <div className="hero-logo-sigil">
                <Image src="/swami.png" alt="Samarth Technoologies swami emblem" width={150} height={150} />
              </div>
              <h2>Practical certification systems shaped around real food-safety and quality workflows.</h2>
              <div className="capability-grid certification-capabilities">
                {heroCapabilities.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="certification-action-grid">
                <div className="certification-step-card">
                  <span>01</span>
                  <strong>Plan</strong>
                  <p>Gap study, documentation roadmap and implementation priorities.</p>
                </div>
                <div className="certification-step-card">
                  <span>02</span>
                  <strong>Certify</strong>
                  <p>Training, internal audit support and certification-stage readiness.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <TrustBar />

      <BrandPhilosophySection />

      <AnimatedSection className="section section-tight visual-proof-section">
        <div className="container split split-equal visual-proof-grid">
          <div>
            <SectionHeading
              eyebrow="Field Presence"
              title="Training, plant walkthroughs and credentials with real business context."
              text="Practical engagement across food-safety training, site reviews and certification preparation gives clients a clear view of how the work is delivered."
            />
          </div>
          <div className="visual-proof-mosaic" aria-label="Samarth work and credential visuals">
            {[galleryItems[2], galleryItems[8], certificateItems[3], certificateItems[0]].map((item) => (
              <article className="visual-proof-card" key={item.src}>
                <SafeImage src={item.src} alt={`${item.title} visual`} loading="lazy" fallbackSrc="/brand/samarth-emblem.png" />
                <span>{item.tag}</span>
                <strong>{item.title}</strong>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section standards-showcase-section">
        <div className="container standard-showcase-grid">
          {standardShowcase.map((item) => (
            <article className="standard-showcase-card" key={item.code}>
              <div style={{ marginBottom: '16px' }}>
                <img src={item.iconPath} alt={`${item.title} icon`} style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section workflow-section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Process / Workflow"
            title="A straightforward path from gap study to certification."
            text="Every engagement starts with understanding your current systems, then moves through documentation, training, internal audit and certification readiness."
          />
          <div className="workflow-grid">
            {[
              { num: '01', title: 'Initial Discussion', desc: 'Understanding your business type, certification objective, timeline and current system status.' },
              { num: '02', title: 'Site Assessment', desc: 'On-site or remote review of your current processes, documentation and compliance maturity.' },
              { num: '03', title: 'Gap Analysis', desc: 'Identifying gaps between your current systems and the target standard requirements.' },
              { num: '04', title: 'Project Planning', desc: 'A practical roadmap is prepared with documentation milestones, training schedule and audit dates.' },
              { num: '05', title: 'Documentation', desc: 'Building quality manuals, SOPs, records, checklists and forms aligned to the chosen standard.' },
              { num: '06', title: 'Implementation', desc: 'Supporting your team to adopt the system in day-to-day operations with structured guidance.' },
              { num: '07', title: 'Training', desc: 'Role-wise awareness and competence building so all staff understand their responsibilities.' },
              { num: '08', title: 'Internal Audit', desc: 'Conducting internal audits to verify system effectiveness and close non-conformities before certification.' },
              { num: '09', title: 'Certification Support', desc: 'Coordinating with the certification body, reviewing evidence and providing final readiness support.' },
              { num: '10', title: 'Post-Certification Support', desc: 'Ongoing support for continual improvement, surveillance audits and system maintenance.' }
            ].map((step) => (
              <article className="workflow-card" key={step.num}>
                <span className="workflow-num">{step.num}</span>
                <div className="workflow-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section-soft services-overview-section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Services Overview"
            title="Certification and food-safety consultancy structured for clear, audit-ready delivery."
            text="From ISO and FSSAI documentation through HACCP, BRC, GMP/GHP and laboratory accreditation, every engagement is built around getting your system genuinely ready for audit."
          />
          <div className="service-grid">
            {featured.map((service) => <ServiceCard service={service} key={service.slug} />)}
          </div>
          <div className="section-actions-center">
            <Link href="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="container split split-equal">
          <div className="panel founder-panel">
            <span className="eyebrow">Leadership</span>
            <h3>{site.owner}</h3>
            <ul className="clean-list" style={{ marginTop: '16px' }}>
              <li>FSSAI Authorized Schedule IV Auditor</li>
              <li>Top 100 Performing FSSAI FoSTaC Trainer</li>
              <li>USFDA PCQI for Human Food</li>
              <li>MSME ZED &amp; LEAN Assessor</li>
              <li>Master Trainer &ndash; NLRP PMFME Scheme</li>
              <li>FIFA Auditor</li>
              <li>Director &ndash; Maharashtra Ayurved Food Business Operators Association</li>
            </ul>
          </div>
          <div className="panel profile-panel glass-panel">
            <h3>Qualifications</h3>
            <ul className="clean-list" style={{ marginTop: '16px' }}>
              <li>B.Sc. Chemistry</li>
              <li>B.Tech. Food Engineering &amp; Technology</li>
              <li>ICT Mumbai</li>
              <li>ISO 9001,22000,14000 LEAD AUDITOR</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section why-modern-section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Why Clients Choose Our Organization"
            title="A professional partner for teams that need clarity before certification."
            text="We combine requirement understanding, structured documentation and practical delivery support so your certification stays aligned with real plant and process realities."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '48px' }}>
            {whyChooseUs.map((item, index) => (
              <div key={index} className="panel glass-panel" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '24px' }}>
                <div style={{ flexShrink: 0, width: '36px', height: '36px', borderRadius: '50%', background: 'var(--brand-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '0.9rem' }}>
                  {index + 1}
                </div>
                <p style={{ margin: 0, fontWeight: 500, color: 'var(--ink)', lineHeight: 1.5, fontSize: '0.95rem' }}>{item}</p>
              </div>
            ))}
          </div>
          <div className="section-actions-center" style={{ marginTop: '48px' }}>
            <Link href="/about" className="btn btn-primary">Read Company Profile</Link>
          </div>
        </div>
      </AnimatedSection>

      <QuotesCarousel />

      <TestimonialsSection />

      <StatsSection />

      <AnimatedSection className="section industries-section">
        <div className="container">
          <SectionHeading
            eyebrow="Industries served"
            title="Built for food businesses, manufacturers and laboratories pursuing certification."
            text="The focus is on realistic compliance: closing gaps, building records, training teams and getting genuinely ready for the certification audit."
          />
          <div className="industry-grid">
            {industriesServed.map((industry) => (
              <div className="industry-card" key={industry.title}>
                <span className="industry-card-icon" aria-hidden="true">
                  <img src={industry.iconPath} alt={`${industry.title} icon`} style={{ width: '90px', height: '90px', objectFit: 'contain' }} />
                </span>
                <strong>{industry.title}</strong>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>



      <FaqSection />

      <CTASection />
    </>
  );
}
