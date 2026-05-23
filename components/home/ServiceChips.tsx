import Link from "next/link";
import { serviceCategories } from "@/data/services";
import { Container } from "@/components/ui/Container";

const chipStyles = [
  "bg-blue-600 text-white hover:bg-blue-700",
  "bg-orange-500 text-white hover:bg-orange-600",
  "bg-pink-600 text-white hover:bg-pink-700",
  "bg-emerald-600 text-white hover:bg-emerald-700",
  "bg-indigo-600 text-white hover:bg-indigo-700",
  "bg-amber-500 text-white hover:bg-amber-600",
  "bg-brand text-white hover:bg-brand-muted",
];

export function ServiceChips() {
  return (
    <section className="bg-background py-8">
      <Container>
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-muted">
          Explore by service
        </p>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {serviceCategories.map((cat, i) => (
            <Link
              key={cat.slug}
              href={`/services/${cat.slug}`}
              className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold shadow-md transition-all hover:shadow-lg ${chipStyles[i % chipStyles.length]}`}
            >
              {cat.title}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
