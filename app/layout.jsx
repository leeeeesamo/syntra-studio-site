// app/layout.jsx
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import MetaPixel from "@/components/MetaPixel";
import ConsentAnalytics from "@/components/ConsentAnalytics";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

// SEO Configuration
const seoConfig = {
  siteName: "Syntra Digital Services",
  defaultTitle: "Syntra Digital Services | Reliable by Design",
  description:
    "Custom website design and development built for performance, clarity, and long-term reliability.",
  canonical: "https://syntradigitalservices.com",
  twitter: {
    handle: "@syntradigital",
  },
};

// Google Analytics (GA4) — loaded via ConsentAnalytics after consent
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-KZDQP8S2YT";

// JSON-LD structured data for the homepage
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: seoConfig.siteName,
  alternateName: ["Syntra Digital", "Syntra Digital Solutions"],
  description: seoConfig.description,
  url: seoConfig.canonical,
  logo: `${seoConfig.canonical}/brand-assets/syntra-digital-services-logo.png`,
  sameAs: [
    `https://twitter.com/${seoConfig.twitter?.handle?.replace("@", "")}`,
    "https://www.linkedin.com/company/syntra-digital-services/",
  ].filter(Boolean),
  areaServed: {
    "@type": "City",
    name: "Birmingham, Alabama",
  },
  priceRange: "$$$",
  openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00",
  ...(process.env.NEXT_PUBLIC_CONTACT_PHONE
    ? { telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE }
    : {}),
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@syntradigitalservices.com",
};

export const metadata = {
  title: seoConfig.defaultTitle,
  description: seoConfig.description,
  metadataBase: new URL(seoConfig.canonical),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoConfig.canonical,
    siteName: seoConfig.siteName,
    title: seoConfig.defaultTitle,
    description:
      "Custom website design and development built for performance, clarity, and long-term reliability.",
    images: [
      {
        url: `${seoConfig.canonical}/brand-assets/og-image-2026.jpg`,
        width: 1200,
        height: 630,
        alt: "Syntra Digital Services — Reliable by Design",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: seoConfig.twitter.handle,
    site: seoConfig.twitter.handle,
    title: seoConfig.defaultTitle,
    description:
      "Custom website design and development built for performance, clarity, and long-term reliability.",
    cardType: "summary_large_image",
    images: [
      {
        url: `${seoConfig.canonical}/brand-assets/og-image-2026.jpg`,
        width: 1200,
        height: 630,
        alt: "Syntra Digital Services — Reliable by Design",
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Security: Referrer policy (meta fallback for static hosting) */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Meta domain verification — static, not consent-gated */}
        <meta
          name="facebook-domain-verification"
          content="6ic1fbqjx8rw2e12c064gr17zx3mgg"
        />

        {/* Preload hero background image — responsive WebP for faster LCP */}
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/brand-assets/hero-banner-mobile.webp"
          media="(max-width: 767px)"
        />
        <link
          rel="preload"
          as="image"
          type="image/webp"
          href="/brand-assets/hero-banner.webp"
          media="(min-width: 768px)"
        />

        {/* Google Consent Mode v2 — all optional storage denied by default.
            This inline stub runs during HTML parse, before any Google tag
            or analytics request, and sends no network traffic itself. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />

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
          <main className="flex-1">{children}</main>

          <Footer />
          <CookieConsent />
          <MetaPixel />
          <ConsentAnalytics gaId={GA_MEASUREMENT_ID} />
        </div>
      </body>
    </html>
  );
}
