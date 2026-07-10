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
import { certificateItems, galleryItems, processSteps, services, site, trustAreas, whyChooseUs } from '@/lib/data';

const trustIndicators = [
  'Pune-based consulting team',
  'QCI member firm',
  'FSSAI FoSTaC certified trainer'
];

const industriesServed = [
  'Food manufacturing & processing units',
  'Dairy, bakery, beverage & catering businesses',
  'Testing & calibration laboratories',
  'Inspection bodies & agribusinesses',
  'Manufacturing & process industries',
  'Hospitality and institutional food services'
];

const heroCapabilities = ['ISO 9001', 'ISO 22000', 'HACCP', 'BRC', 'FSSAI', 'GMP / GHP'];


const standardShowcase = [
  { code: 'ISO', title: 'Management Systems', text: 'ISO 9001, ISO 22000, ISO 45001 and aligned documentation support.' },
  { code: 'FS', title: 'Food Safety Systems', text: 'HACCP, GMP, GHP, FSSC, BRC and FSSAI/FoSTaC implementation support.' },
  { code: 'LAB', title: 'Laboratory Readiness', text: 'ISO 17020 and ISO 17025 accreditation preparation for inspection and testing teams.' },
  { code: 'PLANT', title: 'Plant & Project Support', text: 'Food processing plant, lab setup and practical compliance planning.' }
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
                <Image src="/brand/samarth-emblem.png" alt="Samarth Technoologies emblem" width={73} height={76} />
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
              <span>{item.code}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section pillar-section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Delivery System"
            title="A consistent consulting system for serious compliance work."
            text="Every engagement follows a clear system: assess the gaps, build practical documentation, train the team and prepare evidence before the audit stage."
          />
          <div className="pillar-grid">
            {deliveryPillars.map((pillar) => (
              <article className="pillar-card" key={pillar.title}>
                <span className="pillar-icon" aria-hidden="true">{pillar.icon}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
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
            <p>
              Food technology consultant, FSSAI/FoSTaC trainer and assessor with a practical, training-oriented approach to certification readiness.
            </p>
          </div>
          <div className="panel profile-panel glass-panel">
            <h3>Qualification</h3>
            <p>B.Sc. Chemistry, B.Tech Food Engineering &amp; Technology, ICT Mumbai, DBM, FSSAI/FoSTaC Trainer, Assessor and Auditor. US FDA/PCQI approved for human food, MSME ZED &amp; LEAN Assessor, Director of Maharashtra Ayurved Food Business Operators Association.</p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section why-modern-section">
        <div className="container split split-equal why-modern-grid">
          <div>
            <SectionHeading
              eyebrow="Why choose Samarth"
              title="A professional partner for teams that need clarity before certification."
              text="We combine requirement understanding, structured documentation and practical delivery support so your certification stays aligned with real plant and process realities."
            />
            <Link href="/about" className="btn btn-primary">Read Company Profile</Link>
          </div>
          <div className="panel glass-panel why-card-list">
            <h3>What clients can expect</h3>
            <ul className="clean-list">
              {whyChooseUs.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </AnimatedSection>

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
              <div className="industry-card" key={industry}>
                <span aria-hidden="true" />
                <strong>{industry}</strong>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section process-modern-section">
        <div className="container split split-equal">
          <div>
            <SectionHeading
              eyebrow="Process / Workflow"
              title="A straightforward path from gap study to certification."
              text="Every engagement starts with understanding your current systems, then moves through documentation, training, internal audit and certification readiness."
            />
            <div className="process-list">
              {processSteps.map((step, index) => (
                <div className="process-item" key={step.title}>
                  <div className="process-index">0{index + 1}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="panel panel-dark focus-panel">
            <h3>Core focus areas</h3>
            <p>Support is tailored around the standards, records, training and teams that matter most to each certification.</p>
            <div className="info-grid">
              {trustAreas.map((item) => (
                <div className="info-card info-card-contrast" key={item}>
                  <span>Focus Area</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <FaqSection />

      <CTASection />
    </>
  );
}
