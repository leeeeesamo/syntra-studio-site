import Link from "next/link";

export const metadata = {
  title: "Company Policies | Syntra Digital",
  description:
    "How Syntra Digital works with clients — covering service terms, payments, project scope, confidentiality, and expectations.",
};

function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M4 9h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Zm0 0a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

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

function IconAlertTriangle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0ZM12 9v4M12 17h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const sections = [
  {
    id: "how-we-work",
    title: "How We Work",
    icon: <IconBriefcase />,
    body: (
      <>
        <p>
          Syntra Digital builds websites and systems that help businesses communicate clearly,
          run more efficiently, and grow with confidence. Every project starts with a conversation
          about your goals, followed by a clear plan so you always know what to expect.
        </p>
        <p>
          The policies below outline how we keep things organized, transparent, and fair for
          both sides throughout the process.
        </p>
      </>
    ),
  },
  {
    id: "service-terms",
    title: "Service Terms",
    icon: <IconFileText />,
    body: (
      <>
        <p>
          All services are tailored to each client. Before work begins, we define the project
          scope, timeline, and deliverables so expectations are clear from the start.
        </p>
        <p>
          Work outside the original agreement may require a revised estimate or a separate
          project phase.
        </p>
        <p>
          Either party may end a project at any time with written notice. If a project is
          ended early, any work completed up to that point will be billed accordingly.
          Deposits are non-refundable once work has begun.
        </p>
      </>
    ),
  },
  {
    id: "payment-billing",
    title: "Payment & Billing",
    icon: <IconCreditCard />,
    body: (
      <>
        <p>
          Payment terms are outlined before any project begins. Here is how billing
          typically works:
        </p>
        <ul>
          <li>A deposit may be required to secure your project start date.</li>
          <li>Remaining balances are invoiced at agreed milestones or upon completion.</li>
          <li>Invoices are due within the timeframe stated on the invoice.</li>
          <li>Late payments may result in paused work until the balance is resolved.</li>
        </ul>
      </>
    ),
  },
  {
    id: "scope-revisions",
    title: "Project Scope & Revisions",
    icon: <IconClipboard />,
    body: (
      <>
        <p>
          Every project includes a clearly defined scope of work. We want you to be happy
          with the result, and revisions are a normal part of the process.
        </p>
        <ul>
          <li>Revisions included in your project will be specified in the original agreement.</li>
          <li>Additional revisions or requests beyond the agreed scope may be quoted separately.</li>
          <li>Significant direction changes after approval may require a new project phase.</li>
        </ul>
        <p>
          If something comes up during the project, we will always discuss it with you before
          any additional work or cost is applied.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    icon: <IconUsers />,
    body: (
      <>
        <p>
          A smooth project depends on good communication from both sides. To help us deliver
          on time and on target, we ask that clients:
        </p>
        <ul>
          <li>Provide content, assets, and requirements as agreed upon</li>
          <li>Respond to questions and feedback requests in a timely manner</li>
          <li>Review and approve deliverables within the agreed timeline</li>
        </ul>
        <p>
          Delays in communication or approvals may shift the project timeline. We will always
          keep you informed if that happens.
        </p>
      </>
    ),
  },
  {
    id: "data-security-confidentiality",
    title: "Data, Security & Confidentiality",
    icon: <IconShield />,
    body: (
      <>
        <p>
          We take the security of your information seriously. Any client data, credentials,
          or project materials shared with us are treated as confidential and will never be
          disclosed without your permission.
        </p>
        <p>
          Syntra Digital follows best practices to protect client data and systems during
          every engagement. That said, clients are responsible for:
        </p>
        <ul>
          <li>Maintaining secure access credentials on their end</li>
          <li>Keeping backups of critical data where applicable</li>
        </ul>
        <p>
          If you have specific security requirements, let us know and we will accommodate
          them wherever possible.
        </p>
      </>
    ),
  },
  {
    id: "expectations-limitations",
    title: "Expectations & Limitations",
    icon: <IconAlertTriangle />,
    body: (
      <>
        <p>
          We put real care into every project and stand behind our work. However, there are
          a few things worth noting:
        </p>
        <ul>
          <li>We cannot guarantee specific business outcomes such as revenue, traffic, or rankings.</li>
          <li>Third-party platforms (hosting providers, APIs, integrations) operate outside our control and may experience their own downtime or changes.</li>
          <li>We are not responsible for data loss caused by external factors beyond the scope of our work.</li>
        </ul>
        <p>
          Our goal is always to deliver work that makes a measurable difference for your
          business — and we are transparent about what is and is not within our control.
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
            How we work with clients — clear expectations, fair terms, and
            a straightforward process from start to finish.
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