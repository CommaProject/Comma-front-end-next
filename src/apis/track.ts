import { TrackPlayCountType } from '@/types/trackTypes';
import { ApiResponse } from '@/constants/types';
import { getAsync, postAsync } from './API';
/**
 * 추천 리스트 조회 함수 getTrackCountAsync
 * @param AccessToken
 * @returns 가입 성공 시 209, 실패 시 ...
 */
export const getTrackCountAsync = async (): ApiResponse<
  TrackPlayCountType[]
> => {
  const response = await getAsync<TrackPlayCountType[]>(
    '/track/play-count',
    {},
  );

  return response;
};

/**
 * 추천 리스트 조회 함수 getFriendsTrackCountAsync
 * @param AccessToken
 * @returns 가입 성공 시 209, 실패 시 ...
 */
export const getFriendsTrackCountAsync = async (): ApiResponse<
  TrackPlayCountType[]
> => {
  const response = await getAsync<TrackPlayCountType[]>(
    '/track/play-count/friends',
    {},
  );

  return response;
};
