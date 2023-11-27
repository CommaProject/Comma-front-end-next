import { deleteAsync, getAsync, patchAsync, postAsync } from '@/apis/API';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { PlaylistType, PostTrackPlaylistType } from '@/types/playlistTypes';
import { ApiResponse } from '@/constants/types';
import { TracksRecommendData } from '@/types/recommendType';
import { TrackAlarmFlagType, TrackFavoritesType } from '@/types/trackTypes';

// 플레이리스트 조회
export const getAllMyplaylists = async () => {
  const { isSuccess, result } = await getAsync<PlaylistType[]>('/playlist');

  if (isSuccess && result.data) {
    return result.data;
  }

  return [];
};

// 콤마 플레이리스트 가져오기
export const useGetCommaPlaylists = () => {
  const { isFetching, data: commaPlaylist } = useQuery(
    ['multiplePlaylists'],
    getAllMyplaylists,
  );
  const [isPlaylistAvailable, setIsPlaylistAvailable] =
    useState<boolean>(false);
  const [isCommaPlaylistAvailable, setIsCommaPlaylistAvailable] =
    useState<boolean>(false);

  useEffect(() => {
    console.log('isFetching');
  }, [isFetching]);

  const [playlist, setPlaylist] = useState<PlaylistType[]>([]);

  useEffect(() => {
    if (commaPlaylist) {
      console.log('isloading후', commaPlaylist);
      if (commaPlaylist.length === 0) {
        setIsPlaylistAvailable(false);
      } else {
        setIsPlaylistAvailable(true);

        const filteredPlaylists: PlaylistType[] = commaPlaylist.filter(
          (onePlaylist) => onePlaylist.alarmFlag === true,
        );

        setPlaylist(filteredPlaylists);
      }
    }
  }, [commaPlaylist]);

  useEffect(() => {
    if (commaPlaylist) {
      if (commaPlaylist.length !== 0) {
        setIsCommaPlaylistAvailable(true);
      } else {
        setIsCommaPlaylistAvailable(false);
      }
    }
  }, [commaPlaylist]);

  return {
    isPlaylistAvailable,
    isCommaPlaylistAvailable,
    commaPlaylist,
  };
};

// 플레이리스트 총 재생 시간 가져오기
const getPlaylistPlayTime = async (playlistId: number) => {
  const { isSuccess, result } = await getAsync<number>(
    `/playlist/all-duration-time/${playlistId}`,
  );

  if (isSuccess && result.data) {
    return result.data;
  }
  return 0;
};

export const useGetPlaylistPlayTime = (playlistId: number) => {
  const [playTime, setPlayTime] = useState<number>(0);
  const { isSuccess, data } = useQuery(['playtime'], () =>
    getPlaylistPlayTime(playlistId),
  );
  useEffect(() => {
    if (isSuccess && data !== 0) {
      setPlayTime(data);
    }
  }, [isSuccess, data, playlistId]);

  return { playTime };
};

/**
 * Playlist에 Track 추가 함수 addTrackToPlaylistAsync
 * @need AccessToken
 * @returns 가입 성공 시 209, 실패 시 ...
 */
export const addTrackToPlaylistAsync = async (
  playlistId_: number,
  spotifyTrackId_: string,
): ApiResponse<any> => {
  // return: null
  const response = await postAsync<any, PostTrackPlaylistType>(
    '/playlist/track',
    {
      playlistId: playlistId_,
      spotifyTrackId: spotifyTrackId_,
    },
  );

  return response;
};

/**
 * 플레이 리스트 추가 addTrackToPlaylistAsync
 * @need AccessToken
 * @returns 가입 성공 시 209, 실패 시 ...
 */
export const addPlaylistAsync = async (
  spotifyTrackId_: string,
) => {
  const  { isSuccess, result }  = await postAsync<any, any>('/playlist', {
    spotifyTrackId: spotifyTrackId_,
  });

  if (isSuccess && result.data) {
    return result.data;
  }
  
  return null;
};

// 플레이리스트 삭제
export const deletePlaylist = async (playlistIdArray: number[]) => {
  const response = await deleteAsync<number[]>(`/playlist`, {
    headers: {
      'Content-Type': 'application/json', // 안 해도 될 것 같은데
    },
    data: playlistIdArray, // 요청 본문에 데이터를 JSON 배열로 넣음
  });

  return response;
};

/**
 * 플레이 리스트 알람 설정
 * @param playlistId_ number
 * @need AccessToken
 * @returns 가입 성공 시 null
 */
export const patchAlarmFlag = async (playlistId_: number) => {
  const response = await patchAsync<any, any>(`/playlist`, {
    playlistId: playlistId_, 
  });

  return response;
};

// 단일 플레이리스트 디테일
const getPlaylistDetail = async (playlistId: number) => {
  const { isSuccess, result } = await getAsync<PlaylistType>(
    `/playlist/${playlistId}`,
  );

  if (isSuccess && result.data) {
    return result.data;
  }

  return {
    playlistTitle: '-',
    alarmFlag: false,
    alarmStartTime: '--:--:--',
    trackCount: 0,
    totalDurationTime: 0,
  };
};

export const useGetPlaylistDetail = (playlistId: number) => {
  const { isLoading, data } = useQuery(['playlistDetail', playlistId], () =>
    getPlaylistDetail(playlistId),
  );

  return {
    myPlaylistDetail: data,
  };
};

/**
 * 추천 리스트 조회 함수 getTracksRecommendAsync
 * @need AccessToken
 * @returns 가입 성공 시 209, 실패 시 ...
 */
export const getTracksRecommendAsync = async (): ApiResponse<
  TracksRecommendData[]
> => {
  const response = await getAsync<TracksRecommendData[]>(
    '/tracks/recommend',
    {},
  );

  return response;
};

/**
 * 플레이리스트 트랙 전체 조회 getPlaylistAllTracksAsync
 * @need AccessToken
 * @returns 가입 성공 시 209, 실패 시 ...
 */
export const getPlaylistAllTracksAsync = async (playlistId: number) => {
  const { isSuccess, result } = await getAsync<TrackAlarmFlagType[]>(
    `/playlist/track/${playlistId}`,
  );
  if (isSuccess && result.data) {
    return result.data;
  }
  return [];
};
