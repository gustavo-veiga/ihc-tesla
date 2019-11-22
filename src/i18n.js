import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enData from './translations/en-us.json';
import ptData from './translations/pt-br.json';

const resources = {
  en: enData,
  pt: ptData
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
