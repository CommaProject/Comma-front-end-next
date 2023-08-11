import styled, { css } from 'styled-components';


export const Wrapper = styled.div`
width:100%;
height:100%;
display: flex;
flex-direction: column;

`
export const TopBarBox =styled.div`
    width:100%;
    height: 28px;
    margin:20px 0;
    padding: 0 20px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`
export const NextButton = styled.button`
${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 28px;
      height: 15px;
      margin: 4.5px  5px;

      display: flex;
      justify-content: center;
      align-items: center;
      text-align:center;

      font-size: 15px;
      color: ${colors.primary.caption};
    `;
  }}

`

export const BigTimeBadge = styled.div`
${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 285px;
      height: 71px;
      margin :20px auto 10px;
      

      display:flex;
      align-items: center; 
      justify-content: space-evenly;
      
      color: ${colors.primary.main};
      font-family: ${fonts.family.pre};
      font-style: normal;
      font-weight: ${fonts.weight.bold};
      font-size: 24px;
      line-height: 18px;
      text-align: center;

      background: ${colors.grayscale.white};
      border-radius: 40px;
      
      box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);
    `;
  }};
`
export const TimePickerBox =styled.div`
  width:100%;
  margin: 60px 0 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const StartTimeDiv =styled.div`
`
export const DoneTimeDiv =styled.div`
`
export const TimeTitle =styled.div`
font-size: 18px;
margin-bottom:15px;

`
export const TimeText=styled.div`

`

export const MyPlaylistContainer = styled.div`

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
export const MyPlaylistBox =styled.div`

    width: 100%;
    margin: 25px 0 0 5px;

    display: flex;
    overflow-x: scroll;
    
`
export const PlaylistInfo = styled.div`
  
  width:81.9px;
  height:103px;
  margin:10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PlaylistTitle =styled.div`
${({ theme }) => {
    const {colors, fonts } = theme;
    return css`
      margin-top:10px;
      

      color: ${colors.grayscale.dark};
      font-family: ${fonts.family.pre};
      font-size: 12px;
      font-weight: ${fonts.weight.medium};
      line-height: 12px;
      `;
  }}

`
export const AlbumImg =styled.img`
  width: 90px;
  height: 90px;
  border-radius: 25%;
`
// 임시 지울예정