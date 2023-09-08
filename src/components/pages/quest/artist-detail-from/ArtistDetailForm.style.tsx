import styled, { css } from 'styled-components';
import heartSVG from '@/assets/images/bigHeart.svg';

export interface LikeButtonProps {
  isLike: boolean;
}

export const Wrapper = styled.div`
  height: 100%;
 
`;

export const AvatarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
`;

export const AvatartName = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      font-family: ${fonts.family.noto}
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
      margin-top: 5px;
      margin-bottom: 13px;
    `;
  }}
`;

export const AvatarGroupName = styled.div`
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
    margin-bottom: 16px;
    `;
  }}
`;
