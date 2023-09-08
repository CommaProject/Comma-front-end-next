import  FollowInfomationTemplate  from '@/components/template/followInfomation';
import { useGetFollowingList } from '@/apis/followInfo';

const Following = () => {
    const {followingList} = useGetFollowingList();
    return(
     <FollowInfomationTemplate
     userList={followingList}/>
    )
}

export default Following;