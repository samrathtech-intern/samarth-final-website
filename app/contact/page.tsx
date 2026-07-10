import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
import { site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Samarth Technoologies for ISO, food safety, FSSAI, HACCP, GMP, FSSC, BRC and accreditation consultancy services in Pune.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Samarth Technoologies',
    description: 'Start a certification-readiness discussion for ISO, FSSAI, HACCP, BRC, GMP, FSSC and accreditation support.'
  }
};

const responseFlow = [
  'Share your business type and target standard',
  'Receive a focused discussion on scope and readiness',
  'Plan documentation, training and audit-preparation steps'
];

export default function ContactPage() {
  return (
    <>
      <AnimatedSection className="page-hero page-hero-premium page-hero-compact">
        <PageHero
          eyebrow='Contact Samarth'
          title='Start a focused certification-readiness discussion.'
          text='Share your organisation type, target standard and timeline. The team will respond with a clear next step for documentation, training or implementation support.'
          image='/assets/brand/food-testing-lab-hero.webp'
          imageAlt='Food testing laboratory consultation visual'
          badges={['Pune office', 'India-wide support', 'Email enquiry']}
          proofTitle='Enquiry path'
          proofItems={['Requirement', 'Scope', 'Plan']}
        />
      </AnimatedSection>

      <AnimatedSection className="section contact-section">
        <div className="container contact-grid">
          <aside className="panel contact-info-card">
            <span className="panel-kicker">Contact Details</span>
            <h3>{site.name}</h3>
            <div className="prose">
              <p><strong>Contact Person:</strong> {site.owner}</p>
              <p><strong>Address:</strong> {site.address}</p>
              <div className="contact-email-block">
                <p className="contact-email-label">Primary Email</p>
                <a className="text-link contact-email-primary" href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div className="contact-email-block">
                <p className="contact-email-label">Alternative Email</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <a className="text-link" href={`mailto:${site.altEmail}`}>{site.altEmail}</a>
                  <a className="text-link" href={`mailto:${site.altEmail2}`}>{site.altEmail2}</a>
                </div>
              </div>
              <p><strong>Website:</strong> {site.domain}</p>
            </div>
            <div className="contact-mini-grid">
              <div><span>Location</span><strong>Pune</strong></div>
              <div><span>Coverage</span><strong>India-wide support</strong></div>
              <div><span>UDYAM</span><strong>{site.udyam}</strong></div>
              <div><span>QCI</span><strong>{site.qciMembership}</strong></div>
            </div>
          </aside>
          <ContactForm />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section section-soft">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">What happens next</span>
            <h2>A simple enquiry flow with no confusion.</h2>
            <p>The first response is focused on understanding your standard, current status and readiness timeline.</p>
          </div>
          <div className="mini-step-grid contact-flow-grid">
            {responseFlow.map((step, index) => (
              <div className="mini-step" key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
