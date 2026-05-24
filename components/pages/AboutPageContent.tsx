"use client";

import { Target, Eye } from "lucide-react";
import { getHeroImageWithAlt } from "@/data/hero-images";
import { useLocale } from "@/components/layout/LocaleProvider";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPageContent() {
  const { messages: m } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={m.about.eyebrow}
        title={m.about.title}
        description={m.about.description}
        image={getHeroImageWithAlt("about", m.hero)}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={m.about.missionEyebrow}
                title={m.about.missionTitle}
                description={m.about.missionDescription}
              />
            </div>
            <div className="rounded-2xl border border-border bg-surface-muted p-8">
              <div className="flex items-center gap-3 text-brand">
                <Target className="h-6 w-6" />
                <h3 className="text-lg font-semibold text-brand">
                  {m.about.drivesUsTitle}
                </h3>
              </div>
              <p className="mt-4 text-muted leading-relaxed">
                {m.about.drivesUsBody}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pattern-dots py-20">
        <Container>
          <SectionHeading
            eyebrow={m.about.valuesEyebrow}
            title={m.about.valuesTitle}
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {m.site.values.map((value, i) => {
              const accents = [
                "linear-gradient(90deg, #2563eb, #38bdf8)",
                "linear-gradient(90deg, #ea580c, #fbbf24)",
                "linear-gradient(90deg, #db2777, #f472b6)",
                "linear-gradient(90deg, #10b981, #34d399)",
              ];
              return (
                <div
                  key={value.title}
                  className="card-rich p-6"
                  style={
                    {
                      "--card-accent": accents[i % accents.length],
                    } as React.CSSProperties
                  }
                >
                  <h3 className="font-semibold text-brand">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-muted to-accent p-10 text-center shadow-2xl sm:p-14">
            <div className="brand-stripe mb-8" />
            <Eye className="mx-auto h-12 w-12 text-amber-300" />
            <h2 className="font-display mt-6 text-3xl font-bold text-white">
              {m.about.visionTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
              {m.site.vision}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-100/90">
              <span className="font-bold text-amber-300">
                {m.common.missionPrefix}{" "}
              </span>
              {m.site.mission}
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
