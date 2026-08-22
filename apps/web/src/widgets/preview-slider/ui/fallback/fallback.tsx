import {
  PREVIEW_SLIDER_FALLBACK_PHOTO as FALLBACK_PHOTO,
  PreviewSliderOverlay as Overlay,
  PreviewSliderPhoto as Photo,
} from '@widgets/preview-slider';

export default function PreviewSliderFallback(): React.JSX.Element {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 z-0">
        <Photo photo={FALLBACK_PHOTO} />
      </div>

      <Overlay photo={FALLBACK_PHOTO} />
    </div>
  );
}
