import { getUserFavoritesAsync, setUserTrackLikeAsync } from '@/apis/user';
import { useMutation, useQueries, useQuery } from '@tanstack/react-query';

// setUserTrackLikeAsync;

const setUserTrackLike = async (trackId: string) => {
  const { isSuccess, result } = await setUserTrackLikeAsync(trackId);

  return { isSuccess, result };
};

const getUserFavorites = async () => {
  const { isSuccess, result } = await getUserFavoritesAsync();

  return { isSuccess, result };
};

export const useUserInformation = () => {
  const { mutate: mutateSetTrackLike } = useMutation(
    ['TrackLike'],
    setUserTrackLike,
    {
      onMutate: () => {},
      onSuccess: (response) => {
        if (response.result.data) {
          console.log(response.result.data);
        }
      },
    },
  );

  const {
    isLoading,
    error,
    data: getUserFavoritesData,
    isFetching,
  } = useQuery({
    queryKey: ['repoData'],
    queryFn: getUserFavorites,
  });
  return { mutateSetTrackLike, getUserFavoritesData };
};
