import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { HeroImage } from "@/data/hero-images";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image: HeroImage;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[22rem] overflow-hidden text-white sm:min-h-[26rem]">
      <div className="brand-stripe relative z-10" />
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/92 via-[#0f2340]/78 to-[#1a365d]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 via-transparent to-transparent" />
      </div>
      <Container className="relative z-10 flex min-h-[calc(22rem-4px)] flex-col justify-center py-14 sm:min-h-[calc(26rem-4px)] sm:py-18">
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
