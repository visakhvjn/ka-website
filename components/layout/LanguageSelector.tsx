"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLocale } from "@/components/layout/LocaleProvider";
import { localeOptions, type Locale } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils";

type LanguageSelectorProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function LanguageSelector({
  className,
  variant = "dark",
}: LanguageSelectorProps) {
  const { locale, setLocale, messages: m } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = localeOptions.find((option) => option.code === locale)!;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function select(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  const triggerStyles =
    variant === "dark"
      ? "border-white/20 bg-white/10 text-blue-100 hover:bg-white/15 hover:text-white"
      : "border-border bg-surface-elevated text-brand hover:bg-surface-muted";

  const menuStyles =
    variant === "dark"
      ? "border-white/15 bg-brand-muted text-white shadow-xl shadow-black/30"
      : "border-border bg-surface-elevated text-brand shadow-xl";

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={m.common.selectLanguage}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "flex items-center gap-1.5 rounded-full border px-3 py-2 text-sm font-medium transition-colors",
          triggerStyles,
        )}
      >
        <Globe className="h-4 w-4 shrink-0 opacity-80" />
        <span className="uppercase">{current.code}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 opacity-70 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={m.common.selectLanguage}
          className={cn(
            "absolute end-0 top-full z-50 mt-2 min-w-[10rem] overflow-hidden rounded-xl border py-1",
            menuStyles,
          )}
        >
          {localeOptions.map((option) => (
            <li key={option.code} role="option" aria-selected={locale === option.code}>
              <button
                type="button"
                onClick={() => select(option.code)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-3 py-2.5 text-start text-sm transition-colors",
                  variant === "dark"
                    ? "hover:bg-white/10"
                    : "hover:bg-surface-muted",
                  locale === option.code &&
                    (variant === "dark" ? "bg-white/10" : "bg-surface-muted"),
                )}
              >
                <span>
                  <span className="font-medium">{option.nativeLabel}</span>
                  {option.label !== option.nativeLabel && (
                    <span className="ms-2 text-xs opacity-60">{option.label}</span>
                  )}
                </span>
                {locale === option.code && (
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
