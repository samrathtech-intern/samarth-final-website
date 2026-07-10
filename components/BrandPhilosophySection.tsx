import { AnimatedSection } from '@/components/AnimatedSection';

const pillars = [
  {
    iconPath: '/icons/precision-icon.png',
    title: 'Precision',
    text: 'Accurate systems, documentation and implementation tailored to your exact certification scope and process realities.',
    accent: 'philosophy-accent-1'
  },
  {
    iconPath: '/icons/performance-icon.png',
    title: 'Performance',
    text: 'Practical execution with measurable outcomes — gap studies, records and audit preparation that actually move the needle.',
    accent: 'philosophy-accent-2'
  },
  {
    iconPath: '/icons/progress-icon.png',
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
              <div className="philosophy-card-icon" style={{ background: 'transparent' }} aria-hidden="true">
                <img src={pillar.iconPath} alt={`${pillar.title} icon`} style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
              </div>
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
