import { ApiResponse } from '@/constants/types';
import {
  SpotifyArtistProps,
  getHistoryProps,
  setHistoryProps,
} from '@/types/searchTypes';
import { TrackType } from '@/types/trackTypes';
import { CommaUserType } from '@/types/authTypes';
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
    `/spotify/artists/{${artistName}}`,
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
): ApiResponse<CommaUserType[]> {
  const response = await getAsync<CommaUserType[]>(
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
): ApiResponse<TrackType[]> {
  const response = await getAsync<TrackType[]>(
    `/spotify/tracks/{${trackName}}`,
    {},
  );

  return response;
}

/**
 * Track 데이터 가져오기
 * @param track 이름
 * @returns 성공: 200
 */
export async function getTrackOfArtistAsync(
  spotifyArtistId: string,
): ApiResponse<TrackType[]> {
  const response = await getAsync<TrackType[]>(
    `/spotify/artist/${spotifyArtistId}/tracks`,
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
