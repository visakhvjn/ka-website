"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { getMessages } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";
import {
  defaultLocale,
  getLocaleOption,
  isLocale,
  localeCookie,
  type Locale,
} from "@/lib/i18n/locales";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  messages: Messages;
  dir: "ltr" | "rtl";
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof document === "undefined") return defaultLocale;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${localeCookie}=([^;]*)`),
  );
  const value = match?.[1];
  return value && isLocale(value) ? value : defaultLocale;
}

type LocaleProviderProps = {
  children: React.ReactNode;
  initialLocale?: Locale;
};

export function LocaleProvider({
  children,
  initialLocale = defaultLocale,
}: LocaleProviderProps) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored !== initialLocale) {
      setLocaleState(stored);
    }
    const { dir } = getLocaleOption(stored);
    document.documentElement.lang = stored;
    document.documentElement.dir = dir;
  }, [initialLocale]);

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      document.cookie = `${localeCookie}=${next};path=/;max-age=31536000;samesite=lax`;
      const { dir } = getLocaleOption(next);
      document.documentElement.lang = next;
      document.documentElement.dir = dir;
      router.refresh();
    },
    [router],
  );

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      messages: getMessages(locale),
      dir: getLocaleOption(locale).dir,
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}

import { getServiceCategories } from "@/lib/i18n/services";

export function useServiceCategories() {
  const { locale } = useLocale();
  return useMemo(() => getServiceCategories(locale), [locale]);
}
