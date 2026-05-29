import { faqs } from "@/data/faq";
import { heroImages } from "@/data/hero-images";
import { packages } from "@/data/packages";
import { enServices } from "@/lib/i18n/messages/en/services";
import { site } from "@/data/site";
import type { Messages } from "./types";

export function buildEnglishMessages(): Messages {
  const services = enServices;

  const hero = Object.fromEntries(
    Object.entries(heroImages).map(([key, value]) => [key, { alt: value.alt }]),
  );

  return {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      packages: "Packages",
      faq: "FAQ",
      contact: "Contact",
      aboutUs: "About Us",
    },
    common: {
      bookConsultation: "Book consultation",
      viewAllServices: "View all services →",
      selectLanguage: "Select language",
      exploreServices: "Explore services",
      learnMore: "Learn more",
      getInTouch: "Get in touch",
      sendMessage: "Send message",
      requestQuote: "Request quote",
      viewDetails: "View details",
      servicesIncluded: "services included",
      goHome: "Go home",
      contactUs: "Contact us",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mostPopular: "Most popular",
      other: "Other",
      backToServices: "← Back to all services",
      whatsappMessage: "Hello, I would like to inquire about your services.",
      chatOnWhatsapp: "Chat on WhatsApp",
      linkedin: "LinkedIn",
      allRightsReserved: "All rights reserved.",
      sendAnotherMessage: "Send another message",
      missionPrefix: "Our mission:",
    },
    site: {
      tagline: site.tagline,
      description: site.description,
      vision: site.vision,
      mission: site.mission,
      address: site.contact.address,
      locationShort: site.contact.locationShort,
      hours: site.contact.hours,
      stats: site.stats.map((s) => ({ label: s.label })),
      announcements: site.announcements.map((a) => ({ title: a.title })),
      values: site.values.map((v) => ({
        title: v.title,
        description: v.description,
      })),
      testimonials: site.testimonials.map((t) => ({
        quote: t.quote,
        role: t.role,
        company: t.company,
      })),
    },
    hero,
    home: {
      regionBadge: "UAE · UK · Georgia",
      heroTitle: "Your success,",
      heroHighlight: "driven by our services",
      trustedAdvisory: "Trusted advisory",
      coreServices: "Core services",
      trustBadges: [
        "FTA compliant",
        "Free zone experts",
        "Same-day response",
      ],
      updates: "Updates",
      exploreByService: "Explore by service",
      whoWeAre: "Who we are",
      partnerTitle: "Your partner in financial excellence",
      partnerBody:
        "At Innovative & Strategic F.Z.E, we deliver accounting, tax, audit, and advisory services across the UAE, UK, and Georgia — with practical solutions built for real business growth.",
      partnerBullets: [
        "Expert accounting & bookkeeping",
        "Audit-ready reporting",
        "Tailored growth solutions",
        "Dedicated professional team",
      ],
      learnMoreAboutUs: "Learn more about us",
      featureCards: [
        {
          title: "Expert advisory",
          description:
            "Senior consultants who translate complex regulations into clear, actionable guidance.",
        },
        {
          title: "Tax strategy",
          description:
            "Proactive VAT and corporate tax planning to protect your bottom line.",
        },
        {
          title: "Growth planning",
          description:
            "KPI dashboards and financial roadmaps aligned with long-term objectives.",
        },
      ],
      servicesEyebrow: "Our services",
      servicesTitle: "Everything your business needs to stay compliant",
      servicesDescription:
        "Seven practice areas covering tax, audit, accounting, and advisory — tailored for UAE mainland and free zone entities.",
      statsEyebrow: "Our track record",
      testimonialsEyebrow: "Testimonials",
      testimonialsTitle: "Trusted by businesses across the UAE",
      testimonialsDescription:
        "Real feedback from clients who rely on us for compliance, clarity, and growth.",
      faqEyebrow: "FAQ",
      faqTitle: "Common questions",
      faqDescription:
        "Quick answers to the questions we hear most from UAE businesses.",
      viewAllFaqs: "View all FAQs",
    },
    about: {
      metaTitle: "About Us",
      metaDescription:
        "Learn about Innovative & Strategic F.Z.E — our mission, values, and vision for UAE businesses.",
      eyebrow: "About us",
      title: "Built for UAE businesses that demand more",
      description:
        "We are a team of certified accountants, tax consultants, and compliance specialists dedicated to making financial management effortless.",
      missionEyebrow: "Our mission",
      missionTitle: "Clarity in every number",
      missionDescription:
        "Innovative & Strategic F.Z.E exists to remove the complexity from UAE financial compliance. We believe every business — from startups to established enterprises — deserves access to senior-level expertise without enterprise-level overhead.",
      drivesUsTitle: "What drives us",
      drivesUsBody:
        "The UAE's regulatory landscape evolves rapidly. Corporate tax, VAT reforms, and AML requirements create pressure on finance teams. We stay ahead of every change so you can focus on running and growing your business with confidence.",
      valuesEyebrow: "Our values",
      valuesTitle: "Principles that guide every engagement",
      visionTitle: "Our vision",
    },
    servicesPage: {
      metaTitle: "Services",
      metaDescription:
        "Explore the full range of accounting, tax, audit, and advisory services from Innovative & Strategic F.Z.E.",
      eyebrow: "Services",
      title: "Comprehensive financial services",
      description:
        "Seven practice areas covering every aspect of UAE financial compliance and business advisory.",
    },
    packagesPage: {
      metaTitle: "Packages",
      metaDescription:
        "Flexible service packages from Innovative & Strategic F.Z.E — from startup compliance to enterprise finance outsourcing.",
      eyebrow: "Packages",
      title: "Plans that scale with your business",
      description:
        "Transparent pricing tiers designed for startups, growing companies, and established enterprises across the UAE.",
      sectionTitle: "Affordable Packages",
      footerNote:
        "All packages are customizable. Contact us for a tailored quote based on your transaction volume and entity structure.",
      ctaTitle: "Not sure which plan fits?",
      ctaDescription:
        "Book a free consultation and we'll recommend the right package for your business stage and compliance needs.",
    },
    faqPage: {
      metaTitle: "FAQ",
      metaDescription:
        "Frequently asked questions about Innovative & Strategic F.Z.E services, technology, and UAE compliance.",
      eyebrow: "FAQ",
      title: "Questions & answers",
      description:
        "Everything you need to know about working with Innovative & Strategic F.Z.E.",
    },
    contactPage: {
      metaTitle: "Contact",
      metaDescription:
        "Get in touch with Innovative & Strategic F.Z.E. Book a consultation or send us a message.",
      eyebrow: "Contact",
      title: "Let's start a conversation",
      description:
        "Whether you need a quick compliance check or a full finance outsourcing partner — we're here to help.",
      formTitle: "Send us a message",
      formIntro:
        "Fill out the form and we'll respond within one business day. For urgent matters, call or WhatsApp us directly.",
      contactDetails: "Contact details",
      email: "Email",
      phone: "Phone",
      office: "Office",
      hours: "Hours",
      mapTitle: "Office location",
    },
    contactForm: {
      nameLabel: "Full name *",
      namePlaceholder: "Your name",
      emailLabel: "Email *",
      emailPlaceholder: "you@company.com",
      phoneLabel: "Phone",
      phonePlaceholder: "+971 56 237 1945",
      serviceLabel: "Service interest",
      servicePlaceholder: "Select a service",
      messageLabel: "Message *",
      messagePlaceholder: "Tell us about your business and how we can help...",
    submit: "Send message",
    bookOnlineAppointment: "Book appointment",
    submitting: "Sending...",
    successTitle: "Thank you for reaching out!",
    successBody:
      "We've received your message and will get back to you shortly at the email you provided.",
    errorBody:
      "Something went wrong while sending your message. Please try again or email us directly at",
      mailSubject: "Consultation request from",
      mailName: "Name",
      mailEmail: "Email",
      mailPhone: "Phone",
      mailService: "Service",
      mailMessage: "Message",
    },
    category: {
      eyebrow: "Services",
      whatWeOffer: "What we offer",
      needHelp: "Need help with",
      needHelpBody: "Speak with our specialists for a tailored proposal.",
      notFound: "Service Not Found",
    },
    cta: {
      title: "Ready to simplify your finances?",
      description:
        "Schedule a free consultation with our UAE specialists. We'll assess your needs and recommend the right services for your business.",
    },
    notFound: {
      title: "Page not found",
      description:
        "The page you're looking for doesn't exist or has been moved.",
    },
    footer: {
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
    },
    packages: packages.map((pkg) => ({
      id: pkg.id,
      name: pkg.name,
      description: pkg.description,
      features: [...pkg.features],
      cta: pkg.cta,
    })),
    faqs: faqs.map((faq) => ({
      id: faq.id,
      question: faq.question,
      answer: faq.answer,
    })),
    services,
  };
}
