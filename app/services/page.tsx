import type { Metadata } from "next";
import { site } from "@/data/site";
import { getMessages } from "@/lib/i18n";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";

const m = getMessages("en");

export const metadata: Metadata = {
  title: m.servicesPage.metaTitle,
  description: m.servicesPage.metaDescription.replace(
    "Innovative & Strategic F.Z.E",
    site.name,
  ),
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
