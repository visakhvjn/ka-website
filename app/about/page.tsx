import type { Metadata } from "next";
import { site } from "@/data/site";
import { getMessages } from "@/lib/i18n";
import { AboutPageContent } from "@/components/pages/AboutPageContent";

const m = getMessages("en");

export const metadata: Metadata = {
  title: m.about.metaTitle,
  description: m.about.metaDescription.replace(
    "Innovative & Strategic F.Z.E",
    site.name,
  ),
};

export default function AboutPage() {
  return <AboutPageContent />;
}
