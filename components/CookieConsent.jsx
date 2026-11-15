"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "syntra-consent-v1";
export const CONSENT_GRANTED = "granted";
export const CONSENT_DENIED = "denied";
export const OPEN_CONSENT_EVENT = "syntra:open-consent";
export const CONSENT_EVENT = "syntra:consent";

export function getStoredConsent() {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === CONSENT_GRANTED || value === CONSENT_DENIED ? value : null;
}

export function OpenCookieSettings() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className="text-[var(--syntra-text-muted)] transition-colors hover:text-white"
    >
      Cookie Preferences
    </button>
  );
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const choose = (value) => {
    const previous = getStoredConsent();
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
    setVisible(false);

    // Withdrawal: trackers already loaded in memory cannot be fully removed,
    // so do a controlled reload. On fresh load the stored "denied" value
    // prevents all optional scripts from initializing.
    if (value === CONSENT_DENIED && previous === CONSENT_GRANTED) {
      setTimeout(() => window.location.reload(), 300);
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[60] px-4 pb-4 sm:pb-6"
    >
      <div className="container mx-auto max-w-3xl rounded-2xl border border-slate-700/60 bg-slate-900/95 backdrop-blur-md shadow-2xl p-5 sm:p-6">
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          We use cookies and similar technologies for site analytics and,
          with your permission, Meta advertising measurement. You can accept
          or reject non-essential tracking — essential site functionality is
          unaffected either way.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => choose(CONSENT_GRANTED)}
            className="btn-primary flex-1"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose(CONSENT_DENIED)}
            className="flex-1 inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-medium text-slate-200 hover:border-slate-400 hover:text-white transition-colors"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
