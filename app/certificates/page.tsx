import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Gallery & Certificates',
  description: 'Certificate visuals are now merged with the main gallery library for easier review.',
  alternates: { canonical: '/gallery' }
};

export default function CertificatesPage() {
  redirect('/gallery#gallery-showcase');
}
