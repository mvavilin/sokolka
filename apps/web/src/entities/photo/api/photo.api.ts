import { photos } from '@entities/photo';
import type { Photo, GetPhotosParameters, PhotosResponse } from '@entities/photo';

const photoApi = {
  async getPhotos({ page = 1, limit = 20 }: GetPhotosParameters = {}): Promise<PhotosResponse> {
    const start = (page - 1) * limit;
    const end = start + limit;

    const items = photos.slice(start, end);

    return {
      items,
      pagination: {
        page,
        limit,
        total: photos.length,
        totalPages: Math.ceil(photos.length / limit),
      },
    };
  },

  async getPhotoById(id: string): Promise<Photo | null> {
    return photos.find((photo) => photo.id === id) ?? null;
  },
};

export default photoApi;
