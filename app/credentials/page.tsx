import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Gallery & Certificates',
  description: 'Professional certificates, training photos and site-work visuals from Samarth Technoologies.',
  alternates: { canonical: '/gallery' }
};

export default function CredentialsPage() {
  redirect('/gallery');
}
