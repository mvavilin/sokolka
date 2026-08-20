import type {
  THEMES,
  LANGUAGES,
  FONT_SIZES,
  PHOTO_VIEWS,
} from '@shared/model/settings/settings.constants';

type ValueOf<T> = T[keyof T];

export type Theme = ValueOf<typeof THEMES>;
export type Language = ValueOf<typeof LANGUAGES>;
export type FontSize = ValueOf<typeof FONT_SIZES>;
export type PhotoView = ValueOf<typeof PHOTO_VIEWS>;

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
