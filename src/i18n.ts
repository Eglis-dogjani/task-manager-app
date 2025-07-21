import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


// Import your translation files
import en from './languages/en.json';
import it from './languages/it.json';
import al from './languages/al.json'; // Shto As more as needed


i18n
  .use(LanguageDetector) // Detect language from browser or localStorage
  .use(initReactI18next) // Integrate with React
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it },
      al: { translation: al },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes
    },
    detection: {
      order: ['languages', 'navigator'],
      caches: ['languages'],
    },
  });

export default i18n;
