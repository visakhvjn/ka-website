"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { getHeroImageWithAlt } from "@/data/hero-images";
import { useLocale } from "@/components/layout/LocaleProvider";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactPageContent() {
  const { messages: m } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={m.contactPage.eyebrow}
        title={m.contactPage.title}
        description={m.contactPage.description}
        image={getHeroImageWithAlt("contact", m.hero)}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-brand">
                {m.contactPage.formTitle}
              </h2>
              <p className="mt-2 text-muted">{m.contactPage.formIntro}</p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-brand">
                  {m.contactPage.contactDetails}
                </h3>
                <ul className="mt-6 space-y-6">
                  <li>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="flex items-start gap-4 text-muted transition-colors hover:text-brand"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-muted text-brand">
                        <Mail className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-muted">
                          {m.contactPage.email}
                        </p>
                        <p className="font-semibold text-brand">
                          {site.contact.email}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                      className="flex items-start gap-4 text-muted transition-colors hover:text-brand"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-muted text-brand">
                        <Phone className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-muted">
                          {m.contactPage.phone}
                        </p>
                        <p className="font-semibold text-brand">
                          {site.contact.phoneDisplay}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 text-muted transition-colors hover:text-brand"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-muted text-brand">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-muted">
                          {m.contactPage.office}
                        </p>
                        <p className="font-semibold text-brand">
                          {m.site.address}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-muted text-brand">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-muted">
                        {m.contactPage.hours}
                      </p>
                      <p className="font-semibold text-brand">
                        {m.site.hours}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title={m.contactPage.mapTitle}
                  src={site.contact.mapEmbedUrl}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
