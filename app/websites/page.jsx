import { permanentRedirect } from "next/navigation";

export const metadata = {
  alternates: {
    canonical: "https://syntradigitalsolutions.us/services/",
  },
};

export default function WebsitesPage() {
  permanentRedirect("/services");
}
