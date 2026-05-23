import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
          <div className="flex items-start gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-surface-muted text-brand">
              <category.icon className="h-8 w-8" />
            </div>
            <div>
              <p className="text-lg leading-relaxed text-muted">
                {category.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pattern-dots py-16">
        <Container>
          <h2 className="mb-10 font-display text-2xl font-bold text-brand">
            What we offer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {category.subServices.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="card-rich scroll-mt-32 p-6"
                style={
                  {
                    "--card-accent":
                      "linear-gradient(90deg, #2563eb, #38bdf8)",
                  } as React.CSSProperties
                }
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-semibold text-brand">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-muted">{service.description}</p>
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
