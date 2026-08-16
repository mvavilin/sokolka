import { useTranslation } from 'react-i18next';
import { isValueFrom } from '@shared/lib/is-value-from';
import { LANGUAGES, useSettingsStore } from '@shared/model/settings';
import { LANGUAGE_OPTIONS, SettingsToggleGroup } from '@features/settings';

const LanguageSettings = (): React.JSX.Element => {
  const { t } = useTranslation();
  const language = useSettingsStore((state) => state.language);
  const setLanguage = useSettingsStore((state) => state.setLanguage);

  return (
    <SettingsToggleGroup
      title={t('settings.language.title')}
      value={language}
      options={LANGUAGE_OPTIONS.map((option) => ({
        value: option.value,
        label: t(option.labelKey),
      }))}
      onValueChange={(value) => {
        if (isValueFrom(LANGUAGES, value)) setLanguage(value);
      }}
    />
  );
};

export default LanguageSettings;
