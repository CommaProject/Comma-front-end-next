import * as style from '@/components/template/followInfomation/FollowInfomationTemplate.style';
import { RoundInput } from '../../common/round-input/round-input-not-read-only-ver/RoundInput';
import { FollowUserInfoType } from '~/src/constants/types/followTypes';
import { useRouter } from 'next/router';
import { UserInfo } from '../../pages/followInfo/user-Info/UserInfo';
import { useState } from 'react';

interface FollowInfomationTemplateProps {
  userList: FollowUserInfoType[];
}
export const FollowInfomationTemplate = ({
  userList,
}: FollowInfomationTemplateProps) => {
  const onClickEraseButton = () => {};
  const onClickRoundInput = () => {};
  const router = useRouter();
  const onClickPrevButton = () => {
    router.back();
    console.log(nowTouchedUser)
  };
  const [nowTouchedUser, setNowTouchedUser] = useState(-1);
const [search, setSearch] = useState('');
const [searchedUserData,setSearchUserData] = useState<FollowUserInfoType[]>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
    setSearchUserData(userList.filter(item => item.userNickname.includes(e.target.value)))
  };

  return (
    <style.Wrapper>
      <style.TopBar>
        <style.PrevButton onClick={onClickPrevButton} />
        Following
      </style.TopBar>

      <RoundInput
        completedTextValue=""
        onClickRoundInput={onClickRoundInput}
        handleEraseIconClick={onClickEraseButton}
        isCompletedSearch={false}
        isHidden={false}
        onChange={onChange}
      />
      <style.Container>
        {userList &&
        !search?
          userList.map((user: FollowUserInfoType) => (
            <UserInfo 
            nowTouchedUser={nowTouchedUser}
          setNowTouchedUser= {setNowTouchedUser}
             key={user.userId} user={user} />
          ))
        :
        searchedUserData ?searchedUserData.map((user: FollowUserInfoType) => (
          <UserInfo 
          nowTouchedUser={nowTouchedUser}
        setNowTouchedUser= {setNowTouchedUser}
           key={user.userId} user={user} />
        )) : ""}
      </style.Container>
    </style.Wrapper>
  );
};
