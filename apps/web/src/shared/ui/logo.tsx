import logo from '@shared/assets/images/logo.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Logo() {
  const { t } = useTranslation();

  return (
    <Link to="/" className="flex items-center gap-2" aria-label={t('logo.ariaLabel')}>
      <img src={logo} alt={t('logo.alt')} className="size-7 object-contain" />

      <span className="text-lg font-semibold tracking-tight">{t('logo.label')}</span>
    </Link>
  );
}
