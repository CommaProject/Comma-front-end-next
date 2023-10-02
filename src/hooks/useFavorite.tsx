import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FavoriteArtistType } from '@/types/artistTypes';
import { TrackFavoritesType } from '@/types/trackTypes';
import {
  deleteFavoriteTrack,
  getFavoriteArtist,
  getFavoriteTrack,
} from '@/apis/favorite';

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

  const favoriteArtistIds = data.map(
    (item) => item.artistResponse.spotifyArtistId,
  );

  console.log('favoriteArtistIds', favoriteArtistIds);

  return { favoriteArtist, favoriteArtistIds };
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

  const favoriteTrackIds = data
    .map((item) =>
      item.trackArtistResponses.map(
        (response) => response.track.spotifyTrackId,
      ),
    )
    .flat();

  const { mutate: deleteTrackMutate } = useMutation(
    ['DeleteTrack'],
    deleteFavoriteTrack,
    {
      onSuccess: (response) => {},
    },
  );

  return { favoriteTrack, favoriteTrackIds, deleteTrackMutate };
};
