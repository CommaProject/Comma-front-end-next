/* 트랙 좋아요 api 관련 파일 */
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { TrackFavoritesType } from '@/types/trackTypes';
import { getAsync } from './API';


const getFavoriteTrack = async () => {
  const { isSuccess, result } = await getAsync<TrackFavoritesType[]>(
    '/favorite/track',
  );
  if (isSuccess && result.data) {
    return result.data;
  }

  return [];
};

export const useGetFavoriteTrack = () => {
  const { isLoading, data = [] } = useQuery(
    ['favoriteTrack'],
    getFavoriteTrack,
  );
  const [favoriteTrack, setFavoriteTrack] = useState<TrackFavoritesType[]>([]);

  useEffect(() => {
    if (isLoading === false) {
      if (data.length !== 0) {
        setFavoriteTrack(data);
      }
    }
  }, [isLoading, data]);

  return { favoriteTrack };
};
