import { Quote } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const accentBars = [
  "bg-accent",
  "bg-accent-warm",
  "bg-accent-rose",
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-surface py-20">
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-accent-warm/10 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by businesses across the UAE"
          description="Hear from leaders who rely on Innovative & Strategic for their financial operations."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.testimonials.map((t, i) => (
            <blockquote
              key={t.author}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated p-8 shadow-lg"
            >
              <div
                className={`absolute left-0 top-0 h-1 w-full ${accentBars[i % accentBars.length]}`}
              />
              <Quote className="h-10 w-10 text-accent/40" />
              <p className="mt-4 flex-1 leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border pt-6">
                <p className="font-bold text-brand">{t.author}</p>
                <p className="text-sm text-muted">
                  {t.role}, {t.company}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </section>
  );
}
