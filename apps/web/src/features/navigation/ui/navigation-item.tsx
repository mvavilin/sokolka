import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { cn } from '@shared/lib/utils';
import type { NavigationItemProperties } from '@features/navigation';

export default function NavigationItem({
  translationKey,
  href,
  icon: Icon,
}: NavigationItemProperties): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Link
      to={href}
      className={cn(
        'flex items-center gap-2 rounded-md px-3 py-2',
        'text-sm font-medium',
        'transition-colors',
        'hover:bg-accent hover:text-accent-foreground',
      )}
    >
      <Icon className="size-5 lg:size-4" />
      <span>{t(translationKey)}</span>
    </Link>
  );
}
