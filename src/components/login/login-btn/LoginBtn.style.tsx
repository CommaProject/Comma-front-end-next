import styled, { css } from 'styled-components';

export const LoginBtnStyle = styled.button`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      position: relative;
      width: 360px;
      height: 35px;
      left: 0;
      right: 0;
      margin: 0 auto;

      display: flex;
      justify-content: center;
      align-items: center;

      background: ${colors.primary.main};
      border: 0.5px solid ${colors.grayscale.gray300};
      border-radius: 10px;

      color: ${colors.grayscale.white};
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.bold};
      font-size: 13px;
      line-height: 14px;
    `;
  }}
`;
