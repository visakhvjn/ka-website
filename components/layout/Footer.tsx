"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { BrandMark } from "@/components/layout/BrandMark";
import {
  useLocale,
  useServiceCategories,
} from "@/components/layout/LocaleProvider";
import { Container } from "@/components/ui/Container";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const quickLinkHrefs = [
  { href: "/about", key: "aboutUs" as const },
  { href: "/services", key: "services" as const },
  { href: "/packages", key: "packages" as const },
  { href: "/faq", key: "faq" as const },
  { href: "/contact", key: "contact" as const },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { messages: m } = useLocale();
  const serviceCategories = useServiceCategories();

  return (
    <footer className="border-t border-brand-muted bg-brand text-white/80">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandMark
              link
              tagline={m.site.tagline}
              imageClassName="h-20 p-2.5"
              nameClassName="text-lg text-white"
              taglineClassName="text-sm text-white/70"
              className="rounded-xl"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {m.site.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={m.common.linkedin}
                className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-accent"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {m.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinkHrefs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-accent-warm"
                  >
                    {m.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {m.footer.services}
            </h3>
            <ul className="space-y-2">
              {serviceCategories.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-accent-warm"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {m.footer.contact}
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-start gap-2 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-warm" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-warm" />
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition-colors hover:text-white"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-warm" />
                  {m.site.address}
                </a>
              </li>
            </ul>
            <p className="mt-4 whitespace-pre-line text-xs text-white/50">
              {m.site.hours}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {year} {site.name}. {m.common.allRightsReserved}
        </div>
      </Container>
    </footer>
  );
}
