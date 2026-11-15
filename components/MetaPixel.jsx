"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  CONSENT_EVENT,
  CONSENT_GRANTED,
  getStoredConsent,
} from "@/components/CookieConsent";

const PIXEL_ID = "1614794247065292";
const BOOKING_SELECTOR = 'a[href*="calendar.app.google"]';
export const PIXEL_READY_EVENT = "syntra:pixel-ready";

export default function MetaPixel() {
  const pathname = usePathname();
  const initializedRef = useRef(false);
  const lastPathRef = useRef(null);
  const consentRef = useRef(getStoredConsent());

  // Initialize the pixel exactly once, only after marketing consent.
  // Uses the official Meta base-code stub so calls queue until fbevents.js loads.
  useEffect(() => {
    const init = () => {
      if (consentRef.current !== CONSENT_GRANTED || initializedRef.current)
        return;
      initializedRef.current = true;

      if (!window.fbq) {
        const fbq = function () {
          fbq.callMethod
            ? fbq.callMethod.apply(fbq, arguments)
            : fbq.queue.push(arguments);
        };
        if (!window._fbq) window._fbq = fbq;
        fbq.push = fbq;
        fbq.loaded = true;
        fbq.version = "2.0";
        fbq.queue = [];
        window.fbq = fbq;

        const script = document.createElement("script");
        script.async = true;
        script.src = "https://connect.facebook.net/en_US/fbevents.js";
        document.head.appendChild(script);
      }

      window.fbq("init", PIXEL_ID);
      window.fbq("track", "PageView");
      lastPathRef.current = pathname;
      window.dispatchEvent(new Event(PIXEL_READY_EVENT));
    };

    const onConsent = (e) => {
      const granted = e.detail === CONSENT_GRANTED;
      consentRef.current = granted ? CONSENT_GRANTED : null;
      if (granted && initializedRef.current) {
        // Re-accept after withdrawal: resume with a fresh PageView
        window.fbq("track", "PageView");
        lastPathRef.current = window.location.pathname;
      } else {
        init();
      }
    };

    window.addEventListener(CONSENT_EVENT, onConsent);
    init(); // covers returning visitors with stored consent
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // PageView on client-side navigation (initial load is covered by init)
  useEffect(() => {
    if (
      initializedRef.current &&
      consentRef.current === CONSENT_GRANTED &&
      lastPathRef.current !== null &&
      pathname !== lastPathRef.current
    ) {
      window.fbq("track", "PageView");
      lastPathRef.current = pathname;
    }
  }, [pathname]);

  // Booking-link clicks are measured as clicks only — never as completed bookings
  useEffect(() => {
    const onClick = (e) => {
      if (
        initializedRef.current &&
        consentRef.current === CONSENT_GRANTED &&
        e.target instanceof Element &&
        e.target.closest(BOOKING_SELECTOR)
      ) {
        window.fbq("trackCustom", "BookingClick");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
