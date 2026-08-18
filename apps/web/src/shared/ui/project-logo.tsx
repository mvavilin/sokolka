import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ProjectLogo(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2" aria-label={t('projectLogo.ariaLabel')}>
      <MapPin className="size-7 shrink-0 text-red-500" aria-hidden="true" />

      <span className="text-lg font-semibold tracking-tight">{t('projectLogo.label')}</span>
    </div>
  );
}
