import { serviceCategories } from "./services";

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: serviceCategories.map((cat) => ({
      label: cat.title,
      href: `/services/${cat.slug}`,
      description: cat.shortDescription,
      subServices: cat.subServices.map((sub) => ({
        label: sub.title,
        href: `/services/${cat.slug}#${sub.id}`,
      })),
    })),
  },
  { label: "Packages", href: "/packages" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Packages", href: "/packages" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  services: serviceCategories.slice(0, 5).map((cat) => ({
    label: cat.title,
    href: `/services/${cat.slug}`,
  })),
} as const;
