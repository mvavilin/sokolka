import type { LocalizedText } from '@shared/config/i18n';

type PhotoSources = {
  thumbnail: string;
  medium: string | null;
  large: string | null;
  original: string | null;
};

export default interface Photo {
  id: string;
  title: LocalizedText | null;
  alt: LocalizedText | null;
  description: LocalizedText | null;
  sources: PhotoSources;
  author: string | null;
  device: string | null;
  dateAdded: string;
  dateTaken: string | null;
}
