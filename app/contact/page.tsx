import type { Metadata } from "next";
import { site } from "@/data/site";
import { getMessages } from "@/lib/i18n";
import { ContactPageContent } from "@/components/pages/ContactPageContent";

const m = getMessages("en");

export const metadata: Metadata = {
  title: m.contactPage.metaTitle,
  description: m.contactPage.metaDescription.replace(
    "Innovative & Strategic F.Z.E",
    site.name,
  ),
};

export default function ContactPage() {
  return <ContactPageContent />;
}
