import FollowInformationTemplate from '~/src/components/template/followInformation';
import { useGetFollowingList } from '@/apis/followInfo';

const Following = () => {
  const { followingList } = useGetFollowingList();
  return <FollowInformationTemplate userList={followingList} />;
};

export default Following;
