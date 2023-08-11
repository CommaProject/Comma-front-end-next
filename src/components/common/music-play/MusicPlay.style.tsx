import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      width: 100%; //390px
      height: 52px;
    
      display:flex;
      flex-direction:row;
      justify-content: center;
      align-items: center;
      background-color: ${colors.primary.main};
      background: linear-gradient( to top, ${colors.grayscale.white}, ${colors.primary.main} );
    
      `;
  }}
`;

export const PlayButton = styled.button`
${({ theme }) => {
    const { colors } = theme;
    return css`
    width: 18px;
    height: 23px;
    margin: 5px;


    border: 1px solid white;
    `;
  }}

`
export const PauseButton = styled.button`
${({ theme }) => {
    const { colors } = theme;
    return css`
    width: 18px;
    height: 23px;


    border: 1px solid black;
    `;
  }}

`

export const MusicPlayInfo = styled.div`
${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
    width:80%;
    margin-left: 15px;
    


    line-height: 12px;


    

    
    


    `;
  }}

`
export const ProgressBar = styled.input`
${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
    width: 100%;
    height: 2px;

    border:none;

    ::-webkit-slider-runnable-track{
        color:pink;
    }
     
    
    `;
  }}

`
export const Time = styled.div`
${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
    margin-top:5px;

    display:flex;
    justify-content: space-between;
    
    font-size: 12px;
    color: ${colors.grayscale.gray500};
    
    `;
  }}

`
export const CurrentTime = styled.div`
${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
    
    
    
    `;
  }}
`
  export const DurationTime = styled.div`
${({ theme }) => {
    const { fonts, colors } = theme;
    return css`

    
    
    `;
  }}

`