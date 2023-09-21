import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FollowUserInfoType,FollowInfoType } from '@/constants/types/followTypes';
import {getFollowingList, getFollowInfo } from '@/apis/followInfo';
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
  