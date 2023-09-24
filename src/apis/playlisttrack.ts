import { getAsync } from '@/apis/API';
import { TrackFavoritesType } from '@/types/trackTypes';

export const getPlaylistTracks = async (playlistId: number) => {
  const { isSuccess, result } = await getAsync<TrackFavoritesType[]>(
    `/playlist/track/${playlistId}`,
  );

  if (isSuccess && result.data) {
    return result.data;
  }

  return [];
};

