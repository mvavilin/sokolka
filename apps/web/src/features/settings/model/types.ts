import type { Theme, Language, FontSize, PhotoView } from '@shared/model/settings';
import type { Icon } from '@shared/ui/icon';

type SettingsValue = Theme | Language | FontSize | PhotoView;

export type SettingsOption = {
  value: SettingsValue;
  label: string;
  icon?: Icon | undefined;
};
