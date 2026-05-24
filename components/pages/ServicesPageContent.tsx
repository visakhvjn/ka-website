"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getHeroImage, getHeroImageWithAlt } from "@/data/hero-images";
import {
  useLocale,
  useServiceCategories,
} from "@/components/layout/LocaleProvider";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { Container } from "@/components/ui/Container";

export function ServicesPageContent() {
  const { messages: m } = useLocale();
  const serviceCategories = useServiceCategories();

  return (
    <>
      <PageHero
        eyebrow={m.servicesPage.eyebrow}
        title={m.servicesPage.title}
        description={m.servicesPage.description}
        image={getHeroImageWithAlt("services", m.hero)}
      />

      <section className="pattern-dots py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceCategories.map((cat, index) => {
              const heroImage = getHeroImage(cat.slug);
              const iconBg = [
                "bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white",
                "bg-orange-100 text-orange-700 group-hover:bg-orange-500 group-hover:text-white",
                "bg-pink-100 text-pink-700 group-hover:bg-pink-600 group-hover:text-white",
                "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white",
                "bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white",
                "bg-amber-100 text-amber-700 group-hover:bg-amber-500 group-hover:text-white",
                "bg-slate-200 text-brand group-hover:bg-brand group-hover:text-white",
              ];
              const accents = [
                "linear-gradient(90deg, #2563eb, #38bdf8)",
                "linear-gradient(90deg, #ea580c, #fbbf24)",
                "linear-gradient(90deg, #db2777, #f472b6)",
                "linear-gradient(90deg, #10b981, #34d399)",
                "linear-gradient(90deg, #2563eb, #818cf8)",
                "linear-gradient(90deg, #ea580c, #fb923c)",
                "linear-gradient(90deg, #0f2340, #2563eb)",
              ];
              return (
                <Link
                  key={cat.slug}
                  href={`/services/${cat.slug}`}
                  className="card-rich group p-8"
                  style={
                    {
                      "--card-accent": accents[index % accents.length],
                    } as React.CSSProperties
                  }
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
                  >
                    <Image
                      src={heroImage.src}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-[0.45] transition-opacity duration-300 group-hover:opacity-[0.52]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/78 to-white/48" />
                  </div>

                  <div className="relative z-[1] flex flex-1 gap-6">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl shadow-sm transition-colors ${iconBg[index % iconBg.length]}`}
                    >
                      <cat.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-brand [text-shadow:0_1px_3px_rgb(255_255_255_/_0.9)]">
                        {cat.title}
                      </h2>
                      <p className="mt-2 text-brand/75 [text-shadow:0_1px_2px_rgb(255_255_255_/_0.85)]">
                        {cat.description}
                      </p>
                      <p className="mt-3 text-sm text-brand/65 [text-shadow:0_1px_2px_rgb(255_255_255_/_0.85)]">
                        {cat.subServices.length} {m.common.servicesIncluded}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand [text-shadow:0_1px_2px_rgb(255_255_255_/_0.85)] group-hover:gap-2">
                        {m.common.viewDetails}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
