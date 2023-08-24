import { ApiResponse } from '@/constants/types';
import {
  CommaUserProps,
  SpotifyArtistProps,
  TrackProps,
  getHistoryProps,
  setHistoryProps,
} from '@/types/search';
import { deleteAsync, getAsync, postAsync } from './API';

/**
 * Artist 데이터 가져오기
 * @param artistName 가수 이름
 * @returns 성공: 200
 */
export async function getSpotifyArtistAsync(
  artistName: string,
): ApiResponse<SpotifyArtistProps[]> {
  const response = await getAsync<SpotifyArtistProps[]>(
    `/spotify/artist/{${artistName}}`,
    {},
  );

  return response;
}

/**
 * CommaUser 데이터 가져오기
 * @param userName 유저 이름
 * @returns 성공: 200
 */
export async function getCommaUserAsync(
  userName: string,
): ApiResponse<CommaUserProps[]> {
  const response = await getAsync<CommaUserProps[]>(
    `/search/user?name=${userName}`,
    {},
  );

  return response;
}

/**
 * Track 데이터 가져오기
 * @param track 이름
 * @returns 성공: 200
 */
export async function getTrackAsync(
  trackName: string,
): ApiResponse<TrackProps[]> {
  const response = await getAsync<TrackProps[]>(
    `/spotify/track/{${trackName}}`,
    {},
  );

  return response;
}

/**
 * Search History 데이터 가져오기
 * @returns 성공: 200
 */
export async function getHistoryAsync(): ApiResponse<getHistoryProps[]> {
  const response = await getAsync<getHistoryProps[]>('/spotify/histories', {});

  return response;
}

/**
 * Search History 데이터 설정
 * @param searchedText 검색된 텍스트
 * @returns 성공: 200
 */
export async function addHistoryAsync(
  searchHistory: string,
): ApiResponse<null> {
  const response = await postAsync<null, setHistoryProps>(
    '/spotify/histories',
    {
      searchHistory,
    },
  );

  return response;
}

/**
 * Search History 데이터 삭제
 * @param id getHistoryProps.id
 * @returns 성공: 200
 */
export async function deleteHistoryAsync(id: number): ApiResponse<null> {
  const response = await deleteAsync<null>(`/spotify/histories/${id}`);

  return response;
}

/**
 * Search History 데이터 전체 삭제
 * @returns 성공: 200
 */
export async function deleteAllHistoryAsync(): ApiResponse<null> {
  const response = await deleteAsync<null>('/spotify/all-histories');

  return response;
}
