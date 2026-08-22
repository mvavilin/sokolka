import { useTranslation } from 'react-i18next';

import type { Photo } from '@entities/photo';
import { getLocalizedText } from '@shared/lib/i18n/get-localized-text';

interface Properties {
  photo: Photo;
}

export default function PreviewSliderPhoto({ photo }: Properties): React.JSX.Element {
  const { i18n } = useTranslation();

  return (
    <>
      <img
        src={photo.sources.thumbnail}
        alt={getLocalizedText(photo.alt, i18n.language)}
        className="size-full object-cover"
      />
    </>
  );
}
