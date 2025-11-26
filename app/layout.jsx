// app/layout.jsx
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Syntra Digital Solutions",
  description:
    "Virtual assistance, customer support, marketing, and digital solutions — handled with structure, clarity, and care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon paths for static export */}
        <link rel="icon" href="/brand-assets/favicon.ico" />
        <link rel="icon" href="/brand-assets/favicon-32.png" />
        <link rel="icon" href="/brand-assets/favicon-192.png" />
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

          <div className="mt-10">
            <div className="max-w-7xl mx-auto px-6 text-center text-xs sm:text-sm text-[var(--syntra-text-muted)]">
              <p>
                Prefer to reach out directly?{" "}
                <a
                  href="/contact"
                  className="text-[var(--syntra-text-main)] underline-offset-2 hover:underline"
                >
                  Contact Syntra.
                </a>
              </p>
            </div>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
