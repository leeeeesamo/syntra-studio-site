// components/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="w-full backdrop-blur-md bg-black/20 border-b border-[var(--syntra-border-soft)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity">
          <img
            src="/brand-assets/logo-icon.svg"
            alt="Syntra Logo"
            className="h-12 sm:h-14"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide">
            Syntra Digital
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <nav className="flex gap-10 text-lg md:text-xl text-white">
            <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
            <Link href="/services" className="hover:opacity-80 transition-opacity">Services</Link>
            <Link href="/pricing" className="hover:opacity-80 transition-opacity">Pricing</Link>
            <Link href="/contact" className="hover:opacity-80 transition-opacity">Contact</Link>
            <Link href="/faq" className="hover:opacity-80 transition-opacity">FAQ</Link>
            <Link
              href="https://leeeeesamo.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              My Portfolio
            </Link>
          </nav>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl leading-none hover:opacity-80 transition-opacity"
          aria-label={open ? "Close menu" : "Open menu"}
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
            <nav className="flex flex-col px-6 py-6 gap-6 text-lg text-white">
              <Link href="/" onClick={close} className="hover:opacity-80 transition-opacity">Home</Link>
              <Link href="/services" onClick={close} className="hover:opacity-80 transition-opacity">Services</Link>
              <Link href="/pricing" onClick={close} className="hover:opacity-80 transition-opacity">Pricing</Link>
              <Link href="/contact" onClick={close} className="hover:opacity-80 transition-opacity">Contact</Link>
              <Link href="/faq" onClick={close} className="hover:opacity-80 transition-opacity">FAQ</Link>
              <Link
                href="https://leeeeesamo.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="hover:opacity-80 transition-opacity"
              >
                My Portfolio
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
