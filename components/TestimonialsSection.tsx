import { AnimatedSection } from '@/components/AnimatedSection';
import { SectionHeading } from '@/components/SectionHeading';
import { testimonials } from '@/lib/data';

export function TestimonialsSection() {
  return (
    <AnimatedSection className="section section-soft testimonials-section">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Client feedback"
          title="What clients say about working with Samarth Technoologies."
        />
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <figure className="testimonial-card" key={item.name}>
              <span className="testimonial-quote-mark" aria-hidden="true">“</span>
              <blockquote>{item.quote}</blockquote>
              <figcaption>{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
