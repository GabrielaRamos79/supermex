import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enMenu from './locals/en/menu.json';
import esMenu from './locals/es/menu.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                menu: enMenu,
            },
            es: {
                menu: esMenu,
            }
        },
        lng: "es", // Idioma principal
        fallbackLng: "en",
        ns: ["menu", ], 
        defaultNS: "menu", 
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;