import type { Metadata } from "next";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${site.name} services, technology, and UAE compliance.`,
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions & answers"
        description="Everything you need to know about working with Innovative & Strategic F.Z.E."
      />

      <section className="py-20">
        <Container className="max-w-3xl">
          <Accordion items={faqs} defaultOpen={faqs[0]?.id} />
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
