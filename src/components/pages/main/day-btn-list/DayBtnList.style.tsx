import styled, { css } from 'styled-components';

interface ButtonStateProps {
  isActivate: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 32px;
  padding: 0 23px 0 23px;

  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button<ButtonStateProps>`
  ${({ theme, isActivate }) => {
    const { fonts, colors } = theme;
    return css`
      width: 32px;
      height: 32px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 12px;
      font-weight: ${fonts.weight.bold};
      color: ${isActivate ? colors.grayscale.white : colors.grayscale.gray300};

      border-radius: 50%;
      border: 1px solid ${colors.grayscale.gray300};
      border-width: 1;
      background: ${isActivate ? colors.primary.main : colors.grayscale.white};

      &:focus {
        border: 1px solid
          ${isActivate ? colors.primary.main : colors.grayscale.gray300};
      }
    `;
  }}
`;
