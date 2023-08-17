import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import router from 'next/router';
import {
  getSpotifyArtistProps,
  getCommaUserAsync,
  getSpotifyArtistAsync,
} from '@/apis/search';

const getSpotifyArtist = async (artistNames: string) => {
  const { isSuccess, result } = await getSpotifyArtistAsync(artistNames);

  return { isSuccess, result };
};

const getCommaUser = async (commaUserName: string) => {
  const { isSuccess, result } = await getCommaUserAsync(commaUserName);

  return { isSuccess, result };
};

export const useSearch = () => {
  // 검색은 Loading이 있을 수 있으니까 React-Query 사용.
  const [searchedData, setSearchedData] = useState<getSpotifyArtistProps[]>([]);

  const { mutate: mutateArtist } = useMutation(
    ['artistName'],
    getSpotifyArtist,
    {
      onSuccess: (response) => {
        if (response.result.data && 'artistId' in response.result.data) {
          const newArtistData = response.result.data;
          setSearchedData(() => [newArtistData]);
          // router.push()
        }
      },
    },
  );

  const { mutate: mutateCommaUser } = useMutation(['commaUser'], getCommaUser, {
    onSuccess: (response) => {
      console.log(response.result.data);
    },
  });

  return {
    mutateArtist,
    mutateCommaUser,
  };
};
