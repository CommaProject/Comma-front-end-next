import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTracksRecommendAsync } from '@/apis/playlist';

/* 플레이 리스트 상세 정보 조회 페이지로 이동 */
export const usePlaylist = () => {
  const router = useRouter();

  const navigateToPlaylist = useCallback(
    (playlistId: number) => {
      router.push({
        pathname: `/playlist/${playlistId}`,
        query: { playlistId },
      });
    },
    [router],
  );

  return { navigateToPlaylist };
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
