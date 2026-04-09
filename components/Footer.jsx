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
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-[var(--syntra-text-muted)]">
        {/* subtle premium divider */}
        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        <div className="grid gap-10 grid-cols-3 items-start">
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
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t border-[var(--syntra-border-soft)] pt-6 text-xs text-[var(--syntra-text-muted)]">
          <div className="flex items-center gap-5">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--syntra-text-muted)] transition-colors hover:text-white"
                aria-label={`Syntra Digital on ${label}`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p>&copy; 2025 Syntra Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}