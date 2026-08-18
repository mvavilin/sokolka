import { FONT_SIZES, LANGUAGES, PHOTO_VIEWS, THEMES } from '@shared/model/settings';

export const FONT_SIZE_OPTIONS = [
  {
    value: FONT_SIZES.SM,
    labelKey: 'settings.fontSize.options.small',
  },
  {
    value: FONT_SIZES.MD,
    labelKey: 'settings.fontSize.options.medium',
  },
  {
    value: FONT_SIZES.LG,
    labelKey: 'settings.fontSize.options.large',
  },
] as const;

export const LANGUAGE_OPTIONS = [
  {
    value: LANGUAGES.RU,
    labelKey: 'settings.language.options.ru',
  },
  {
    value: LANGUAGES.EN,
    labelKey: 'settings.language.options.en',
  },
  {
    value: LANGUAGES.ZH,
    labelKey: 'settings.language.options.zh',
  },
] as const;

export const PHOTO_VIEW_OPTIONS = [
  {
    value: PHOTO_VIEWS.GRID,
    labelKey: 'settings.photoView.options.grid',
  },
  {
    value: PHOTO_VIEWS.LIST,
    labelKey: 'settings.photoView.options.list',
  },
  {
    value: PHOTO_VIEWS.MASONRY,
    labelKey: 'settings.photoView.options.masonry',
  },
] as const;

export const THEME_OPTIONS = [
  {
    value: THEMES.LIGHT,
    labelKey: 'settings.theme.options.light',
  },
  {
    value: THEMES.DARK,
    labelKey: 'settings.theme.options.dark',
  },
] as const;
