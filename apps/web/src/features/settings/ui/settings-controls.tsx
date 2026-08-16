import {
  FontSizeSettings,
  LanguageSettings,
  ThemeSettings,
  PhotoViewSettings,
} from '@features/settings';

const SettingsControls = (): React.JSX.Element => (
  <div className="flex flex-col gap-4">
    <ThemeSettings />
    <FontSizeSettings />
    <LanguageSettings />
    <PhotoViewSettings />
  </div>
);

export default SettingsControls;
