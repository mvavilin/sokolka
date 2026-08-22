import { PhotoPopover } from '@features/photo-popover';

import type { Photo } from '@entities/photo';
import { usePreviewSliderStore } from '@widgets/preview-slider';

interface Properties {
  photo: Photo;
  controls?: React.ReactNode;
}

export default function PreviewSliderOverlayControls({
  photo,
  controls,
}: Properties): React.JSX.Element {
  const paused = usePreviewSliderStore((state) => state.infoOpen);
  const setInfoOpen = usePreviewSliderStore((state) => state.setInfoOpen);

  return (
    <div className="pointer-events-auto flex items-center justify-center gap-4 self-center md:self-auto">
      {controls}
      <PhotoPopover open={paused} onOpenChange={setInfoOpen} photo={photo} />
    </div>
  );
}
