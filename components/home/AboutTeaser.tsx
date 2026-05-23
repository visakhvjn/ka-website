import Link from "next/link";
import { ArrowRight, BarChart3, LineChart, Users } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

const features = [
  {
    icon: Users,
    title: "Expert advisory",
    description:
      "Senior consultants who translate complex regulations into clear, actionable guidance.",
    color: "from-accent to-sky-400",
  },
  {
    icon: BarChart3,
    title: "Tax strategy",
    description:
      "Proactive VAT and corporate tax planning to protect your bottom line.",
    color: "from-accent-warm to-amber-400",
  },
  {
    icon: LineChart,
    title: "Growth planning",
    description:
      "KPI dashboards and financial roadmaps aligned with long-term objectives.",
    color: "from-accent-rose to-pink-400",
  },
];

export function AboutTeaser() {
  return (
    <section className="py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-brand shadow-2xl shadow-brand/30">
          <div className="brand-stripe" />
          <div className="grid lg:grid-cols-2">
            <div className="relative p-10 lg:p-14">
              <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
                Who we are
              </p>
              <h2 className="font-display mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                Your partner in financial excellence
              </h2>
              <p className="mt-5 leading-relaxed text-blue-100/90">
                At Innovative & Strategic F.Z.E, we deliver accounting, tax,
                audit, and advisory services across the UAE, UK, and Georgia —
                with practical solutions built for real business growth.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Expert accounting & bookkeeping",
                  "Audit-ready reporting",
                  "Tailored growth solutions",
                  "Dedicated professional team",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-blue-50"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-green text-xs font-bold text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-blue-50"
              >
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 bg-brand-muted/50 p-6 sm:grid-cols-1 lg:p-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-blue-100/80">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
