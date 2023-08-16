import styled, { css } from 'styled-components';
import playerMotionBarSVG from '@/assets/images/playerMotionBar.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

interface PlayerMotionBarIconProps {
  first: number;
  second: number;
  third: number;
}
//  "M5 64.998V26M51.503 65V5M28.252 64.999V44"

export const PlayerMotionBarIcon = styled(
  playerMotionBarSVG,
)<PlayerMotionBarIconProps>`
  ${({ theme, first, second, third }) => {
    const { colors } = theme;
    return `
    path:nth-child(1) {
      transform: translateY(${64 - first});
    }
    path:nth-child(2) {
      transform: translateY(${64 - second});
    }
    path:nth-child(3) {
      transform: translateY(${64 - third});
    }
  `;
  }}
`;
