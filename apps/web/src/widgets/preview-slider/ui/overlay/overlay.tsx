import { Container } from '@shared/ui/container';

import { default as Controls } from './controls';
import { default as Logo } from './logo';
import { default as Title } from './title';
import type { Photo } from '@entities/photo';

interface Properties {
  photo: Photo;
  controls?: React.ReactNode;
}

export default function PreviewSliderOverlay({ photo, controls }: Properties): React.JSX.Element {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <Container className="relative flex h-full flex-col justify-between py-4 sm:py-6 lg:py-8">
        <Logo />

        <div className="flex h-1/3 min-w-0 flex-col items-start justify-end gap-4 sm:gap-6 md:flex-row md:items-end md:justify-between lg:gap-8">
          <Title />
          <Controls photo={photo} controls={controls} />
        </div>
      </Container>
    </div>
  );
}
