import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { site } from '@/lib/data';

export function CTASection() {
  return (
    <AnimatedSection className="cta-section">
      <div className="container cta-card">
        <div>
          <span className="eyebrow">Ready to become audit-ready?</span>
          <h2>Share your certification goal. We’ll help you plan the next practical step.</h2>
          <p>
            Tell us your business type, current system, target standard and timeline. We will respond with a focused path for documentation, training and audit readiness.
          </p>
        </div>
        <div className="cta-actions">
          <Link href="/contact" className="btn btn-light">Contact Us</Link>
          <a className="btn btn-outline-light" href={`mailto:${site.email}?subject=Certification%20Consultancy%20Requirement`}>Email Now</a>
        </div>
      </div>
    </AnimatedSection>
  );
}
