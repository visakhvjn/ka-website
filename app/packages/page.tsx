import type { Metadata } from "next";
import { site } from "@/data/site";
import { getMessages } from "@/lib/i18n";
import { PackagesPageContent } from "@/components/pages/PackagesPageContent";

const m = getMessages("en");

export const metadata: Metadata = {
  title: m.packagesPage.metaTitle,
  description: m.packagesPage.metaDescription.replace(
    "Innovative & Strategic F.Z.E",
    site.name,
  ),
};

export default function PackagesPage() {
  return <PackagesPageContent />;
}
