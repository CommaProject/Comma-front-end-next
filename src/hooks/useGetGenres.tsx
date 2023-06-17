import { useQuery } from '@tanstack/react-query';

import { getAsync } from '@/apis/API';

const getGenres = async () => {
  const { isSuccess, result } = await getAsync<string[]>('/spotify/genre');

  if (isSuccess && result.data) return result.data;
  return [];
};

export const useGetGenres = () => {
  const { data = [] } = useQuery(['genre'], getGenres);

  return { genres: data };
};
