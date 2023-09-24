import { getFriendsTrackCountAsync, getTrackCountAsync } from '@/apis/track';
import { useQuery } from '@tanstack/react-query';

const getTrackPlayCount = async () => {
  const { isSuccess, result } = await getTrackCountAsync();

  return { isSuccess, result };
};

const getFriendsTrackPlayCount = async () => {
  const { isSuccess, result } = await getFriendsTrackCountAsync();

  return { isSuccess, result };
};

export const useTrackPlayCount = () => {
  const { data: trackPlayCountData } = useQuery({
    queryKey: ['Recommend'],
    queryFn: getTrackPlayCount,
    onSuccess: (result) => {
      if (
        result?.isSuccess &&
        result.result.data &&
        !('errors' in result.result.data)
      ) {
        console.log('success TrackPlayCountData');
      }
    },
  });

  const { data: friendsTrackPlayCountData } = useQuery({
    queryKey: ['Recommend'],
    queryFn: getFriendsTrackPlayCount,
    onSuccess: (result) => {
      if (
        result?.isSuccess &&
        result.result.data &&
        !('errors' in result.result.data)
      ) {
        console.log('success friendsTrackPlayCountData');
      }
    },
  });
  return { trackPlayCountData, friendsTrackPlayCountData };
};
