// app/layout.jsx
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

// SEO Configuration
const seoConfig = {
  defaultTitle: "Syntra Digital | Reliable by Design",
  description:
    "Custom website design and development built for performance, clarity, and long-term reliability.",
  canonical: "https://syntrasolutions.digital",
  twitter: {
    handle: "@syntradigital",
  },
};

// Google Analytics (GA4)
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-KZDQP8S2YT";

// JSON-LD structured data for the homepage
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: seoConfig.defaultTitle,
  description: seoConfig.description,
  url: seoConfig.canonical,
  logo: `${seoConfig.canonical}/brand-assets/logo.png`,
  sameAs: [
    `https://twitter.com/${seoConfig.twitter?.handle?.replace("@", "")}`,
    "https://www.linkedin.com/company/syntra-digital",
  ].filter(Boolean),
  areaServed: {
    "@type": "City",
    name: "Birmingham, Alabama",
  },
  priceRange: "$$$",
  openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00",
  telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+1234567890",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@syntrasolutions.digital",
};

export const metadata = {
  title: seoConfig.defaultTitle,
  description: seoConfig.description,
  metadataBase: new URL(seoConfig.canonical),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seoConfig.canonical,
    site_name: "Syntra Digital",
    title: "Syntra Digital | Reliable by Design",
    description:
      "Custom website design and development built for performance, clarity, and long-term reliability.",
    images: [
      {
        url: `${seoConfig.canonical}/brand-assets/og-image-2026.jpg`,
        width: 1200,
        height: 630,
        alt: "Syntra Digital — Reliable by Design",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: seoConfig.twitter.handle,
    site: seoConfig.twitter.handle,
    title: "Syntra Digital | Reliable by Design",
    description:
      "Custom website design and development built for performance, clarity, and long-term reliability.",
    cardType: "summary_large_image",
    images: [
      {
        url: `${seoConfig.canonical}/brand-assets/og-image-2026.jpg`,
        width: 1200,
        height: 630,
        alt: "Syntra Digital — Reliable by Design",
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
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

        {/* Google Analytics (GA4) */}
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga4-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  anonymize_ip: true,
                  page_path: window.location.pathname
                });
              `}
            </Script>
          </>
        ) : null}

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
        </div>
      </body>
    </html>
  );
}
