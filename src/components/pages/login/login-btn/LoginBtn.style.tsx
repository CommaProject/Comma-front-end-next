import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 58px;

  position: relative;
`;

export const Button = styled.button`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 360px;
      height: 35px;
      margin: 0 auto;

      display: flex;
      justify-content: center;
      align-items: center;

      left: 0;
      right: 0;

      color: ${colors.grayscale.white};
      font-size: 13px;
      font-family: ${fonts.family.noto};
      font-weight: ${fonts.weight.bold};
      line-height: 14px;

      background: ${colors.primary.main};
      border: 0.5px solid ${colors.grayscale.gray300};
      border-radius: 10px;
    `;
  }}
`;
