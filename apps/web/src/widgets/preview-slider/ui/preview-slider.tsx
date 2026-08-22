import type { Photo } from '@entities/photo';
import {
  PreviewSliderCarousel as Carousel,
  PreviewSliderFallback as Fallback,
  usePreviewSlider,
  usePreviewSliderStore,
} from '@widgets/preview-slider';

export default function PreviewSlider(): React.JSX.Element {
  usePreviewSlider();

  const photos: Photo[] = usePreviewSliderStore((state) => state.photos);

  return (
    <section className="flex h-[50dvh] items-center justify-center md:h-[calc(100dvh-4rem)]">
      {photos.length === 0 ? <Fallback /> : <Carousel />}
    </section>
  );
}
