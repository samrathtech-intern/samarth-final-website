import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/components/CTASection';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import {
  site,
  whyChooseUs,
  industriesServed,
  businessResults,
  vision,
  mission,
  coreCommitment
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'About Samarth Technoologies, Pune-based food safety, ISO, FSSAI and certification consultancy firm founded by Mr. Amrendra Mahamuni.',
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
    icon: <img src="/icons/precision-icon.png" alt="Consulting icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
  },
  {
    title: 'Practical documentation',
    text: 'Documents are designed to be usable by teams, not only presentable during an audit.',
    num: '02',
    icon: <img src="/icons/doc-icon.png" alt="Documentation icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
  },
  {
    title: 'Training-backed adoption',
    text: 'Implementation is supported with awareness, review and role-wise communication.',
    num: '03',
    icon: <img src="/icons/training-icon.png" alt="Training icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
  },
  {
    title: 'Ethical coordination',
    text: 'Clients receive transparent guidance on certification steps, evidence and responsibilities.',
    num: '04',
    icon: <img src="/icons/audit-icon.png" alt="Coordination icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
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
          eyebrow="Company Profile"
          title="Food-safety and certification consulting with grounded implementation support."
          text="Samarth Technoologies helps growing organisations build practical ISO, FSSAI, HACCP, BRC and accreditation systems through clear documentation, training and review-led delivery."
          image="/assets/brand/food-safety-training-hero.webp"
          imageAlt="Food safety training and consulting session"
          badges={['Pune-based consultancy', 'QCI member firm', 'FoSTaC training expertise']}
          proofTitle="Company strengths"
          proofItems={['Food technology', 'Certification planning', 'Practical records']}
        />
      </AnimatedSection>

      {/* Company intro */}
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

      {/* Vision & Mission */}
      <AnimatedSection className="section section-soft">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Direction"
            title="Vision, Mission &amp; Core Commitment"
            text="What we stand for and where we are headed as India's trusted food industry consulting partner."
          />
          <div className="vision-mission-grid">
            <div className="panel vision-card">
              <span className="panel-kicker">Vision</span>
              <h3>Our Vision</h3>
              <p>{vision}</p>
            </div>
            <div className="panel mission-card">
              <span className="panel-kicker">Mission</span>
              <h3>Our Mission</h3>
              <p className="mission-intro">At Samarth Technoologies, our mission is to enable food businesses to achieve operational excellence and sustainable growth by delivering practical, reliable, and value-driven consulting services. We are committed to:</p>
              <ul className="mission-list">
                {mission.map((item) => (
                  <li key={item} className="mission-item">
                    <span className="mission-bullet" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="core-commitment-banner">
            <span className="commitment-quote" aria-hidden="true">&ldquo;</span>
            <p className="commitment-text">{coreCommitment}</p>
            <span className="commitment-quote commitment-quote-close" aria-hidden="true">&rdquo;</span>
          </div>
        </div>
      </AnimatedSection>

      {/* Approach */}
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

      {/* Milestones */}
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

      {/* Why Choose Us */}
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
            <h3>Why Choose Our Consulting Services?</h3>
            <ul className="clean-list">
              {whyChooseUs.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Industries We Serve */}
      <AnimatedSection className="section section-soft">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Industries We Serve"
            title="Serving 18 industries across the food and allied sectors."
            text="Our consulting expertise spans the entire food value chain and allied industries."
          />
          <div className="industries-grid">
            {industriesServed.map((industry) => (
              <div className="industry-chip" key={industry.name}>
                <span className="industry-icon" aria-hidden="true">
                  <IndustryIcon name={industry.icon} />
                </span>
                <span className="industry-name">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Results Your Business Can Expect */}
      <AnimatedSection className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Business Results"
            title="Results Your Business Can Expect"
            text="Measurable outcomes that our clients achieve through our consulting engagement."
          />
          <div className="results-grid">
            {businessResults.map((result, index) => (
              <div className="result-card" key={result}>
                <span className="result-number">{String(index + 1).padStart(2, '0')}</span>
                <p className="result-text">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Qualifications */}
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

      {/* Special Credentials */}
      <AnimatedSection className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Special Credentials"
            title="Additional professional recognition and affiliations."
          />
          <div className="credentials-highlight-grid">
            <div className="credential-highlight-card">
              <span className="credential-highlight-icon" aria-hidden="true">
                <img src="/icons/msme-zed-icon.jpeg" alt="MSME ZED Assessor" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              </span>
              <h3>MSME ZED &amp; LEAN Assessor</h3>
              <p>Certified assessor under the MSME Zero Effect Zero Defect (ZED) scheme, Government of India.</p>
            </div>
            <div className="credential-highlight-card">
              <span className="credential-highlight-icon" aria-hidden="true">
                <img src="/icons/🇺🇸-fda-icon.jpeg" alt="US FDA PCQI" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              </span>
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

// Inline SVG icon switcher for industries
function IndustryIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    factory: <img src="/icons/factory-icon.png" alt="Factory icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    dairy: <img src="/icons/dairy-icon.png" alt="Dairy icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    beverage: <img src="/icons/beverage-icon.png" alt="Beverage icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    bakery: <img src="/icons/bakery-ico.jpeg" alt="Bakery icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    oils: <img src="/icons/oils-icon.png" alt="Oils icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    spices: <img src="/icons/spices-icon.png" alt="Spices icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    seafood: <img src="/icons/seafood-icon.png" alt="Seafood icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    meat: <img src="/icons/meat-icon.jpeg" alt="Meat icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    nutra: <img src="/icons/nutra-icon.png" alt="Nutra icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    cosmetics: <img src="/icons/cosmetics-icon.png" alt="Cosmetics icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    packaging: <img src="/icons/packaging-icon.png" alt="Packaging icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    chemical: <img src="/icons/chemical-icon.png" alt="Chemical icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    lab: <img src="/icons/lab-icon.jpeg" alt="Lab icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    inspection: <img src="/icons/audit-icon.png" alt="Inspection icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    logistics: <img src="/icons/logistics-icon.png" alt="Logistics icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    agriculture: <img src="/icons/agri-icon.jpeg" alt="Agriculture icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    hospitality: <img src="/icons/hospitality-icon.png" alt="Hospitality icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />,
    manufacturing: <img src="/icons/factory-icon.png" alt="Manufacturing icon" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
  };
  return <>{icons[name] ?? icons['factory']}</>;
}
