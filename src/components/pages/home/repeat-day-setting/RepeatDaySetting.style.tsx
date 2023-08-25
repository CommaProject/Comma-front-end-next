import styled, { css } from 'styled-components';

// interface DayProps {
//   day: string;
//   selectedDays : string[],
// }


export const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 50px ;
    display: flex;
    flex-direction:column;

`

export const Text = styled.div`
${({ theme }) => {
    const {colors, fonts } = theme;
    return css`
      
      margin-left:20px;

      color: ${colors.grayscale.dark};
      font-family: ${fonts.family.pre};
      font-size: 12px;
      font-weight: ${fonts.weight.bold};
      line-height: 12px;
      `;
  }}

`
export const Box = styled.div`
margin-top:25px;
display: flex;
flex-direction:row;
justify-content: space-evenly;
`
export const DayDiv = styled.div`
${({ theme}) => {
    const {colors, fonts } = theme;
    return css`
      width:32px;
      height:32px;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${colors.grayscale.dark};
      font-family: ${fonts.family.pre};
      font-size: 12px;
      font-weight: ${fonts.weight.bold};
      line-height: 12px;
      text-align:center;
      

      border: 0.7px solid ${colors.grayscale.gray500};
      border-radius: 50%;
      cursor: pointer;
      
      `;
  }}

`