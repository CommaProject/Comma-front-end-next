import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FavoriteArtistType } from '@/types/artistTypes';
import { TrackFavoritesType } from '@/types/trackTypes';
import { ApiResponse } from '@/constants/types';
import { deleteAsync, getAsync, postAsync } from './API';

// Artist
export const getFavoriteArtistAsync = async () => {
  const { isSuccess, result } = await getAsync<FavoriteArtistType[]>(
    '/favorite/artist',
  );
  if (isSuccess && result.data) {
    return result.data;
  }

  return [];
};

export async function addFavoriteArtistAsync(artistId_: string) {
  const { isSuccess, result } = await postAsync<any, any>('/favorite/artist', {
    artistId: artistId_,
  });

  if (isSuccess && result.data) {
    return result.data;
  }

  return null;
}

// Track
export const getFavoriteTrackAsync = async () => {
  const { isSuccess, result } = await getAsync<TrackFavoritesType[]>(
    '/favorite/track',
  );
  if (isSuccess && result.data) {
    return result.data;
  }

  return [];
};

export const deleteFavoriteTrackAsync = async (trackId: number) => {
  const { isSuccess, result } = await deleteAsync<null>(
    `/favorite/track/${trackId}`,
  );
  if (isSuccess && result.data) {
    return result.data;
  }

  return [];
};

export async function addFavoriteTrackAsync(trackId: string) {
  const { isSuccess, result } = await postAsync<any, any>(`/favorite/track`, {
    spotifyTrackId: trackId,
  });

  if (isSuccess && result.data) {
    return result.data;
  }

  return null;
}
