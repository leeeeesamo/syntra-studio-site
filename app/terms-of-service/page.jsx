import Link from "next/link";

function IconTerms() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M8 4h8l4 4v12a1 1 0 0 1-1 1H8a4 4 0 0 1-4-4V5a1 1 0 0 1 1-1h3Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 9h4M10 13h6M10 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <p>
        By using this website or engaging Syntra Digital for services, you agree to these Terms of Service.
        If you do not agree, you should not use the site or proceed with services.
      </p>
    ),
  },
  {
    id: "services",
    title: "Services",
    content: (
      <p>
        Syntra Digital provides website design, backend systems support, digital infrastructure, and related
        consulting services. Specific deliverables, timelines, and pricing are defined separately through
        proposals, invoices, or written agreements.
      </p>
    ),
  },
  {
    id: "client-obligations",
    title: "Client Responsibilities",
    content: (
      <ul>
        <li>Provide accurate information, content, approvals, and access needed for project completion.</li>
        <li>Review deliverables in a timely manner.</li>
        <li>Ensure submitted content and materials are lawfully owned or licensed.</li>
        <li>Maintain third-party subscriptions or accounts unless otherwise agreed in writing.</li>
      </ul>
    ),
  },
  {
    id: "fees",
    title: "Fees & Payment",
    content: (
      <ul>
        <li>Payment terms are set before work begins.</li>
        <li>Late payment may pause work, support, or launch activities.</li>
        <li>Work product, files, or credentials may be withheld until payment obligations are met.</li>
        <li>Deposits and payments for completed work are generally non-refundable unless otherwise stated.</li>
      </ul>
    ),
  },
  {
    id: "ownership",
    title: "Ownership & Intellectual Property",
    content: (
      <p>
        Upon full payment, clients generally receive rights to final approved deliverables created specifically
        for their project, except for pre-existing methods, frameworks, reusable internal assets, third-party
        tools, or licensed materials, which remain subject to their original ownership or licensing terms.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    content: (
      <p>
        Syntra Digital may recommend or work with third-party services such as hosting providers, domain registrars,
        analytics tools, plugins, payment platforms, or software vendors. We are not responsible for outages,
        policy changes, billing issues, or disruptions caused by third-party services.
      </p>
    ),
  },
  {
    id: "warranties",
    title: "No Guarantee of Specific Results",
    content: (
      <p>
        While websites and systems are built with performance and usability in mind, Syntra Digital does not
        guarantee specific business outcomes such as search rankings, lead volume, conversions, or revenue growth.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by law, Syntra Digital is not liable for indirect, incidental, special,
        consequential, or business interruption damages, including lost revenue, lost data, or lost profits arising
        from use of this website or related services.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <p>
        Either party may end a project or service relationship subject to any active written agreement, payment due,
        and work already completed. Fees for completed work remain payable.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Updates to Terms",
    content: (
      <p>
        These Terms of Service may be updated from time to time. Continued use of the website or services after
        updates are posted indicates acceptance of the revised terms.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-badge">Service Terms</div>
          <h1>Terms of Service</h1>
          <p>
            The general terms that apply to use of this website and to working with Syntra Digital.
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
                  <div className="legal-icon"><IconTerms /></div>
                  <h2>{section.title}</h2>
                </div>
                {section.content}
              </article>
            ))}

            <div className="legal-cta">
              <h3>Before starting a project</h3>
              <p>
                If you want, these site-wide terms can be paired with a client-specific proposal or agreement
                for scope, pricing, milestones, and deliverables.
              </p>
              <div className="legal-actions">
                <Link href="/contact" className="btn-primary">Start a Conversation</Link>
                <Link href="/policies" className="btn-outline">Company Policies</Link>
              </div>
              <div className="legal-last-updated">Last updated: April 2026</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}