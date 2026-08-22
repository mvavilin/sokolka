import { photoApi, PHOTO_SETS, type Photo } from '@entities/photo';

const photoService = {
  async getPreviewSliderPhotos(): Promise<Photo[]> {
    const photos = await Promise.all(
      PHOTO_SETS.previewSlider.map((id) => photoApi.getPhotoById(id)),
    );

    return photos.filter((photo): photo is Photo => photo !== null);
  },
};

export default photoService;
