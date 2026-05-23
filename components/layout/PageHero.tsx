import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="hero-rich relative overflow-hidden text-white">
      <div className="brand-stripe" />
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-accent-warm/20 blur-3xl" />
      <Container className="relative py-14 sm:py-18">
        {eyebrow && (
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-amber-300">
            <span className="h-1 w-8 rounded-full bg-gradient-to-r from-accent to-accent-warm" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-blue-100/90">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
