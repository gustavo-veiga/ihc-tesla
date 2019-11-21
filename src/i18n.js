import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enData from "./translations/en-us.json"
import ptData from "./translations/pt-br.json"

const resources = {
  en: enData,
  pt: ptData
}

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
})

export default i18n;
