import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const usePlaylist = () => {
    const router = useRouter();

  const navigateToPlaylist = useCallback((playlistId: number) => {
    router.replace(`/playlist/${playlistId}`);
  }, [router]);

  return { navigateToPlaylist };
}


