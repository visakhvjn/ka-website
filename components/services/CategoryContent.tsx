import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceCategory } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type CategoryContentProps = {
  category: ServiceCategory;
};

export function CategoryContent({ category }: CategoryContentProps) {
  return (
    <>
      <section className="py-16">
        <Container>
          <h2 className="mb-12 font-display text-2xl font-bold text-brand">
            What we offer
          </h2>
          <div className="divide-y divide-border">
            {category.subServices.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-32 py-10 first:pt-0 last:pb-0"
              >
                <div className="flex gap-6">
                  <span className="hidden w-8 shrink-0 pt-1 text-sm font-semibold tabular-nums text-accent sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-bold text-brand sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-brand to-brand-muted p-8 text-white shadow-xl sm:flex-row">
            <div>
              <h3 className="text-xl font-bold text-white">
                Need help with {category.title.toLowerCase()}?
              </h3>
              <p className="mt-2 text-blue-100">
                Speak with our specialists for a tailored proposal.
              </p>
            </div>
            <Button
              href="/contact"
              className="bg-white text-brand hover:bg-amber-50"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-brand hover:text-brand-muted"
            >
              ← Back to all services
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
