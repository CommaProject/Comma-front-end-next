import styled, { css } from 'styled-components';
import heartSVG from '@/assets/images/heart.svg';
import plusSVG from '@/assets/images/plus.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  align-items: center;
  bottom: 0;
  right: 0;
  display: flex;
  gap: 12px;
`;

export const addPlayListButton = styled(plusSVG)`
  ${({ theme }) => {
    const { colors } = theme;
    return `
    
  `;
  }}
`;

export interface likeButtonProps {
  isFavorite: boolean;
}

export const likeButton = styled(heartSVG)<likeButtonProps>`
  ${({ theme, isFavorite }) => {
    const { colors } = theme;
    return `
    path {
      fill:  ${isFavorite ? colors.primary.main : null}
    }
    `;
  }}
`;
