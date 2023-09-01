import styled, { css } from 'styled-components';
import addPlaylist from '@/assets/images/addPlaylist.svg';
import EmptyProfile from '@/assets/images/profileImage.svg';
import Setting from '@/assets/images/setting.svg';
export const Wrapper = styled.div`
  width: 390px;
  height: calc(100vh - 79px);
  display: flex;
  flex-direction: column;
  padding-left: 15px;

  position: fixed; /* Fix the container to the top */
  top: 0;

  border: 1px solid red;
`;

export const TopBar = styled.div`
  width: 100%;
  height: 28px;

  margin: 20px 0px 30px;
  padding: 0 20px;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const SettingButton = styled(Setting)``;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled(EmptyProfile)`
  width: 70px;
  height: 70px;
  margin: 10px;
`;
export const FollowInfo = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      width: 186px;
      height: 76px;
      margin: 5px;
      padding: 10px 25px;
      display: flex;
      flex-direction: column;
      align-items: center;

      color: ${colors.grayscale.dark};
      font-size: 15px;
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.bold};
      line-height: 12px;

      border-radius: 34px;

      box-shadow: 1px 0px 10px 1px rgba(0, 0, 0, 0.25);
    `;
  }}
`;

export const FollowContainer = styled.div`
  
padding-top: 5px;
display: flex;  
  align-items:center;

`;
export const FollowNum = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      width: 72px;
      height: 48px;

      display: flex;
      flex-direction: column;
      justify-content: center;
     
      color: ${colors.grayscale.dark};
      font-size: 15px;
      font-family: ${fonts.family.pre};
      font-weight: ${fonts.weight.medium};
      line-height: 15px;
      text-align:center;
    `;
  }}
`;

export const Title = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      margin: 10px 0px;
      color: ${colors.grayscale.dark};
      font-size: 17px;
      font-family: ${fonts.family.pre};
      font-weight: ${fonts.weight.bold};
      line-height: 17px;

      border-radius: 34px;
    `;
  }}
`;
export const ListContainer = styled.div`
  margin: 10px 0px 15px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const MyPlaylist = styled.div``;
export const Archive = styled.div``;
export const FavoriteSong = styled.div``;
export const AddButton = styled(addPlaylist)`
  width: 24px;
  height: 24px;
  margin: 10px;
`;

export const FavoriteSinger = styled.div``;

export const Calender = styled.div``;
export const Text = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      margin-bottom: 5px;
      color: ${colors.grayscale.gray500};
      font-size: 12px;
      font-family: ${fonts.family.pre};
      font-weight: ${fonts.weight.medium};
      line-height: 12px;
    `;
  }}
`;
