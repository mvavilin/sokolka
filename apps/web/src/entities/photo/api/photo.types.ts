import type { Photo } from '@entities/photo';

export interface GetPhotosParameters {
  page?: number;
  limit?: number;
}

export interface PhotosResponse {
  items: Photo[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
