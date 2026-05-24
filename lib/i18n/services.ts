import {
  Building2,
  ShieldCheck,
  Calculator,
  Receipt,
  Scale,
  Briefcase,
  FileText,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/locales";
import { getMessages } from "@/lib/i18n";
import type { ServiceMessages } from "@/lib/i18n/types";

const categoryConfig: {
  slug: string;
  icon: LucideIcon;
  bentoClass?: string;
  subIds: string[];
}[] = [
  {
    slug: "corporate-tax",
    icon: Building2,
    bentoClass: "md:col-span-2 md:row-span-2",
    subIds: [
      "implementation",
      "registration",
      "compliance",
      "advisory",
      "returns",
      "transfer-pricing",
    ],
  },
  {
    slug: "audit-assurance",
    icon: ShieldCheck,
    subIds: [
      "financial-audit",
      "external-audit",
      "icv-audit",
      "tax-audit",
      "stock-audit",
      "liquidation",
      "free-zone",
      "due-diligence",
    ],
  },
  {
    slug: "accounting-bookkeeping",
    icon: Calculator,
    bentoClass: "md:col-span-2",
    subIds: [
      "accounting",
      "bookkeeping",
      "backlog",
      "review",
      "valuation",
      "fixed-assets",
    ],
  },
  {
    slug: "vat-indirect-tax",
    icon: Receipt,
    subIds: [
      "vat-registration",
      "vat-filing",
      "vat-refund",
      "vat-audit",
      "vat-advisory",
    ],
  },
  {
    slug: "aml-compliance",
    icon: Scale,
    subIds: ["aml-registration", "policies", "outsourced", "aup-audit"],
  },
  {
    slug: "business-advisory",
    icon: Briefcase,
    subIds: [
      "ma",
      "bank-opening",
      "feasibility",
      "ubo",
      "attestation",
      "ifrs",
      "trademark",
      "customs",
    ],
  },
  {
    slug: "regulatory-tax",
    icon: FileText,
    subIds: ["esr", "excise", "tax-residency", "tax-agent"],
  },
];

export type ServiceCategory = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  bentoClass?: string;
  subServices: { id: string; title: string; description: string }[];
};

function buildCategories(
  services: Record<string, ServiceMessages>,
): ServiceCategory[] {
  return categoryConfig.map((config) => {
    const text = services[config.slug];
    return {
      slug: config.slug,
      icon: config.icon,
      bentoClass: config.bentoClass,
      title: text.title,
      shortDescription: text.shortDescription,
      description: text.description,
      subServices: config.subIds.map((id) => ({
        id,
        title: text.subServices[id].title,
        description: text.subServices[id].description,
      })),
    };
  });
}

export function getServiceCategories(locale: Locale): ServiceCategory[] {
  return buildCategories(getMessages(locale).services);
}

export function getCategoryBySlug(
  slug: string,
  locale: Locale,
): ServiceCategory | undefined {
  return getServiceCategories(locale).find((cat) => cat.slug === slug);
}

