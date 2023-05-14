import styled, { css } from 'styled-components';

interface ButtonStateProps {
  isBig: boolean;
  isSelected: boolean;
  left: number;
  bottom: number;
}

export const Wrapper = styled.div`
  height: 305px;
  width: 426px;
  margin-top: 55px;

  display: inline-block;
  flex-direction: row-reverse;
  position: relative;
`;

export const Box = styled.div`
  height: 305px;
  width: 390px;
`;

export const Button = styled.button<ButtonStateProps>`
  ${({ theme, isBig, isSelected, left, bottom }) => {
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

      background-color: ${isSelected
        ? colors.primary.main
        : colors.grayscale.gray300};
      border-radius: 50%;
    `;
  }}
`;
