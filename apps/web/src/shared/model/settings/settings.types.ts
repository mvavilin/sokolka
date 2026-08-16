import type {
  THEMES,
  LANGUAGES,
  FONT_SIZES,
  PHOTO_VIEWS,
} from '@shared/model/settings/settings.constants';

export type Theme = (typeof THEMES)[keyof typeof THEMES];
export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];
export type FontSize = (typeof FONT_SIZES)[keyof typeof FONT_SIZES];
export type PhotoView = (typeof PHOTO_VIEWS)[keyof typeof PHOTO_VIEWS];

export interface SettingsState {
  theme: Theme;
  language: Language;
  fontSize: FontSize;
  photoView: PhotoView;
}

export interface SettingsActions {
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  setFontSize: (fontSize: FontSize) => void;
  setPhotoView: (photoView: PhotoView) => void;
  resetSettings: () => void;
}

export type SettingsStore = SettingsState & SettingsActions;
