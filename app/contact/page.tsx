import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from '@/components/ContactForm';
import { site } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Samarth Technoologies for ISO, food safety, FSSAI, HACCP, GMP, FSSC, BRC and accreditation consultancy services in Pune.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Samarth Technoologies',
    description:
      'Start a certification-readiness discussion for ISO, FSSAI, HACCP, BRC, GMP, FSSC and accreditation support.'
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
          eyebrow="Contact Samarth"
          title="Start a focused certification-readiness discussion."
          text="Share your organisation type, target standard and timeline. The team will respond with a clear next step for documentation, training or implementation support."
          image="/brand/contact.jpeg"
          imageAlt="Food testing laboratory consultation visual"
          badges={['Pune office', 'India-wide support', 'WhatsApp available']}
        />
      </AnimatedSection>

      <AnimatedSection className="section contact-section">
        <div className="container contact-grid">
          <aside className="panel contact-info-card">
            <span className="panel-kicker">Contact Details</span>
            <h3 style={{ color: "var(--accent)" }}>{site.name}</h3>
            <div className="prose">
              <p><strong>Contact Person:</strong> {site.owner}</p>
              <p><strong>Contact No:</strong><a href={`tel:${site.contact_no2}`}>{site.contact_no2}</a></p>
              <p><strong>Alternate Contact Person:</strong> Operational Manager</p>
              <p><strong>Alternate Contact No:</strong><a href={`tel:${site.contact_no1}`}>{site.contact_no1}</a></p>

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

              <p><strong>Website:</strong> <a href={site.domain}>{site.domain}</a></p>
            </div>

            <br></br>

            {/* Social & Quick Contact */}
            <div className="contact-social-row">
              <a
                id="whatsapp-contact-btn"
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn whatsapp-btn"
                aria-label="Chat on WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                id="linkedin-contact-btn"
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn linkedin-btn"
                aria-label="Connect on LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            <br></br>

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

      {/* Google Maps Embed */}
      <AnimatedSection className="section section-tight">
        <div className="container">
          <div className="map-section">
            <div className="map-header">
              <span className="eyebrow">Find Us</span>
              <h2>Our Office Location</h2>
              <p>{site.address}</p>
            </div>
            <div className="map-embed-wrapper">
              <iframe
                id="office-google-map"
                title="Samarth Technoologies Office Location"
                src="https://maps.google.com/maps?q=18.5013433,73.8414257(Samarth+Technoologies)&z=18&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-directions-row">
              <a
                id="get-directions-btn"
                href="https://www.google.com/maps/place/Samarth+Technoologies/@18.5013375,73.8410745,20.26z/data=!4m15!1m8!3m7!1s0x3bc2bff58ea7579b:0xf6173511be66605!2sVijayshree+Towers,+Pune,+Maharashtra+411030!3b1!8m2!3d18.5013213!4d73.841355!16s%2Fg%2F11lsnglzwg!3m5!1s0x3bc2bf7ec00e1f5f:0xe0231a57b12e8a0b!8m2!3d18.5013433!4d73.8414257!16s%2Fg%2F11vydxtkh7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Directions
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Response flow */}
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
