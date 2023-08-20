import { getUserTrackLikeAsync, setUserTrackLikeAsync } from '@/apis/user';
import { useMutation } from '@tanstack/react-query';

// setUserTrackLikeAsync;

const setUserTrackLike = async (trackId: string) => {
  const { isSuccess, result } = await setUserTrackLikeAsync(trackId);

  return { isSuccess, result };
};

export const useUserInformation = () => {
  const { mutate: mutateSetTrackLike } = useMutation(
    ['TrackLike'],
    setUserTrackLike,
    {
      onSuccess: (response) => {
        if (response.result.data) {
          console.log(response.result.data);
        }
      },
    },
  );

  const getUserTrackLike = async () => {
    const { isSuccess, result } = await getUserTrackLikeAsync();

    if (isSuccess) {
      return { result };
    }

    return false;
  };

  return { mutateSetTrackLike, getUserTrackLike };
};
