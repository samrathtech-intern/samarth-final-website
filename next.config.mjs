import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about-us.htm', destination: '/about', permanent: true },
      { source: '/our-team.htm', destination: '/team', permanent: true },
      { source: '/our-credentials.htm', destination: '/credentials', permanent: true },
      { source: '/food-safety.htm', destination: '/food-safety', permanent: true },
      { source: '/gallery.htm', destination: '/gallery', permanent: true },
      { source: '/certificates.htm', destination: '/certificates', permanent: true },
      { source: '/certificates.htm@pageno=2.html', destination: '/certificates', permanent: true },
      { source: '/consultancy-services.htm', destination: '/services', permanent: true },
      { source: '/contact-us.htm', destination: '/contact', permanent: true },
      { source: '/iso-9001-2015-consultancy.htm', destination: '/services/iso-9001-2015-consultancy', permanent: true },
      { source: '/iso-22000-2018-support-service.htm', destination: '/services/iso-22000-2018-consultancy-training', permanent: true },
      { source: '/iso-17020-accreditation-consultancy.htm', destination: '/services/iso-17020-accreditation-consultancy', permanent: true },
      { source: '/global-g-a-p-good-agricultural-practices-consultancy.htm', destination: '/services/global-gap-good-agricultural-practices-consultancy', permanent: true },
      { source: '/gmp-consultancy.htm', destination: '/services/gmp-consultancy', permanent: true },
      { source: '/ghp-consultancy.htm', destination: '/services/ghp-consultancy', permanent: true },
      { source: '/fssc-consultancy.htm', destination: '/services/fssc-consultancy', permanent: true },
      { source: '/iso-45001-consultancy.htm', destination: '/services/iso-45001-consultancy', permanent: true },
      { source: '/ohsas-45001-2018-consultancy.htm', destination: '/services/iso-45001-consultancy', permanent: true },
      { source: '/iso-17025-accreditation-consultancy.htm', destination: '/services/iso-17025-accreditation-consultancy', permanent: true },
      { source: '/haccp-consultancy.htm', destination: '/services/haccp-consultancy', permanent: true },
      { source: '/brc-consultancy.htm', destination: '/services/brc-consultancy', permanent: true },
      { source: '/food-testing-laboratory-setup-consultancy.htm', destination: '/services/food-testing-laboratory-setup-consultancy', permanent: true },
      { source: '/food-processing-plant-turnkey-project-consultancy.htm', destination: '/services/food-processing-plant-turnkey-project-consultancy', permanent: true },
      { source: '/food-industry-training-services.htm', destination: '/services/food-industry-training-services', permanent: true }
    ];
  }
};

export default nextConfig;
