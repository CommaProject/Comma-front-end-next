import styled, { css } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

interface SlideStateProps {
  isActivate: boolean;
}

export const Wrapper = styled.div`
  width: 249px;
  height: 85px;

  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  ${({ theme }) => {
    const { fonts } = theme;
    return css`
      width: 80px;
      height: 85px;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      font-size: 15px;
      font-weight: ${fonts.weight.bold};
    `;
  }}
`;

export const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Slide = styled.div<SlideStateProps>`
  ${({ theme, isActivate }) => {
    const { colors } = theme;
    return css`
      height: 21px;
      width: 53px;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${isActivate ? colors.grayscale.white : colors.grayscale.gray300};

      background: ${isActivate ? colors.primary.main : colors.grayscale.white};
      border-radius: 20px;
      
      cursor: pointer;
    `;
  }}
`;

export const Text = styled.div`
  ${({ theme }) => {
    const { fonts, colors } = theme;
    return css`
      width: 6px;

      text-align: center;

      font-size: 17px;
      font-weight: ${fonts.weight.bold};
      color: ${colors.grayscale.gray300};
    `;
  }}
`;
