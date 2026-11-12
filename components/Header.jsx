// components/Header.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const CTA = { href: "/website-check/", label: "Get Free Review" };

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    close();
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const linkClass = (href) =>
    `relative px-0.5 py-2 text-[15px] font-medium transition-colors duration-200 ${
      isActive(href) ? "text-white" : "text-slate-300 hover:text-white"
    }`;

  return (
    <header className="w-full backdrop-blur-md bg-black/20 border-b border-[var(--syntra-border-soft)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity"
        >
          <img
            src="/brand-assets/logo-icon.svg"
            alt="Syntra Logo"
            className="h-9 sm:h-10 w-auto"
          />
          <span className="text-base sm:text-lg font-medium tracking-wide whitespace-nowrap">
            Syntra Digital Solutions
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-6 xl:gap-7" aria-label="Primary">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass(href)}>
                {label}
                {isActive(href) && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
                )}
              </Link>
            ))}
          </nav>
          <Link href={CTA.href} className="nav-cta">
            {CTA.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2 -mr-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden bg-black/40 backdrop-blur-md border-t border-[var(--syntra-border-soft)]"
          >
            <nav
              className="flex flex-col px-5 sm:px-6 py-3 text-[15px] text-white"
              aria-label="Mobile"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={close}
                  className={`py-3 border-b border-white/5 last:border-b-0 ${
                    isActive(href) ? "text-blue-300" : "text-slate-200"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                href={CTA.href}
                onClick={close}
                className="nav-cta justify-center w-full mt-3 mb-2"
              >
                {CTA.label}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
