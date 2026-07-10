import Link from 'next/link';
import { SafeImage } from '@/components/SafeImage';
import type { Service } from '@/lib/data';

export function ServiceCard({ service, category }: { service: Service; category?: string }) {
  const chipLabel = category || 'Consultancy';

  const cardInner = (
    <>
      <div className="service-image-wrap">
        <SafeImage src={service.image} alt={service.title} className="service-image" loading="lazy" fallbackSrc="/illustrations/hero-compliance-consulting.svg" />
      </div>
      <div className="service-card-body">
        <div className="service-card-meta">
          <span className="chip">{chipLabel}</span>
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
