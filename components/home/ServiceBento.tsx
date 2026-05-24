"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  useLocale,
  useServiceCategories,
} from "@/components/layout/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const cardAccents = [
  "linear-gradient(90deg, #2563eb, #38bdf8)",
  "linear-gradient(90deg, #ea580c, #fbbf24)",
  "linear-gradient(90deg, #db2777, #f472b6)",
  "linear-gradient(90deg, #10b981, #34d399)",
  "linear-gradient(90deg, #2563eb, #818cf8)",
  "linear-gradient(90deg, #ea580c, #fb923c)",
  "linear-gradient(90deg, #0f2340, #2563eb)",
];

const iconBg = [
  "bg-blue-100 text-blue-700",
  "bg-orange-100 text-orange-700",
  "bg-pink-100 text-pink-700",
  "bg-emerald-100 text-emerald-700",
  "bg-indigo-100 text-indigo-700",
  "bg-amber-100 text-amber-700",
  "bg-slate-200 text-brand",
];

export function ServiceBento() {
  const { messages: m } = useLocale();
  const serviceCategories = useServiceCategories();

  return (
    <section className="pattern-dots py-20">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={m.home.servicesEyebrow}
            title={m.home.servicesTitle}
            description={m.home.servicesDescription}
          />
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-brand-muted"
          >
            {m.common.viewAllServices}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat, index) => (
            <Link
              key={cat.slug}
              href={`/services/${cat.slug}`}
              className={cn("card-rich group flex flex-col p-6", cat.bentoClass)}
              style={
                {
                  "--card-accent": cardAccents[index % cardAccents.length],
                } as React.CSSProperties
              }
            >
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                  iconBg[index % iconBg.length],
                )}
              >
                <cat.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-brand">{cat.title}</h3>
              <p className="mt-2 flex-1 text-muted leading-relaxed">
                {cat.shortDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2">
                {m.common.learnMore}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
