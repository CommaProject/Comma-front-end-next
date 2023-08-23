import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getSpotifyArtistProps,
  getCommaUserAsync,
  getSpotifyArtistAsync,
  getTrackAsync,
  getCommaUserProps,
  getTrackProps,
  getHistoryAsync,
} from '@/apis/search';

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

export const useSearch = () => {
  const [spotifyArtistData, setSpotifyArtistData] =
    useState<getSpotifyArtistProps[]>();

  const [spotifyTrackData, setSpotifyTrackData] = useState<getTrackProps[]>();

  const [commaUserData, setCommaUserData] = useState<getCommaUserProps[]>();

  const { mutate: mutateTrack } = useMutation(['Track'], getSpotifyTrack, {
    onSuccess: (response) => {
      if (response.result.data) {
        if ('errors' in response.result.data) {
          console.log('error:', response.result.data.errors);
        } else if (response.result.data) {
          const newArtistData = response.result.data;
          setSpotifyTrackData(newArtistData);
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

  const {
    isLoading,
    error,
    data: searchHistory,
    isFetching,
  } = useQuery({
    queryKey: ['repoData'],
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
  };
};
