import styled, { css } from 'styled-components';
import smallProfileImg from '@/assets/images/smallProfileImg.svg';
import minusImg from '@/assets/images/minusImg.svg';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  padding: 10px 5px 10px 5px;

  display: flex;
  flex-direction: row;

  align-items: center;
`;
export const UserImg = styled(smallProfileImg)`
  svg {
    viewbox: 0 0 1000 1000;
  }
  margin: 0px 10px;
`;
interface TextProps{
  isProfileImgHidden: boolean
}
export const Text = styled.div<TextProps>`
  ${({ theme,isProfileImgHidden }) => {
    const { colors, fonts } = theme;
    return css`
      margin: ${isProfileImgHidden? "0 20px":"0 " };
      color: ${colors.grayscale.dark};
      font-family: ${fonts.family.pre};
      font-size: 15px;
      font-weight: ${fonts.weight.bold};
      line-height: 15px;
      text-align: center;
    `;
  }}
`;

export const SmallText = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      margin-left: 15px;

      color: ${colors.primary.main};
      font-family: ${fonts.family.pre};
      font-size: 12px;
      font-weight: ${fonts.weight.medium};
      line-height: 12px;
      text-align: center;
    `;
  }}
`;
export const Button = styled.div`
  ${({ theme }) => {
    const { colors} = theme;
    return css`
      width: 56px;
      height: 56px;
      position:absolute;
      right:0px;

      display:flex;
      align-items: center;
      justify-content:center;
      background-color: ${colors.primary.main};
      
      
    `;
  }}
`;
export const Img = styled(minusImg)`

`;