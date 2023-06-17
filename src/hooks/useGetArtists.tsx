import { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getAsync } from '@/apis/API';

import useInfiniteScroll from './useInfiniteScroll';

export const useGetArtists = () => {
  const [artists, setArtists] = useState<string[]>([]);

  const fetchMoreRightElement = useRef(null);
  const rightIntersection = useInfiniteScroll(fetchMoreRightElement);

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['artist'],
    ({ pageParam = 0 }) =>
      getAsync<string[]>('/spotify/artist', {
        params: { offset: pageParam },
      }),
    {
      getNextPageParam: () => artists.length + 3,
    },
  );

  useEffect(() => {
    if (!data?.pages) return;
    data.pages.forEach((res) => {
      if (res.isSuccess && res.result.data) {
        setArtists([...artists, ...res.result.data]);
      }
    });
  }, [data?.pages]);

  useEffect(() => {
    if (rightIntersection && hasNextPage) fetchNextPage();
  }, [rightIntersection, hasNextPage]);

  return {
    artists,
    fetchMoreRightElement,
  };
};
