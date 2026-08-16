import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { SettingsStore, SettingsState } from '@shared/model/settings/settings.types';
import {
  THEMES,
  LANGUAGES,
  FONT_SIZES,
  PHOTO_VIEWS,
} from '@shared/model/settings/settings.constants';

const initialState: SettingsState = {
  theme: THEMES.LIGHT,
  language: LANGUAGES.RU,
  fontSize: FONT_SIZES.MD,
  photoView: PHOTO_VIEWS.GRID,
};

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set): SettingsStore => ({
      ...initialState,

      setTheme: (theme): unknown => set({ theme }),

      setLanguage: (language): unknown => set({ language }),

      setFontSize: (fontSize): unknown => set({ fontSize }),

      setPhotoView: (photoView): unknown => set({ photoView }),

      resetSettings: (): unknown => set(initialState),
    }),
    {
      name: 'sokolka-settings',
    },
  ),
);
