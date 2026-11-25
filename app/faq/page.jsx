import FAQClient from "./faq.client";

export const metadata = {
  title: "FAQ | Syntra Digital Solutions & Process",
  description: "Answers to common questions about Syntra Digital Solutions’ services, process, timelines, pricing ranges, and what to expect when working together.",
  alternates: {
    canonical: "https://syntradigitalsolutions.us/faq/",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
