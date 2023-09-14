import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FavoriteArtistType } from '@/types/artistTypes';
import { getAsync } from './API';


const getFavoriteArtist = async () => {
  const { isSuccess, result } = await getAsync<FavoriteArtistType[]>(
    '/favorite/artist',
  );
  if (isSuccess && result.data) {
    console.log('성공', result.data, typeof result.data);
    return result.data;
  }

  return [];
};

export const useGetFavoriteArtist = () => {
  const { isLoading, data = [] } = useQuery(
    ['favoriteArtist'],
    getFavoriteArtist,
  );
  const [favoriteArtist, setFavoriteArtist] = useState<FavoriteArtistType[]>(
    [],
  );

  useEffect(() => {
    if (isLoading === false) {
      if (data.length !== 0) {
        setFavoriteArtist(data);
      }
    }
  }, [isLoading, data]);

  return { favoriteArtist };
};