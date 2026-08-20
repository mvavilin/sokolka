import { Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { buttonVariants } from '@shared/ui/button';

export default function SettingsLink(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Link
      to="/settings"
      aria-label={t('pages.settings.title')}
      className={buttonVariants({
        variant: 'ghost',
        size: 'icon',
      })}
    >
      <Settings className="size-5" />
    </Link>
  );
}
