import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { StatCounter } from "@/components/ui/StatCounter";

export function StatsSection() {
  return (
    <section className="section-dark relative overflow-hidden py-20">
      <div className="brand-stripe absolute top-0 left-0 right-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgb(37_99_235_/_0.15)_0%,_transparent_70%)]" />
      <Container className="relative">
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-blue-300/80">
          Our track record
        </p>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {site.stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              variant="dark"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
