import { ApiResponse } from '@/constants/types';
import { getAsync, patchAsync, postAsync } from './API';
import { ArtistDetailForm } from '../components/pages/quest/artist-detail-from';

export interface UserFavoriteTrack {
  favoriteTrackId: number;
  trackArtistResponses: {
    track: {
      id: number;
      trackTitle: string;
      durationTimeMs: number;
      recommendCount: number;
      albumImageUrl: string;
      spotifyTrackId: string;
      spotifyTrackHref: string;
    };
  }[];
  artists: [
    {
      id: number;
      spotifyArtistId: string;
      spotifyArtistName: string;
    },
  ];
}

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

export async function getUserFavoriteTracksAsync(): ApiResponse<UserFavoriteTrack> {
  const response = await getAsync<UserFavoriteTrack>('/favorite/track', {});

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
