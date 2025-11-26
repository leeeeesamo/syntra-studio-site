import '../src/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { basePath } from 'next.config';

export const metadata = {
  title: 'Syntra Digital Solutions',
  description:
    'Virtual assistance, customer support, marketing, and digital solutions â€” all in one reliable partner.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/syntra-studio-site/brand-assets/favicon.ico" />
        <link rel="icon" href="/syntra-studio-site/brand-assets/favicon-32.png" />
        <link rel="icon" href="/syntra-studio-site/brand-assets/favicon-192.png" />
      </head>

      <body className="min-h-screen bg-gradient-to-br
        from-[var(--syntra-soft-bg)]
        via-[var(--syntra-deep-bg)]
        to-[var(--syntra-text-dark)]
        text-[var(--syntra-text-main)] font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
