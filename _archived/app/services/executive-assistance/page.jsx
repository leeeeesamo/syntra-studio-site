// app/services/executive-assistance/page.jsx
import Button from "@/components/Button";

export const metadata = {
  title: "Executive & Virtual Assistance | Syntra Digital Solutions",
  description:
    "Executive and virtual assistance services for founders and leaders who want inbox, calendar, and operations handled with care.",
};

export default function ExecutiveAssistancePage() {
  return (
    <main className="space-y-10">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="section-eyebrow">Services</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 text-[var(--syntra-heading)]">
          Executive & Virtual Assistance
        </h1>
        <p className="mt-6 text-lg text-[var(--syntra-text-muted)] max-w-3xl">
          Proactive, detail-oriented support for founders and leaders 
          who want their inbox, calendar, and operations handled with care.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 pb-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--syntra-heading)]">What this can include</h2>
          <ul className="list-disc list-inside text-sm text-[var(--syntra-text-muted)] space-y-1">
            <li>Inbox triage and response drafting.</li>
            <li>Calendar ownership, meeting prep, and follow-up.</li>
            <li>Travel research, booking, and itineraries.</li>
            <li>Light project coordination and vendor communication.</li>
            <li>Creating and maintaining simple checklists and SOPs.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[var(--syntra-heading)]">Great fit if</h2>
          <ul className="list-disc list-inside text-sm text-[var(--syntra-text-muted)] space-y-1">
            <li>Your inbox and calendar are always full.</li>
            <li>You need a reliable point of contact for partners and vendors.</li>
            <li>You value clear, thoughtful written communication.</li>
            <li>You want recurring tasks handled without having to ask twice.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl bg-black/20 border border-[var(--syntra-border-soft)] p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--syntra-heading)] mb-3">
            Explore Executive & Virtual Assistance for your workload.
          </h2>
          <p className="text-sm text-[var(--syntra-text-muted)] mb-6 max-w-2xl mx-auto">
            Share how your week looks today, and well map out what handing off support could look like.
          </p>
          <Button href="/contact">Book a discovery call</Button>
        </div>
      </section>
    </main>
  );
}
