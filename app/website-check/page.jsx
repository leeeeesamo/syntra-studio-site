'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  formWrapperClass,
  inputClass,
  statusClass,
  submitButtonClass,
  fieldGridClass,
  spinnerClass,
  FORMSPREE_ENDPOINT,
} from '@/lib/form-styles';

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
    businessName: '',
    email: '',
    website: '',
    feedback: '',
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
    if (!formData.businessName.trim() || formData.businessName.trim().length < 2)
      return 'Please enter your business name.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      return 'Please enter a valid email address.';
    const url = formData.website.trim();
    if (!url) return 'Please enter your website URL.';
    if (!/^https?:\/\//i.test(url) && !url.includes('.'))
      return 'Please enter a valid website URL (e.g. yoursite.com).';
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
      const payload = {
        _subject: 'New Website Review Request',
        name: formData.name,
        businessName: formData.businessName,
        email: formData.email,
        website: formData.website,
        source: 'website-check-landing',
      };
      if (formData.feedback.trim()) {
        payload.feedback = formData.feedback;
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (response.ok) {
        setStatus({
          type: 'success',
          message: "Thanks! I'll review your site and send your video within 1–2 business days.",
        });
        setFormData({ name: '', businessName: '', email: '', website: '', feedback: '', company: '' });
      } else {
        const message =
          result?.error ||
          result?.errors?.[0]?.message ||
          'Something went wrong. Please try again.';
        setStatus({ type: 'error', message });
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
              Free Website Review to Help You Get More Calls, Leads, and Customers
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            I&rsquo;ll record a short personalized video showing what I&rsquo;d improve on your site so it&rsquo;s easier for visitors to take action.
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
              <div key={i} className="flex items-start gap-3 bg-black/20 border border-[var(--syntra-border-soft)] rounded-xl p-4">
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
                className="bg-black/20 border border-[var(--syntra-border-soft)] rounded-2xl p-6 sm:p-8 text-center"
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

      {/* ======================== WHAT I'LL REVIEW ======================== */}
      <section className="py-20 md:py-28 border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            What I&rsquo;ll Cover in Your Review
          </h2>
          <p className="text-slate-400 text-base sm:text-lg text-center mb-10 max-w-2xl mx-auto">
            Every review is tailored to your site. Here&rsquo;s what I typically look at:
          </p>

          <div className="space-y-4">
            {[
              'First impression — does your homepage clearly communicate what you do and who you help?',
              'Calls-to-action — are visitors being guided toward contacting you or taking the next step?',
              'Mobile experience — does the site load fast and work well on phones?',
              'Layout and clarity — is the most important information easy to find?',
              'Quick SEO check — are the basics in place so people can find you on Google?',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-black/20 border border-[var(--syntra-border-soft)] rounded-xl p-4">
                <IconCheck />
                <p className="text-slate-300 text-base leading-relaxed">{item}</p>
              </div>
            ))}
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
            className={formWrapperClass}
          >
            {/* Status Messages */}
            {status && (
              <div className={statusClass(status.type)}>
                {status.message}
              </div>
            )}

            <div className={fieldGridClass}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={inputClass}
              />
              <input
                type="text"
                name="businessName"
                placeholder="Business name"
                value={formData.businessName}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className={inputClass}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className={inputClass}
            />

            <input
              type="text"
              name="website"
              placeholder="Website URL (e.g. yoursite.com)"
              value={formData.website}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className={inputClass}
            />

            <textarea
              name="feedback"
              rows="3"
              placeholder="What would you like feedback on? (optional)"
              value={formData.feedback}
              onChange={handleChange}
              disabled={isSubmitting}
              className={inputClass}
            />

            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="company"
              placeholder="Company name (optional)"
              value={formData.company}
              onChange={handleChange}
              className={inputClass}
              disabled={isSubmitting}
              style={{ display: 'none' }}
              aria-hidden="true"
              tabIndex="-1"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={submitButtonClass}
            >
              {isSubmitting ? (
                <>
                  <div className={spinnerClass} />
                  Sending...
                </>
              ) : (
                'Send My Review Request'
              )}
            </button>
          </form>

          <p className="text-center text-slate-500 text-sm mt-5">
            I&rsquo;ll review your site and send your video within 1–2 business days.
          </p>
        </div>
      </section>

      {/* ======================== ABOUT ======================== */}
      <section className="py-20 md:py-28 border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-black/20 border border-[var(--syntra-border-soft)] rounded-2xl p-6 sm:p-8">
            <div className="shrink-0 w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <IconUser />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">About Syntra Digital</h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-3">
                I&rsquo;m the founder of Syntra Digital, where I help small and local businesses get more from their websites. Most sites are closer than you think — they just need a few targeted adjustments to convert more visitors into real inquiries.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-4">
                I&rsquo;ve worked with service businesses across multiple industries to improve clarity, speed, and lead flow. Every recommendation I make is practical, specific, and focused on results.
              </p>
              <Link
                href="/services"
                className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
              >
                See how I can help &rarr;
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
