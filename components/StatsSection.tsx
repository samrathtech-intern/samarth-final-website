import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { stats } from '@/lib/data';

export function StatsSection() {
  return (
    <AnimatedSection className="section stats-section">
      <div className="container">
        <SectionHeading
          center
          eyebrow="By the numbers"
          title="A decade of practical, audit-ready consulting work."
          text="Years of certification, training and technology engagements across food, manufacturing and laboratory businesses."
        />
        <div className="stats-grid stats-grid-modern">
          {stats.map((stat) => (
            <div className="stat-card stat-card-modern" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
