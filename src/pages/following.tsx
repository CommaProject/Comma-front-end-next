import FollowInformationTemplate from '~/src/components/template/followInformation';
import { useGetFollowingList } from '@/hooks/useFollowInfo';

const Following = () => {
  const { followingList } = useGetFollowingList();
  return <FollowInformationTemplate userList={followingList} />;
};

export default Following;
