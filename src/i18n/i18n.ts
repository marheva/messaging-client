import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en.json";
import translationFR from "./locales/fr.json";

const fallbackLanguage = ["en"];
const availableLanguages = ["en", "fr"];

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

const detectionOptions = {
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ["localStorage", "cookie"],
  order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag", "path", "subdomain"],
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: fallbackLanguage,
    debug: true,
    whitelist: availableLanguages,
    detection: detectionOptions,
    resources: resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
