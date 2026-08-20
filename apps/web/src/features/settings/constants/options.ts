import { Moon, Sun } from 'lucide-react';

import { ICON_TYPES } from '@shared/ui/icon';
import { FONT_SIZES, LANGUAGES, PHOTO_VIEWS, THEMES } from '@shared/model/settings';

import type { SettingsOption } from '@features/settings';

export const THEME_OPTIONS: SettingsOption[] = [
  {
    value: THEMES.LIGHT,
    label: 'settings.theme.options.light',
    icon: {
      type: ICON_TYPES.ICON,
      value: Sun,
    },
  },
  {
    value: THEMES.DARK,
    label: 'settings.theme.options.dark',
    icon: {
      type: ICON_TYPES.ICON,
      value: Moon,
    },
  },
] as const;

export const LANGUAGE_OPTIONS: SettingsOption[] = [
  {
    value: LANGUAGES.RU,
    label: 'settings.language.options.ru',
    icon: {
      type: ICON_TYPES.FLAG,
      value: 'ru',
    },
  },
  {
    value: LANGUAGES.EN,
    label: 'settings.language.options.en',
    icon: {
      type: ICON_TYPES.FLAG,
      value: 'gb',
    },
  },
  {
    value: LANGUAGES.ZH,
    label: 'settings.language.options.zh',
    icon: {
      type: ICON_TYPES.FLAG,
      value: 'cn',
    },
  },
] as const;

export const FONT_SIZE_OPTIONS: SettingsOption[] = [
  {
    value: FONT_SIZES.SM,
    label: 'settings.fontSize.options.small',
    icon: undefined,
  },
  {
    value: FONT_SIZES.MD,
    label: 'settings.fontSize.options.medium',
    icon: undefined,
  },
  {
    value: FONT_SIZES.LG,
    label: 'settings.fontSize.options.large',
    icon: undefined,
  },
] as const;

export const PHOTO_VIEW_OPTIONS: SettingsOption[] = [
  {
    value: PHOTO_VIEWS.GRID,
    label: 'settings.photoView.options.grid',
    icon: undefined,
  },
  {
    value: PHOTO_VIEWS.LIST,
    label: 'settings.photoView.options.list',
    icon: undefined,
  },
  {
    value: PHOTO_VIEWS.MASONRY,
    label: 'settings.photoView.options.masonry',
    icon: undefined,
  },
] as const;
