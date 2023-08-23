import { ApiResponse } from '@/constants/types';
import { getAsync, postAsync } from './API';

export interface getSpotifyArtistProps {
  artistId: string;
  artistName: string;
  genres: string[];
  images: [
    {
      height: number;
      url: string;
      width: number;
    },
    {
      height: number;
      url: string;
      width: number;
    },
    {
      height: number;
      url: string;
      width: number;
    },
  ];
  popularity: number;
}

export interface getCommaUserProps {
  userId: number;
  email: string;
  password: string;
  delFlag: boolean;
  role: string;
  name: string;
  nickName: string;
  age: number;
  sex: string;
  joinDate: string;
  profileImage: string;
}

export interface getTrackProps {
  trackId: string;
  trackName: string;
  artist: string;
  artistId: string;
  albumId: string;
  previewUrl: string;
  images: [
    {
      height: number;
      url: string;
      width: number;
    },
    {
      height: number;
      url: string;
      width: number;
    },
    {
      height: number;
      url: string;
      width: number;
    },
  ];
  popularity: number;
  releaseData: string;
  durationMinute: string;
  durationSecond: string;
}

export interface getHistoryProps {
  id: number;
  searchHistory: string;
}

export interface setHistoryProps {
  searchHistory: string;
}
/**
 * Artist 데이터 가져오기
 * @param artistName 가수 이름
 * @returns 성공: 200
 */
export async function getSpotifyArtistAsync(
  artistName: string,
): ApiResponse<getSpotifyArtistProps[]> {
  const response = await getAsync<getSpotifyArtistProps[]>(
    `/spotify/artist/{${artistName}}`,
    {},
  );

  return response;
}

/**
 * CommaUser 데이터 가져오기
 * @param userName 이름
 * @returns 성공: 200
 */
export async function getCommaUserAsync(
  userName: string,
): ApiResponse<getCommaUserProps[]> {
  const response = await getAsync<getCommaUserProps[]>(
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
): ApiResponse<getTrackProps[]> {
  const response = await getAsync<getTrackProps[]>(
    `/spotify/track/{${trackName}}`,
    {},
  );

  return response;
}

export async function getHistoryAsync(): ApiResponse<getHistoryProps[]> {
  const response = await getAsync<getHistoryProps[]>('/spotify/histories', {});

  return response;
}

export async function setHistoryAsync(
  searchHistory: string,
): ApiResponse<null> {
  const response = await postAsync<setHistoryProps, setHistoryProps>(
    '/spotify/histories',
    { searchHistory },
  );

  if (response.isSuccess) {
    return { isSuccess: true, result: { code: 200, msg: 'Success' } };
  }
  return { isSuccess: false, result: response.result };
}
