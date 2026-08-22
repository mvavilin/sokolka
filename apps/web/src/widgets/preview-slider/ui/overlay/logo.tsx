import { useTranslation } from 'react-i18next';

import logo from '@shared/assets/images/logo.png';

export default function PreviewSliderOverlayLogo(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="flex h-1/3 justify-end">
      <img src={logo} alt={t('previewSlider.logoAlt')} className="h-full w-auto object-contain" />
    </div>
  );
}
