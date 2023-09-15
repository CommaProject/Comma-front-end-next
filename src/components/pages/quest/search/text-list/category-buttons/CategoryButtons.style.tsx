import styled, { css } from 'styled-components';

interface ButtonStateProps {
  isActivate: boolean;
}

export const ButtonBox = styled.div`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
    margin-top: 10px;
      display: flex;
      gap: 12px;
      top: 0;
      background-color: ${colors.grayscale.dark}
      z-index: 999;
      height: 33px;
    `;
  }}
`;

export const Button = styled.button<ButtonStateProps>`
  ${({ theme, isActivate }) => {
    const { fonts, colors } = theme;
    return css`
      width: 52px;
      height: 20px;

      font-size: 12px;
      line-height: 12px;
      font-weight: ${isActivate ? fonts.weight.bold : fonts.weight.medium};
      color: ${isActivate ? colors.grayscale.white : colors.grayscale.gray300};

      border: ${`1px solid ${colors.grayscale.gray300}`};
      border-radius: 50px;
      background: ${isActivate && colors.grayscale.dark};
      box-shadow: ${isActivate && '0px 2px 4px rgba(0, 0, 0, 0.25)'};
    `;
  }}
`;
