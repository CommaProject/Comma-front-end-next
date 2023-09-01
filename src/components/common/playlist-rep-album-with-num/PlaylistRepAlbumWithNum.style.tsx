import styled, { css } from 'styled-components';


export const Container = styled.div`
width: 81.9px;
position: relative;
margin-right: 15px;
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
    top:-22px;
    left:49px;


    font-size:12px;
    line-height: 12px;
    font-weight: ${ fonts.weight.bold};
    color: ${colors.grayscale.white};
    background-color: ${colors.grayscale.gray300};
    border-radius: 19px;
    
   
  `;
}}


`