import styled, { css } from 'styled-components';
import Image from 'next/image';

interface ImageItemProps {
  num: number;
  zIndex: number;
}
export const Img = styled(Image)`
  background: rgba(15, 15, 15, 0.4);
  background-blend-mode: multiply;
  border-radius: 7px;
  
`;

export const Wrapper = styled.div`
  width: 81.9px;
  height: 32.76px;

  position: absolute;
  bottom: 8px;
`;

export const ImageItem = styled.div<ImageItemProps>`
  ${({ num, zIndex }) => css`
    width: 32.76px;
    height: 32.76px;

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    &:nth-child(n) {
      left: calc(58px - ${num} * 8.86px);

      z-index: ${zIndex};
    }
  `}
`;

export const Span = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      position: absolute;

      color: ${colors.grayscale.white};
      font-family: ${fonts.family.pre};
      font-style: normal;
      font-weight: ${fonts.weight.bold};
      font-size: 15px;
      line-height: 15px;

      z-index: 100;
    `;
  }};
`;
