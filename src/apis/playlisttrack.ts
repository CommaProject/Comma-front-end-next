import { getAsync } from '@/apis/API';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { TrackFavoritesType } from '@/types/trackTypes';

const getPlaylistTracks = async (playlistId: number) => {
  const { isSuccess, result } = await getAsync<TrackFavoritesType[]>(
    `/playlist/track/${playlistId}`,
  );

  if (isSuccess && result.data) {
    return result.data;
  }

  return [];
};

export const useGetPlaylistTracks = (playlistId: number) => {
  const { isLoading, data } = useQuery(
    ['playlistTracks'],
    () => getPlaylistTracks(playlistId),
  );

  return {playlistTracks: data || []}; // 데이터가 없는 경우 빈 배열 반환
};
