import styled, { css } from 'styled-components';
import PasswordVisibleSvg from '@/assets/images/passwordVisible.svg';
import PasswordInvisibleSvg from '@/assets/images/passwordInvisible.svg';

export const Wrapper = styled.div`
  height: 191px;

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
export const NowPasswordVisibleIcon = styled(PasswordVisibleSvg)`
  position: absolute;
  top: 54.2px;
  right: 25px;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
export const NowPasswordInvisibleIcon = styled(PasswordInvisibleSvg)`
  position: absolute;
  top: calc(
    54px - (4.43px / 2)
  ); // showPasswordSvg 와 HidePasswordSvg의 크기가 달라서 차이를 계산
  right: 25px;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
