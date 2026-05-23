import type { Metadata } from "next";
import { Check } from "lucide-react";
import { packages } from "@/data/packages";
import { site } from "@/data/site";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Packages",
  description: `Flexible service packages from ${site.name} — from startup compliance to enterprise finance outsourcing.`,
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Plans that scale with your business"
        description="Transparent pricing tiers designed for startups, growing companies, and established enterprises across the UAE."
      />

      <section className="pattern-dots py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <div
                key={pkg.id}
                className={cn(
                  "card-rich relative flex flex-col p-8",
                  pkg.highlighted && "ring-2 ring-accent scale-[1.02]",
                )}
                style={
                  {
                    "--card-accent":
                      i === 0
                        ? "linear-gradient(90deg, #2563eb, #38bdf8)"
                        : i === 1
                          ? "linear-gradient(90deg, #ea580c, #fbbf24)"
                          : "linear-gradient(90deg, #0f2340, #2563eb)",
                  } as React.CSSProperties
                }
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-brand">{pkg.name}</h3>
                <p className="mt-2 text-muted">{pkg.description}</p>
                <p className="mt-6">
                  <span className="text-3xl font-bold text-brand">
                    {pkg.price}
                  </span>
                  {pkg.period && (
                    <span className="text-muted">{pkg.period}</span>
                  )}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={pkg.highlighted ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {pkg.cta}
                </Button>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted">
            All packages are customizable. Contact us for a tailored quote based
            on your transaction volume and entity structure.
          </p>
        </Container>
      </section>

      <CtaBanner
        title="Not sure which plan fits?"
        description="Book a free consultation and we'll recommend the right package for your business stage and compliance needs."
      />
    </>
  );
}
