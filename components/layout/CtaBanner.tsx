"use client";

import { useLocale } from "@/components/layout/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  const { messages: m } = useLocale();
  const heading = title ?? m.cta.title;
  const body = description ?? m.cta.description;

  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-brand-muted to-brand px-8 py-16 text-center shadow-2xl shadow-brand/25 sm:px-16">
          <div className="brand-stripe absolute top-0 left-0 right-0" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-warm/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent-rose/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
              {body}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-brand shadow-lg hover:bg-amber-50"
              >
                {m.common.bookConsultation}
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white/50 bg-white/10 text-white hover:bg-white/20"
              >
                {m.common.exploreServices}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
