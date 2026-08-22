import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import type { Photo } from '@entities/photo';
import { Button } from '@shared/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@shared/ui/popover';

import { PhotoPopoverContent as Content } from '@features/photo-popover';

interface Properties {
  photo: Photo;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function PhotoPopover({ photo, open, onOpenChange }: Properties): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            className="static size-6 rounded-full border-0 bg-background text-foreground shadow-none hover:bg-background/90 sm:size-10"
            aria-label={t('previewSlider.photoInfo')}
          >
            <Info className="size-4 sm:size-6" />
          </Button>
        }
      />

      <PopoverContent side="top" align="end" className="pointer-events-auto w-80">
        <Content photo={photo} />
      </PopoverContent>
    </Popover>
  );
}
