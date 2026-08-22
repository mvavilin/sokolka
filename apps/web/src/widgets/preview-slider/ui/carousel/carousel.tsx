import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@shared/ui/carousel';
import {
  PREVIEW_SLIDER_CAROUSEL_OPTIONS,
  PreviewSliderOverlay as Overlay,
  useCarouselAutoplay,
  useCarouselSync,
  usePreviewSliderStore,
  PreviewSliderPhoto as Photo,
} from '@widgets/preview-slider';
import { useState } from 'react';

export default function PreviewSliderCarousel(): React.JSX.Element {
  const { photos, currentIndex, infoOpen } = usePreviewSliderStore();

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useCarouselSync(carouselApi);
  useCarouselAutoplay({ carouselApi, paused: infoOpen });

  const currentPhoto = photos[currentIndex];

  return (
    <Carousel
      className="relative h-full w-full"
      setApi={setCarouselApi}
      opts={PREVIEW_SLIDER_CAROUSEL_OPTIONS.carousel}
      plugins={[Autoplay(PREVIEW_SLIDER_CAROUSEL_OPTIONS.autoplay)]}
    >
      <CarouselContent className="h-full">
        {photos.map((photo) => (
          <CarouselItem key={photo.id}>
            <Photo photo={photo} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {currentPhoto && (
        <Overlay
          photo={currentPhoto}
          controls={
            <>
              <CarouselPrevious className="static size-6 border-0 sm:size-10" />
              <CarouselNext className="static size-6 border-0 sm:size-10" />
            </>
          }
        />
      )}
    </Carousel>
  );
}
