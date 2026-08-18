import type { LocalizedText } from '@shared/config/i18n';

type PhotoSources = {
  thumbnail: string;
  medium: string;
  large: string;
  original: string;
};

export default interface Photo {
  id: string;
  title: LocalizedText;
  alt: LocalizedText;
  description: LocalizedText;
  sources: PhotoSources;
  author: string | null;
  device: string | null;
  dateAdded: string;
  dateTaken: string | null;
}
