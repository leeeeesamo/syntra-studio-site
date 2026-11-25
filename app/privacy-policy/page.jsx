import Link from "next/link";
import MiniHero from "@/components/MiniHero";

export const metadata = {
  alternates: {
    canonical: "https://syntradigitalsolutions.us/privacy-policy/",
  },
};

function IconPrivacy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 12l1.5 1.5L14.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const sections = [
  {
    id: "intro",
    title: "Overview",
    content: (
      <p>
        Syntra Digital Solutions respects your privacy and is committed to handling information responsibly.
        This Privacy Policy explains what information may be collected through this website, how it
        may be used, and how it is protected.
      </p>
    ),
  },
  {
    id: "collect",
    title: "Information We Collect",
    content: (
      <ul>
        <li>Information you provide through contact forms, inquiry forms, or direct communication.</li>
        <li>Basic technical information such as browser type, device information, and usage data.</li>
        <li>Project-related details shared voluntarily during consultations or active work.</li>
      </ul>
    ),
  },
  {
    id: "use",
    title: "How Information Is Used",
    content: (
      <ul>
        <li>To respond to inquiries and provide requested services.</li>
        <li>To communicate about projects, timelines, proposals, and support.</li>
        <li>To improve website functionality, service delivery, and user experience.</li>
        <li>To maintain records related to business operations and client work.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Information Sharing",
    content: (
      <p>
        Syntra Digital Solutions does not sell personal information. Information may be shared only when necessary
        to deliver requested services, work with trusted service providers, comply with legal obligations,
        or protect business operations and rights.
      </p>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    content: (
      <p>
        Reasonable administrative, technical, and procedural safeguards are used to protect information.
        However, no online system can guarantee absolute security, and users should avoid sending highly
        sensitive information through unsecured channels unless specifically arranged.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Analytics",
    content: (
      <>
        <p>
          This site uses cookies and similar technologies for essential
          functionality, site analytics, and — with your permission —
          advertising measurement.
        </p>
        <p>
          Optional analytics and advertising tools load only after you grant
          consent. Analytics tools such as Google Analytics (GA4) and Ahrefs
          Web Analytics help us understand site traffic and improve
          performance, and operate under Google Consent Mode with storage
          denied by default. When you accept, we also load the Meta Pixel
          (operated by Meta Platforms, Inc.) to measure the effectiveness of
          our advertising and to support ad attribution. The Meta Pixel sets
          cookies and collects information such as pages visited, actions
          taken on the site, and technical device data, which may be used by
          Meta to show relevant ads.
        </p>
        <p>
          When you first visit, a consent banner lets you accept or reject
          non-essential tracking. Your choice is stored in your browser and
          can be changed at any time using the &ldquo;Cookie Preferences&rdquo;
          link in the site footer. Withdrawing consent reloads the page so
          that previously loaded tracking scripts are fully removed, and it
          cannot recall data already collected. You can also manage cookies
          through your browser settings.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your Choices",
    content: (
      <p>
        You may request that we update or delete information you have submitted, subject to legal,
        administrative, or contractual obligations that require limited retention.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    content: (
      <p>
        This Privacy Policy may be updated from time to time. The most current version posted on this site
        will apply.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <MiniHero
        variant="neon-top-bottom"
        compact
        badge="Privacy & Data Handling"
        title="Privacy Policy"
        subtitle="How Syntra Digital Solutions collects, uses, and protects information shared through this website and during client work."
        position="center 75%"
      />

      <section className="legal-shell">
        <div className="legal-layout">
          <aside className="legal-sidebar">
            <div className="legal-sidebar-title">On this page</div>
            <nav className="legal-sidebar-nav">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="legal-sidebar-link">
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="legal-main">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="legal-card">
                <div className="legal-icon-row">
                  <div className="legal-icon"><IconPrivacy /></div>
                  <h2>{section.title}</h2>
                </div>
                {section.content}
              </article>
            ))}

            <div className="legal-cta">
              <h3>Need clarification?</h3>
              <p>
                If you have questions about information handling or what data may be collected through this site,
                please reach out.
              </p>
              <div className="legal-actions">
                <Link href="/contact" className="btn-primary">Contact Syntra</Link>
                <Link href="/terms-of-service" className="btn-outline">Terms of Service</Link>
              </div>
              <div className="legal-last-updated">Last updated: April 2026</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}