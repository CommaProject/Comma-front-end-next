import { useQuery } from '@tanstack/react-query';
import { TrackArtistResponse } from '@/types/trackTypes';
import { getPlaylistTracks } from '@/apis/playlisttrack';
/* ms로 주어진 시간을 __ h __ m __ s 문자열로 반환하는 함수 */

export const HandleMS = (ms: number) => {
  const seconds = Math.floor(ms / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  let hms = '';

  if (hours > 0) {
    hms += `${hours}h `;
  }
  if (minutes > 0) {
    hms += `${minutes}m `;
  }
  hms += `${remainingSeconds}s`;

  return hms;
};

/*
객체 배열로 주어진 artistList 타입에서 artist명만 합쳐서
 __ & __ & ... 형태의 문자열로 반환하는 함수
 */
export const HandleSingerName = (trackArtistList: TrackArtistResponse[]) => {
  const artistNames = trackArtistList.map(
    (trackArtist) => trackArtist.artist.artistName,
  );
  return artistNames.join(' & ');
};

export const useGetPlaylistTracks = (playlistId: number) => {
  const { isLoading, data } = useQuery(['playlistTracks'], () =>
    getPlaylistTracks(playlistId),
  );

  return { playlistTracks: data || [] }; // 데이터가 없는 경우 빈 배열 반환
};
