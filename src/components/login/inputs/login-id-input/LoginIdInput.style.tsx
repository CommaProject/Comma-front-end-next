import styled, { css } from 'styled-components';

export const LoginIdInputStyle = styled.input`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      position: relative;
      width: 360px;
      height: 35px;

      border: 0.5px solid #9c9c9c;
      border-radius: 10px;

      display: block;
      box-sizing: border-box;

      margin: 0 auto;

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
