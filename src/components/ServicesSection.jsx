const services = [
  {
    title: 'Executive & Virtual Assistance',
    body:
      'Inbox, calendars, travel, vendor coordination, and project admin handled with proactive communication.',
    badge: 'Founders & execs',
    icon: '🗂️',
  },
  {
    title: 'Customer Service Support',
    body:
      'Email, chat, and phone support with a calm, empathetic tone and documented processes for your team.',
    badge: 'CX & retention',
    icon: '💬',
  },
  {
    title: 'Marketing & Operations',
    body:
      'Campaign coordination, content scheduling, reporting, and back-office ops that keep everything moving.',
    badge: 'Growth & ops',
    icon: '📈',
  },
  {
    title: 'Web Design & Digital Presence',
    body:
      'Clean, responsive sites that reflect your brand and make it easy for clients and customers to work with you.',
    badge: 'Web & brand',
    icon: '🌐',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <p className="section-eyebrow text-center">What Syntra Handles</p>
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mt-3 mb-10">
        Services that keep your work moving.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-6 flex flex-col gap-4 shadow-md"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-2xl">{service.icon}</span>
              <span className="text-xs uppercase tracking-wide px-3 py-1 rounded-full bg-white/5 border border-[var(--syntra-border-soft)] text-[var(--syntra-text-muted)]">
                {service.badge}
              </span>
            </div>
            <h3 className="font-semibold text-lg text-[var(--syntra-heading)]">
              {service.title}
            </h3>
            <p className="text-[var(--syntra-text-muted)] text-sm leading-relaxed">
              {service.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
