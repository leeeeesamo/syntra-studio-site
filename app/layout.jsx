// app/layout.jsx
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// SEO Configuration
const seoConfig = {
  defaultTitle: 'Syntra Digital Solutions',
  description: 'Virtual assistance, customer support, marketing, and digital solutions — handled with structure, clarity, and care.',
  canonical: 'https://syntra-studio.com',
  twitter: {
    handle: '@syntradigital',
  }
};

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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: seoConfig.canonical,
    site_name: seoConfig.defaultTitle,
    images: [
      {
        url: `${seoConfig.canonical}/brand-assets/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: seoConfig.defaultTitle,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: seoConfig.twitter.handle,
    site: seoConfig.twitter.handle,
    cardType: 'summary_large_image',
  },
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
