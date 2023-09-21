import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FavoriteArtistType } from '@/types/artistTypes';
import { TrackFavoritesType } from '@/types/trackTypes';
import {getFavoriteArtist,getFavoriteTrack} from '@/apis/favorite';

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
  