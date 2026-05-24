import type { Metadata } from "next";
import { site } from "@/data/site";
import { getMessages } from "@/lib/i18n";
import { FaqPageContent } from "@/components/pages/FaqPageContent";

const m = getMessages("en");

export const metadata: Metadata = {
  title: m.faqPage.metaTitle,
  description: m.faqPage.metaDescription.replace(
    "Innovative & Strategic F.Z.E",
    site.name,
  ),
};

export default function FaqPage() {
  return <FaqPageContent />;
}
