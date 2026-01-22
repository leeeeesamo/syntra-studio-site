// app/deck/page.jsx
import PageHero from "@/components/PageHero";
import SyntraStudioLaunchDeck from "@/components/SyntraStudioLaunchDeck";

export const metadata = {
  title: "Why Choose Syntra | Overview Deck",
  description:
    "Review Syntra Digital Solutions' overview deck, including services, approach, and what makes our support reliable by design.",
};

export default function DeckPage() {
  return (
    <main className="space-y-12">
      <PageHero
        title="Why Choose Syntra"
        subtitle="An overview of our services, approach, and value."
      />
      <div className="px-4 sm:px-6 lg:px-8">
        <SyntraStudioLaunchDeck />
      </div>
    </main>
  );
}
