import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqs } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";

export function FaqPreview() {
  const preview = faqs.slice(0, 3);

  return (
    <section className="pattern-dots py-20">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="Quick answers to help you understand how we work."
          />
          <Link
            href="/faq"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-brand-muted"
          >
            View all FAQs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-xl">
          <Accordion items={preview} />
        </div>
      </Container>
    </section>
  );
}
