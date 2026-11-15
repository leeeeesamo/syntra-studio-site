"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  CONSENT_EVENT,
  CONSENT_GRANTED,
  getStoredConsent,
} from "@/components/CookieConsent";

const AHREFS_SRC = "https://analytics.ahrefs.com/analytics.js";
const AHREFS_KEY = "pYxnSyBJXRcWRAB2yClp1g";

export default function ConsentAnalytics({ gaId }) {
  const pathname = usePathname();
  const loadedRef = useRef(false);
  const lastPathRef = useRef(null);
  const consentRef = useRef(getStoredConsent());

  useEffect(() => {
    const load = () => {
      if (consentRef.current !== CONSENT_GRANTED || loadedRef.current) return;
      loadedRef.current = true;
      lastPathRef.current = pathname;

      // Google Consent Mode v2: grant analytics storage only.
      // Ad-related signals stay denied — no Google Ads features are used.
      if (gaId && window.gtag) {
        window.gtag("consent", "update", { analytics_storage: "granted" });

        if (!document.querySelector(`script[src*="gtag/js?id=${gaId}"]`)) {
          const gtagScript = document.createElement("script");
          gtagScript.async = true;
          gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
          document.head.appendChild(gtagScript);
        }
        // config sends the initial page_view hit
        window.gtag("config", gaId, {
          anonymize_ip: true,
          page_path: window.location.pathname,
        });
      }

      if (!document.querySelector(`script[src="${AHREFS_SRC}"]`)) {
        const ahrefsScript = document.createElement("script");
        ahrefsScript.async = true;
        ahrefsScript.src = AHREFS_SRC;
        ahrefsScript.setAttribute("data-key", AHREFS_KEY);
        document.head.appendChild(ahrefsScript);
      }
    };

    const onConsent = (e) => {
      const granted = e.detail === CONSENT_GRANTED;
      consentRef.current = granted ? CONSENT_GRANTED : null;
      if (granted) {
        if (loadedRef.current && window.gtag) {
          // Re-accept after withdrawal: re-enable storage, no re-init
          window.gtag("consent", "update", { analytics_storage: "granted" });
        } else {
          load();
        }
      } else if (window.gtag) {
        // Withdrawal: deny storage going forward. Already-loaded scripts
        // cannot be unloaded; gtag stops setting cookies in denied mode.
        window.gtag("consent", "update", { analytics_storage: "denied" });
      }
    };

    window.addEventListener(CONSENT_EVENT, onConsent);
    load(); // returning visitors with stored consent
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // GA4 page_view on client-side navigation (initial load covered by config)
  useEffect(() => {
    if (
      loadedRef.current &&
      consentRef.current === CONSENT_GRANTED &&
      lastPathRef.current !== null &&
      pathname !== lastPathRef.current &&
      gaId &&
      window.gtag
    ) {
      window.gtag("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
      });
      lastPathRef.current = pathname;
    }
  }, [pathname, gaId]);

  return null;
}
