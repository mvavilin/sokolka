import { LanguageSettingsSelect, ThemeSettingsSelect } from '@features/settings';

import { SettingsLink } from '@features/navigation';

export default function HeaderActions(): React.JSX.Element {
  return (
    <div className="hidden items-center justify-end gap-2 xl:flex">
      <ThemeSettingsSelect />
      <LanguageSettingsSelect />
      <SettingsLink />
    </div>
  );
}
