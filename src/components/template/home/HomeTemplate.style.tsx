import styled, { css } from 'styled-components';
import CommaIcon from '@/assets/images/commaIconWithoutText.svg';
import addPlaylist from '@/assets/images/addPlaylist.svg';

export const Container = styled.div`
  width: 100%;
  //height: 100% ;
  display:flex;
  flex-direction: column;
  
  position: absolute;
  top: 0;
  left: 0;

`
export const SuggestBox = styled.div`
  width:100%;
  height: 90%;
  display:flex;
  flex-direction: column;
  align-items: flex-end;
  

`
export const SuggestAddPlaylist = styled.div`
${({ theme }) => {
  const { fonts, colors } = theme;
  return css`
    width: 100%;
    height: 90%;
    margin-bottom:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;

    color: ${colors.grayscale.dark};
    font-size: 15px;
    font-family: ${fonts.family.noto};
    font-weight: ${fonts.weight.medium};
    line-height: 12px;

    
      
  `;
}}
 
`

export const ShowPlaylist = styled.div`
display:flex;
justify-content: flex-start;
flex-direction: column;

`

export const EditDiv =styled.div`
  
  display:flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  


`

export const AddPlaylistButton = styled(addPlaylist)`
  
  margin: 10px 20px 10px 10px;
  
  
  
`;





export const Button = styled.button`
${({ theme }) => {
  const { colors, fonts } = theme;
  return css`
    width: 38px;
    height: 12px;
    margin: 5px 5px 5px 5px;


    color: ${colors.grayscale.dark};
    font-size: 12px;
    font-family: ${fonts.family.noto};
    font-weight: ${fonts.weight.medium};
    line-height: 12px;

    
  `;
}}
`


// SVG
export const MainIcon = styled(CommaIcon)`
  
  margin: 80px auto 85.01px;
  margin-to
  position: relative;

  display: flex;
  justify-content: center;
`;
