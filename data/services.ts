export {
  getServiceCategories,
  getCategoryBySlug,
  type ServiceCategory,
} from "@/lib/i18n/services";

import { getServiceCategories, getCategoryBySlug } from "@/lib/i18n/services";

/** English-only — prefer getServiceCategories(locale) */
export const serviceCategories = getServiceCategories("en");

export function getCategoryBySlugLegacy(slug: string) {
  return getCategoryBySlug(slug, "en");
}
