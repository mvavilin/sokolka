import { useTranslation } from 'react-i18next';

import { isValueFrom } from '@shared/lib/is-value-from';
import { LANGUAGES, useSettingsStore } from '@shared/model/settings';

import { LANGUAGE_OPTIONS, SettingsSelect } from '@features/settings';

export default function LanguageSettingsSelect(): React.JSX.Element {
  const { t } = useTranslation();

  const language = useSettingsStore((state) => state.language);
  const setLanguage = useSettingsStore((state) => state.setLanguage);

  return (
    <SettingsSelect
      value={language}
      ariaLabel={t('settings.language.label')}
      options={LANGUAGE_OPTIONS.map((option) => ({
        value: option.value,
        label: t(option.label),
        icon: option.icon,
      }))}
      onValueChange={(value) => {
        if (isValueFrom(LANGUAGES, value)) {
          setLanguage(value);
        }
      }}
    />
  );
}
