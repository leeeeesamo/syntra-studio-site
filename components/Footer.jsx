// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-24 border-t border-[var(--syntra-border-soft)] bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-[var(--syntra-text-muted)]">
        {/* subtle premium divider */}
        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        <div className="grid gap-10 grid-cols-2 sm:grid-cols-4 items-start">
          {/* Pages */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--syntra-text-main)]">
              Pages
            </p>
            <nav className="mt-3 flex flex-col gap-2 text-xs sm:text-sm">
              <Link href="/" className="transition-colors hover:text-white">Home</Link>
              <Link href="/about" className="transition-colors hover:text-white">About</Link>
              <Link href="/services" className="transition-colors hover:text-white">Services</Link>
              <Link href="/pricing" className="transition-colors hover:text-white">Pricing</Link>
              <Link href="/contact" className="transition-colors hover:text-white">Contact</Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--syntra-text-main)]">
              Resources
            </p>
            <nav className="mt-3 flex flex-col gap-2 text-xs sm:text-sm">
              <Link href="/faq" className="transition-colors hover:text-white">FAQ</Link>
              <Link href="/website-check/" className="transition-colors hover:text-white">Free Website Review</Link>
              <a
                href="https://leeeeesamo.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                My Portfolio
              </a>
              <a
                href="https://www.linkedin.com/company/syntra-digital"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                LinkedIn
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--syntra-text-main)]">
              Legal
            </p>
            <nav className="mt-3 flex flex-col gap-2 text-xs sm:text-sm">
              <Link href="/policies" className="transition-colors hover:text-white">Company Policies</Link>
              <Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
              <Link href="/terms-of-service" className="transition-colors hover:text-white">Terms of Service</Link>
            </nav>
          </div>

          {/* Brand */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--syntra-text-main)]">
              Syntra Digital
            </p>
            <p className="mt-3 text-xs sm:text-sm text-[var(--syntra-text-muted)]">
              Websites and tools built to help businesses run smoother,
              communicate clearly, and grow with confidence.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-blue-300/80">
              Reliable by Design
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--syntra-border-soft)] pt-6 text-xs text-[var(--syntra-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Syntra Digital. All rights reserved.</p>
          <p>Birmingham, Alabama</p>
        </div>
      </div>
    </footer>
  );
}