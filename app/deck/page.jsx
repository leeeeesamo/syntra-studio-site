import SyntraStudioLaunchDeck from '@/components/SyntraStudioLaunchDeck';

export default function DeckPage() {
  return (
    <main className="pt-24 pb-16">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <header>
          <p className="section-eyebrow">Capabilities Overview</p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--syntra-heading)] mt-3">
            Syntra Digital Solutions – Launch Deck
          </h1>
          <p className="mt-4 text-[var(--syntra-text-muted)] max-w-2xl">
            A concise walkthrough of how Syntra supports founders, operators,
            and teams with virtual assistance, customer support, marketing, and
            web design.
          </p>
        </header>

        <SyntraStudioLaunchDeck />
      </section>
    </main>
  );
}
