import styled, { css } from 'styled-components';
import PrevIcon from '@/assets/images/prevArrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Wrapper = styled.div`
  width: 390px;
  height: calc(100vh - 79px);

  // display: flex;
  // flex-direction: column;
  // border: 1px solid pink;
  
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

export const CustomSwiper = styled(Swiper)`
  height: 100%;
`;

export const Slide = styled(SwiperSlide)`
  height: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
`;
