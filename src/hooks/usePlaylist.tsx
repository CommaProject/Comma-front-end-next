import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import {
  Query,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  addPlaylistAsync,
  addTrackToPlaylistAsync,
  deletePlaylist,
  deleteTrackFromPlaylistAsync,
  getAllMyplaylists,
  getPlaylistAllTracksAsync,
  getTracksRecommendAsync,
  patchAlarmFlag,
} from '@/apis/playlist';

/**
 * playlist hooks
 * @returns null
 */
export const usePlaylist = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const navigateToPlaylist = useCallback(
    (playlistId: number) => {
      router.push({
        pathname: `/playlist/${playlistId}`,
        query: { playlistId },
      });
    },
    [router],
  );
  const { mutate: mutateAddPlaylist } = useMutation(
    ['addPlaylist'],
    addPlaylistAsync,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['MyPlaylists'])
      }
    }
  );
  const { data: myPlaylist } = useQuery(['MyPlaylists'], getAllMyplaylists);
  
  const { mutate: mutateDeletePlaylist } = useMutation(
    ['deletePlaylist'],
    deletePlaylist,
    {
      onSuccess: () => {
      }
    }
  );

  const { mutate: mutateAlarmFlag } = useMutation(
    ['patchAlarmFlag'],
    patchAlarmFlag,
    {
      onSuccess: () => {
      }
    }
  );

  return {
    myPlaylist,
    navigateToPlaylist,
    mutateAddPlaylist,
    mutateDeletePlaylist,
    mutateAlarmFlag
  };
};

// PlaylistTrack API //
// Add playlist API
const addPlaylistTrack = async (params: {
  playlistId: number;
  spotifyTrackId: string;
}) => {
  const { isSuccess, result } = await addTrackToPlaylistAsync(
    params.playlistId,
    params.spotifyTrackId,
  );

  if (isSuccess && result.data) {
    return result.data;
  }
  return [];
};

// Delete playlist API
const deletePlaylistTrack = async (playlistTrackIdList_: number[]) => {
  const { isSuccess, result } = await deleteTrackFromPlaylistAsync(playlistTrackIdList_);

  if (isSuccess && result.data) {
    return result.data;
  }
  return [];
};


// Get PlaylistTrack API
// PlaylistTrack Hook
export const usePlaylistTrack = () => {
  // Add Track
  const queryClient = useQueryClient();
  type playlistIdTotrackListType = {
    [key: number]: string[];
  };

  const [playlistIdToTracks, setPlaylistIdTotrack] =
    useState<playlistIdTotrackListType>();
  const { mutate: mutateAddPlaylistTrack } = useMutation(
    ['addPlaylistTrack'],
    addPlaylistTrack,
    {
      onSuccess: (response) => {
        queryClient.invalidateQueries(['MyPlaylists']);
      },
    },
  );

  const { mutate: mutateDeletelaylistTrack } = useMutation(
    ['deletePlaylistTrack'],
    deletePlaylistTrack,
    {
      onSuccess: (response) => {
      },
    },
  );

  return {
    mutateAddPlaylistTrack,
    mutateDeletelaylistTrack,
    playlistIdToTracks,
    setPlaylistIdTotrack,
  };
};

/* 플레이리스트 전체 조회 페이지로 이동 */
export const useAllPlaylists = () => {
  const router = useRouter();

  const navigateToAllPlaylists = useCallback(() => {
    router.push({
      pathname: `/myplaylists`,
    });
  }, [router]);

  return { navigateToAllPlaylists };
};

// ------------------Reommend------------------//
const getTracksRecommend = async () => {
  const { isSuccess, result } = await getTracksRecommendAsync();

  if (isSuccess && result.data) {
    return result.data;
  }
  // return { isSuccess, result };
  return [];
};

export const useRecommend = () => {
  const { data: tracksRecommendData } = useQuery({
    queryKey: ['TracksRecommend'],
    queryFn: getTracksRecommend,
    // onSuccess: (result) => {},
  });

  return { tracksRecommendData };
};
