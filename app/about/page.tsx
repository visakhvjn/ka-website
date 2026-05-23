import type { Metadata } from "next";
import { Target, Eye } from "lucide-react";
import { site } from "@/data/site";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${site.name} — our mission, values, and vision for UAE businesses.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Built for UAE businesses that demand more"
        description="We are a team of certified accountants, tax consultants, and compliance specialists dedicated to making financial management effortless."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our mission"
                title="Clarity in every number"
                description="Innovative & Strategic F.Z.E exists to remove the complexity from UAE financial compliance. We believe every business — from startups to established enterprises — deserves access to senior-level expertise without enterprise-level overhead."
              />
            </div>
            <div className="rounded-2xl border border-border bg-surface-muted p-8">
              <div className="flex items-center gap-3 text-brand">
                <Target className="h-6 w-6" />
                <h3 className="text-lg font-semibold text-brand">
                  What drives us
                </h3>
              </div>
              <p className="mt-4 text-muted leading-relaxed">
                The UAE&apos;s regulatory landscape evolves rapidly. Corporate
                tax, VAT reforms, and AML requirements create pressure on
                finance teams. We stay ahead of every change so you can focus
                on running and growing your business with confidence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="pattern-dots py-20">
        <Container>
          <SectionHeading
            eyebrow="Our values"
            title="Principles that guide every engagement"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.values.map((value, i) => {
              const accents = [
                "linear-gradient(90deg, #2563eb, #38bdf8)",
                "linear-gradient(90deg, #ea580c, #fbbf24)",
                "linear-gradient(90deg, #db2777, #f472b6)",
                "linear-gradient(90deg, #10b981, #34d399)",
              ];
              return (
              <div
                key={value.title}
                className="card-rich p-6"
                style={
                  { "--card-accent": accents[i % accents.length] } as React.CSSProperties
                }
              >
                <h3 className="font-semibold text-brand">{value.title}</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-muted to-accent p-10 text-center shadow-2xl sm:p-14">
            <div className="brand-stripe mb-8" />
            <Eye className="mx-auto h-12 w-12 text-amber-300" />
            <h2 className="font-display mt-6 text-3xl font-bold text-white">
              Our vision
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
              {site.vision}
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-blue-100/90">
              <span className="font-bold text-amber-300">Our mission: </span>
              {site.mission}
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
