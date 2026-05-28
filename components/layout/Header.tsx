"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { BrandMark } from "@/components/layout/BrandMark";
import { LanguageSelector } from "@/components/layout/LanguageSelector";
import {
  useLocale,
  useServiceCategories,
} from "@/components/layout/LocaleProvider";
import { useCalendly } from "@/components/calendly/CalendlyProvider";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navKeysByHref: Record<string, keyof ReturnType<typeof useLocale>["messages"]["nav"]> = {
  "/": "home",
  "/about": "about",
  "/services": "services",
  "/packages": "packages",
  "/faq": "faq",
  "/contact": "contact",
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { messages: m } = useLocale();
  const { openBooking } = useCalendly();
  const serviceCategories = useServiceCategories();

  const servicesItem = mainNav.find((item) => item.label === "Services");

  function handleBookOnline() {
    setMobileOpen(false);
    openBooking();
  }

  function navLabel(href: string) {
    const key = navKeysByHref[href];
    return key ? m.nav[key] : href;
  }

  return (
    <header className="sticky top-0 z-40 shadow-lg shadow-brand/10">
      <div className="brand-stripe" />
      <div className="hidden bg-brand text-sm text-blue-100/90 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              {m.site.locationShort}
            </span>
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 text-sky-400" />
              {site.contact.email}
            </a>
          </div>
          <a
            href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-amber-300"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-400" />
            {site.contact.phoneDisplay}
          </a>
        </div>
      </div>

      <nav
        className="relative border-b border-brand-muted/50 bg-brand-muted"
        onMouseLeave={() => setServicesOpen(false)}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <BrandMark
            link
            tagline={m.site.tagline}
            nameClassName="text-sm font-bold text-white sm:text-base lg:text-lg"
            taglineClassName="hidden text-blue-200/85 sm:block"
          />

          <div className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) =>
              item.label === "Services" && "children" in item ? (
                <div
                  key={item.href}
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-blue-100 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {navLabel(item.href)}
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-blue-100 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {navLabel(item.href)}
                </Link>
              ),
            )}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSelector />
            <Button
              size="sm"
              className="bg-white text-brand hover:bg-amber-50"
              onClick={handleBookOnline}
            >
              {m.contactForm.bookOnlineAppointment}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSelector />
            <button
              type="button"
              className="rounded-full p-2 text-white hover:bg-white/10"
              aria-label={mobileOpen ? m.common.closeMenu : m.common.openMenu}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "absolute left-1/2 top-full z-50 hidden w-[min(80rem,calc(100vw-2rem))] -translate-x-1/2 pt-2 transition-all lg:block",
            servicesOpen
              ? "visible opacity-100"
              : "pointer-events-none invisible opacity-0",
          )}
          onMouseEnter={() => setServicesOpen(true)}
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl">
            <div className="brand-stripe" />
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 p-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
              {serviceCategories.map((cat) => (
                <div key={cat.slug}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="group mb-3 flex items-start gap-2"
                    onClick={() => setServicesOpen(false)}
                  >
                    <cat.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="text-xs font-bold uppercase leading-snug tracking-wide text-brand group-hover:text-accent">
                      {cat.title}
                    </span>
                  </Link>
                  <ul className="space-y-1.5">
                    {cat.subServices.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          href={`/services/${cat.slug}#${sub.id}`}
                          className="block text-sm leading-snug text-muted transition-colors hover:text-brand"
                          onClick={() => setServicesOpen(false)}
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t border-border bg-surface-muted px-6 py-3">
              <Link
                href="/services"
                className="text-sm font-semibold text-accent hover:text-brand"
                onClick={() => setServicesOpen(false)}
              >
                {m.common.viewAllServices}
              </Link>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-brand px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {mainNav.map((item) =>
                item.label === "Services" &&
                servicesItem &&
                "children" in servicesItem ? (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2 font-semibold text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {navLabel(item.href)}
                    </Link>
                    <div className="ml-3 flex flex-col gap-2 border-l-2 border-amber-400/50 pl-3">
                      {serviceCategories.map((cat) => (
                        <div key={cat.slug}>
                          <Link
                            href={`/services/${cat.slug}`}
                            className="block rounded-lg px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                            onClick={() => setMobileOpen(false)}
                          >
                            {cat.title}
                          </Link>
                          <div className="ml-3 flex flex-col gap-0.5 border-l border-white/20 pl-3">
                            {cat.subServices.map((sub) => (
                              <Link
                                key={sub.id}
                                href={`/services/${cat.slug}#${sub.id}`}
                                className="rounded-lg px-3 py-1.5 text-xs text-blue-100/90 hover:bg-white/10"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 font-medium text-blue-100 hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {navLabel(item.href)}
                  </Link>
                ),
              )}
              <Button
                className="mt-3 w-full bg-white text-brand"
                onClick={handleBookOnline}
              >
                {m.contactForm.bookOnlineAppointment}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
