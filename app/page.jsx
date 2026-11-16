import HomeClient from "./home.client";

export const metadata = {
  title: "Syntra Digital Solutions | Websites & Systems for Service Businesses",
  description: "Syntra Digital Solutions builds reliable websites and backend systems for service-based businesses—so operations run smoothly today and scale with you.",
  alternates: {
    canonical: "https://syntradigitalservices.com/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
