import styled from 'styled-components';
import PasswordVisibleSvg from '@/assets/images/passwordVisible.svg';
import PasswordInvisibleSvg from '@/assets/images/passwordInvisible.svg';

export const Wrapper = styled.div`
  margin-bottom: 21px;

  position: relative;
`;

// SVG
export const NowPasswordVisibleIcon = styled(PasswordVisibleSvg)``;
export const NowPasswordInvisibleIcon = styled(PasswordInvisibleSvg)``;
