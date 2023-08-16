import styled, { css } from 'styled-components';
import playerMotionBarSVG from '@/assets/images/playerMotionBar.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

`;

interface PlayerMotionBarIconProps{
    first: string;
    second: string;
    third: string;
}
//  "M5 64.998V26M51.503 65V5M28.252 64.999V44"

export const PlayerMotionBarIcon = styled(playerMotionBarSVG)<PlayerMotionBarIconProps>`
  ${({ theme, first, second, third }) => {
    const { colors } = theme;
    return `
      path:nth-child(1) {
        d: "M5 64.9984V${first}"
      }
      path:nth-child(2) {
        d: "M51.5034 64.9991V${second}"
      }
      path:nth-child(3) {
        d: "M28.2515 64.9989V${third}"
      }
    `;
  }}
`;
