import Link from "next/link";
import { Inbox, MessageSquare, Settings2, Monitor } from "lucide-react";

const services = [
  {
    title: 'Executive & Virtual Assistance',
    href: '/services/executive-assistance',
    body:
      'Inbox, calendars, travel, vendor coordination, and project admin handled with proactive communication.',
    badge: 'Founders & execs',
    Icon: Inbox,
  },
  {
    title: 'Customer Service Support',
    href: '/services/customer-service-support',
    body:
      'Email, chat, and phone support with a calm, empathetic tone and documented processes for your team.',
    badge: 'CX & retention',
    Icon: MessageSquare,
  },
  {
    title: 'Operations & Systems Support',
    href: '/services/operations-systems-support',
    body:
      'Internal workflows, documentation, reporting, and back-office ops that keep everything moving.',
    badge: 'Ops & systems',
    Icon: Settings2,
  },
  {
    title: 'Web Design & Digital Presence',
    href: '/services/web-design-digital-presence',
    body:
      'Clean, responsive sites that reflect your brand and make it easy for clients and customers to work with you.',
    badge: 'Web & brand',
    Icon: Monitor,
  },
];

export default function ServicesSection() {
  return (
    <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center">
        What Syntra Handles
      </h2>
      <p className="mt-2 mb-8 text-base sm:text-lg text-center text-[var(--syntra-text-muted)]">
        Services that keep your work moving.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => {
          const Icon = service.Icon;
          return (
          <Link
            key={service.title}
            href={service.href}
            className="group"
          >
            <article
              className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-5 flex flex-col gap-3 shadow-md transition-transform transition-colors group-hover:-translate-y-0.5 group-hover:border-white/40"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/30 border border-[var(--syntra-border-soft)]">
                  <Icon className="w-5 h-5 text-[var(--syntra-text-muted)]" />
                </div>
              </div>
              <h3 className="font-semibold text-lg text-[var(--syntra-heading)]">
                {service.title}
              </h3>
              <p className="text-[var(--syntra-text-muted)] text-sm leading-relaxed">
                {service.body}
              </p>
            </article>
          </Link>
        );})}
      </div>

      <div className="mt-10 border-t border-[var(--syntra-border-soft)] max-w-5xl mx-auto" />
    </section>
  );
}
