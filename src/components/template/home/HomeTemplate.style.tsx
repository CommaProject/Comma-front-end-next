import styled, { css } from 'styled-components';
import CommaIcon from '@/assets/images/commaIconWithoutText.svg';
import ArrowIcon from '@/assets/images/arrow.svg';
import addPlaylist from '@/assets/images/addPlaylist.svg';
import deletePlaylist from '@/assets/images/removeSongAndList.svg';

interface ButtonProps {
  isEditMode: boolean;
}
interface ContainerProps {
  isPlaylistAvailable: boolean;
}
export const Container = styled.div<ContainerProps>`
  ${({ theme, isPlaylistAvailable }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      position: relative;

      color: ${isPlaylistAvailable
        ? colors.grayscale.dark
        : colors.grayscale.white};
      background-color: ${!isPlaylistAvailable
        ? colors.grayscale.dark
        : colors.grayscale.white};
      opacity: ${!isPlaylistAvailable ? 0.7 : 1.0};
    `;
  }}
`;
export const Box = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled.div`
  margin-top: 350px;
`;
export const Arrow = styled(ArrowIcon)`
  position: absolute;
  left: 220px;
  bottom: 5px;
  display: flex;
  justify-content: center;
`;

export const SuggestAddPlaylist = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      //width: 100%;
      //height: 90%;
      margin-top: 95%;

      position: absolute;

      bottom: 10%;

      text-align: center;

      color: ${colors.grayscale.dark};
      font-size: 15px;
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.medium};
      line-height: 12px;
    `;
  }}
`;

export const ShowPlaylist = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const EditDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

export const AddPlaylistButton = styled(addPlaylist)`
  margin-bottom: 20px;
  margin-left: 332px;
  position: sticky;
`;

export const DeletePlaylistButton = styled(deletePlaylist)`
  margin-bottom: 20px;
  margin-left: 332px;
  position: sticky;
`;

export const Button = styled.button<ButtonProps>`
  ${({ theme, isEditMode }) => {
    const { colors, fonts } = theme;
    return css`
      width: 38px;
      height: 12px;
      margin: 5px 5px 5px 5px;

      color: ${!isEditMode ? colors.grayscale.dark : colors.primary.caption};
      font-size: 12px;
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.medium};
      line-height: 12px;
    `;
  }}
`;

// SVG
export const MainIcon = styled(CommaIcon)`
  
  margin: 80px auto 85.01px;
  margin-to
  position: relative;

  display: flex;
  justify-content: center;
`;
