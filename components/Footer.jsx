// components/Footer.jsx
import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61573469878959",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/syntra-digital-solutions/?viewAsMember=true",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/syntradigitalsolutions/",
    icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="w-full mt-24 border-t border-[var(--syntra-border-soft)] bg-black/20 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-12 text-sm text-[var(--syntra-text-muted)]">
        {/* subtle premium divider */}
        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {/* Pages */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--syntra-text-main)]">
              Pages
            </p>
            <nav className="mt-4 flex flex-col items-center gap-2.5 text-xs sm:text-sm">
              <Link href="/" className="transition-colors hover:text-white">Home</Link>
              <Link href="/about" className="transition-colors hover:text-white">About</Link>
              <Link href="/services" className="transition-colors hover:text-white">Services</Link>
              <Link href="/pricing" className="transition-colors hover:text-white">Pricing</Link>
              <Link href="/contact" className="transition-colors hover:text-white">Contact</Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--syntra-text-main)]">
              Legal
            </p>
            <nav className="mt-4 flex flex-col items-center gap-2.5 text-xs sm:text-sm">
              <Link href="/policies" className="transition-colors hover:text-white">Company Policies</Link>
              <Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
              <Link href="/terms-of-service" className="transition-colors hover:text-white">Terms of Service</Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--syntra-text-main)]">
              Resources
            </p>
            <nav className="mt-4 flex flex-col items-center gap-2.5 text-xs sm:text-sm">
              <Link href="/work-with-us" className="transition-colors hover:text-white">Work With Us</Link>
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
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-5 border-t border-[var(--syntra-border-soft)] pt-8">
          <div className="flex items-center gap-6">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--syntra-text-muted)] transition-colors hover:text-white"
                aria-label={`Syntra Digital on ${label}`}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-[0.65rem] text-[var(--syntra-text-muted)]">
            &copy; 2025 Syntra Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}