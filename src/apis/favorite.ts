import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FavoriteArtistType } from '@/types/artistTypes';
import { TrackFavoritesType } from '@/types/trackTypes';
import { getAsync } from './API';


export const getFavoriteArtist = async () => {
  const { isSuccess, result } = await getAsync<FavoriteArtistType[]>(
    '/favorite/artist',
  );
  if (isSuccess && result.data) {
    console.log('성공', result.data, typeof result.data);
    return result.data;
  }

  return [];
};




export const getFavoriteTrack = async () => {
  const { isSuccess, result } = await getAsync<TrackFavoritesType[]>(
    '/favorite/track',
  );
  if (isSuccess && result.data) {
    return result.data;
  }

  return [];
};

