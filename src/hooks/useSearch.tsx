import React from 'react';
import { useMutation } from '@tanstack/react-query';
import router from 'next/router';
import { getSpotifyArtistNameAsync } from '../apis/search';

const getSpotifyArtistName = async (artistNames: string) => {
  const { isSuccess, result } = await getSpotifyArtistNameAsync(artistNames);

  return { isSuccess, result };
};

export const useSearch = () => {
  // 검색은 Loading이 있을 수 있으니까 React-Query 사용.
  const { mutate } = useMutation(['artistName'], getSpotifyArtistName, {
    onSuccess: (response) => {
      console.log(response.result.data);
    },
  });

  return {
    mutate,
  };
};
