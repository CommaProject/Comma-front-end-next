import { useInfiniteQuery } from '@tanstack/react-query';
import { getAsync } from '@/apis/API';
import { useEffect, useRef, useState } from 'react';
import useInfiniteScroll from './useInfiniteScroll';

export const useGetArtists = () => {
  const [artists, setArtists] = useState<string[]>([]);
  const [artistsBox, setArtistsBox] = useState<any>([]);
  const [leftBox, setLeftBox] = useState<any>([]);
  const [isLeft, setIsLeft] = useState(false);

  const fetchMoreLeftElement = useRef(null);
  const fetchMoreRightElement = useRef(null);
  const leftIntersection = useInfiniteScroll(fetchMoreLeftElement);
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
        if (leftIntersection) setArtistsBox([res.result.data, ...artistsBox]);
        else if (rightIntersection)
          setArtistsBox([...artistsBox, res.result.data]);
      }
    });
  }, [data?.pages]);

  useEffect(() => {
    if ((rightIntersection || leftIntersection) && hasNextPage) fetchNextPage();
  }, [rightIntersection, hasNextPage, leftIntersection]);

  return {
    leftBox,
    artists,
    artistsBox,
    fetchMoreLeftElement,
    fetchMoreRightElement,
  };
};
