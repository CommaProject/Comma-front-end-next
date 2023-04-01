import styled from 'styled-components';
import PasswordVisibleSvg from '@/assets/images/passwordVisible.svg';
import PasswordInvisibleSvg from '@/assets/images/passwordInvisible.svg';

// SVG
export const NowPasswordVisibleIcon = styled(PasswordVisibleSvg)`
  position: absolute;
  top: 54.5px;
  right: 25px;

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
