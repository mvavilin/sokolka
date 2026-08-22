import { create } from 'zustand';

import type { Photo } from '@entities/photo';

interface PreviewSliderState {
  photos: Photo[];
  currentIndex: number;
  infoOpen: boolean;

  setPhotos: (photos: Photo[]) => void;
  setCurrentIndex: (index: number) => void;
  setInfoOpen: (open: boolean) => void;
}

const usePreviewSliderStore = create<PreviewSliderState>((set) => ({
  photos: [],
  currentIndex: 0,
  infoOpen: false,

  setPhotos: (photos): void => set({ photos }),
  setCurrentIndex: (currentIndex): void => set({ currentIndex }),
  setInfoOpen: (infoOpen): void => set({ infoOpen }),
}));

export default usePreviewSliderStore;
