"use client";

import { useLocale } from "@/components/layout/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function NotFoundContent() {
  const { messages: m } = useLocale();

  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <p className="text-6xl font-bold text-brand">404</p>
        <h1 className="mt-4 text-2xl font-bold text-brand">
          {m.notFound.title}
        </h1>
        <p className="mt-2 text-muted">{m.notFound.description}</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/">{m.common.goHome}</Button>
          <Button href="/contact" variant="outline">
            {m.common.contactUs}
          </Button>
        </div>
      </Container>
    </section>
  );
}
