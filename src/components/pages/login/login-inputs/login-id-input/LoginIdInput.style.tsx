import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 360px;
      height: 35px;
      margin: 0 auto;

      display: block;

      border: 0.5px solid ${colors.grayscale.gray300};
      border-radius: 10px;
      text-indent: 10px;

      &::placeholder {
        color: ${colors.grayscale.gray300};
        font-size: 12px;
        font-family: ${fonts.family.noto};
        font-weight: ${fonts.weight.regular};
        line-height: 12px;
      }

      &:focus {
        border: 0.5px solid ${colors.grayscale.gray300};
      }
    `;
  }}
`;
