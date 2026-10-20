import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import de from "../locales/de.json";
import en from "../locales/en.json";

// Met à jour l'attribut lang de la page à chaque changement de langue
i18n.on("languageChanged", (lng: string) => {
  document.documentElement.lang = lng;
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
    },
    fallbackLng: "de",
    supportedLngs: ["de", "en"],
    load: "languageOnly",
    interpolation: { escapeValue: false },
    detection: {
      // Allemand par défaut : on ne retient que le choix mémorisé du visiteur
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "afrikdo-lang",
    },
  });

export default i18n;
