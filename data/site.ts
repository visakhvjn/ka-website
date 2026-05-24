export const site = {
  name: "Innovative & Strategic F.Z.E",
  shortName: "Innovative & Strategic",
  legalName: "INNOVATIVE & STRATEGIC F.Z.E",
  tagline: "Strategic Solutions for Modern Businesses",
  description:
    "Innovative & Strategic F.Z.E is a professional management consultancy delivering practical, cost-efficient business solutions across the UAE, UK, and Georgia — including accounting, VAT, corporate tax, audit, and advisory services.",
  url: "https://www.innovativestrategic.com",
  locale: "en_AE",
  founded: 2025,

  contact: {
    email: "info@innovativestrategic.com",
    phone: "+971562371945",
    phoneDisplay: "+971 56 237 1945",
    whatsapp: "971562371945",
    address:
      "Sheikh Rashid Bin Saeed Al Maktoum St - Al Bustan - ليوارة 1 - Ajman - United Arab Emirates",
    locationShort: "Al Bustan, Ajman, UAE",
    hours: "Monday – Saturday: 9:00 AM – 7:00 PM",
    mapsUrl: "https://maps.app.goo.gl/rVeBvmf5JEpWFGo17",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.876!2d55.4528963!3d25.4190812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6639ff0cca94f4b7%3A0x34fd80947060c777!2sInnovative%20%26%20Strategic%20-%20F.Z.E!5e0!3m2!1sen!2sae!4v1748035200000!5m2!1sen!2sae",
  },

  social: {
    linkedin:
      "https://www.linkedin.com/company/innovative-strategic-fze/",
    instagram: null as string | null,
  },

  vision:
    "To establish Innovative & Strategic F.Z.E as a trusted consultancy partner and market leader across the MENA region, UK, and Georgia — delivering innovative business solutions that drive sustainable growth and long-term value.",

  mission:
    "To enable businesses to succeed through dependable expertise, tailored solutions, and a continuous focus on innovation, integrity, and client satisfaction.",

  stats: [
    { value: 150, suffix: "+", label: "TRN Registrations" },
    { value: 300, suffix: "+", label: "VAT Returns Filed" },
    { value: 80, suffix: "+", label: "Audits & Reviews" },
    { value: 3, suffix: "", label: "Markets Served (UAE, UK, Georgia)" },
    { value: 120, suffix: "+", label: "Corporate Tax Clients" },
    { value: 50, suffix: "+", label: "Company Formations" },
  ],

  announcements: [
    {
      title: "UAE E-Invoicing framework — prepare your systems early",
      href: "/contact",
    },
    {
      title: "2026 VAT law updates — key changes for UAE businesses",
      href: "/services/vat-indirect-tax",
    },
    {
      title: "Corporate Tax vs VAT — understand the difference",
      href: "/services/corporate-tax",
    },
  ],

  values: [
    {
      title: "Result-oriented",
      description:
        "Practical, cost-efficient solutions focused on measurable outcomes for your business.",
    },
    {
      title: "Integrity & ethics",
      description:
        "Strong ethical standards and transparent advice you can trust at every stage.",
    },
    {
      title: "Integrated expertise",
      description:
        "Company formation, accounting, tax, audit, and advisory under one roof.",
    },
    {
      title: "Regional reach",
      description:
        "Support for businesses operating in the UAE, United Kingdom, and Georgia.",
    },
  ],

  testimonials: [
    {
      quote:
        "Innovative & Strategic helped us organize our VAT records and corporate tax filings before our first FTA review. Clear guidance and responsive support throughout.",
      author: "Sarah Al-Mansoori",
      role: "CFO",
      company: "Horizon Trading LLC",
    },
    {
      quote:
        "From company setup in Ajman Free Zone to ongoing bookkeeping, they have been a reliable single point of contact for all our compliance needs.",
      author: "Rajesh Nair",
      role: "Managing Director",
      company: "Nexus Tech Solutions",
    },
    {
      quote:
        "Their team explained the difference between exempt and zero-rated VAT supplies — saving us from costly input VAT recovery mistakes.",
      author: "Fatima Hassan",
      role: "Founder",
      company: "Bloom Retail",
    },
  ],
} as const;
