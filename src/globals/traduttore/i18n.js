import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'it', 'ro', 'fr'], // Aggiungi le lingue che vuoi supportare
    fallbackLng: 'it',
    ns: ['home', 'job', 'footer', 'vision', 'leadership', 'masp_caratteristiche', 'masp_operazioni', 'masp_tracciabilita', 'supervisor', 'mes', 'imagina', 'unita_di_controllo', 'schede_automazione', 'scheda_di_controllo', 'servizi', 'contattaci'], // Definisci i namespaces
    defaultNS: 'home',
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie', 'localStorage']
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json' // Path per caricare i namespaces
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
