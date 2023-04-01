import styled, { css } from 'styled-components';

interface ButtonStateProps {
  isActivate: boolean;
}

export const Wrapper = styled.div`
  width: 170px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  width: 170px;
  height: 80px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h2`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      text-align: center;
      font-size: 17px;
      font-weight: ${fonts.weight.bold};
    `;
  }}
`;

export const Button = styled.button<ButtonStateProps>`
  ${({ theme, isActivate }) => {
    const { fonts, colors } = theme;
    return css`
      width: 44px;
      height: 44px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 12px;
      font-weight: ${fonts.weight.bold};
      color: ${isActivate ? colors.grayscale.white : colors.grayscale.gray300};

      border-radius: 50%;
      border: 1px solid;
      border-color: ${isActivate
        ? colors.primary.main
        : colors.grayscale.gray300};
      background: ${isActivate ? colors.primary.main : colors.grayscale.white};
    `;
  }}
`;
