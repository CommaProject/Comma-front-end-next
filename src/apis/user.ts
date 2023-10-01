import { ApiResponse } from '@/constants/types';
import { getAsync, patchAsync, postAsync } from './API';
import { TrackFavoritesType } from '../constants/types/trackTypes';

export interface UserFavoritesArtist {
  favoriteArtistId: number;
  artistName: string;
  artistImageUrl: string;
}

export async function setUserTrackFavoriteAsync(
  trackId: string,
): ApiResponse<any> {
  const response = await postAsync<any, any>(`/favorite/track`, {
    spotifyTrackId: trackId,
  });

  return response;
}

export async function getUserFavoriteTracksAsync(): ApiResponse<TrackFavoritesType> {
  const response = await getAsync<TrackFavoritesType>('/favorite/track', {});

  return response;
}

export async function getUserFavoritesArtistAsync(): ApiResponse<UserFavoritesArtist> {
  const response = await getAsync<UserFavoritesArtist>('/favorite/artist', {});

  return response;
}

export async function setUserFavoriteArtistAsync(
  artistId_: string,
): ApiResponse<any> {
  const response = await postAsync<any, any>('/favorite/artist', {
    artistId: artistId_,
  });

  return response;
}
