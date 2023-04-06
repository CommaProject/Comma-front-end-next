import styled, { css } from 'styled-components';

interface ButtonSizeProps {
  isBig: boolean;
  left: number;
  bottom: number;
}

export const Wrapper = styled.div`
  height: 305px;
  width: 426px;
  margin-top: 55px;

  display: inline-block;
  position: relative;
`;

export const Box = styled.div`
  height: 305px;
  width: 390px;
`;

export const Button = styled.button<ButtonSizeProps>`
  ${({ theme, isBig, left, bottom }) => {
    const { fonts, colors } = theme;
    return css`
      width: ${isBig ? '114px' : '80px'};
      height: ${isBig ? '114px' : '80px'};
      left: ${left}px;
      bottom: ${bottom}px;

      position: absolute;

      color: ${colors.grayscale.white};
      font-weight: ${fonts.weight.bold};
      font-size: 12px;
      line-height: 12px;

      background-color: ${colors.primary.main};
      border-radius: 50%;
    `;
  }}
`;
