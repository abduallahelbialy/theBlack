import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dataen from './Components/Local/en.json'
import dataar from './Components/Local/ar.json'
const resources = {
  en: {
    translation: dataen
  },
  ar: {
    translation: dataar
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "ar", 

    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
