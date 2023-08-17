import { ApiResponse } from '@/constants/types';
import { getAsync } from './API';

export interface getSpotifyArtistProps {
  artistId: string;
  artistName: string;
  genres: string[];
  images: {
    height: string;
    url: string;
    width: string;
  }[];
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
/**
 * Artist 데이터 가져오기
 * @param artistName 가수 이름
 * @returns 성공: 200
 */
export async function getSpotifyArtistAsync(
  artistName: string,
): ApiResponse<getSpotifyArtistProps> {
  const response = await getAsync<getSpotifyArtistProps>(
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
): ApiResponse<getCommaUserProps> {
  const response = await getAsync<getCommaUserProps>(
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
): ApiResponse<getTrackProps> {
  const response = await getAsync<getTrackProps>(
    `/spotify/artist/{${trackName}}`,
    {},
  );

  return response;
}
