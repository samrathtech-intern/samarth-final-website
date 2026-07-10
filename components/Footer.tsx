import Image from 'next/image';
import Link from 'next/link';
import { navItems, services, site, trustBadges } from '@/lib/data';
import { ViewCounter } from '@/components/ViewCounter';

export function Footer() {
  const footerServices = services.filter((s) => s.slug).slice(0, 6);
  return (
    <footer className="footer">
      <div className="container footer-cta-strip">
        <div>
          <span className="panel-kicker">Need certification support?</span>
          <strong>Start with a focused gap review and clear implementation plan.</strong>
        </div>
        <Link href="/contact" className="btn btn-light">Send Enquiry</Link>
      </div>

      <div className="container footer-grid">
        <div className="footer-main-col">
          <div className="footer-brand">
            <Image src={site.logo} alt={`${site.name} logo`} width={160} height={114} />
            <div>
              <strong>{site.name}</strong>
              <span>{site.tagline}</span>
            </div>
          </div>
          <p className="footer-note">
            Professional ISO, FSSAI, HACCP and food-safety consulting support for organisations that need clear documentation, practical implementation and dependable audit readiness.
          </p>
          <div className="footer-badge-row">
            {trustBadges.slice(0, 4).map((badge) => <span key={badge}>{badge}</span>)}
          </div>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Popular Services</h3>
          <ul>
            {footerServices.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <p className="footer-email-label">Primary</p>
          <a href={`mailto:${site.email}`} className="footer-email-primary">{site.email}</a>
          <p className="footer-email-label" style={{ marginTop: 24 }}>Alternative</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href={`mailto:${site.altEmail}`}>{site.altEmail}</a>
            <a href={`mailto:${site.altEmail2}`}>{site.altEmail2}</a>
          </div>
          <p style={{ marginTop: 24 }}>{site.address}</p>
          <p className="footer-meta">GST: {site.gst}</p>
          <p className="footer-meta">QCI: {site.qciMembership}</p>
          <p className="footer-meta">UDYAM: {site.udyam}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <ViewCounter />
      </div>
    </footer>
  );
}
