'use client';

import { useState } from 'react';
import Link from 'next/link';

// ---------- SVG icon helpers (inline to avoid extra deps) ----------
const IconCheck = () => (
  <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const IconAlert = () => (
  <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);

const IconVideo = () => (
  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

const IconSearch = () => (
  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const IconShield = () => (
  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const IconUser = () => (
  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

// ---------- Component ----------
export default function WebsiteCheckPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    company: '', // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim() || formData.name.trim().length < 2)
      return 'Please enter your name.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      return 'Please enter a valid email address.';
    try {
      const url = formData.website.trim();
      if (!url) return 'Please enter your website URL.';
      if (!/^https?:\/\//i.test(url) && !url.includes('.'))
        return 'Please enter a valid website URL (e.g. yoursite.com).';
    } catch {
      return 'Please enter a valid website URL.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.company.trim()) return; // honeypot

    const error = validateForm();
    if (error) {
      setStatus({ type: 'error', message: error });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/maqbnjal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'New Website Review Request',
          name: formData.name,
          email: formData.email,
          website: formData.website,
          source: 'website-check-landing',
        }),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: "Thanks! I'll review your site and send your video within 1–2 days.",
        });
        setFormData({ name: '', email: '', website: '', company: '' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = (e) => {
    e.preventDefault();
    document.getElementById('review-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  // ----------------------------------------------------------------
  return (
    <div className="overflow-hidden">
      {/* ======================== HERO ======================== */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950/95" />
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.05))]" />
          </div>
          <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs sm:text-sm font-medium uppercase tracking-wider mb-8">
            <IconSearch />
            100% Free — No Strings Attached
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100/90">
              Free Website Review for Local Businesses
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            I&rsquo;ll record a quick 2–3 minute video showing exactly what I&rsquo;d improve on your site to help turn more visitors into real calls and customers.
          </p>

          <button
            onClick={scrollToForm}
            className="btn-primary text-lg px-8 py-4 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow"
          >
            Request Your Free Review
          </button>
        </div>
      </section>

      {/* ======================== PROBLEM ======================== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
            Most Websites Are Close — But Missing a Few Key Things
          </h2>

          <div className="space-y-5 mb-10">
            {[
              'Unclear calls-to-action that leave visitors guessing what to do next',
              'Slow mobile load times that cause people to leave before the page finishes',
              'Confusing or cluttered layouts that bury the most important information',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-900/50 border border-slate-800/60 rounded-xl p-4">
                <IconAlert />
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Small changes in these areas can make a big difference in whether someone actually reaches out.
          </p>
        </div>
      </section>

      {/* ======================== OFFER ======================== */}
      <section className="py-20 md:py-28 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            What You&rsquo;ll Get
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <IconVideo />,
                title: 'Personal Video Review',
                desc: 'A short, honest walkthrough of your site with specific improvement suggestions.',
              },
              {
                icon: <IconSearch />,
                title: 'Actionable Insights',
                desc: 'Clear recommendations focused on turning more visitors into leads and customers.',
              },
              {
                icon: <IconShield />,
                title: 'Zero Obligation',
                desc: 'No cost. No pressure. No follow-up sales pitch. Just useful insight you can use right away.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6 sm:p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-blue-300 font-medium mt-10 text-lg">
            No cost. No pressure. Just useful insight.
          </p>
        </div>
      </section>

      {/* ======================== VIDEO PLACEHOLDER (Optional) ======================== */}
      <section className="py-16 md:py-20 border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Here&rsquo;s What a Review Looks Like
          </h2>
          <div className="aspect-video bg-slate-900/60 border border-slate-800/60 rounded-2xl flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-slate-500 text-sm">Example video coming soon</p>
          </div>
        </div>
      </section>

      {/* ======================== FORM / CTA ======================== */}
      <section id="review-form" className="py-20 md:py-28 border-t border-slate-800/50 scroll-mt-24">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Request Your Free Website Review
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Fill out the form below and I&rsquo;ll send you a personalized video review.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            {/* Status messages */}
            {status && (
              <div
                className={`p-4 rounded-xl text-sm ${
                  status.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/20 text-green-300'
                    : 'bg-red-500/10 border border-red-500/20 text-red-300'
                }`}
              >
                {status.message}
              </div>
            )}

            <div>
              <label htmlFor="wc-name" className="block text-sm font-medium text-slate-300 mb-1.5">
                Name
              </label>
              <input
                id="wc-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full p-3 rounded-xl bg-black/30 border border-[var(--syntra-border-soft)] text-white text-sm placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="wc-email" className="block text-sm font-medium text-slate-300 mb-1.5">
                Email
              </label>
              <input
                id="wc-email"
                type="email"
                name="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full p-3 rounded-xl bg-black/30 border border-[var(--syntra-border-soft)] text-white text-sm placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="wc-website" className="block text-sm font-medium text-slate-300 mb-1.5">
                Website URL
              </label>
              <input
                id="wc-website"
                type="text"
                name="website"
                placeholder="yoursite.com"
                value={formData.website}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full p-3 rounded-xl bg-black/30 border border-[var(--syntra-border-soft)] text-white text-sm placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-colors"
              />
            </div>

            {/* Honeypot */}
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              style={{ display: 'none' }}
              aria-hidden="true"
              tabIndex="-1"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center text-center text-base py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Sending...
                </>
              ) : (
                'Send My Review Request'
              )}
            </button>
          </form>

          <p className="text-center text-slate-500 text-sm mt-5">
            I&rsquo;ll review your site and send your video within 1–2 days.
          </p>
        </div>
      </section>

      {/* ======================== ABOUT ======================== */}
      <section className="py-20 md:py-28 border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-slate-900/50 border border-slate-800/60 rounded-2xl p-6 sm:p-8">
            <div className="shrink-0 w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <IconUser />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">About</h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                I work with small businesses to improve their websites and backend systems. Most sites don&rsquo;t need a full rebuild—just a few smart tweaks that make it easier for customers to take action.
              </p>
              <Link
                href="/services"
                className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
              >
                Learn more about what I do &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== FINAL CTA ======================== */}
      <section className="py-16 md:py-24 border-t border-slate-800/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to See What&rsquo;s Holding Your Site Back?
          </h2>
          <p className="text-slate-400 mb-8 text-base sm:text-lg">
            It only takes 30 seconds to request your free review.
          </p>
          <button
            onClick={scrollToForm}
            className="btn-primary text-lg px-8 py-4"
          >
            Request Your Free Review
          </button>
        </div>
      </section>
    </div>
  );
}
