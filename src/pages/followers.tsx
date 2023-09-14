import FollowInformationTemplate from '~/src/components/template/followInformation';
import { useGetFollowingList } from '@/apis/followInfo';

const Followers = () => {
  const { followingList } = useGetFollowingList();
  return (
    <div>
      {' '}
      api 없어서 빼두었습니당 followInformationTemplate사용하시면 똑같아여
    </div>
  );
};

export default Followers;
