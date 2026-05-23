import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({
  title = "Ready to simplify your finances?",
  description = "Schedule a free consultation with our UAE specialists. We'll assess your needs and recommend the right service package.",
}: CtaBannerProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-brand-muted to-brand px-8 py-16 text-center shadow-2xl shadow-brand/25 sm:px-16">
          <div className="brand-stripe absolute top-0 left-0 right-0" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-warm/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent-rose/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-brand shadow-lg hover:bg-amber-50"
              >
                Book consultation
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white/50 bg-white/10 text-white hover:bg-white/20"
              >
                Explore services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
