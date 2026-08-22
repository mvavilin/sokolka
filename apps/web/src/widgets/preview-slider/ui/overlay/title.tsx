import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const YANDEX_MAP_URL =
  'https://yandex.ru/maps/?ll=43.890355%2C52.463376&z=15&pt=43.890355%2C52.463376';

export default function PreviewSliderOverlayTitle(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Link
      to={YANDEX_MAP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="pointer-events-auto min-w-0 max-w-full text-left text-[clamp(1.25rem,10vw,12rem)] font-bold leading-none tracking-tight text-white no-underline"
    >
      {t('previewSlider.title')}
    </Link>
  );
}
