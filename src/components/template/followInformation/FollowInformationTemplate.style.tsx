import styled, { css } from 'styled-components';
import PrevIcon from '@/assets/images/prevArrow.svg';
import smallProfileImg from '@/assets/images/smallProfileImg.svg';

export const Wrapper = styled.div`
  height: 100%;
  
`;

export const TopBar = styled.div`
  ${({ theme }) => {
    const { colors, fonts } = theme;
    return css`
      width: 100%;
      height: 28px;

      margin: 20px 0px 30px;
      padding: 0 20px;

      display: flex;
      flex-direction: row;
      justify-content: flex-start;

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
  margin-right: 38%;
`;

export const Container = styled.div`
margin-top:25px;

`;
