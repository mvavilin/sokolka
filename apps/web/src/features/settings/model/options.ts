import { FONT_SIZES, LANGUAGES, PHOTO_VIEWS, THEMES } from '@shared/model/settings';

export const FONT_SIZE_OPTIONS = [
  {
    value: FONT_SIZES.SM,
    labelKey: 'settings.fontSize.small',
  },
  {
    value: FONT_SIZES.MD,
    labelKey: 'settings.fontSize.medium',
  },
  {
    value: FONT_SIZES.LG,
    labelKey: 'settings.fontSize.large',
  },
] as const;

export const LANGUAGE_OPTIONS = [
  {
    value: LANGUAGES.RU,
    labelKey: 'settings.language.ru',
  },
  {
    value: LANGUAGES.EN,
    labelKey: 'settings.language.en',
  },
  {
    value: LANGUAGES.ZH,
    labelKey: 'settings.language.zh',
  },
] as const;

export const PHOTO_VIEW_OPTIONS = [
  {
    value: PHOTO_VIEWS.GRID,
    labelKey: 'settings.photoView.grid',
  },
  {
    value: PHOTO_VIEWS.LIST,
    labelKey: 'settings.photoView.list',
  },
  {
    value: PHOTO_VIEWS.MASONRY,
    labelKey: 'settings.photoView.masonry',
  },
] as const;

export const THEME_OPTIONS = [
  {
    value: THEMES.LIGHT,
    labelKey: 'settings.theme.light',
  },
  {
    value: THEMES.DARK,
    labelKey: 'settings.theme.dark',
  },
] as const;
