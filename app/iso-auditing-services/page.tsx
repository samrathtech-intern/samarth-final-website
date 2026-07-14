import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/components/CTASection';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { QuotesCarousel } from '@/components/QuotesCarousel';
import {
  site,
  auditStandardCategories,
  auditServiceTypes,
  auditMethodology,
  whyAuditServices
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'ISO Management Systems Auditing Services',
  description:
    'Professional ISO auditing services in Pune – internal audits, supplier audits, gap assessments and certification readiness for ISO 9001, ISO 22000, FSSC 22000, ISO 14001, ISO 45001, ISO 17025, ISO 17020 and more.',
  alternates: { canonical: '/iso-auditing-services' },
  openGraph: {
    title: 'ISO Auditing Services | Samarth Technoologies',
    description:
      'Independent ISO management system audits – internal audits, supplier audits, mock certification, gap assessment and certification readiness.'
  }
};

const auditIcons: Record<string, React.ReactNode> = {
  qms: <img src="/icons/iso-icon.jpeg" alt="QMS icon" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />,
  food: <img src="/icons/fssai-icon.jpg" alt="Food safety icon" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />,
  env: <img src="/icons/sustanability-icon.png" alt="Environment icon" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />,
  ohs: <img src="/icons/audit-icon.png" alt="OH&S icon" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />,
  energy: <img src="/icons/factory-icon.png" alt="Energy icon" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />,
  medical: <img src="/icons/doc-icon.png" alt="Medical icon" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />,
  infosec: <img src="/icons/doc-icon.png" alt="InfoSec icon" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />,
  lab: <img src="/icons/lab-icon.jpeg" alt="Lab icon" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />,
  inspection: <img src="/icons/audit-icon.png" alt="Inspection icon" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
};

export default function IsoAuditingServicesPage() {
  return (
    <>
      <AnimatedSection className="page-hero page-hero-premium page-hero-compact">
        <PageHero
          eyebrow="Professional Audit Services"
          title="ISO Management Systems Auditing Services"
          text="Professional First-Party, Second-Party and Pre-Certification Audits across all major ISO management system standards – aligned with ISO 19011 guidelines and focused on business improvement."
          image="/assets/audit.jpeg"
          imageAlt="ISO management systems auditing professional services"
          badges={['ISO 19011 aligned', 'Lead auditor expertise', 'All major standards', 'Gap-to-certification']}
        />
      </AnimatedSection>

      {/* Overview */}
      <AnimatedSection className="section section-tight">
        <div className="container split split-equal service-intro-grid">
          <div className="panel panel-dark">
            <span className="panel-kicker">Audit Services Overview</span>
            <h3>Independent, objective and value-added audits for every major ISO standard.</h3>
            <p>Our audit services are designed to identify non-conformities, risks and improvement opportunities — with practical corrective action support to ensure lasting compliance.</p>
          </div>
          <div className="panel">
            <h3>Why Choose Our Audit Services?</h3>
            <ul className="clean-list">
              {whyAuditServices.slice(0, 5).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* ISO Standards We Audit */}
      <AnimatedSection className="section section-soft">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Standards Coverage"
            title="ISO Standards We Audit"
            text="Comprehensive audit coverage across quality, food safety, environmental, occupational health, energy, medical device, information security, laboratory and inspection body standards."
          />
          <div className="audit-standards-grid">
            {auditStandardCategories.map((cat) => (
              <div className="audit-standard-card" key={cat.category}>
                <div className="audit-card-header">
                  <span className="audit-cat-icon" aria-hidden="true">
                    {auditIcons[cat.icon] ?? auditIcons['qms']}
                  </span>
                  <h3 className="audit-cat-title">{cat.category}</h3>
                </div>
                {cat.standards.map((std) => (
                  <div className="audit-standard-block" key={std.name}>
                    <h4 className="audit-std-name">{std.name}</h4>
                    <ul className="audit-points-list">
                      {std.points.map((pt) => (
                        <li key={pt} className="audit-point-item">
                          <span aria-hidden="true" className="audit-point-dot">●</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Audit Service Types */}
      <AnimatedSection className="section">
        <div className="container">
          <div className="split split-equal">
            <div>
              <SectionHeading
                eyebrow="Audit Types"
                title="Types of Audit Services We Offer"
              />
              <div className="audit-types-grid">
                {auditServiceTypes.map((type) => (
                  <div className="audit-type-chip" key={type}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {type}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Audit Methodology"
                title="Our Audit Methodology"
              />
              <div className="methodology-list">
                {auditMethodology.map((step, index) => (
                  <div className="methodology-step" key={step}>
                    <span className="methodology-num">{String(index + 1).padStart(2, '0')}</span>
                    <span className="methodology-text">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Our Audit Services – full list */}
      <AnimatedSection className="section section-soft">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Why Choose Us"
            title="Why Organizations Choose Our Audit Services"
          />
          <div className="why-audit-grid">
            {whyAuditServices.map((item, index) => (
              <div className="why-audit-card" key={item}>
                <span className="why-audit-num">{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Enquiry CTA panel */}
      <AnimatedSection className="section">
        <div className="container">
          <div className="panel panel-dark audit-enquiry-panel">
            <div>
              <span className="panel-kicker">Get Started</span>
              <h3>Schedule an Audit or Request a Quote</h3>
              <p>Share your standard, scope and current compliance status. We will respond with a focused audit plan and timeline.</p>
            </div>
            <div className="audit-enquiry-actions">
              <a
                className="btn btn-light"
                href={`mailto:${site.email}?subject=Audit+Services+Enquiry`}
              >
                Send Enquiry
              </a>
              <Link className="btn btn-outline-light" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <QuotesCarousel />

      <CTASection />
    </>
  );
}
