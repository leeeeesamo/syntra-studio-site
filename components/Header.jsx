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
            src="/brand-assets/logo-mark.svg"
            alt="Syntra Logo"
            className="h-8"
          />
          <span className="font-semibold tracking-wide text-[var(--syntra-heading)]">
            Syntra Digital Solutions
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm text-[var(--syntra-text-muted)]">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/deck" className="hover:text-white">Deck</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>

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
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
              <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link href="/deck" onClick={() => setOpen(false)}>Deck</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
