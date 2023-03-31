import styled, { css } from 'styled-components';
import CommaIcon from '@/assets/images/commaIcon.svg';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

export const Box = styled.div`
  height: 500px;

  position: relative;

  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 360px;
      height: 35px;

      margin: 0 auto;

      display: block;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 21px;
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

// SVG
export const MainIcon = styled(CommaIcon)`
  width: 153.49px;
  height: 124.99px;
  margin: 134px auto 85.01px;

  position: relative;

  display: block;
`;
