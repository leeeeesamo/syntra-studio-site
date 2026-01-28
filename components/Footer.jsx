// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--syntra-border-soft)] bg-black/20 backdrop-blur-sm mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-[var(--syntra-text-muted)]">
        <div className="grid gap-8 sm:grid-cols-3 items-start">
          {/* Navigation - Left */}
          <div>
            <p className="font-medium text-[var(--syntra-text-main)]">Navigation</p>
            <nav className="mt-2 flex flex-col gap-1 text-xs sm:text-sm">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/websites" className="hover:text-white transition-colors">Websites</Link>
              <Link href="/process" className="hover:text-white transition-colors">Process</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Brand + Tagline - Center */}
          <div className="text-xs sm:text-sm text-left sm:text-center">
            <p className="text-[var(--syntra-text-main)] font-medium">
              © Syntra Digital
            </p>
            <p className="mt-1">
              Web Design & Development
            </p>
            <p className="mt-2">
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </p>
            <p className="mt-1">
              <Link href="/work-with-us" className="hover:text-white transition-colors">
                Services
              </Link>
            </p>
          </div>

          {/* Legal - Right */}
          <div className="text-xs sm:text-sm text-left sm:text-right">
            <p className="font-medium text-[var(--syntra-text-main)]">Legal</p>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li><Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
