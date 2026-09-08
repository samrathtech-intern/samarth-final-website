import type { Metadata } from 'next';
import './globals-admin.css';

export const metadata: Metadata = {
  title: 'Admin CMS | Samarth Technoologies',
  description: 'Dynamic Content Management System for Gallery and Marquee Logos',
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-body">
      {children}
    </div>
  );
}
