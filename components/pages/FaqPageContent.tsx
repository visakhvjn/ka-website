"use client";

import { getHeroImageWithAlt } from "@/data/hero-images";
import { useLocale } from "@/components/layout/LocaleProvider";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";

export function FaqPageContent() {
  const { messages: m } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={m.faqPage.eyebrow}
        title={m.faqPage.title}
        description={m.faqPage.description}
        image={getHeroImageWithAlt("faq", m.hero)}
      />

      <section className="py-20">
        <Container className="max-w-3xl">
          <Accordion items={m.faqs} defaultOpen={m.faqs[0]?.id} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
