import { useTranslation } from 'react-i18next';

import { isValueFrom } from '@shared/lib/is-value-from';
import { FONT_SIZES, useSettingsStore } from '@shared/model/settings';

import { FONT_SIZE_OPTIONS, SettingsToggleGroup } from '@features/settings';

export default function FontSizeSettingsToggle(): React.JSX.Element {
  const { t } = useTranslation();

  const fontSize = useSettingsStore((state) => state.fontSize);
  const setFontSize = useSettingsStore((state) => state.setFontSize);

  return (
    <SettingsToggleGroup
      title={t('settings.fontSize.label')}
      value={fontSize}
      options={FONT_SIZE_OPTIONS.map((option) => ({
        value: option.value,
        label: t(option.label),
      }))}
      onValueChange={(value) => {
        if (isValueFrom(FONT_SIZES, value)) {
          setFontSize(value);
        }
      }}
    />
  );
}
