"use client";

import { site } from "@/data/site";
import { useLocale } from "@/components/layout/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { StatCounter } from "@/components/ui/StatCounter";

export function StatsSection() {
  const { messages: m } = useLocale();

  return (
    <section className="section-dark relative overflow-hidden py-20">
      <div className="brand-stripe absolute top-0 left-0 right-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgb(37_99_235_/_0.15)_0%,_transparent_70%)]" />
      <Container className="relative">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-blue-300/80">
          {m.home.statsEyebrow}
        </p>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {site.stats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={m.site.stats[i]?.label ?? stat.label}
              variant="dark"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
