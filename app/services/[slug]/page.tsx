import type { Metadata } from "next";
import { serviceCategories } from "@/data/services";
import { site } from "@/data/site";
import { getCategoryBySlug } from "@/lib/i18n/services";
import { getMessages } from "@/lib/i18n";
import { ServicesCategoryPageContent } from "@/components/pages/ServicesCategoryPageContent";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const m = getMessages("en");
  const category = getCategoryBySlug(slug, "en");
  if (!category) return { title: m.category.notFound };

  return {
    title: category.title,
    description: `${category.description} — ${site.name}`,
  };
}

export default function ServiceCategoryPage() {
  return <ServicesCategoryPageContent />;
}
