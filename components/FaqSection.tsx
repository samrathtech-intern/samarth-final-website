import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { faqs } from '@/lib/data';

export function FaqSection() {
  return (
    <AnimatedSection className="section faq-section">
      <div className="container">
        <SectionHeading
          center
          eyebrow="FAQ"
          title="Answers to common questions before we start."
          text="Can't find what you're looking for? Reach out and we'll respond directly."
        />
        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                {item.question}
                <span className="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
