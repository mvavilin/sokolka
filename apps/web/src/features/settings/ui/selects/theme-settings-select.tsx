import { useTranslation } from 'react-i18next';

import { isValueFrom } from '@shared/lib/is-value-from';
import { THEMES, useSettingsStore } from '@shared/model/settings';

import { THEME_OPTIONS, SettingsSelect } from '@features/settings';

export default function ThemeSettingsSelect(): React.JSX.Element {
  const { t } = useTranslation();

  const theme = useSettingsStore((state) => state.theme);
  const setTheme = useSettingsStore((state) => state.setTheme);

  return (
    <SettingsSelect
      value={theme}
      ariaLabel={t('settings.theme.label')}
      options={THEME_OPTIONS.map((option) => ({
        value: option.value,
        label: t(option.label),
        icon: option.icon,
      }))}
      onValueChange={(value) => {
        if (isValueFrom(THEMES, value)) {
          setTheme(value);
        }
      }}
    />
  );
}
