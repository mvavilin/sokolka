import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from '@shared/config/i18n/locales/ru.json';
import en from '@shared/config/i18n/locales/en.json';
import zh from '@shared/config/i18n/locales/zh.json';

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    en: { translation: en },
    zh: { translation: zh },
  },
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export { default } from 'i18next';

export type { Language, LocalizedText } from '@shared/config/i18n/types';
