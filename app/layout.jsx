// app/layout.jsx
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Syntra Digital",
  description:
    "Custom website design and development built for performance, clarity, and long-term reliability.",
  metadataBase: new URL("https://syntrasolutions.digital"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    // Only include apple icon if you add it to /public
    // apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

// JSON-LD structured data (site-wide)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Syntra Digital",
  description:
    "Custom website design and development built for performance, clarity, and long-term reliability.",
  url: "https://syntrasolutions.digital",
  logo: "https://syntrasolutions.digital/brand-assets/logo.png",
  sameAs: ["https://leeeeesamo.github.io/"],
  priceRange: "$$$",
  telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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

          <main className="flex-1 pt-16">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
