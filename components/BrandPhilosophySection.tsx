import { AnimatedSection } from '@/components/AnimatedSection';

const pillars = [
  {
    icon: '◎',
    title: 'Precision',
    text: 'Accurate systems, documentation and implementation tailored to your exact certification scope and process realities.',
    accent: 'philosophy-accent-1'
  },
  {
    icon: '⚡',
    title: 'Performance',
    text: 'Practical execution with measurable outcomes — gap studies, records and audit preparation that actually move the needle.',
    accent: 'philosophy-accent-2'
  },
  {
    icon: '↑',
    title: 'Progress',
    text: 'Continuous improvement and sustainable business growth through systems your team can own and maintain long-term.',
    accent: 'philosophy-accent-3'
  }
];

export function BrandPhilosophySection() {
  return (
    <AnimatedSection className="section philosophy-section">
      <div className="container">
        <div className="philosophy-header">
          <span className="eyebrow">Our Philosophy</span>
          <h2 className="philosophy-title">Precision. Performance. Progress.</h2>
          <p className="philosophy-subtitle">
            Three principles that guide every consulting engagement — from the first gap study to final certification.
          </p>
        </div>
        <div className="philosophy-grid">
          {pillars.map((pillar) => (
            <article className={`philosophy-card ${pillar.accent}`} key={pillar.title}>
              <div className="philosophy-card-icon" aria-hidden="true">{pillar.icon}</div>
              <div className="philosophy-card-body">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
              <div className="philosophy-card-glow" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
