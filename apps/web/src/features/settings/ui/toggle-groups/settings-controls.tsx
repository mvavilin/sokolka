import {
  FontSizeSettingsToggle,
  LanguageSettingsToggle,
  PhotoViewSettingsToggle,
  ThemeSettingsToggle,
} from '@features/settings';

export default function SettingsControls(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <ThemeSettingsToggle />
      <FontSizeSettingsToggle />
      <LanguageSettingsToggle />
      <PhotoViewSettingsToggle />
    </div>
  );
}
