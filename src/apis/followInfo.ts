import { FollowUserInfoType,FollowInfoType } from '@/constants/types/followTypes';
import { getAsync } from './API';

export const getFollowingList = async () => {
  const { isSuccess, result } = await getAsync<FollowUserInfoType[]>(
    '/followings/type/FOLLOWING',
  );
  if (isSuccess && result.data) {
    console.log('성공', result.data, typeof result.data);
    return result.data;
  }

  return [];
};


export const getFollowInfo = async () => {
  const { isSuccess, result } = await getAsync<FollowInfoType>(
    '/followings/count',
  );
  if (isSuccess && result.data) {
    console.log('성공', result.data, typeof result.data);
    return result.data;
  }

  return null;
};

