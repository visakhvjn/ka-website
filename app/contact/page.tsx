import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { heroImages } from "@/data/hero-images";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}. Book a consultation or send us a message.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation"
        description="Whether you need a quick compliance check or a full finance outsourcing partner — we're here to help."
        image={heroImages.contact}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-brand">
                Send us a message
              </h2>
              <p className="mt-2 text-muted">
                Fill out the form and we&apos;ll respond within one business day.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-brand">
                  Contact details
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
                          Email
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
                          Phone
                        </p>
                        <p className="font-semibold text-brand">
                          {site.contact.phoneDisplay}
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-muted text-brand">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-muted">
                        Office
                      </p>
                      <p className="font-semibold text-brand">
                        {site.contact.address}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-muted text-brand">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-muted">
                        Hours
                      </p>
                      <p className="font-semibold text-brand">
                        {site.contact.hours}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Office location"
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
