import PricingClient from "./pricing.client";

export const metadata = {
  title: "Pricing | Website & System Services | Syntra Digital Solutions",
  description: "Transparent starting prices from Syntra Digital Solutions—professional websites from $2,500, website care plans from $175/month, and custom systems and integrations tailored to your business.",
  alternates: {
    canonical: "https://syntradigitalsolutions.us/pricing/",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
