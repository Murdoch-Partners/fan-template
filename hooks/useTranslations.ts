import { I18n } from "i18n-js";

import { translations } from "@/locales";
export function useTranslations(locale: string = "en") {
  const i18n = new I18n(translations);
  i18n.enableFallback = true;
  i18n.defaultLocale = "en";
  i18n.locale = locale;
  return i18n;
}
