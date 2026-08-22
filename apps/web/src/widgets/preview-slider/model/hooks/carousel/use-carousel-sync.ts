import { useEffect } from 'react';

import type { CarouselApi } from '@shared/ui/carousel';

import { usePreviewSliderStore } from '@widgets/preview-slider';

// Синхронизирует текущий слайд карусели с состоянием preview-slider.
export default function useCarouselSync(carouselApi: CarouselApi): void {
  const setCurrentIndex = usePreviewSliderStore((state) => state.setCurrentIndex);

  useEffect(() => {
    if (!carouselApi) return;

    const handleSelect = (): void => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    handleSelect();
    carouselApi.on('select', handleSelect);

    return (): void => {
      carouselApi.off('select', handleSelect);
    };
  }, [carouselApi, setCurrentIndex]);
}
