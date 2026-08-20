import { useTranslation } from 'react-i18next';

import { isValueFrom } from '@shared/lib/is-value-from';
import { THEMES, useSettingsStore } from '@shared/model/settings';

import { THEME_OPTIONS, SettingsToggleGroup } from '@features/settings';

export default function ThemeSettingsToggle(): React.JSX.Element {
  const { t } = useTranslation();

  const theme = useSettingsStore((state) => state.theme);
  const setTheme = useSettingsStore((state) => state.setTheme);

  return (
    <SettingsToggleGroup
      title={t('settings.theme.label')}
      value={theme}
      options={THEME_OPTIONS.map((option) => ({
        value: option.value,
        label: t(option.label),
      }))}
      onValueChange={(value) => {
        if (isValueFrom(THEMES, value)) {
          setTheme(value);
        }
      }}
    />
  );
}
