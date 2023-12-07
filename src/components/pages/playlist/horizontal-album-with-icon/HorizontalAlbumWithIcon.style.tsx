import styled, { css } from 'styled-components';
import MoveSVG from '@/assets/images/movePlaylist.svg';
import plusSVG from '@/assets/images/plus.svg';

interface WrapperProps {
  isTrackSelected: boolean;
  isEditMode: boolean;
}
interface TrackBoxProps {
  isTrackSelected: boolean;
  isEditMode: boolean;
}
interface ButtonProps {
  isTrackSelected: boolean;
}
interface ImageBoxProps {
  isEditMode: boolean;
}

export const AlbumBox = styled.div<WrapperProps>`
${({ theme, isTrackSelected, isEditMode }) => {
  const { colors } = theme;
  return css`
    position: relative;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    width: 100%;

    background-color: ${isTrackSelected && isEditMode
      ? colors.primary.main
      : colors.grayscale.white};
    border-radius: 19px 0 0 19px;
  `;
}})}`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  align-items: center;
  bottom: 0;
  right: 0;
  display: flex;
  gap: 12px;
`;

export const SelectButton = styled.button<ButtonProps>`
  ${({ theme, isTrackSelected }) => {
    const { colors } = theme;
    return css`
      width: 18px;
      height: 18px;
      margin-right: 15px;
      left: -50px;

      background-color: ${isTrackSelected
        ? colors.primary.main
        : colors.grayscale.white};

      border: 2px solid ${colors.primary.main};
      border-radius: 50%;
    `;
  }}
`;

export const MoveButton = styled(MoveSVG)`
  ${({ theme }) => css`
    position: absolute;
    right: 15px;
    bottom: 40px;
    cursor: pointer;
  `}
`;
