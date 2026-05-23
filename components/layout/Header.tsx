"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const servicesItem = mainNav.find((item) => item.label === "Services");

  return (
    <header className="sticky top-0 z-40 shadow-lg shadow-brand/10">
      <div className="brand-stripe" />
      <div className="hidden bg-brand text-sm text-blue-100/90 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              {site.contact.locationShort}
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

      <nav className="border-b border-brand-muted/50 bg-brand-muted">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt={site.name}
              width={200}
              height={200}
              priority
              className="h-12 w-auto rounded-lg bg-white p-1 sm:h-14"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) =>
              item.label === "Services" && "children" in item ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-blue-100 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                  <div
                    className={cn(
                      "absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-2 transition-all",
                      servicesOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0",
                    )}
                  >
                    <div className="overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl">
                      <div className="brand-stripe" />
                      <div className="grid grid-cols-2 gap-1 p-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-xl p-3 transition-colors hover:bg-surface-muted"
                          >
                            <p className="text-sm font-semibold text-brand">
                              {child.label}
                            </p>
                            <p className="mt-0.5 line-clamp-1 text-xs text-muted">
                              {child.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-border bg-surface-muted px-4 py-3">
                        <Link
                          href="/services"
                          className="text-sm font-semibold text-accent hover:text-brand"
                        >
                          View all services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-blue-100 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          <div className="hidden lg:block">
            <Button
              href="/contact"
              size="sm"
              className="bg-white text-brand hover:bg-amber-50"
            >
              Book consultation
            </Button>
          </div>

          <button
            type="button"
            className="rounded-full p-2 text-white hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-brand px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {mainNav.map((item) =>
                item.label === "Services" &&
                servicesItem &&
                "children" in servicesItem ? (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2 font-semibold text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <div className="ml-3 flex flex-col gap-0.5 border-l-2 border-amber-400/50 pl-3">
                      {servicesItem.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg px-3 py-2 text-sm text-blue-100 hover:bg-white/10"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
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
                    {item.label}
                  </Link>
                ),
              )}
              <Button
                href="/contact"
                className="mt-3 w-full bg-white text-brand"
              >
                Book consultation
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
