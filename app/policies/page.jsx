import Link from "next/link";

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M8 10h8M8 14h5M5 19l1.5-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H11L5 19Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M4 9h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Zm0 0a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M8 11V8a4 4 0 1 1 8 0v3M7 11h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconTools() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M14.5 6.5a4 4 0 0 0 4.9 4.9l-8.8 8.8a2 2 0 0 1-2.8-2.8l8.8-8.8a4 4 0 0 0-4.9-4.9l2.2-2.2a4 4 0 0 1 .6 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: <IconBriefcase />,
    body: (
      <p>
        Syntra Digital provides website development, backend systems support, and digital
        infrastructure for service-based businesses. Our work is centered on clear communication,
        dependable execution, and building systems that support business operations in a practical,
        long-term way.
      </p>
    ),
  },
  {
    id: "standards",
    title: "Professional Standards",
    icon: <IconShield />,
    body: (
      <>
        <p>
          We aim to provide work that is thoughtful, functional, and aligned with client goals.
        </p>
        <ul>
          <li>Deliverables are built around the agreed project scope.</li>
          <li>Recommendations are based on usability, clarity, and business practicality.</li>
          <li>We prioritize maintainable systems over short-term patches.</li>
          <li>We communicate openly about progress, blockers, and next steps.</li>
        </ul>
      </>
    ),
  },
  {
    id: "communication",
    title: "Communication",
    icon: <IconChat />,
    body: (
      <>
        <p>
          Clear communication is part of every successful project and is treated as a core part of service.
        </p>
        <ul>
          <li>Clients can expect timely updates during active project work.</li>
          <li>Approvals, revisions, and major decisions should be confirmed in writing.</li>
          <li>Timeline changes may occur if required content, access, or approvals are delayed.</li>
        </ul>
      </>
    ),
  },
  {
    id: "scope",
    title: "Project Scope & Change Requests",
    icon: <IconTools />,
    body: (
      <>
        <p>
          Each project is completed according to an agreed scope to keep expectations, pricing, and timelines clear.
        </p>
        <ul>
          <li>New requests outside the original scope may require additional fees or revised timing.</li>
          <li>Additional pages, features, integrations, or revisions may be quoted separately.</li>
          <li>Rush work may be accommodated when possible, but cannot be guaranteed.</li>
        </ul>
      </>
    ),
  },
  {
    id: "payments",
    title: "Payments",
    icon: <IconBriefcase />,
    body: (
      <>
        <p>
          Payment terms are established before work begins and may include deposits, milestone payments,
          or payment in full before launch or handoff.
        </p>
        <ul>
          <li>Invoices are due under the terms listed on the proposal or invoice.</li>
          <li>Late payment may pause work, support, or delivery.</li>
          <li>Completed work or credentials may be withheld until invoices are paid.</li>
          <li>Deposits and payments for work already completed are generally non-refundable.</li>
        </ul>
        <div className="legal-note">
          Final payment and refund details should also be reflected in your individual client agreement.
        </div>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality & Data Handling",
    icon: <IconLock />,
    body: (
      <>
        <p>
          Client information, systems, credentials, and business materials are treated as confidential.
        </p>
        <ul>
          <li>Access is limited to what is necessary to complete project work.</li>
          <li>Reasonable care is used when handling files, credentials, and connected services.</li>
          <li>Clients should rotate or remove shared access after project completion when appropriate.</li>
        </ul>
      </>
    ),
  },
  {
    id: "support",
    title: "Support & Maintenance",
    icon: <IconTools />,
    body: (
      <>
        <p>
          Ongoing support may be offered through separate update or maintenance arrangements.
        </p>
        <ul>
          <li>One-time updates can be quoted separately.</li>
          <li>Monthly support plans may include updates, troubleshooting, and oversight.</li>
          <li>Post-launch support is not assumed unless included in writing.</li>
        </ul>
      </>
    ),
  },
  {
    id: "limitations",
    title: "Limitations",
    icon: <IconShield />,
    body: (
      <>
        <p>
          Syntra Digital builds for clarity, usability, and performance, but cannot guarantee outcomes
          tied to external factors such as SEO ranking, ad performance, third-party outages, or market changes.
        </p>
        <ul>
          <li>Clients are responsible for reviewing and approving final content and functionality.</li>
          <li>Third-party services may affect site behavior or availability.</li>
          <li>Indirect damages, lost profits, or downstream business interruption are not assumed by Syntra Digital.</li>
        </ul>
      </>
    ),
  },
];

export default function PoliciesPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-badge">Reliable by Design</div>
          <h1>Company Policies</h1>
          <p>
            Clear standards for how Syntra Digital works, communicates, handles projects,
            and supports clients.
          </p>
        </div>
      </section>

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
                  <div className="legal-icon">{section.icon}</div>
                  <h2>{section.title}</h2>
                </div>
                {section.body}
              </article>
            ))}

            <div className="legal-cta">
              <h3>Questions about how Syntra works?</h3>
              <p>
                If you want clarity before starting a project, reach out and we’ll walk through scope,
                process, and what support looks like.
              </p>
              <div className="legal-actions">
                <Link href="/contact" className="btn-primary">Contact Syntra</Link>
                <Link href="/privacy-policy" className="btn-outline">Privacy Policy</Link>
              </div>
              <div className="legal-last-updated">Last updated: April 2026</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}