import { ApiResponse } from '@/constants/types';
import { getAsync } from './API';

interface getSpotifyArtistNameProps {
  artistId: string;
  artistName: string;
  genres: string[];
  images: {
    height: string;
    url: string;
    width: string;
  }[];
}
/**
 * Artist 데이터 가져오기
 * @param artistName 가수 이름
 * @returns 성공: 200
 */
export async function getSpotifyArtistNameAsync(
  artistName: string,
): ApiResponse<getSpotifyArtistNameProps> {
  const response = await getAsync<getSpotifyArtistNameProps>(
    `/spotify/artist/{${artistName}}`,
    {},
  );

  return response;
}
