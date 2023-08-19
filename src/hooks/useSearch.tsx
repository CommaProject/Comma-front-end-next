import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import router from 'next/router';
import {
  getSpotifyArtistProps,
  getCommaUserAsync,
  getSpotifyArtistAsync,
  getTrackAsync,
  getCommaUserProps,
  getTrackProps,
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

export const useSearch = () => {
  // 검색은 Loading이 있을 수 있으니까 React-Query 사용.
  const [spotifyArtistData, setSpotifyArtistData] =
    useState<getSpotifyArtistProps>([]);

  const [spotifyTrackData, setSpotifyTrackData] = useState<getTrackProps>([]);

  const [commaUserData, setCommaUserData] = useState<getCommaUserProps>([]);

  const { mutate: mutateTrack } = useMutation(['Track'], getSpotifyTrack, {
    onSuccess: (response) => {
      if (response.result.data)
        if ('errors' in response.result.data) {
          console.log('error:', response.result.data.errors);
        } else if (response.result.data) {
          const newTrackData = response.result.data;
          setSpotifyTrackData(newTrackData);
          console.log('useSearch', response);
        }
    },
  });

  const { mutate: mutateArtist } = useMutation(['artist'], getSpotifyArtist, {
    onSuccess: (response) => {
      if (response.result.data && 'artistId' in response.result.data) {
        const newArtistData = response.result.data;
        setSpotifyArtistData(newArtistData);
      }
    },
  });

  const { mutate: mutateCommaUser } = useMutation(['commaUser'], getCommaUser, {
    onSuccess: (response) => {
      if (response.result.data && 'userId' in response.result.data) {
        const newCommaUserData = response.result.data;
        setCommaUserData(newCommaUserData);
      }
    },
  });

  return {
    spotifyArtistData,
    spotifyTrackData,
    commaUserData,
    mutateArtist,
    mutateTrack,
    mutateCommaUser,
  };
};
