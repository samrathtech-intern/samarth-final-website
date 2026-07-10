type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, text, center }: SectionHeadingProps) {
  return (
    <div className={center ? 'section-heading center' : 'section-heading'}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
