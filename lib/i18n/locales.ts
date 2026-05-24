export const locales = ["en", "ar", "ka"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeCookie = "site-locale";

export type LocaleOption = {
  code: Locale;
  label: string;
  nativeLabel: string;
  dir: "ltr" | "rtl";
};

export const localeOptions: LocaleOption[] = [
  { code: "en", label: "English", nativeLabel: "English", dir: "ltr" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", dir: "rtl" },
  { code: "ka", label: "Georgian", nativeLabel: "ქართული", dir: "ltr" },
];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleOption(locale: Locale): LocaleOption {
  return localeOptions.find((option) => option.code === locale) ?? localeOptions[0];
}
