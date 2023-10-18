import { getFriendsTrackCountAsync, getTrackCountAsync } from '@/apis/track';
import { useQuery } from '@tanstack/react-query';

const getTrackPlayCount = async () => {
  const { isSuccess, result } = await getTrackCountAsync();

  if (isSuccess && result.data) {
    return result.data;
  }
  return [];
};

const getFriendsTrackPlayCount = async () => {
  const { isSuccess, result } = await getFriendsTrackCountAsync();

  if (isSuccess && result.data) {
    return result.data;
  }
  return [];
};

export const useTrackPlayCount = () => {
  const { data: trackPlayCountData } = useQuery({
    queryKey: ['TrackPlayCount'],
    queryFn: getTrackPlayCount,
  });

  const { data: friendsTrackPlayCountData } = useQuery({
    queryKey: ['FriendsTracksPlayCount'],
    queryFn: getFriendsTrackPlayCount,
  });

  return { trackPlayCountData, friendsTrackPlayCountData };
};
