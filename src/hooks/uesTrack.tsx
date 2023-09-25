import { getFriendsTrackCountAsync, getTrackCountAsync } from '@/apis/track';
import { useQuery } from '@tanstack/react-query';

const getTrackPlayCount = async () => {
  const { isSuccess, result } = await getTrackCountAsync();

  if (isSuccess && result.data) {
    return result.data;
  }
  return null;
};

const getFriendsTrackPlayCount = async () => {
  const { isSuccess, result } = await getFriendsTrackCountAsync();

  if (isSuccess && result.data) {
    return result.data;
  }
  return null;
};

export const useTrackPlayCount = () => {
  const { data: trackPlayCountData } = useQuery({
    queryKey: ['TracksRecommend'],
    queryFn: getTrackPlayCount,
  });

  const { data: friendsTrackPlayCountData } = useQuery({
    queryKey: ['FriendsTracksPlayCount'],
    queryFn: getFriendsTrackPlayCount,
  });

  return { trackPlayCountData, friendsTrackPlayCountData };
};
