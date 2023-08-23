import { useRouter } from 'next/router';
import { useCallback } from 'react';
//플레이 리스트 상세 정보 조회 관련 
export const usePlaylist = () => {
    const router = useRouter();

  const navigateToPlaylist = useCallback((playlistId: number,playlistTitle:string, alarmStartTime:string) => {
    router.push({

      pathname:`/playlist/${playlistId}`,
      query: {playlistId:playlistId,
       }
      
  });

  }, [router]);

  return { navigateToPlaylist };
}


