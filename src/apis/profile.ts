import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { UserDetailType } from '@/types/userDetailTypes';
import { getAsync } from './API';

const getUserDetail = async () => {
  const { isSuccess, result } = await getAsync<UserDetailType>(
    '/user/information',
  );

  if (isSuccess && result.data) {
    return result.data;
  }

  return null;
};

export const useGetUserDetail = () => {
  const { isLoading, data } = useQuery(['UserDetailInfo'], getUserDetail);
  const [nickName, setNickName] = useState<string | null>('-');

  useEffect(() => {
    if (isLoading === false) {
      if (data) {
        setNickName(data.nickName);
      }
    }
  }, [isLoading, data]);

  return {
    nickName,
  };
};
