import styled, { css } from 'styled-components';

interface PlaylistTextsStyleProps {
  isFontNotoElsePre: boolean;
  isFontBoldElseRegular: boolean;
  isFontsize15Else12: boolean;
}

interface WrapperProps {
  isPlaylistSelected: boolean;
  isEditMode: boolean; 
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isPlaylistSelected,isEditMode }) => {
    const { colors } = theme;
    return css`
      width:200px;
      margin-left: 17.1px;
      position: relative;
      

      & > p {
        color: ${isPlaylistSelected
          ? colors.grayscale.white
          : colors.grayscale.dark};
  
        :first-child {
          color: ${isPlaylistSelected
            ? colors.grayscale.white
            : colors.primary.main};
        }
      }
    `;
  }}
`;

export const Text = styled.p<PlaylistTextsStyleProps>`
  ${({
    theme,
    isFontNotoElsePre,
    isFontBoldElseRegular,
    isFontsize15Else12,
  }) => {
    const { fonts } = theme;
    return css`
      margin: 0;

      font-family: ${isFontNotoElsePre ? fonts.family.noto : fonts.family.pre};
      font-weight: ${isFontBoldElseRegular
        ? fonts.weight.bold
        : fonts.weight.regular};
      font-size: ${isFontsize15Else12 ? '15px' : '12px'};
      line-height: ${isFontsize15Else12 ? '15px' : '12px'};

      &:first-child {
        margin-bottom: 14px;
      }
      &:nth-child(2) {
        margin-bottom: 8px;
      }
    `;
  }}
`;
