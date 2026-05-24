"use client";

import { Check } from "lucide-react";
import { getHeroImageWithAlt } from "@/data/hero-images";
import { useLocale } from "@/components/layout/LocaleProvider";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const HIGHLIGHTED_PACKAGE_ID = "growth";

export function PackagesPageContent() {
  const { messages: m } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={m.packagesPage.eyebrow}
        title={m.packagesPage.title}
        description={m.packagesPage.description}
        image={getHeroImageWithAlt("packages", m.hero)}
      />

      <section className="pattern-dots py-20">
        <Container>
          <SectionHeading
            title={m.packagesPage.sectionTitle}
            align="center"
            className="mb-12"
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {m.packages.map((pkg, i) => {
              const highlighted = pkg.id === HIGHLIGHTED_PACKAGE_ID;
              return (
                <div
                  key={pkg.id}
                  className={cn("relative pt-4", highlighted && "z-10")}
                >
                  {highlighted && (
                    <span className="absolute left-1/2 top-0 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white shadow-md">
                      {m.common.mostPopular}
                    </span>
                  )}
                  <div
                    className={cn(
                      "card-rich flex flex-col p-8",
                      highlighted && "scale-[1.02] ring-2 ring-accent",
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
                    <h3 className="text-2xl font-bold text-brand">{pkg.name}</h3>
                    <p className="mt-2 text-muted">{pkg.description}</p>
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
                      variant={highlighted ? "primary" : "outline"}
                      className="mt-8 w-full"
                    >
                      {pkg.cta}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-12 text-center text-sm text-muted">
            {m.packagesPage.footerNote}
          </p>
        </Container>
      </section>

      <CtaBanner
        title={m.packagesPage.ctaTitle}
        description={m.packagesPage.ctaDescription}
      />
    </>
  );
}
