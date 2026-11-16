import { permanentRedirect } from "next/navigation";

export const metadata = {
  alternates: {
    canonical: "https://syntradigitalservices.com/services/",
  },
};

export default function WebsitesPage() {
  permanentRedirect("/services");
}
