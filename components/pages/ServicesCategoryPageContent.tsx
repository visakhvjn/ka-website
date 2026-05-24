"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import { getHeroImageWithAlt } from "@/data/hero-images";
import { getCategoryBySlug } from "@/lib/i18n/services";
import { useLocale } from "@/components/layout/LocaleProvider";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { CategoryContent } from "@/components/services/CategoryContent";
import { ScrollToHash } from "@/components/services/ScrollToHash";

export function ServicesCategoryPageContent() {
  const params = useParams<{ slug: string }>();
  const { locale, messages: m } = useLocale();
  const category = getCategoryBySlug(params.slug, locale);

  if (!category) notFound();

  return (
    <>
      <ScrollToHash />
      <PageHero
        eyebrow={m.category.eyebrow}
        title={category.title}
        description={category.shortDescription}
        image={getHeroImageWithAlt(category.slug, m.hero)}
      />
      <CategoryContent category={category} />
      <CtaBanner />
    </>
  );
}
