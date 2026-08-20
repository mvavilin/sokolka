import type { Icon } from '@shared/ui/icon/icon.types';

interface SettingsOptionIconProperties {
  icon?: Icon | undefined;
}

export default function SettingsOptionIcon({
  icon,
}: SettingsOptionIconProperties): React.JSX.Element | null {
  if (!icon) return null;

  if (icon.type === 'flag') {
    return <span className={`fi fi-${icon.value}`} aria-hidden="true" />;
  }

  const Icon = icon.value;

  return <Icon className="size-4" aria-hidden="true" />;
}
