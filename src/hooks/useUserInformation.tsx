import { getUserFavoritesAsync, setUserTrackFavoriteAsync } from '@/apis/user';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// setUserTrackFavoriteAsync;

const setUserTrackFavorite = async (trackId: string) => {
  const { isSuccess, result } = await setUserTrackFavoriteAsync(trackId);

  return { isSuccess, result };
};

const getUserFavorites = async () => {
  const { isSuccess, result } = await getUserFavoritesAsync();

  return { isSuccess, result };
};

export const useUserInformation = () => {
  const queryClient = useQueryClient();

  const useMutationUserTrackFavorites = useMutation({
    mutationFn: setUserTrackFavorite,
    onMutate: async () => {
      // 기존 데이터를 가지고 있다가 실패하면 사용
      const oldData = queryClient.getQueryData(['TrackFavorite']);
      console.log(oldData);

      // API가 성공해서 업데이트 되지 않게
      await queryClient.cancelQueries({ queryKey: ['TrackFavorite'] });

      // 성공한다고 가정하여 true로 만들기
      if (oldData) {
        const updatedData = {
          ...oldData,
          favoriteCount: true, // 업데이트하려는 값으로 변경
        };

        queryClient.setQueryData(['TrackFavorite'], updatedData);
      }

      // 만약 에러나서 롤백 되면 이전 것을 써놓음.
      return () => queryClient.setQueryData(['TrackFavorite'], oldData);
    },
    onError: (error, variable, rollback) => {
      if (rollback) rollback();
      else console.log(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['TrackFavorite']);
    },
  });

  const {
    isLoading,
    error,
    data: getUserFavoritesData,
    isFetching,
  } = useQuery({
    queryKey: ['TrackFavorite'],
    queryFn: getUserFavorites,
  });

  return {
    getUserFavoritesData,
    useMutationUserTrackFavorites,
  };
};
