import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FollowUserInfoType } from '@/constants/types/followTypes';
import { getAsync } from './API';


const getFollowingList = async () => {
  const { isSuccess, result } = await getAsync<FollowUserInfoType[]>(
    '/followings/type/FOLLOWING',
  );
  if (isSuccess && result.data) {
    console.log('성공', result.data, typeof result.data);
    return result.data;
  }

  return [];
};

export const useGetFollowingList = () => {
  const { isLoading, data = [] } = useQuery(
    ['followingList'],
    getFollowingList,
  );
  const [followingList, setFollowingList] = useState<FollowUserInfoType[]>(
    [],
  );

  useEffect(() => {
    if (isLoading === false) {
      if (data.length !== 0) {
        setFollowingList(data);
      }
    }
  }, [isLoading, data]);

  return { followingList };
};
