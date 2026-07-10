import { AnimatedSection } from '@/components/AnimatedSection';
import { trustBadges } from '@/lib/data';

export function TrustBar() {
  return (
    <AnimatedSection className="trust-bar" aria-label="Credentials and affiliations">
      <div className="container trust-bar-inner">
        <span className="trust-bar-label">Backed by</span>
        <ul className="trust-bar-list">
          {trustBadges.map((badge) => (
            <li key={badge}>{badge}</li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
