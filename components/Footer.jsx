// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-24 border-t border-[var(--syntra-border-soft)] bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-[var(--syntra-text-muted)]">
        {/* subtle premium divider */}
        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        <div className="grid gap-10 sm:grid-cols-3 items-start">
          {/* Navigation - Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--syntra-text-main)]">
              Navigation
            </p>
            <nav className="mt-3 flex flex-col gap-2 text-xs sm:text-sm">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <Link href="/about" className="transition-colors hover:text-white">
                About
              </Link>
              <Link href="/services" className="transition-colors hover:text-white">
                Services
              </Link>
              <Link href="/pricing" className="transition-colors hover:text-white">
                Pricing
              </Link>
              <Link href="/contact" className="transition-colors hover:text-white">
                Contact
              </Link>
              <Link href="/faq" className="transition-colors hover:text-white">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Brand + Tagline - Center */}
          <div className="text-left sm:text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--syntra-text-main)]">
              Syntra Digital
            </p>
            <p className="mt-3 text-sm text-[var(--syntra-text-muted)]">
              Websites and backend systems built to help businesses run smoother,
              communicate clearly, and grow with confidence.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-blue-300/80">
              Reliable by Design
            </p>
          </div>

          {/* Legal - Right */}
          <div className="text-left sm:text-right">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--syntra-text-main)]">
              Legal
            </p>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/policies" className="transition-colors hover:text-white">
                  Company Policies
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--syntra-border-soft)] pt-6 text-xs text-[var(--syntra-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Syntra Digital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/company/syntra-digital"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
              aria-label="Syntra Digital on LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}