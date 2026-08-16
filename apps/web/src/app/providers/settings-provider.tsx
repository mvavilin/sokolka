import { useEffect } from 'react';
import i18n from '@shared/config/i18n';
import { useSettingsStore } from '@shared/model/settings';

interface SettingsProviderProperties {
  children: React.ReactNode;
}

const SettingsProvider = ({ children }: SettingsProviderProperties): React.JSX.Element => {
  const theme = useSettingsStore((state) => state.theme);
  const fontSize = useSettingsStore((state) => state.fontSize);
  const language = useSettingsStore((state) => state.language);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.fontSize = fontSize;
  }, [fontSize]);

  useEffect(() => {
    void i18n.changeLanguage(language);
  }, [language]);

  return <>{children}</>;
};

export default SettingsProvider;
