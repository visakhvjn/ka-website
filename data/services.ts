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

export type ServiceCategory = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  bentoClass?: string;
  subServices: { id: string; title: string; description: string }[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "corporate-tax",
    title: "Corporate Tax",
    shortDescription: "Navigate UAE corporate tax with confidence",
    description:
      "From registration to return filing, we help businesses understand and meet UAE corporate tax obligations at the 9% standard rate — with strategic planning to optimize your position.",
    icon: Building2,
    bentoClass: "md:col-span-2 md:row-span-2",
    subServices: [
      {
        id: "implementation",
        title: "Tax implementation & setup",
        description:
          "End-to-end setup of corporate tax processes, chart of accounts alignment, and internal controls.",
      },
      {
        id: "registration",
        title: "Corporate tax registration",
        description:
          "FTA registration, TRN linkage, and documentation for mainland and free zone entities.",
      },
      {
        id: "compliance",
        title: "Ongoing compliance management",
        description:
          "Periodic reviews, deadline tracking, and proactive adjustments to regulatory changes.",
      },
      {
        id: "advisory",
        title: "Strategic tax advisory",
        description:
          "Structure optimization, exemption analysis, and group tax planning for multi-entity businesses.",
      },
      {
        id: "returns",
        title: "Return preparation & filing",
        description:
          "Accurate corporate tax return compilation, review, and electronic submission to the FTA.",
      },
      {
        id: "transfer-pricing",
        title: "Transfer pricing documentation",
        description:
          "Master file, local file, and disclosure requirements for related-party transactions.",
      },
    ],
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    shortDescription: "Independent verification you can trust",
    description:
      "Our audit team delivers rigorous financial examinations that strengthen stakeholder confidence, satisfy regulatory requirements, and uncover opportunities for improvement.",
    icon: ShieldCheck,
    subServices: [
      {
        id: "financial-audit",
        title: "Financial statement audit",
        description:
          "Full-scope audits aligned with IFRS and UAE regulatory standards.",
      },
      {
        id: "external-audit",
        title: "External audit services",
        description:
          "Independent third-party audits for banks, investors, and licensing authorities.",
      },
      {
        id: "icv-audit",
        title: "In-Country Value (ICV) certification",
        description:
          "ICV score calculation and certification for ADNOC and government supplier programs.",
      },
      {
        id: "tax-audit",
        title: "Tax audit support",
        description:
          "Representation and documentation preparation during FTA tax audits.",
      },
      {
        id: "stock-audit",
        title: "Inventory & stock audit",
        description:
          "Physical verification and valuation of inventory for accuracy and loss prevention.",
      },
      {
        id: "liquidation",
        title: "Liquidation audit",
        description:
          "Final accounts and audit reports for company wind-down and deregistration.",
      },
      {
        id: "free-zone",
        title: "Free zone audit services",
        description:
          "Audits meeting DMCC, JAFZA, DIFC, and other free zone authority requirements.",
      },
      {
        id: "due-diligence",
        title: "Due diligence reviews",
        description:
          "Pre-acquisition financial analysis and risk assessment for M&A transactions.",
      },
    ],
  },
  {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    shortDescription: "Accurate books that drive decisions",
    description:
      "Reliable day-to-day accounting that keeps your records audit-ready, tax-compliant, and useful for management decision-making.",
    icon: Calculator,
    bentoClass: "md:col-span-2",
    subServices: [
      {
        id: "accounting",
        title: "Full accounting services",
        description:
          "Complete general ledger management, reconciliations, and period-end close.",
      },
      {
        id: "bookkeeping",
        title: "Bookkeeping & data entry",
        description:
          "Timely recording of invoices, payments, payroll, and bank transactions.",
      },
      {
        id: "backlog",
        title: "Backlog accounting cleanup",
        description:
          "Catch-up bookkeeping for businesses with delayed or incomplete records.",
      },
      {
        id: "review",
        title: "Accounting quality review",
        description:
          "Independent review of existing books to identify errors and compliance gaps.",
      },
      {
        id: "valuation",
        title: "Business valuation",
        description:
          "Fair value assessments for transactions, disputes, and strategic planning.",
      },
      {
        id: "fixed-assets",
        title: "Fixed asset management",
        description:
          "Asset register maintenance, depreciation schedules, and disposal tracking.",
      },
    ],
  },
  {
    slug: "vat-indirect-tax",
    title: "VAT & Indirect Tax",
    shortDescription: "Stay ahead of FTA requirements",
    description:
      "Comprehensive VAT services covering registration through refunds — ensuring your indirect tax position is accurate, timely, and optimized.",
    icon: Receipt,
    subServices: [
      {
        id: "vat-registration",
        title: "VAT registration",
        description:
          "New TRN applications and amendments for mandatory and voluntary registrants.",
      },
      {
        id: "vat-filing",
        title: "VAT return filing",
        description:
          "Monthly and quarterly return preparation, review, and FTA submission.",
      },
      {
        id: "vat-refund",
        title: "VAT refund claims",
        description:
          "Identification and submission of refund opportunities for eligible businesses.",
      },
      {
        id: "vat-audit",
        title: "VAT audit defense",
        description:
          "Support during FTA VAT audits including documentation and representation.",
      },
      {
        id: "vat-advisory",
        title: "VAT planning & advisory",
        description:
          "Transaction structuring, zero-rating analysis, and input tax optimization.",
      },
    ],
  },
  {
    slug: "aml-compliance",
    title: "AML & Compliance",
    shortDescription: "Protect your business from financial crime risk",
    description:
      "Practical AML/CFT programs that satisfy UAE regulatory expectations while integrating smoothly into your operations.",
    icon: Scale,
    subServices: [
      {
        id: "aml-registration",
        title: "AML goAML registration",
        description:
          "Registration with the UAE Financial Intelligence Unit and ongoing reporting setup.",
      },
      {
        id: "policies",
        title: "Policies & procedures",
        description:
          "Custom AML/CFT policy manuals, risk assessments, and staff training programs.",
      },
      {
        id: "outsourced",
        title: "Outsourced compliance officer",
        description:
          "Dedicated AML compliance monitoring without full-time hire overhead.",
      },
      {
        id: "aup-audit",
        title: "AML assurance audits",
        description:
          "Independent testing of your AML controls and regulatory readiness.",
      },
    ],
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    shortDescription: "Strategic guidance for UAE market success",
    description:
      "Beyond numbers — we help you navigate company formation, banking, attestations, and growth decisions in the UAE's dynamic business environment.",
    icon: Briefcase,
    subServices: [
      {
        id: "ma",
        title: "Mergers & acquisitions support",
        description:
          "Financial due diligence, deal structuring advice, and post-merger integration planning.",
      },
      {
        id: "bank-opening",
        title: "Corporate bank account opening",
        description:
          "Documentation preparation and liaison with UAE banks for business accounts.",
      },
      {
        id: "feasibility",
        title: "Feasibility studies",
        description:
          "Market and financial viability analysis for new ventures and expansions.",
      },
      {
        id: "ubo",
        title: "UBO declaration filing",
        description:
          "Ultimate Beneficial Owner register maintenance and regulatory submissions.",
      },
      {
        id: "attestation",
        title: "Document attestation",
        description:
          "Coordination of certificate and document legalization for local and international use.",
      },
      {
        id: "ifrs",
        title: "IFRS transition advisory",
        description:
          "Gap analysis and implementation support for IFRS adoption and reporting.",
      },
      {
        id: "trademark",
        title: "Trademark registration",
        description:
          "UAE trademark application filing and renewal management.",
      },
      {
        id: "customs",
        title: "Customs registration",
        description:
          "Importer code registration and customs compliance setup.",
      },
    ],
  },
  {
    slug: "regulatory-tax",
    title: "Regulatory & Other Tax",
    shortDescription: "Specialized UAE tax and regulatory services",
    description:
      "Coverage for Economic Substance Regulations, excise tax, tax residency certificates, and FTA tax agent representation.",
    icon: FileText,
    subServices: [
      {
        id: "esr",
        title: "Economic Substance Regulations",
        description:
          "ESR notification, report filing, and substance test compliance for relevant entities.",
      },
      {
        id: "excise",
        title: "Excise tax registration",
        description:
          "Registration and return filing for excise-liable goods in the UAE.",
      },
      {
        id: "tax-residency",
        title: "Tax residency certificate",
        description:
          "Application and documentation for UAE tax residency certificates.",
      },
      {
        id: "tax-agent",
        title: "FTA tax agent services",
        description:
          "Authorized representation before the Federal Tax Authority on your behalf.",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((cat) => cat.slug === slug);
}
