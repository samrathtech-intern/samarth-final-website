import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RouteTransition } from '@/components/RouteTransition';
import { Preloader } from '@/components/Preloader';
import { site } from '@/lib/data';


export const viewport: Viewport = {
  themeColor: '#D64312',
  colorScheme: 'light'
};

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} | ISO, FSSAI & Food Safety Consultancy in Pune`,
    template: `%s | ${site.name}`
  },
  description: 'Samarth Technoologies provides ISO 9001, ISO 22000, FSSAI, HACCP, BRC, GMP/GHP and food-safety certification consultancy, training and audit-readiness support from Pune, Maharashtra.',
  keywords: [
    'Samarth Technoologies',
    'ISO 9001 consultancy Pune',
    'ISO 22000 consultancy Pune',
    'FSSAI FoSTaC training Pune',
    'HACCP consultancy Pune',
    'BRC food safety consultancy',
    'food testing laboratory setup consultancy',
    'GMP GHP consultancy Pune'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.domain,
    title: `${site.name} | ISO, FSSAI & Food Safety Consultancy`,
    description: site.tagline,
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: site.name }]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ISO, FSSAI & Food Safety Consultancy`,
    description: site.tagline,
    images: ['/og-image.svg']
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/brand/apple-touch-icon.png'
  },
  manifest: '/manifest.webmanifest'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    url: site.domain,
    logo: `${site.domain}${site.logo}`,
    email: site.email,
    founder: site.owner,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vijayashree Coop. Housing Society Ltd. SR. No. 129, Flat B-36, Near Global Hospital, Dattawadi',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411030',
      addressCountry: 'IN'
    },
    areaServed: 'India',
    serviceType: 'ISO, FSSAI, HACCP, BRC and food safety certification consultancy and training'
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Preloader />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Header />
        <RouteTransition>{children}</RouteTransition>
        <Footer />
      </body>
    </html>
  );
}
