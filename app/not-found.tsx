import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p>The page you are looking for is unavailable. Use the main navigation or go back to the services page.</p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-primary">Go Home</Link>
          <Link href="/services" className="btn btn-secondary">View Services</Link>
        </div>
      </div>
    </section>
  );
}
