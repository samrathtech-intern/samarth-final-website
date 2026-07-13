import { SafeImage } from '@/components/SafeImage';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  badges?: string[];
  proofTitle?: string;
  proofItems?: string[];
};

export function PageHero({ eyebrow, title, text, image, imageAlt, badges = [], proofTitle, proofItems = [] }: PageHeroProps) {
  return (
    <div className="container page-hero-grid">
      <div className="page-hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        {badges.length > 0 ? (
          <div className="page-hero-badges" aria-label="Page highlights">
            {badges.map((badge) => <span key={badge}>{badge}</span>)}
          </div>
        ) : null}
      </div>

      <div className="page-hero-media" aria-hidden={!image}>
        {image ? (
          <SafeImage src={image} alt={imageAlt || title} loading="eager" fallbackSrc="/brand/samarth-emblem.png" />
        ) : (
          <div className="page-hero-sigil"><span>समर्थ</span></div>
        )}
        {proofTitle && proofItems.length > 0 && (
          <div className="page-hero-proof-card">
            <span>{proofTitle}</span>
            <div>
              {proofItems.map((item) => (
                <strong key={item}>{item}</strong>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
