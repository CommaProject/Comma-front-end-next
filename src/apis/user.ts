import { ApiResponse } from '@/constants/types';
import { getAsync, patchAsync, postAsync } from './API';

export interface UserFavorites {
  id: null;
  trackTitle: string;
  durationTimeMs: string;
  recommendCount: number;
  albumImageUrl: string;
  spotifyTrackId: string;
  spotifyTrackHref: string;
  trackArtistList: {
    id: null;
    artistName: string;
    track: null;
  }[];
}

export async function setUserTrackFavoriteAsync(
  trackId: string,
): ApiResponse<any> {
  const response = await postAsync<any, any>(`/tracks/${trackId}`, {});

  return response;
}

export async function getUserFavoritesAsync(): ApiResponse<UserFavorites> {
  const response = await getAsync<UserFavorites>('/favorite/tracks', {});

  return response;
}
