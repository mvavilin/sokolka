import { useEffect } from 'react';
import { photoService } from '@entities/photo';
import { usePreviewSliderStore } from '@widgets/preview-slider';

export default function usePreviewSlider(): void {
  const setPhotos = usePreviewSliderStore((state) => state.setPhotos);

  useEffect(() => {
    let cancelled = false;

    photoService.getPreviewSliderPhotos().then((photos) => {
      if (!cancelled) setPhotos(photos);
    });

    return (): void => {
      cancelled = true;
    };
  }, [setPhotos]);
}
