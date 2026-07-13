import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { site } from '@/lib/data';

export function CTASection() {
  return (
    <AnimatedSection className="cta-section">
      <div className="container cta-card">
        <div>
          <span className="eyebrow">Ready to become audit-ready?</span>
          <h2>Tell us your certification goal, and we'll guide you toward the right next step.</h2>
        </div>
        <div className="cta-actions">
          <Link href="/contact" className="btn btn-light">Contact Us</Link>
          <a className="btn btn-outline-light" href={`mailto:${site.email}?subject=Certification%20Consultancy%20Requirement`}>Email Now</a>
        </div>
      </div>
    </AnimatedSection>
  );
}
