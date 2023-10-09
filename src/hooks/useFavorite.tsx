import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

  const favoriteArtistIds = data.map((item) => ({
    [item.artistResponse.spotifyArtistId]: item.favoriteArtistId,
  }));

  return { favoriteArtist, favoriteArtistIds };
};

export const useGetFavoriteTrack = () => {
  const queryClient = useQueryClient();

  const { isLoading, data: favoriteTrack = [] } = useQuery(
    ['favoriteTrack'],
    getFavoriteTrack,
  );
  const [favoriteTrackIds, setFavoriteTrackIds] = useState<any>();

  useEffect(() => {
    console.log('favoriteTrack', favoriteTrack);
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

  const { mutate: deleteTrackMutate } = useMutation(
    ['DeleteTrack'],
    deleteFavoriteTrack,
    {
      onSuccess: (response) => {},
      onMutate: async (id: number) => {
        // 기존 데이터를 가지고 있다가 실패하면 사용
        const oldData: any = queryClient.getQueryData(['favoriteTrack']);

        // API가 성공해서 업데이트 되지 않게
        await queryClient.cancelQueries({ queryKey: ['favoriteTrack'] });

        // 성공한다고 가정
        if (oldData) {
          const updatedData = oldData;
          console.log('before oldData', oldData);
          console.log('id', id);
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < oldData.length; i++) {
            if (oldData[i].favoriteTrackId === id) {
              oldData.splice(i, 1); // 해당 항목을 배열에서 삭제
              break; // 항목을 찾았으면 루프를 종료합니다.
            }
          }
          console.log('after oldData', oldData);
          queryClient.setQueryData(['favoriteTrack'], updatedData);
        }

        // 만약 에러나서 롤백 되면 이전 것을 써놓음.
        return () => queryClient.setQueryData(['favoriteTrack'], oldData);
      },
      onError: (error, variable, rollback) => {
        if (rollback) rollback();
        else console.log(error);
      },
      onSettled: () => {
        queryClient.invalidateQueries(['favoriteTrack']);
      },
    },
  );

  return { favoriteTrack, favoriteTrackIds, deleteTrackMutate };
};
