"use client";

import Link from "next/link";
import { ArrowUpRight, Bell } from "lucide-react";
import { site } from "@/data/site";
import { useLocale } from "@/components/layout/LocaleProvider";
import { Container } from "@/components/ui/Container";

export function Announcements() {
  const { messages: m } = useLocale();

  return (
    <section className="border-y border-brand/10 bg-surface py-5 shadow-inner">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <span className="flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white">
              <Bell className="h-4 w-4" />
            </span>
            {m.home.updates}
          </span>
          <div className="flex flex-wrap gap-3">
            {site.announcements.map((item, i) => {
              const borders = [
                "border-l-accent",
                "border-l-accent-warm",
                "border-l-accent-rose",
              ];
              const title = m.site.announcements[i]?.title ?? item.title;
              return (
                <Link
                  key={item.href + i}
                  href={item.href}
                  className={`group inline-flex items-center gap-2 rounded-lg border border-border border-l-4 ${borders[i % borders.length]} bg-surface-elevated px-4 py-2.5 text-sm shadow-sm transition-all hover:shadow-md`}
                >
                  <span className="font-medium text-brand">{title}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-accent opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
