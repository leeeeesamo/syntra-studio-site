import Link from "next/link";

export const metadata = {
  title: "Company Policies | Syntra Digital",
  description:
    "Review Syntra Digital's company policies covering service terms, payments, project scope, confidentiality, and more.",
};

function IconFileText() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCreditCard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M2 10h20" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="1.8" />
      <rect x="8" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.8" />
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

function IconXCircle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path d="m15 9-6 6M9 9l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconAlertTriangle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0ZM12 9v4M12 17h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

const sections = [
  {
    id: "overview",
    title: "Overview",
    icon: <IconBriefcase />,
    body: (
      <p>
        At Syntra Digital, we are committed to delivering reliable, high-quality solutions
        that help businesses operate more efficiently. The following policies outline how we
        work with clients to ensure clarity, consistency, and successful project outcomes.
      </p>
    ),
  },
  {
    id: "service-terms",
    title: "Service Terms",
    icon: <IconFileText />,
    body: (
      <>
        <p>
          All services provided by Syntra Digital are tailored to each client's specific needs.
          Project details, timelines, and deliverables will be clearly defined before work begins.
        </p>
        <p>
          Any additional work outside the agreed scope may require a revised estimate or separate agreement.
        </p>
      </>
    ),
  },
  {
    id: "payment-policy",
    title: "Payment Policy",
    icon: <IconCreditCard />,
    body: (
      <ul>
        <li>Payment terms will be outlined prior to project start.</li>
        <li>Projects may require an upfront deposit.</li>
        <li>Remaining balances are due based on agreed milestones or completion.</li>
        <li>Late payments may result in paused work or delayed delivery.</li>
      </ul>
    ),
  },
  {
    id: "scope-revisions",
    title: "Project Scope & Revisions",
    icon: <IconClipboard />,
    body: (
      <>
        <p>Each project includes a defined scope of work.</p>
        <ul>
          <li>Minor revisions are included where specified.</li>
          <li>Additional revisions or changes beyond scope may incur additional charges.</li>
          <li>Significant changes after project approval may require a new project phase.</li>
        </ul>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    icon: <IconUsers />,
    body: (
      <>
        <p>To ensure timely delivery, clients are responsible for:</p>
        <ul>
          <li>Providing accurate content, assets, and requirements</li>
          <li>Responding to requests in a timely manner</li>
          <li>Reviewing and approving deliverables promptly</li>
        </ul>
        <p>Delays in communication may impact project timelines.</p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "Data & Security",
    icon: <IconShield />,
    body: (
      <>
        <p>
          Syntra Digital implements best practices to protect client data and systems.
        </p>
        <p>However, clients are responsible for:</p>
        <ul>
          <li>Maintaining secure access credentials</li>
          <li>Backing up critical data where applicable</li>
        </ul>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    icon: <IconLock />,
    body: (
      <p>
        All client information, materials, and project details are treated as confidential
        and will not be shared without permission.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    icon: <IconXCircle />,
    body: (
      <>
        <p>Either party may terminate a project with written notice.</p>
        <ul>
          <li>Work completed up to the termination date will be billed accordingly.</li>
          <li>Deposits are non-refundable once work has begun.</li>
        </ul>
      </>
    ),
  },
  {
    id: "liability",
    title: "Liability Disclaimer",
    icon: <IconAlertTriangle />,
    body: (
      <>
        <p>Syntra Digital is not liable for:</p>
        <ul>
          <li>Third-party service failures (hosting, APIs, integrations)</li>
          <li>Loss of data due to external factors</li>
          <li>Business losses resulting from website or system downtime</li>
        </ul>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    icon: <IconMail />,
    body: (
      <>
        <p>For any questions regarding these policies, please contact:</p>
        <p>
          <strong>Syntra Digital</strong>
          <br />
          <a href="mailto:contact@syntrasolutions.digital" className="legal-inline-link">
            contact@syntrasolutions.digital
          </a>
          <br />
          <a href="https://syntrasolutions.digital" className="legal-inline-link">
            syntrasolutions.digital
          </a>
        </p>
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
            At Syntra Digital, we are committed to delivering reliable, high-quality solutions
            that help businesses operate more efficiently.
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
              <h3>Questions about these policies?</h3>
              <p>
                If anything is unclear, reach out and we will walk through scope,
                process, and what to expect.
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