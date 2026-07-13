import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/components/CTASection';
import { PageHero } from '@/components/PageHero';
import { SafeImage } from '@/components/SafeImage';
import { getService, services, site } from '@/lib/data';

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.meta,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.meta,
      images: [{ url: service.image, alt: service.title }]
    }
  };
}

const implementationSteps = [
  'Requirement and scope understanding',
  'Gap assessment and action planning',
  'Documentation and records setup',
  'Training, review and audit preparation'
];

const engagementOutcomes = [
  { title: 'Cleaner documentation', text: 'Relevant manuals, procedures, records and checklists aligned to the chosen standard.' },
  { title: 'Better team clarity', text: 'Role-wise awareness so operators, supervisors and managers understand what to maintain.' },
  { title: 'Audit-stage confidence', text: 'Pre-audit reviews, evidence tracking and closure support before external assessment.' }
];

import { getServiceIconPath } from '@/components/ServiceIcons';

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 5);
  const iconPath = getServiceIconPath(service.title);

  return (
    <>
      <AnimatedSection className="page-hero page-hero-premium page-hero-compact service-page-hero">
        <PageHero
          eyebrow="Consultancy Service"
          title={service.title}
          text={service.short}
          image={service.image}
          imageAlt={`${service.title} service visual`}
          badges={service.highlights.slice(0, 5)}
        />
      </AnimatedSection>

      <AnimatedSection className="section">
        <div className="container service-detail">
          <article className="prose prose-premium service-article">
            <SafeImage src={service.image} alt={`${service.title} visual summary`} className="detail-image" fallbackSrc="/illustrations/hero-compliance-consulting.svg" />

            {/* Overview */}
            <div className="article-card">
              <span className="eyebrow">Overview</span>
              <h2>Practical support for {service.title.toLowerCase()}.</h2>
              {service.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            {/* What we deliver – bullet list from client content */}
            {service.bullets && service.bullets.length > 0 && (
              <div className="article-card article-card-bullets">
                <span className="eyebrow">What We Deliver</span>
                <h2>Our consulting scope for {service.title}.</h2>
                <ul className="service-bullets-list">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="service-bullet-item">
                      <span className="bullet-check" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* How we support you */}
            <div className="article-card article-card-muted">
              <h2>How Samarth Technoologies supports you</h2>
              <p>
                The engagement can include gap review, documentation, SOP preparation, training, internal audit support, corrective action planning and coordination support for audit readiness.
              </p>
              <div className="mini-step-grid">
                {(service.implementationSteps || implementationSteps).map((step, index) => (
                  <div className="mini-step" key={step}>
                    <span>0{index + 1}</span>
                    <strong>{step}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Outcomes */}
            <div className="article-card outcome-card-wrap">
              <span className="eyebrow">Expected Outcomes</span>
              <h2>Clearer systems your team can maintain after the engagement.</h2>
              <div className="outcome-grid">
                {(service.engagementOutcomes || engagementOutcomes).map((item) => (
                  <div className="outcome-card" key={item.title}>
                    <span aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="sidebar">
            <div className="panel">
              <span className="panel-kicker">Highlights</span>
              <h3>Service Highlights</h3>
              <ul className="clean-list">
                {service.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="panel enquiry-panel">
              <h3>Need a quotation?</h3>
              <p>Share your requirement, company type, location and target certification.</p>
              <div className="sidebar-mini-points">
                <span>Scope review</span>
                <span>Timeline discussion</span>
                <span>Documentation path</span></div>
              <a className="btn btn-primary" href={`mailto:${site.email}?subject=${encodeURIComponent(service.title + ' enquiry')}`}>Send Enquiry</a>
            </div>
            <div className="panel">
              <h3>Other Services</h3>
              <ul className="clean-list link-list">
                {relatedServices.map((item) => (
                  <li key={item.slug}><Link className="text-link" href={`/services/${item.slug}`}>{item.title}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </AnimatedSection>

      <CTASection />
    </>
  );
}
