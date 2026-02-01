import PricingClient from "./pricing.client";

export const metadata = {
  title: "Pricing | Syntra Digital",
  description: "Clear pricing ranges for Syntra Digital services. Final quotes are based on your goals, system complexity, and implementation scope."
};

export default function PricingPage() {
  return <PricingClient />;
}
