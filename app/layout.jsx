// app/layout.jsx
import "@/styles/globals.css";
import { DefaultSeo } from 'next-seo';
import Script from 'next/script';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import seoConfig from '@/../next-seo.config';

// JSON-LD structured data for the homepage
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: seoConfig.defaultTitle,
  description: seoConfig.description,
  url: seoConfig.canonical,
  logo: `${seoConfig.canonical}/brand-assets/logo.png`,
  sameAs: [
    `https://twitter.com/${seoConfig.twitter?.handle?.replace('@', '')}`,
    seoConfig.additionalLinkTags?.find(link => link.rel === 'author')?.href
  ].filter(Boolean),
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    addressCountry: 'Your Country'
  },
  openingHours: 'Mo,Tu,We,Th,Fr 09:00-17:00',
  telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1234567890',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@syntra-studio.com'
};

export const metadata = {
  title: seoConfig.defaultTitle,
  description: seoConfig.description,
  metadataBase: new URL(seoConfig.canonical),
  openGraph: seoConfig.openGraph,
  twitter: seoConfig.twitter,
  alternates: {
    canonical: seoConfig.canonical,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <DefaultSeo {...seoConfig} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>

      <body
        className="
          min-h-screen font-sans antialiased
          bg-[var(--syntra-deep-bg)]
          text-[var(--syntra-text-main)]
        "
      >
        <div className="flex flex-col min-h-screen">
          <Header />

          {/* Page content */}
          <main className="flex-1 pt-24">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
