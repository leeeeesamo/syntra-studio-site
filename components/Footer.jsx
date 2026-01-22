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
              <a href="/websites" className="hover:text-white">Websites</a>
              <a href="/process" className="hover:text-white">Process</a>
              <a href="/pricing" className="hover:text-white">Pricing</a>
              <a href="/contact" className="hover:text-white">Contact</a>
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
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </p>
            <p className="mt-1">
              <a href="/faq" className="hover:text-white">
                FAQ
              </a>
            </p>
          </div>

          {/* Legal - Right */}
          <div className="text-xs sm:text-sm text-left sm:text-right">
            <p className="font-medium text-[var(--syntra-text-main)]">Legal</p>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
