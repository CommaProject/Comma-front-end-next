import styled, { css } from 'styled-components';
import ActivateAlarmSvg from '@/assets/images/activateAlarm.svg';
import DeactivateAlarmSvg from '@/assets/images/deactivateAlarm.svg';
import MovePlaylistSvg from '@/assets/images/movePlaylist.svg';

interface WrapperProps {
  isPlaylistSelected: boolean;
}

interface ButtonProps {
  isEditSelected: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isPlaylistSelected }) => {
    const { colors } = theme;
    return css`
      width: ${isPlaylistSelected ? 'calc(100% - 48px)' : '100%'};
      height: calc(81.9px + 2 * 8px);
      padding: 6px 8px 8px;

      display: flex;
      align-items: center;

      position: relative;
      left: ${isPlaylistSelected ? '48px' : 0};

      background-color: ${isPlaylistSelected
        ? colors.primary.main
        : colors.grayscale.white};
      border-radius: 19px 0 0 19px;
    `;
  }}
`;

export const Button = styled.button<ButtonProps>`
  ${({ theme, isEditSelected }) => {
    const { colors } = theme;
    return css`
      width: 18px;
      height: 18px;

      position: absolute;
      left: -33px;

      background-color: ${isEditSelected
        ? colors.grayscale.white
        : colors.primary.main};
      border: 2px solid ${colors.primary.main};
      border-radius: 50%;
    `;
  }}
`;

//SVG

export const MovePlaylistIcon = styled(MovePlaylistSvg)<WrapperProps>`
  ${({ isPlaylistSelected }) => {
    return css`
      display: ${isPlaylistSelected ? '' : 'none'};

      position: absolute;
      right: 15px;

      cursor: pointer;
    `;
  }}
`;

// SVG
export const ActivateAlarmIcon = styled(ActivateAlarmSvg)`
  position: absolute;
  right: 15px;
  bottom: 8px;
`;

export const DeactivateAlarmIcon = styled(DeactivateAlarmSvg)`
  position: absolute;
  right: 15px;
  bottom: 8px;
`;
