import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FavoriteArtistType } from '@/types/artistTypes';
import { TrackFavoritesType } from '@/types/trackTypes';
import {
  deleteFavoriteTrackAsync,
  getFavoriteArtistAsync,
  getFavoriteTrackAsync,
  addFavoriteTrackAsync,
  addFavoriteArtistAsync,
} from '@/apis/favorite';

// Artist
export const useFavoriteArtist = () => {
  const { isLoading, data = [] } = useQuery(
    ['favoriteArtist'],
    getFavoriteArtistAsync,
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

  const favoriteArtistIds = data.map((item) => ({
    [item.artistResponse.spotifyArtistId]: item.favoriteArtistId,
  }));

  const { mutate: addFavoriteArtistMutate } = useMutation(
    ['AddArtist'],
    addFavoriteArtistAsync,
    {},
  );

  return { favoriteArtist, favoriteArtistIds, addFavoriteArtistMutate };
};

// Track
export const useFavoriteTrack = () => {
  const queryClient = useQueryClient();

  const { isLoading, data: favoriteTrack = [] } = useQuery(
    ['FavoriteTrack'],
    getFavoriteTrackAsync,
  );
  const [favoriteTrackIds, setFavoriteTrackIds] = useState<any>();
  const { mutate: deleteTrackMutate } = useMutation(
    ['DeleteTrack'],
    deleteFavoriteTrackAsync,
    {
      // onSuccess: (response) => {},
      onMutate: async (id: number) => {
        // 기존 데이터를 가지고 있다가 실패하면 사용
        const oldData: any = queryClient.getQueryData(['FavoriteTrack']);

        // API가 성공해서 업데이트 되지 않게
        await queryClient.cancelQueries({ queryKey: ['FavoriteTrack'] });

        // 성공한다고 가정
        // if (oldData) {
        //   const updatedData = oldData;
        //   console.log('before oldData', oldData);
        //   console.log('id', id);
        //   for (let i = 0; i < oldData.length; i += 1) {
        //     if (oldData[i].favoriteTrackId === id) {
        //       oldData.splice(i, 1);
        //       break;
        //     }
        //   }
        //   console.log('after oldData', oldData);
        //   queryClient.setQueryData(['FavoriteTrack'], updatedData);
        // }

        // 만약 에러나서 롤백 되면 이전 것을 써놓음.
        return () => queryClient.setQueryData(['FavoriteTrack'], oldData);
      },
      onError: (error, variable, rollback) => {
        if (rollback) rollback();
        else console.log(error);
      },
      onSettled: () => {
        queryClient.invalidateQueries(['FavoriteTrack']);
      },
    },
  );
  const { mutate: addFavoriteTrackMutate } = useMutation(
    ['AddTrack'],
    addFavoriteTrackAsync,
    {
      // onSuccess: (response) => {},
      onMutate: async () => {
        // 기존 데이터를 가지고 있다가 실패하면 사용
        const oldData: any = queryClient.getQueryData(['FavoriteTrack']);

        // API가 성공해서 업데이트 되지 않게
        await queryClient.cancelQueries({ queryKey: ['FavoriteTrack'] });

        // 성공한다고 가정
        // if (oldData) {
        //   const updatedData = oldData;
        //   console.log('before oldData', oldData);

        //   console.log('after oldData', oldData);
        //   queryClient.setQueryData(['FavoriteTrack'], updatedData);
        // }

        // 만약 에러나서 롤백 되면 이전 것을 써놓음.
        return () => queryClient.setQueryData(['FavoriteTrack'], oldData);
      },
      onError: (error, variable, rollback) => {
        if (rollback) rollback();
        else console.log(error);
      },
      onSettled: () => {
        queryClient.invalidateQueries(['FavoriteTrack']);
      },
    },
  );

  useEffect(() => {
    if (isLoading === false) {
      const favoriteTrackIds1 = favoriteTrack
        .map((item) => ({
          [item.trackArtistResponses[0].track.spotifyTrackId]:
            item.favoriteTrackId,
        }))
        .flat()
        .reduce((accumulator, current) => {
          const key = Object.keys(current)[0];
          accumulator[key] = current[key];
          return accumulator;
        }, {});
      setFavoriteTrackIds(favoriteTrackIds1);
    }
  }, [isLoading, favoriteTrack]);

  return {
    favoriteTrack,
    favoriteTrackIds,
    deleteTrackMutate,
    addFavoriteTrackMutate,
  };
};
