// components/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full backdrop-blur-md bg-black/20 border-b border-[var(--syntra-border-soft)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/brand-assets/logo-icon.svg"
            alt="Syntra Logo"
            className="h-9 sm:h-10"
          />
          <span className="text-sm sm:text-base md:text-lg font-semibold tracking-wide text-[var(--syntra-heading)]">
            Syntra Digital Solutions
          </span>
        </Link>

        {/* Desktop Nav + CTA */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <nav className="flex gap-8 text-sm md:text-base text-[var(--syntra-text-muted)]">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/about" className="hover:text-white">About</Link>

            {/* Services with dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className="hover:text-white inline-flex items-center gap-1"
              >
                Services
                <span className="text-[10px]">▾</span>
              </Link>
              <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-[var(--syntra-border-soft)] bg-black/90 backdrop-blur-md shadow-lg opacity-0 scale-95 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition duration-150 ease-out">
                <nav className="flex flex-col py-2 text-xs">
                  <Link
                    href="/services/executive-assistance"
                    className="px-4 py-2 hover:text-white hover:bg-white/5"
                  >
                    Executive &amp; Virtual Assistance
                  </Link>
                  <Link
                    href="/services/customer-service-support"
                    className="px-4 py-2 hover:text-white hover:bg-white/5"
                  >
                    Customer Service Support
                  </Link>
                  <Link
                    href="/services/operations-systems-support"
                    className="px-4 py-2 hover:text-white hover:bg-white/5"
                  >
                    Operations &amp; Systems Support
                  </Link>
                  <Link
                    href="/services/web-design-digital-presence"
                    className="px-4 py-2 hover:text-white hover:bg-white/5"
                  >
                    Web Design &amp; Digital Presence
                  </Link>
                </nav>
              </div>
            </div>

            <Link href="/mission" className="hover:text-white">Our Mission</Link>
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full font-medium text-xs sm:text-sm px-4 py-2 text-white bg-gradient-to-r from-[var(--syntra-gradient-start)] to-[var(--syntra-gradient-end)] shadow-lg hover:opacity-90"
          >
            Book a Discovery Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/40 backdrop-blur-md border-t border-[var(--syntra-border-soft)]"
          >
            <nav className="flex flex-col px-6 py-6 gap-6 text-sm">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
              <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link href="/mission" onClick={() => setOpen(false)}>Our Mission</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
