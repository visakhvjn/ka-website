import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCategoryBySlug,
  serviceCategories,
} from "@/data/services";
import { site } from "@/data/site";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { CategoryContent } from "@/components/services/CategoryContent";

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
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Service Not Found" };

  return {
    title: category.title,
    description: `${category.description} — ${site.name}`,
  };
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={category.title}
        description={category.shortDescription}
      />
      <CategoryContent category={category} />
      <CtaBanner />
    </>
  );
}
