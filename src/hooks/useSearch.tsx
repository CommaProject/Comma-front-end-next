import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getCommaUserAsync,
  getSpotifyArtistAsync,
  getTrackAsync,
  getHistoryAsync,
  addHistoryAsync,
  deleteAllHistoryAsync,
  deleteHistoryAsync,
} from '@/apis/search';
import { SpotifyArtistProps, getHistoryProps } from '@/types/searchTypes';
import { TrackType } from '@/types/trackTypes';
import { CommaUserType } from '@/types/authTypes';

const getSpotifyArtist = async (artistName: string) => {
  const { isSuccess, result } = await getSpotifyArtistAsync(artistName);

  return { isSuccess, result };
};
const getSpotifyTrack = async (trackName: string) => {
  const { isSuccess, result } = await getTrackAsync(trackName);

  return { isSuccess, result };
};
const getCommaUser = async (commaUserName: string) => {
  const { isSuccess, result } = await getCommaUserAsync(commaUserName);

  return { isSuccess, result };
};
const getHistory = async () => {
  const { isSuccess, result } = await getHistoryAsync();

  return { isSuccess, result };
};
const addHistory = async (history: string) => {
  const { isSuccess, result } = await addHistoryAsync(history);

  return { isSuccess, result };
};
const deleteHistory = async (index: number) => {
  const { isSuccess, result } = await deleteHistoryAsync(index);

  return { isSuccess, result };
};
const deleteAllHistory = async () => {
  const { isSuccess, result } = await deleteAllHistoryAsync();

  return { isSuccess, result };
};
export const useSearch = () => {
  const [spotifyArtistData, setSpotifyArtistData] =
    useState<SpotifyArtistProps[]>();
  const [spotifyTrackData, setSpotifyTrackData] = useState<TrackType[]>();
  const [spotifyArtistDetailTrackData, setSpotifyArtistDetailTrackData] =
    useState<TrackType[]>();
  const [commaUserData, setCommaUserData] = useState<CommaUserType[]>();
  const queryClient = useQueryClient();
  const [searchHistory, setSearchHistory] = useState<getHistoryProps[]>();

  const { mutate: mutateTrack } = useMutation(['Track'], getSpotifyTrack, {
    onSuccess: (response) => {
      if (response.result.data) {
        if ('errors' in response.result.data) {
          console.log('error:', response.result.data.errors);
        } else if (response.result.data) {
          const newTrackData = response.result.data;
          setSpotifyTrackData(newTrackData);
        }
      }
    },
  });

  const { mutate: mutateArtistDetailTrack } = useMutation(
    ['ArtistDetailTrack'],
    getSpotifyTrack,
    {
      onSuccess: (response) => {
        if (response.result.data) {
          if ('errors' in response.result.data) {
            console.log('error:', response.result.data.errors);
          } else if (response.result.data) {
            const newTrackData = response.result.data;
            setSpotifyArtistDetailTrackData(newTrackData);
          }
        }
      },
    },
  );

  const { mutate: mutateArtist } = useMutation(['artist'], getSpotifyArtist, {
    onSuccess: (response) => {
      if (response.result.data) {
        if ('errors' in response.result.data) {
          console.log('error:', response.result.data.errors);
        } else if (response.result.data) {
          const newArtistData = response.result.data;
          setSpotifyArtistData(newArtistData);
        }
      }
    },
  });

  const { mutate: mutateCommaUser } = useMutation(['commaUser'], getCommaUser, {
    onSuccess: (response) => {
      if (response.result.data) {
        if ('errors' in response.result.data) {
          console.log('error:', response.result.data.errors);
        } else if (response.result.data) {
          const newCommaUserData = response.result.data;
          setCommaUserData(newCommaUserData);
        }
      }
    },
  });

  const { mutate: mutateSearchHistory } = useMutation(
    ['searchHistory'],
    addHistory,
    {
      onSuccess: (response) => {
        if (response.result.data) {
          if ('errors' in response.result.data) {
            console.log('error:', response.result.data.errors);
          } else if (response.result.data) {
            console.log('setSearchHistory success');
          }
        }
      },
    },
  );
  const useMutationDeleteAllHistory = useMutation({
    mutationFn: deleteAllHistory,
    onMutate: async () => {
      // 기존 데이터를 가지고 있다가 실패하면 사용
      const oldData = queryClient.getQueryData(['searchHistory']);

      // API가 성공해서 업데이트 되지 않게
      await queryClient.cancelQueries({ queryKey: ['searchHistory'] });

      // 성공한다고 가정
      if (oldData) {
        const updatedData = {};
        queryClient.setQueryData(['searchHistory'], updatedData);
      }

      // 만약 에러나서 롤백 되면 이전 것을 써놓음.
      return () => queryClient.setQueryData(['searchHistory'], oldData);
    },
    onError: (error, variable, rollback) => {
      if (rollback) rollback();
      else console.log(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['searchHistory']);
    },
  });

  const useMutationDeleteHistory = useMutation({
    mutationFn: deleteHistory,
    onMutate: async (id: number) => {
      // 기존 데이터를 가지고 있다가 실패하면 사용
      const oldData = searchHistory;
      const oldDataWithAync = queryClient.getQueryData(['searchHistory']);

      // API가 성공해서 업데이트 되지 않게
      await queryClient.cancelQueries({ queryKey: ['searchHistory'] });

      // 성공한다고 가정
      if (oldData) {
        const updatedData = oldData.filter(
          (item: getHistoryProps) => item.id !== id,
        );
        setSearchHistory(updatedData);
      }

      // 만약 에러나서 롤백 되면 이전 것을 써놓음.
      return () => {
        queryClient.setQueryData(['searchHistory'], oldDataWithAync);
        setSearchHistory(oldData);
      };
    },
    onError: (error, variable, rollback) => {
      if (rollback) rollback();
      else console.log(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['searchHistory']);
    },
  });

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['searchHistory'],
    queryFn: getHistory,
    onSuccess: (result) => {
      if (
        result?.isSuccess &&
        result.result.data &&
        !('errors' in result.result.data)
      ) {
        setSearchHistory(result.result.data);
      }
    },
  });

  return {
    searchHistory,
    spotifyArtistData,
    spotifyTrackData,
    spotifyArtistDetailTrackData,
    setSpotifyArtistDetailTrackData,
    commaUserData,
    mutateArtist,
    mutateTrack,
    mutateCommaUser,
    mutateSearchHistory,
    useMutationDeleteAllHistory,
    useMutationDeleteHistory,
    mutateArtistDetailTrack,
  };
};
