'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navItems, site } from '@/lib/data';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip-inner">
          <span className="top-strip-service">ISO • FSSAI • HACCP • BRC • Food Safety Training</span>
          <div className="top-strip-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span className="top-separator">•</span>
            <span>Pune, Maharashtra</span>
          </div>
        </div>
      </div>

      <div className="container navbar">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <Image src={site.logo} alt={`${site.name} logo`} className="brand-logo brand-logo-wordmark" width={200} height={144} priority />
          <span className="brand-copy">
            <strong>{site.name}</strong>
            <small>Consultancy • Training • Compliance</small>
          </span>
        </Link>

        <button
          className={isMenuOpen ? 'menu-toggle is-open' : 'menu-toggle'}
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={isMenuOpen ? 'mobile-nav-backdrop is-open' : 'mobile-nav-backdrop'} onClick={() => setIsMenuOpen(false)} aria-hidden="true" />

        <nav id="primary-navigation" className={isMenuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <div className="mobile-nav-heading">
            <span>Menu</span>
          </div>
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link href={item.href} key={item.href} className={isActive ? 'active' : undefined}>
                {item.label}
              </Link>
            );
          })}
          <a className="mobile-menu-cta" href={`mailto:${site.email}?subject=Certification%20Consultancy%20Enquiry%20from%20Website`}>
            Get Consultation
          </a>
        </nav>

        <a className="nav-cta" href={`mailto:${site.email}?subject=Certification%20Consultancy%20Enquiry%20from%20Website`}>
          Get Consultation
        </a>
      </div>
    </header>
  );
}
