import React, { useState } from 'react'; // React를 추가하고 useState 가져오기
import { useRouter } from 'next/router';
import { FollowUserInfoType } from '@/constants/types/followTypes';
import * as style from '~/src/components/template/followInformation/FollowInformationTemplate.style';
import { RoundInput } from '../../common/round-input/round-input-not-read-only-ver/RoundInput';
import { UserInfo } from '../../pages/followInfo/user-Info/UserInfo';

interface FollowInformationTemplateProps {
  userList: FollowUserInfoType[];
}

export const FollowInformationTemplate = ({
  userList,
}: FollowInformationTemplateProps) => {
  const onClickEraseButton = () => {};
  const onClickRoundInput = () => {};
  const router = useRouter();
  const [nowTouchedUser, setNowTouchedUser] = useState(-1);
  const onClickPrevButton = () => {
    router.back();
  };

  const [search, setSearch] = useState('');
  const [searchedUserData, setSearchUserData] = useState<FollowUserInfoType[]>(
    [],
  );

  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchText = e.target.value;
    setSearch(searchText);
    setSearchUserData(
      searchText
        ? userList.filter((item) => item.userNickname.includes(searchText))
        : [],
    );
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
        onChange={onChangeSearchText}
      />
      <style.Container>
        {userList.map((user: FollowUserInfoType) => (
          <UserInfo
            nowTouchedUser={nowTouchedUser}
            setNowTouchedUser={setNowTouchedUser}
            key={user.userId}
            user={user}
          />
        ))}
      </style.Container>
    </style.Wrapper>
  );
};
