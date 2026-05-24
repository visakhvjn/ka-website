"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { heroImages } from "@/data/hero-images";
import { BrandMark } from "@/components/layout/BrandMark";
import {
  useLocale,
  useServiceCategories,
} from "@/components/layout/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { messages: m } = useLocale();
  const serviceCategories = useServiceCategories();
  const highlights = serviceCategories.slice(0, 4);
  const image = {
    src: heroImages.home.src,
    alt: m.hero.home?.alt ?? heroImages.home.alt,
  };

  return (
    <section className="relative min-h-[32rem] overflow-hidden text-white lg:min-h-[36rem]">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/94 via-[#0f2340]/82 to-[#1a365d]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 via-transparent to-[#0f2340]/20" />
      </div>

      <div className="pointer-events-none absolute -left-32 top-20 z-[1] h-96 w-96 rounded-full bg-accent/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-32 z-[1] h-80 w-80 rounded-full bg-accent-warm/15 blur-[90px]" />

      <Container className="relative z-10 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent-green animate-pulse" />
              {m.home.regionBadge}
            </div>

            <h1 className="font-display mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {m.home.heroTitle}{" "}
              <span className="bg-gradient-to-r from-sky-300 via-amber-300 to-pink-300 bg-clip-text text-transparent">
                {m.home.heroHighlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-blue-100/90">
              {m.site.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-brand shadow-lg shadow-black/20 hover:bg-blue-50"
              >
                {m.common.bookConsultation}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white/30 bg-white/5 text-white hover:border-white/60 hover:bg-white/15"
              >
                {m.common.viewAllServices}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel rounded-2xl p-6 lg:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <BrandMark
                  tagline={m.site.tagline}
                  imageClassName="h-16 p-1.5"
                  nameClassName="text-base text-white sm:text-lg"
                  taglineClassName="text-xs text-blue-200/85 sm:text-sm"
                />
                <span className="rounded-full bg-accent-green/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                  {m.home.trustedAdvisory}
                </span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-wider text-blue-200/80">
                {m.home.coreServices}
              </p>
              <ul className="mt-4 space-y-3">
                {highlights.map((cat, i) => {
                  const dots = [
                    "bg-accent",
                    "bg-accent-warm",
                    "bg-accent-rose",
                    "bg-accent-green",
                  ];
                  return (
                    <li key={cat.slug}>
                      <Link
                        href={`/services/${cat.slug}`}
                        className="group flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 transition-colors hover:bg-white/10"
                      >
                        <span
                          className={`h-2.5 w-2.5 shrink-0 rounded-full ${dots[i]}`}
                        />
                        <span className="flex-1 font-medium text-white group-hover:text-sky-200">
                          {cat.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-6">
                {m.home.trustBadges.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-xs text-blue-100/80"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent-green" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full border-4 border-accent/30 opacity-60" />
            <div className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-full border-4 border-accent-warm/30 opacity-50" />
          </div>
        </div>
      </Container>
    </section>
  );
}
