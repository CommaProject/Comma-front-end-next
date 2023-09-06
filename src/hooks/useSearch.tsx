import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getCommaUserAsync,
  getSpotifyArtistAsync,
  getTrackAsync,
  getHistoryAsync,
  addHistoryAsync,
} from '@/apis/search';
import { SpotifyArtistProps } from '~/src/constants/types/searchTypes';
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
const setHistory = async (history: string) => {
  const { isSuccess, result } = await addHistoryAsync(history);

  return { isSuccess, result };
};

export const useSearch = () => {
  const [spotifyArtistData, setSpotifyArtistData] =useState<SpotifyArtistProps[]>();
  const [spotifyTrackData, setSpotifyTrackData] = useState<TrackType[]>();
  const [commaUserData, setCommaUserData] = useState<CommaUserType[]>();

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
    setHistory,
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

  const {
    isLoading,
    error,
    data: searchHistory,
    isFetching,
  } = useQuery({
    queryKey: ['searchHistory'],
    queryFn: getHistory,
  });

  return {
    searchHistory,
    spotifyArtistData,
    spotifyTrackData,
    commaUserData,
    mutateArtist,
    mutateTrack,
    mutateCommaUser,
    mutateSearchHistory,
  };
};
