import type { LocalizedText } from '@shared/config/i18n';

export const getLocalizedText = (text: LocalizedText | null, language: string): string => {
  if (!text) return '';

  if (language in text) {
    return text[language as keyof LocalizedText];
  }

  return text.ru;
};
