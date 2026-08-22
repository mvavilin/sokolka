import type { AutoplayOptionsType } from 'embla-carousel-autoplay';

import type { Photo } from '@entities/photo';
import { thumbnail } from '@widgets/preview-slider';

export const PREVIEW_SLIDER_CAROUSEL_OPTIONS = {
  autoplay: {
    delay: 5000,
    stopOnInteraction: true,
  } satisfies AutoplayOptionsType,

  carousel: {
    loop: true,
  },
} as const;

export const PREVIEW_SLIDER_FALLBACK_PHOTO: Photo = {
  id: '013',
  title: {
    ru: 'Весенний пейзаж',
    en: 'Spring Landscape',
    zh: '春日景色',
  },
  alt: {
    ru: 'Весенний пейзаж вокруг села',
    en: 'Spring landscape around the village',
    zh: '村庄周围的春季景色',
  },
  description: {
    ru: 'Первые зелёные поля и деревья весной.',
    en: 'The first green fields and trees in spring.',
    zh: '春天初绿的田野和树木。',
  },
  sources: {
    thumbnail,
    medium: thumbnail,
    large: thumbnail,
    original: thumbnail,
  },
  author: 'Сергей Волков',
  device: 'Fujifilm X-T5',
  dateAdded: '2026-08-13',
  dateTaken: '2026-04-28',
} as const;
