// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--syntra-border-soft)] bg-black/20 backdrop-blur-sm mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-[var(--syntra-text-muted)]">
        <div className="grid gap-8 sm:grid-cols-3 items-start">
          {/* Navigation - Left */}
          <div>
            <p className="font-medium text-[var(--syntra-text-main)]">Navigation</p>
            <nav className="mt-2 flex flex-col gap-1 text-xs sm:text-sm">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/services" className="hover:text-white">Services</a>
              <a href="/about" className="hover:text-white">About</a>
              <a href="/how-it-works" className="hover:text-white">How It Works</a>
              <a href="/work-with-us" className="hover:text-white">Work With Us</a>
            </nav>
          </div>

          {/* Brand + Tagline - Center */}
          <div className="text-xs sm:text-sm text-left sm:text-center">
            <p className="text-[var(--syntra-text-main)] font-medium">
              Syntra Digital Solutions
            </p>
            <p className="mt-1">
              Reliable by Design.
            </p>
            <p className="mt-2">
              Contact:{' '}
              <a href="mailto:hello@syntrasolutions.digital" className="hover:text-white">
                hello@syntrasolutions.digital
              </a>
            </p>
          </div>

          {/* Trusted by - Right */}
          <div className="text-xs sm:text-sm text-left sm:text-right">
            <p className="font-medium text-[var(--syntra-text-main)]">Legal</p>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-white">Terms of Service</a></li>
              <li className="mt-4">
                <a href="/contact" className="hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--syntra-border-soft)]">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-[10px] sm:text-xs text-[var(--syntra-text-muted)]">
          <p>© {new Date().getFullYear()} Syntra Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
