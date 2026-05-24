import type { Locale } from "./locales";

export type ServiceMessages = {
  title: string;
  shortDescription: string;
  description: string;
  subServices: Record<string, { title: string; description: string }>;
};

export type Messages = {
  nav: {
    home: string;
    about: string;
    services: string;
    packages: string;
    faq: string;
    contact: string;
    aboutUs: string;
  };
  common: {
    bookConsultation: string;
    viewAllServices: string;
    selectLanguage: string;
    exploreServices: string;
    learnMore: string;
    getInTouch: string;
    sendMessage: string;
    requestQuote: string;
    viewDetails: string;
    servicesIncluded: string;
    goHome: string;
    contactUs: string;
    openMenu: string;
    closeMenu: string;
    mostPopular: string;
    other: string;
    backToServices: string;
    whatsappMessage: string;
    chatOnWhatsapp: string;
    linkedin: string;
    allRightsReserved: string;
    sendAnotherMessage: string;
    missionPrefix: string;
  };
  site: {
    tagline: string;
    description: string;
    vision: string;
    mission: string;
    address: string;
    locationShort: string;
    hours: string;
    stats: { label: string }[];
    announcements: { title: string }[];
    values: { title: string; description: string }[];
    testimonials: { quote: string; role: string; company: string }[];
  };
  hero: Record<string, { alt: string }>;
  home: {
    regionBadge: string;
    heroTitle: string;
    heroHighlight: string;
    trustedAdvisory: string;
    coreServices: string;
    trustBadges: string[];
    updates: string;
    exploreByService: string;
    whoWeAre: string;
    partnerTitle: string;
    partnerBody: string;
    partnerBullets: string[];
    learnMoreAboutUs: string;
    featureCards: { title: string; description: string }[];
    servicesEyebrow: string;
    servicesTitle: string;
    servicesDescription: string;
    statsEyebrow: string;
    testimonialsEyebrow: string;
    testimonialsTitle: string;
    testimonialsDescription: string;
    faqEyebrow: string;
    faqTitle: string;
    faqDescription: string;
    viewAllFaqs: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    missionEyebrow: string;
    missionTitle: string;
    missionDescription: string;
    drivesUsTitle: string;
    drivesUsBody: string;
    valuesEyebrow: string;
    valuesTitle: string;
    visionTitle: string;
  };
  servicesPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    description: string;
  };
  packagesPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    sectionTitle: string;
    footerNote: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  faqPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    description: string;
  };
  contactPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    formTitle: string;
    formIntro: string;
    contactDetails: string;
    email: string;
    phone: string;
    office: string;
    hours: string;
    mapTitle: string;
  };
  contactForm: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    successTitle: string;
    successBody: string;
    mailSubject: string;
    mailName: string;
    mailEmail: string;
    mailPhone: string;
    mailService: string;
    mailMessage: string;
  };
  category: {
    eyebrow: string;
    whatWeOffer: string;
    needHelp: string;
    needHelpBody: string;
    notFound: string;
  };
  cta: {
    title: string;
    description: string;
  };
  notFound: {
    title: string;
    description: string;
  };
  footer: {
    quickLinks: string;
    services: string;
    contact: string;
  };
  packages: {
    id: string;
    name: string;
    description: string;
    features: string[];
    cta: string;
  }[];
  faqs: {
    id: string;
    question: string;
    answer: string;
  }[];
  services: Record<string, ServiceMessages>;
};

export type { Locale };
