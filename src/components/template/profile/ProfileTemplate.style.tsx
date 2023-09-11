import styled, { css } from 'styled-components';
import addPlaylist from '@/assets/images/addPlaylist.svg';
import EmptyProfile from '@/assets/images/profileImage.svg';
import Setting from '@/assets/images/setting.svg';
import modalSlide from '@/assets/images/modalSlideImg.svg';
import modalProfileImg from '@/assets/images/modalProfile.svg';
export const Wrapper = styled.div`
  width: 390px;

  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 15px;

  overflow: scroll;

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
interface FollowButtonProps {
  isFollow: boolean;
}
export const FollowButton = styled.div<FollowButtonProps>`
  ${({ theme, isFollow }) => {
    const { fonts, colors } = theme;
    return css`
      width: 71px;
      height: 30px;
      margin: 5px;
      border-radius: 30px;
      background-color: ${isFollow
        ? colors.grayscale.gray300
        : colors.primary.main};
      color: ${colors.grayscale.white};
      font-size: 15px;
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.regular};
      line-height: 30px;
      text-align: center;
    `;
  }}
`;
export const FollowInfo = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      width: 186px;
      height: 76px;
      margin: 15px;
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
  align-items: center;
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
      text-align: center;
      cursor: pointer;
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
      cursor: pointer;
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
export const ModalContainer = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
     
      z-index: 80;
    `;
  }}
`;

export const Modal = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      height: 130px;

      position: absolute;
      bottom: 86px;
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-bottom: 5px;
      background-color: ${colors.grayscale.gray500};
      border-radius: 20px 20px 0 0;
      z-index: 70;
    `;
  }}
`;

export const ModalText = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 100%;
      height: 130px;
      margin-left: 10px;
      display: flex;

      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      color: ${colors.grayscale.white};
      font-size: 15px;
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.regular};
      line-height: 15px;
    `;
  }}
`;
export const Button = styled(modalSlide)`
  margin: 10px;
`;
export const Img = styled(modalProfileImg)`
  margin: 5px 15px;
`;
