import styled, { css } from 'styled-components';
import PrevIcon from '@/assets/images/prevArrow.svg';
import SettingIcon from '@/assets/images/setting.svg';
import addPlaylist from '@/assets/images/plus.svg';
import deletePlaylist from '@/assets/images/removeSongAndList.svg';

export const Wrapper = styled.div`
  width: 390px;
  height: calc(100vh - 79px);

  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
${({ theme }) => {
    const { colors,fonts } = theme;
    return css`
    width:100%;
    height: 28px;

    margin:20px 0px 30px;
    padding: 0 20px;

    display: flex;
    flex-direction:row;
    justify-content: space-between;

    color: ${colors.grayscale.dark};
    font-family: ${fonts.family.noto};
    font-size: 17px;
    font-weight: ${fonts.weight.bold};
    line-height: 17px;
    text-align: center;
    
    `;
  }}
  `;
  
  
export const PrevButton = styled(PrevIcon)`

`
export const SettingButton = styled(SettingIcon)`

`
export const PlaylistContainer = styled.div`

`

export const AddPlaylistButton = styled(addPlaylist)`
  
  margin: 10px 20px 10px 10px;
  position: fixed;
  top:82%;
  right: 28%;  
  
  
`;
export const DeletePlaylistButton = styled(deletePlaylist)`

  margin: 10px 20px 10px 10px;
  position: fixed;
  top:80%;
  left: 80%;  

`
