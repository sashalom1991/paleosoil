import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en/en.json';
import ua from './ua/ua.json';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      ua: {
        translation: ua,
      },
      en: {
        translation: en,
      },
    },
    fallbackLng: localStorage.getItem('lng') || 'ua',
    debug: true,
  });

export default i18next;
