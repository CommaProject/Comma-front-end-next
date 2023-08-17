import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import router from 'next/router';
import {
  getSpotifyArtistProps,
  getCommaUserAsync,
  getSpotifyArtistAsync,
  getTrackAsync,
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
  const [searchedData, setSearchedData] = useState<getSpotifyArtistProps[]>([]);

  const { mutate: mutateArtist } = useMutation(['artist'], getSpotifyArtist, {
    onSuccess: (response) => {
      if (response.result.data && 'artistId' in response.result.data) {
        const newArtistData = response.result.data;
        setSearchedData(() => [newArtistData]);
        // router.push()
      }
    },
  });

  const { mutate: mutateTrack } = useMutation(['Track'], getSpotifyTrack, {
    onSuccess: (response) => {
      console.log(response.result.data);
    },
  });

  const { mutate: mutateCommaUser } = useMutation(['commaUser'], getCommaUser, {
    onSuccess: (response) => {
      console.log(response.result.data);
    },
  });

  return {
    mutateArtist,
    mutateTrack,
    mutateCommaUser,
  };
};
