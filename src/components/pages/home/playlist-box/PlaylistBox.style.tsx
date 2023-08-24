import styled, { css } from 'styled-components';
import ActivateAlarmSvg from '@/assets/images/activateAlarm.svg';
import DeactivateAlarmSvg from '@/assets/images/deactivateAlarm.svg';
import MovePlaylistSvg from '@/assets/images/movePlaylist.svg';

interface WrapperProps {
  isPlaylistSelected: boolean;
}

interface PlaylistInfoBoxProps {
  isPlaylistSelected: boolean;
  isEditMode: boolean;
}
interface ButtonProps {
  isPlaylistSelected: boolean;
}
interface InmageBoxProps {
  isEditMode :boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isPlaylistSelected }) => {
    return css`
      // width: ${isPlaylistSelected ? 'calc(100% - 48px)' : '100%'};
      // height: calc(81.9px + 2 * 8px);
      margin-bottom :43px;
      padding-left:15px;

      display: flex;
      flex-direction: column;
      position: relative;
      


    `;
  }}
`;

export const PlaylistInfoBox = styled.div<PlaylistInfoBoxProps>`
${({ theme, isPlaylistSelected, isEditMode }) => {
  const { colors } = theme;
  return css`
  
    width:100%;
    width: ${isEditMode ? 'calc(100% - 50px)': '100%'};
    height: calc(81.9px + 2 * 8px);
    padding: 6px 8px 8px;
    

    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    left: ${isEditMode ? '50px' : 0};

    background-color: ${isPlaylistSelected && isEditMode
      ? colors.primary.main
      : colors.grayscale.white};
    border-radius: 19px 0 0 19px;
    
   
  `;
}}


`
export const ImagesBox =styled.div<InmageBoxProps>`
${({ theme, isEditMode }) => {
  return css`

  width: 81.9px;
  position: relative;
  // left: ${isEditMode ? '-34px' : 0};
  `;
}}
  
`
export const TrackNumInfo = styled.div`
${({ theme}) => {
  const { colors,fonts } = theme;
  return css`
    width:30px;

    display:flex;
    align-items: center;
    justify-content:center;
    position: relative;
    top:-26px;
    left:49px;


    font-size:12px;
    line-height: 12px;
    font-weight: ${ fonts.weight.bold};
    color: ${colors.grayscale.white};
    background-color: ${colors.grayscale.gray300};
    border-radius: 19px;
    border: 1px solid pink;
   
  `;
}}


`
export const Button = styled.button<ButtonProps>`
${({ theme, isPlaylistSelected }) => {
  const { colors } = theme;
  return css`
    width: 18px;
    height: 18px;
    
    position: relative;
    left:-50px;

    background-color: ${isPlaylistSelected? colors.primary.main: colors.grayscale.white};
    
    border: 2px solid ${colors.primary.main};
    border-radius: 50%;
  `;
}}
`;


export const MovePlaylistIcon = styled(MovePlaylistSvg)<WrapperProps>`
    ${({ isPlaylistSelected }) => css`
    display: ${isPlaylistSelected ? '' : 'none'};
    position: absolute;
    right: 15px;
    cursor: pointer;
    `}
`;

// SVG
export const ActivateAlarmIcon = styled(ActivateAlarmSvg)`
  margin:10px;

  position: absolute;
  right: 15px;
  bottom: 8px;
  
`;

export const DeactivateAlarmIcon = styled(DeactivateAlarmSvg)`
margin:10px;

position: absolute;
  right: 15px;
  bottom: 8px;
  
`;
