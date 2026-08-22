import { useTranslation } from 'react-i18next';

import type { Photo } from '@entities/photo';
import { getLocalizedText } from '@shared/lib/i18n/get-localized-text';

import { PhotoPopoverItem as Item } from '@features/photo-popover';

interface Properties {
  photo: Photo;
}

export default function PhotoPopoverContent({ photo }: Properties): React.JSX.Element {
  const { t, i18n } = useTranslation();

  return (
    <>
      {(photo.title || photo.description) && (
        <div className="space-y-1">
          {photo.title && (
            <h3 className="text-sm font-semibold">
              {getLocalizedText(photo.title, i18n.language)}
            </h3>
          )}
          {photo.description && (
            <p className="text-xs text-muted-foreground">
              {getLocalizedText(photo.description, i18n.language)}
            </p>
          )}
        </div>
      )}

      <div className="space-y-1">
        {photo.author && <Item label={t('previewSlider.author')} value={photo.author} />}
        {photo.device && <Item label={t('previewSlider.device')} value={photo.device} />}
        {photo.dateTaken && <Item label={t('previewSlider.dateTaken')} value={photo.dateTaken} />}
      </div>
    </>
  );
}
