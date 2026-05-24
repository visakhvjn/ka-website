export type HeroImage = {
  src: string;
  alt: string;
};

const unsplash = (id: string, w = 1920) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Verified Unsplash photo IDs (404-safe) */
export const heroImages = {
  home: {
    src: unsplash("photo-1504384308090-c894fdcc538d"),
    alt: "Business professionals collaborating in a modern office",
  },
  about: {
    src: unsplash("photo-1522071820081-009f0129c71c"),
    alt: "Diverse team working together at a conference table",
  },
  services: {
    src: unsplash("photo-1497366216548-37526070297c"),
    alt: "Modern office workspace representing professional financial services",
  },
  contact: {
    src: unsplash("photo-1560518883-ce09059eeffa"),
    alt: "Business consultation in a professional setting",
  },
  packages: {
    src: unsplash("photo-1551288049-bebda4e38f71"),
    alt: "Financial analytics dashboard on a computer screen",
  },
  faq: {
    src: unsplash("photo-1516321318423-f06f85e504b3"),
    alt: "Person using a laptop for research and support",
  },
  "corporate-tax": {
    src: unsplash("photo-1554224155-6726b3ff858f"),
    alt: "Tax documents and financial paperwork on a desk",
  },
  "audit-assurance": {
    src: unsplash("photo-1600880292203-757bb62b4baf"),
    alt: "Finance team reviewing reports and audit documentation",
  },
  "accounting-bookkeeping": {
    src: unsplash("photo-1553877522-43269d4ea984"),
    alt: "Team reviewing accounting and bookkeeping records",
  },
  "vat-indirect-tax": {
    src: unsplash("photo-1579621970563-ebec7560ff3e"),
    alt: "Financial planning and tax compliance concept",
  },
  "aml-compliance": {
    src: unsplash("photo-1563986768609-322da13575f3"),
    alt: "Secure digital compliance and data protection concept",
  },
  "business-advisory": {
    src: unsplash("photo-1542744173-8e7e53415bb0"),
    alt: "Executive team in a strategic business meeting",
  },
  "regulatory-tax": {
    src: unsplash("photo-1486406146926-c627a92ad1ab"),
    alt: "Corporate skyline representing regulatory and tax compliance",
  },
} as const satisfies Record<string, HeroImage>;

export type HeroImageKey = keyof typeof heroImages;

export function getHeroImage(key: string): HeroImage {
  return heroImages[key as HeroImageKey] ?? heroImages.services;
}

export function getHeroImageWithAlt(
  key: string,
  altByKey: Record<string, { alt: string }>,
): HeroImage {
  const base = getHeroImage(key);
  return { src: base.src, alt: altByKey[key]?.alt ?? base.alt };
}
