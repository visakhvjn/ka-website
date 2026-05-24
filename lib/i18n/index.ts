import type { Locale } from "./locales";
import type { Messages } from "./types";
import { buildEnglishMessages } from "./build-en";
import { ar } from "./messages/ar";
import { ka } from "./messages/ka";

export function getMessages(locale: Locale): Messages {
  switch (locale) {
    case "ar":
      return ar;
    case "ka":
      return ka;
    default:
      return buildEnglishMessages();
  }
}

export type { Messages };
