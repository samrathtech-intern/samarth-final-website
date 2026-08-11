import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RouteTransition } from '@/components/RouteTransition';
import { Preloader } from '@/components/Preloader';
import { FloatingWidget } from '@/components/FloatingWidget';
import { TrustedByMarquee } from '@/components/TrustedByMarquee';

import { site } from '@/lib/data';

export const viewport: Viewport = {
  themeColor: '#0F172A',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),

  title: {
    default: `${site.name} | ISO, FSSAI & Food Safety Consultancy in Pune`,
    template: `%s | ${site.name}`,
  },

  description:
    'Samarth Technoologies provides ISO 9001, ISO 22000, FSSAI, HACCP, BRC, GMP/GHP and food-safety certification consultancy, training and audit-readiness support from Pune, Maharashtra.',

  keywords: [
    'Samarth Technoologies',
    'ISO consultant Pune',
    'ISO certification consultant Pune',
    'ISO 9001 consultancy Pune',
    'ISO 22000 consultancy Pune',
    'FSSAI consultant Pune',
    'FSSAI FoSTaC training Pune',
    'HACCP consultancy Pune',
    'BRC food safety consultancy',
    'food safety consultant Pune',
    'GMP GHP consultancy Pune',
    'food safety consultancy India',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: site.domain,
    siteName: site.name,
    locale: 'en_IN',

    title: `${site.name} | ISO, FSSAI & Food Safety Consultancy in Pune`,

    description:
      'ISO, FSSAI, HACCP, BRC, GMP/GHP and food safety certification consultancy and training services from Pune, Maharashtra.',

    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: `${site.name} - ISO, FSSAI & Food Safety Consultancy`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: `${site.name} | ISO, FSSAI & Food Safety Consultancy in Pune`,

    description:
      'ISO, FSSAI, HACCP, BRC, GMP/GHP and food safety certification consultancy and training services from Pune, Maharashtra.',

    images: ['/og-image.svg'],
  },

  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
        sizes: '48x48',
      },
      {
        url: '/favicon-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/favicon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],

    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  },

  manifest: '/manifest.webmanifest',

  verification: {
    google: 'ybkgi36I30rKuzLdPW0mhoFcxCh2kQ_Z9Xvsiz0ireg',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',

    '@id': `${site.domain}/#organization`,

    name: site.name,

    url: site.domain,

    logo: `${site.domain}${site.logo}`,

    email: site.email,

    founder: site.owner,

    description:
      'Samarth Technoologies provides ISO, FSSAI, HACCP, BRC, GMP/GHP and food safety certification consultancy, training and audit-readiness support.',

    address: {
      '@type': 'PostalAddress',

      streetAddress:
        'Vijayashree Coop. Housing Society Ltd. SR. No. 129, Flat B-36, Near Global Hospital, Dattawadi',

      addressLocality: 'Pune',

      addressRegion: 'Maharashtra',

      postalCode: '411030',

      addressCountry: 'IN',
    },

    areaServed: {
      '@type': 'Country',
      name: 'India',
    },

    serviceType: [
      'ISO Certification Consultancy',
      'FSSAI Consultancy',
      'HACCP Consultancy',
      'BRC Consultancy',
      'Food Safety Consultancy',
      'Food Safety Training',
      'GMP GHP Consultancy',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data / JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body suppressHydrationWarning>
        <Preloader />

        <Header />

        <RouteTransition>
          {children}
        </RouteTransition>

        <FloatingWidget />

        <TrustedByMarquee />

        <Footer />
      </body>
    </html>
  );
}