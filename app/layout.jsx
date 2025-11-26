import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Syntra Digital Solutions',
  description:
    'Virtual assistance, customer support, marketing, and digital solutions — all in one reliable partner.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/brand-assets/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/brand-assets/favicon-32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/brand-assets/favicon-180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/brand-assets/favicon-192.png"
        />
      </head>

      <body
        className="
          min-h-screen
          bg-gradient-to-br
          from-[var(--syntra-soft-bg)]
          via-[var(--syntra-deep-bg)]
          to-[var(--syntra-text-dark)]
          text-[var(--syntra-text-main)]
          font-sans
          antialiased
        "
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
