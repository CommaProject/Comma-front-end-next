import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FollowUserInfoType } from '@/constants/types/followTypes';
import { getAsync } from './API';
import { FollowInfoType } from '../constants/types/followTypes';

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
  const [followingList, setFollowingList] = useState<FollowUserInfoType[]>([]);

  useEffect(() => {
    if (isLoading === false) {
      if (data.length !== 0) {
        setFollowingList(data);
      }
    }
  }, [isLoading, data]);

  return { followingList };
};

const getFollowInfo = async () => {
  const { isSuccess, result } = await getAsync<FollowInfoType>(
    '/followings/count',
  );
  if (isSuccess && result.data) {
    console.log('성공', result.data, typeof result.data);
    return result.data;
  }

  return null;
};

export const useGetFollowInfo = () => {
  const { isLoading, data } = useQuery(['followInfo'], getFollowInfo);
  const [followingInfo, setFollowingInfo] = useState<number>(0);
  const [followersInfo, setFollowersInfo] = useState<number>(0);

  useEffect(() => {
    if (isLoading === false) {
      console.log('isloading후222', data);
      if (data) {
        setFollowingInfo(data.followings);
        setFollowersInfo(data.followers);
      }
    }
  }, [isLoading, data, followersInfo]);

  return { followingInfo, followersInfo };
};
