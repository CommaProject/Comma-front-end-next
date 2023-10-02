import {
  getUserFavoriteTracksAsync,
  getUserFavoritesArtistAsync,
  setUserFavoriteArtistAsync,
  setUserTrackFavoriteAsync,
} from '@/apis/user';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
// setUserTrackFavoriteAsync;

const setUserFavoriteTrack = async (trackId: string) => {
  const { isSuccess, result } = await setUserTrackFavoriteAsync(trackId);

  return { isSuccess, result };
};

const getUserFavoriteTracks = async () => {
  const { isSuccess, result } = await getUserFavoriteTracksAsync();

  if (isSuccess && result.data) {
    return result.data;
  }
  // return { isSuccess, result };
  return null;
};

const setUserFavoriteArtist = async (trackId: string) => {
  const { isSuccess, result } = await setUserFavoriteArtistAsync(trackId);

  return { isSuccess, result };
};

const getUserFavoriteArtists = async () => {
  const { isSuccess, result } = await getUserFavoritesArtistAsync();

  if (isSuccess && result.data) {
    return result.data;
  }
  // return { isSuccess, result };
  return null;
};

export const useUserInformation = () => {
  const queryClient = useQueryClient();

  const useMutationUserTrackFavorite = useMutation({
    mutationFn: setUserFavoriteTrack,
    onMutate: async () => {
      // 기존 데이터를 가지고 있다가 실패하면 사용
      const oldData = queryClient.getQueryData(['TrackFavorite']);
      console.log(oldData);

      // API가 성공해서 업데이트 되지 않게
      await queryClient.cancelQueries({ queryKey: ['TrackFavorite'] });

      // 성공한다고 가정하여 true로 만들기
      if (oldData) {
        const updatedData = {
          ...oldData,
          favoriteCount: true, // 업데이트하려는 값으로 변경
        };

        queryClient.setQueryData(['TrackFavorite'], updatedData);
      }

      // 만약 에러나서 롤백 되면 이전 것을 써놓음.
      return () => queryClient.setQueryData(['TrackFavorite'], oldData);
    },
    onError: (error, variable, rollback) => {
      if (rollback) rollback();
      else console.log(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['TrackFavorite']);
    },
  });

  const useMutationUserArtistFavorite = useMutation({
    mutationFn: setUserFavoriteArtist,
    onMutate: async () => {
      // 기존 데이터를 가지고 있다가 실패하면 사용
      const oldData = queryClient.getQueryData(['ArtistFavorite']);
      console.log(oldData);

      // API가 성공해서 업데이트 되지 않게
      await queryClient.cancelQueries({ queryKey: ['ArtistFavorite'] });

      // 성공한다고 가정하여 true로 만들기
      if (oldData) {
        const updatedData = {
          ...oldData,
          favoriteCount: true, // 업데이트하려는 값으로 변경
        };

        queryClient.setQueryData(['ArtistFavorite'], updatedData);
      }

      // 만약 에러나서 롤백 되면 이전 것을 써놓음.
      return () => queryClient.setQueryData(['ArtistFavorite'], oldData);
    },
    onError: (error, variable, rollback) => {
      if (rollback) rollback();
      else console.log(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['ArtistFavorite']);
    },
  });

  const { data: favoriteTracks } = useQuery({
    queryKey: ['TrackFavorite'],
    queryFn: getUserFavoriteTracks,
  });

  const { data: favoriteArtists } = useQuery({
    queryKey: ['ArtistFavorite'],
    queryFn: getUserFavoriteArtists,
  });

  return {
    favoriteArtists,
    favoriteTracks,
    useMutationUserTrackFavorite,
    useMutationUserArtistFavorite,
  };
};
