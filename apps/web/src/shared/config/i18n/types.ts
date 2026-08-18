type SupportedLanguage = 'ru' | 'en' | 'zh';

export type Language = SupportedLanguage;

export type LocalizedText = Record<Language, string>;
