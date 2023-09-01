import styled, { css } from 'styled-components';


export const Container = styled.div`
width: 90px;
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
    position: absolute;
    top: 60px;
    right:0px;


    font-size:12px;
    line-height: 12px;
    font-weight: ${ fonts.weight.bold};
    color: ${colors.grayscale.white};
    background-color: ${colors.grayscale.gray300};
    border-radius: 19px;
    
   
  `;
}}


`