import { ApiResponse } from '@/constants/types';
import { getAsync, patchAsync, postAsync } from './API';

export interface UserFavorites {
  favoriteTrackId: number;
  trackId: number;
  trackTitle: string;
  trackAlbumImageUrl: string;
  spotifyTrackId: string;
  trackArtistList: {
    artistId: string;
    artistName: string;
    track: null;
  }[];
}

export async function setUserTrackFavoriteAsync(
  trackId: string,
): ApiResponse<any> {
  const response = await postAsync<any, any>(`/favorite/track`, {
    spotifyTrackId: trackId,
  });

  return response;
}

export async function getUserFavoritesAsync(): ApiResponse<UserFavorites> {
  const response = await getAsync<UserFavorites>('/favorite/track', {});

  return response;
}
