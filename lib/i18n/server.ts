import { cookies } from "next/headers";
import { getMessages } from "./index";
import { defaultLocale, isLocale, localeCookie } from "./locales";
import type { Locale } from "./locales";

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(localeCookie)?.value;
  return value && isLocale(value) ? value : defaultLocale;
}

export async function getServerMessages() {
  return getMessages(await getServerLocale());
}
