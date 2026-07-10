import Link from 'next/link';
import { getServiceIconPath } from '@/components/ServiceIcons';
import type { Service } from '@/lib/data';

export function ServiceCard({ service, category }: { service: Service; category?: string }) {
  const chipLabel = category || 'Consultancy';
  const iconPath = getServiceIconPath(service.title);

  const cardInner = (
    <>
      <div className="service-card-body service-card-icon-layout">
        <div className="service-card-meta">
          <span className="chip">{chipLabel}</span>
        </div>
        <div className="service-icon-container" style={{ background: 'transparent' }}>
          <img src={iconPath} alt={`${service.title} icon`} style={{ width: '72px', height: '72px', objectFit: 'contain' }} />
        </div>
        <h3>{service.title}</h3>
        <p>{service.short}</p>
        <span className="text-link" aria-hidden="true">
          {service.slug ? 'View service' : 'Enquire now'}
          <span> →</span>
        </span>
      </div>
    </>
  );

  if (service.slug) {
    return (
      <Link
        href={`/services/${service.slug}`}
        className="service-card service-card-modern"
        aria-label={`View details for ${service.title}`}
      >
        {cardInner}
      </Link>
    );
  }

  return (
    <Link
      href="/contact"
      className="service-card service-card-modern"
      aria-label={`Enquire about ${service.title}`}
    >
      {cardInner}
    </Link>
  );
}
