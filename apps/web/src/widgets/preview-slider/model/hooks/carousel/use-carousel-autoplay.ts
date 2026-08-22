import { useEffect } from 'react';

import type { CarouselApi } from '@shared/ui/carousel';

interface Properties {
  carouselApi: CarouselApi;
  paused: boolean;
}

// Управляет автопрокруткой слайдера при изменении состояния паузы.
export default function useCarouselAutoplay({ carouselApi, paused }: Properties): void {
  useEffect(() => {
    const autoplay = carouselApi?.plugins().autoplay;

    if (!autoplay) return;

    if (paused) autoplay.stop();
    else autoplay.play();

    const handleSelect = (): void => {
      if (!paused) autoplay.stop();
    };

    carouselApi?.on('select', handleSelect);

    return (): void => {
      carouselApi?.off('select', handleSelect);
    };
  }, [carouselApi, paused]);
}
