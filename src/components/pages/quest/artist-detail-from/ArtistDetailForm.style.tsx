import styled, { css } from 'styled-components';
import heartSVG from '@/assets/images/heart.svg';

export interface LikeButtonProps {
  isLike: boolean;
}

export const Wrapper = styled.div`
  height: 100%;
  // display: flex;
  // flex-wrap: wrap;
  justify-content: center;
`;

export const AvatarBox = styled.div`
  text-align: center;
  margin: 150px;
`;

export const AvatartName = styled.text`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      font-family: ${fonts.family.noto}
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
    `;
  }}
`;

export const AvatarGroupName = styled.text`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      color: ${colors.grayscale.gray500};
      font-family: ${fonts.family.noto}
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
    `;
  }}
`;

export const LikeButton = styled(heartSVG)<LikeButtonProps>`
  ${({ theme, isLike }) => {
    const { colors } = theme;
    return `
    path {
      fill:  ${isLike ? colors.primary.main : null}
    }
    `;
  }}
`;
