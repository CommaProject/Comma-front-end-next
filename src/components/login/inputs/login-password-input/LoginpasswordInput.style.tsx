import styled, { css } from 'styled-components';

export const LoginPasswordInputStyle = styled.input`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      position: relative;
      width: 360px;
      height: 35px;

      border: 0.5px solid ${colors.grayscale.gray300};
      border-radius: 10px;

      display: block;

      margin: 7px auto 0;

      text-indent: 10px;
      &::placeholder {
        color: ${colors.grayscale.gray300};
        font-family: ${fonts.family.noto};
        font-weight: ${fonts.weight.regular};
        font-size: 12px;
        line-height: 12px;
      }

      &:focus {
        border: 0.5px solid ${colors.grayscale.gray300};
      }
    `;
  }}
`;
